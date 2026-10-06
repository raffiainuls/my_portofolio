#!/usr/bin/env bash

set -Eeuo pipefail

exec 9>/tmp/my-portfolio-deploy.lock
if ! flock -n 9; then
  echo "Another portfolio deployment is already running."
  exit 1
fi

cd /home/ubuntu/my_portofolio

git fetch --prune origin '+refs/heads/main:refs/remotes/origin/main'
git checkout -B main origin/main

sudo docker compose up -d --build --remove-orphans

for attempt in $(seq 1 30); do
  health=$(sudo docker inspect --format '{{if .State.Health}}{{.State.Health.Status}}{{else}}{{.State.Status}}{{end}}' my-portfolio 2>/dev/null || true)
  if [ "$health" = "healthy" ] && curl --fail --silent --show-error http://127.0.0.1:3002/ >/dev/null; then
    sudo docker image prune -f
    echo "Portfolio deployment is healthy."
    exit 0
  fi

  echo "Waiting for portfolio container (attempt $attempt/30, status: ${health:-missing})..."
  sleep 2
done

sudo docker compose ps
sudo docker compose logs --tail=100 portfolio
echo "Portfolio failed its deployment health check."
exit 1
