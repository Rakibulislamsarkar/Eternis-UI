import React, { useState } from 'react';
import { ClipboardCopy, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const ComponentShowcase = ({
  title,
  description,
  component: Component,
  code,
  styles = [], // Array of style options if component supports different styles
}) => {
  const [selectedStyle, setSelectedStyle] = useState(styles[0]?.value || '');
  const [activeTab, setActiveTab] = useState('preview');

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Component Header */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <a href="/docs" className="hover:text-foreground">
            Docs
          </a>
          <span>/</span>
          <span>{title}</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button variant="outline" className="gap-2">
          <ExternalLink className="h-4 w-4" />
          Docs
        </Button>
        <Button variant="outline" className="gap-2">
          <ExternalLink className="h-4 w-4" />
          API Reference
        </Button>
      </div>

      {/* Preview Card */}
      <Card className="border rounded-lg">
        <div className="flex items-center justify-between border-b p-4">
          {styles.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Style:</span>
              <select
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                className="bg-background text-sm border rounded px-2 py-1"
              >
                {styles.map((style) => (
                  <option key={style.value} value={style.value}>
                    {style.label}
                  </option>
                ))}
              </select>
            </div>
          )}
          <Button variant="outline" className="gap-2">
            Open in v0 <ExternalLink className="h-4 w-4" />
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="border-b">
            <TabsList className="px-4">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="preview" className="p-4">
            <div className="flex min-h-[350px] w-full items-center justify-center rounded-lg border">
              <Component style={selectedStyle} />
            </div>
          </TabsContent>

          <TabsContent value="code" className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 top-4"
              onClick={handleCopyCode}
            >
              <ClipboardCopy className="h-4 w-4" />
            </Button>
            <pre className="p-4 rounded bg-muted overflow-x-auto">
              <code className="text-sm">{code}</code>
            </pre>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default ComponentShowcase;