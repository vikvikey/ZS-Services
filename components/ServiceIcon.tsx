import type { ServiceItem } from "@/site.config";
import {
  Bath,
  DoorOpen,
  Droplets,
  LayoutGrid,
  LayoutPanelTop,
  Layers,
  Paintbrush,
  Zap,
  SprayCan
} from "lucide-react";

const iconMap: Record<ServiceItem["icon"], React.ComponentType<{ className?: string }>> = {
  paint: Paintbrush,
  tiles: LayoutGrid,
  electric: Zap,
  plumb: Droplets,
  drywall: LayoutPanelTop,
  floor: Layers,
  bath: Bath,
  doors: DoorOpen,
  spray: SprayCan,
};

export function ServiceIcon({ icon, className }: { icon: ServiceItem["icon"]; className?: string }) {
  const Cmp = iconMap[icon];
  return <Cmp className={className} aria-hidden />;
}
