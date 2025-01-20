import { AnimatedGroup } from '@/components/global/animated-group';

export default function Showcase() {
  return (
    <>
      <div className='px-6 lg:px-'>
        <div className='mx-auto md:max-w-7xl'>
          <main className='min-w-0 max-w-full flex-1'>
            <div className='relative mx-auto mt-20 max-w-md pb-16 text-center'>
              <h1 className='text-sm font-medium text-[#0D74CE] dark:text-[#70B8FF]'>
                Showcase
              </h1>
              <p className='mb-4 mt-6 text-3xl text-zinc-950 dark:text-zinc-50'>
                Building something great with motion-primitives?
              </p>
              <p className='text-base text-zinc-600 dark:text-zinc-200'>
                I would love to feature it! Send me a DM on{' '}
                <a
                  href='https://x.com/Rakibul1019'
                  target='_blank'
                  className='text-zinc-950 underline hover:text-zinc-800 dark:text-zinc-50 dark:hover:text-zinc-200'
                >
                  X
                </a>{' '}
                or email me at{' '}
                <a
                  href='rakibulislam1019@gmail.com'
                  className='text-zinc-950 underline hover:text-zinc-800 dark:text-zinc-50 dark:hover:text-zinc-200'
                >
                  julien.thibeaut@gmail.com
                </a>
              </p>
            </div>
            <AnimatedGroup
              className='mx-auto grid max-w-5xl grid-cols-1 gap-6 [mask-image:linear-gradient(to_bottom,black_30%,transparent)] md:grid-cols-2 lg:grid-cols-3'
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
              <div className='h-48 rounded-2xl bg-zinc-100 dark:bg-zinc-900'></div>
              <div className='h-48 rounded-2xl bg-zinc-100 dark:bg-zinc-900'></div>
              <div className='h-48 rounded-2xl bg-zinc-100 dark:bg-zinc-900'></div>
              <div className='h-48 rounded-2xl bg-zinc-100 dark:bg-zinc-900'></div>
              <div className='h-48 rounded-2xl bg-zinc-100 dark:bg-zinc-900'></div>
              <div className='h-48 rounded-2xl bg-zinc-100 dark:bg-zinc-900'></div>
            </AnimatedGroup>
          </main>
        </div>
      </div>
    </>
  );
}