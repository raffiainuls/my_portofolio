import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import {
  ActivityIcon,
  BarChartIcon,
  BoltIcon,
  CloudIcon,
  CogIcon,
  DatabaseIcon,
  LayersIcon,
  ServerIcon,
} from "@/components/ui/icons";
import type { Architecture, FlowNode, FlowNodeKind } from "@/lib/types";
import type { ReactNode, SVGProps } from "react";

/**
 * ArchitectureFlow — renders a project's animated architecture diagram from
 * data (the `architecture` field on a Project). One component draws any flow.
 *
 * It's a Server Component: the "moving line" effect is pure CSS (see
 * .flow-x / .flow-y in globals.css), so no client JS is needed. The fade-in on
 * scroll is handled by the <FadeIn> wrapper (which is the only client part).
 *
 * Layout: the pipeline runs LEFT → RIGHT on desktop and TOP → BOTTOM on mobile,
 * with an animated cyan pulse traveling along each connector.
 */

type IconType = (props: SVGProps<SVGSVGElement>) => ReactNode;

/** Maps a node "kind" to its icon. Edit here to add/redirect icons. */
const ICONS: Record<FlowNodeKind, IconType> = {
  source: DatabaseIcon,
  cdc: ActivityIcon,
  stream: BoltIcon,
  processing: CogIcon,
  storage: CloudIcon,
  warehouse: LayersIcon,
  analytics: BarChartIcon,
  app: ServerIcon,
  orchestration: CogIcon,
  infra: ServerIcon,
  default: BoltIcon,
};

/** A single box in the pipeline. */
function Node({ node }: { node: FlowNode }) {
  const Icon = ICONS[node.kind ?? "default"];
  return (
    <div className="group flex w-full items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 transition-colors hover:border-accent/40 sm:w-auto sm:min-w-[7.5rem] sm:flex-col sm:items-start">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent shadow-[0_0_18px_-6px_rgba(34,211,238,0.6)]">
        <Icon className="h-[18px] w-[18px]" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold leading-tight">
          {node.label}
        </span>
        {node.sub ? (
          <span className="mt-0.5 block text-xs leading-tight text-muted">
            {node.sub}
          </span>
        ) : null}
      </span>
    </div>
  );
}

/**
 * The animated connector between two nodes. Renders a vertical variant (mobile)
 * and a horizontal variant (desktop); CSS shows the right one per breakpoint.
 * `delay` staggers the pulses so they cascade down the pipeline.
 */
function Connector({ delay }: { delay: number }) {
  const style = { animationDelay: `${delay}s` };
  return (
    <div className="flex items-center justify-center sm:flex-1">
      {/* Vertical (mobile) */}
      <div className="relative h-6 w-[2px] overflow-hidden rounded-full sm:hidden">
        <div className="absolute inset-0 bg-border" />
        <div className="flow-y absolute inset-0" style={style} />
      </div>
      {/* Horizontal (desktop) */}
      <div className="relative hidden h-[2px] w-full min-w-[1.25rem] overflow-hidden rounded-full sm:block">
        <div className="absolute inset-0 bg-border" />
        <div className="flow-x absolute inset-0" style={style} />
      </div>
    </div>
  );
}

export function ArchitectureFlow({
  architecture,
}: {
  architecture: Architecture;
}) {
  const { flow, supporting, caption } = architecture;

  return (
    <FadeIn>
      <div className="rounded-2xl border border-border bg-surface/40 p-6 sm:p-8">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">
            Architecture
          </h2>
        </div>
        {caption ? (
          <p className="mt-2 text-sm text-muted">{caption}</p>
        ) : null}

        {/* Main pipeline */}
        <div className="mt-6 overflow-x-auto pb-1">
          <div className="flex flex-col items-stretch sm:flex-row sm:items-center">
            {flow.map((node, i) => (
              <div
                key={`${node.label}-${i}`}
                className="flex flex-col items-stretch sm:flex-1 sm:flex-row sm:items-center sm:last:flex-none"
              >
                <Node node={node} />
                {i < flow.length - 1 ? <Connector delay={i * 0.2} /> : null}
              </div>
            ))}
          </div>
        </div>

        {/* Supporting tools (orchestration, infra, monitoring…) */}
        {supporting && supporting.length > 0 ? (
          <div className="mt-8 grid gap-4 border-t border-border pt-6 sm:grid-cols-2 lg:grid-cols-3">
            {supporting.map((group) => (
              <div key={group.label}>
                <p className="eyebrow">{group.label}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </FadeIn>
  );
}
