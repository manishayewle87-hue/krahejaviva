import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { breadcrumbSchema } from '@/lib/seo';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const schema = breadcrumbSchema(items.map(i => ({ name: i.label, url: i.href })));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1 text-xs text-[#5A6E67] font-medium py-2">
        {items.map((item, idx) => (
          <React.Fragment key={item.href}>
            {idx > 0 && <ChevronRight className="w-3 h-3 text-[#C5A059] shrink-0" />}
            {idx === items.length - 1 ? (
              <span className="text-[#122A23] font-semibold" aria-current="page">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-[#C5A059] transition-colors">
                {item.label}
              </Link>
            )}
          </React.Fragment>
        ))}
      </nav>
    </>
  );
};
