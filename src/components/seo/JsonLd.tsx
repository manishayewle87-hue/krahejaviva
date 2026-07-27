import React from 'react';

interface JsonLdProps {
  data?: Record<string, unknown> | Record<string, unknown>[];
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

export function JsonLd({ data, schema }: JsonLdProps) {
  const content = data || schema;
  if (!content) return null;
  const schemaArray = Array.isArray(content) ? content : [content];

  return (
    <>
      {schemaArray.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
