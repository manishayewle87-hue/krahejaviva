import { notFound, redirect } from 'next/navigation';
import type { Metadata } from 'next';

const KNOWN_SLUGS = [
  'na-plot-vs-apartment-2025',
  'nri-na-plot-guide',
  'pirangut-price-trends-2025',
  'west-pune-growth-corridor',
];

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return KNOWN_SLUGS.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!KNOWN_SLUGS.includes(params.slug)) {
    return { title: 'Blog | K Raheja Corp Viva' };
  }
  return {
    title: 'Blog | K Raheja Corp Viva',
    robots: { index: false },
  };
}

export default function BlogSlugPage({ params }: Props) {
  if (!KNOWN_SLUGS.includes(params.slug)) {
    notFound();
  }
  redirect(`/blog/${params.slug}`);
}
