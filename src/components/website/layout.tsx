import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface ComponentLayoutProps {
  title: string;
  description: string;
  path: string[];
  component: React.ReactNode;
  code: string;
}

export default function ComponentLayout({
  title,
  description,
  path,
  component,
  code
}: ComponentLayoutProps) {
  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4">
      {/* Breadcrumbs */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {path.map((item, index) => (
            <React.Fragment key={item}>
              <BreadcrumbItem>
                {index === path.length - 1 ? (
                  <BreadcrumbPage>{item}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={`/${path.slice(0, index + 1).join('/')}`}>
                    {item}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < path.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header */}
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-lg text-gray-500">{description}</p>
      </div>

      {/* Component Preview */}
      <Card className="mb-8">
        <CardContent className="flex min-h-[350px] items-center justify-center p-6">
          {component}
        </CardContent>
      </Card>

      {/* Code Preview */}
      <Card>
        <CardContent className="p-6">
          <pre className="language-tsx">
            <code>{code}</code>
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}