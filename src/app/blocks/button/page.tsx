// app/blocks/button/page.tsx
'use client';

import { ComponentLayout } from '@/app/docs/content/components/page';
import { Button } from '@/components/ui/button';

const code = `import { Button } from '@/components/ui/button'

export function ButtonDemo() {
  return (
    <Button onClick={() => alert('Button clicked!')}>
      Click me
    </Button>
  )
}`;

export default function ButtonPage() {
  return (
    <ComponentLayout
      title="Button"
      description="A versatile button component with various styles and states."
      path={['blocks', 'button']}
      component={
        <Button onClick={() => alert('Button clicked!')}>
          Click me
        </Button>
      }
      code={code}
    />
  );
}