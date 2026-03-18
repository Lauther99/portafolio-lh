import { getTech } from "@/lib/stack";

type Props = {
  id: string;
  size?: "sm" | "md";
};

export function TechPill({ id, size = "sm" }: Props) {
  const tech = getTech(id);
  const name = tech?.name ?? id;
  const color = tech?.color ?? "#A0AEC0";
  const bg = tech?.bg ?? "#A0AEC018";

  return (
    <span
      className={`inline-flex items-center font-semibold tracking-wider uppercase rounded-md border ${
        size === "md" ? "text-xs px-3 py-2" : "text-[10px] px-2.5 py-1"
      }`}
      style={{
        color,
        borderColor: `${color}40`,
        backgroundColor: bg,
      }}
    >
      {name}
    </span>
  );
}
