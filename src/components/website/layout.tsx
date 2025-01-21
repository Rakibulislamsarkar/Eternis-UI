"use client";

import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  path?: string[];
  component: React.ReactNode;
  code: string;
}

export default function ComponentLayout({
  title,
  description,
  component,
  code,
}: ComponentLayoutProps) {
  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4">
      {/* Breadcrumbs */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Components</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header */}
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>

      {/* Component Preview with Tabs */}
      <Tabs defaultValue="preview" className="w-full ">
        <div className="flex items-center justify-between mb-4 border-b">
            <TabsList className="w-auto">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
        </div>
        <Card>
          <TabsContent value="preview" className="mt-0">
            <CardContent className="flex min-h-[350px] items-center justify-center p-6">
              {component}
            </CardContent>
          </TabsContent>
          <TabsContent value="code" className="mt-0">
            <CardContent className="p-0">
              <pre className="language-tsx p-4">
                <code>{code}</code>
              </pre>
            </CardContent>
          </TabsContent>
        </Card>
      </Tabs>
    </div>
  );
}
