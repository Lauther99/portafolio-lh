import { notFound } from "next/navigation";
import { proyectos, getProyectoBySlug } from "@/lib/proyectos";
import { ProyectoDetalle } from "@/components/proyectos/proyecto-detalle";

export function generateStaticParams() {
  return proyectos.map((p) => ({ slug: p.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const proyecto = getProyectoBySlug(slug);
  if (!proyecto) notFound();

  return <ProyectoDetalle proyecto={proyecto} />;
}
