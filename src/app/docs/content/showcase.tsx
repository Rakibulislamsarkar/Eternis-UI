import { AnimatedGroup } from '@/components/global/animated-group';
import { ChevronRight } from 'lucide-react';

export default function Showcase() {
  return (
    <main className="px-6 lg:px-8">
      <div className="mb-4 flex items-center space-x-1 text-sm leading-none text-muted-foreground">
          <div className="truncate">Docs</div>
          <ChevronRight className="h-3.5 w-3.5" />
          <div className="text-foreground">Showcase</div>
        </div>
      <div className="mx-auto max-w-7xl">
        <section className="mx-auto max-w-md text-center mb-16">
          <h2 className="text-3xl mb-4 text-zinc-950 dark:text-zinc-50">
            Building something great with motion-primitives?
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-200">
            I would love to feature it! Send me a DM on{' '}
            <a
              href="https://x.com/Rakibul1019"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-950 underline hover:text-zinc-800 dark:text-zinc-50 dark:hover:text-zinc-200"
            >
              X
            </a>{' '}
            or email me at{' '}
            <a
              href="mailto:rakibulislam1019@gmail.com"
              className="text-zinc-950 underline hover:text-zinc-800 dark:text-zinc-50 dark:hover:text-zinc-200"
            >
              rakibulislam1019@gmail.com
            </a>
          </p>
        </section>

        <AnimatedGroup
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 [mask-image:linear-gradient(to_bottom,black_30%,transparent)] md:grid-cols-2 lg:grid-cols-3"
          variants={{
            container: {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                },
              },
            },
            item: {
              hidden: {
                opacity: 0,
                filter: 'blur(4px)',
                scale: 0.8,
              },
              visible: { opacity: 1, filter: 'blur(0px)', scale: 1 },
            },
          }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div 
              key={i}
              className="h-48 rounded-2xl bg-zinc-100 dark:bg-zinc-900"
            />
          ))}
        </AnimatedGroup>
      </div>
    </main>
  );
}
