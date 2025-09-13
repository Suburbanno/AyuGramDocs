import { ArrowLeft } from 'lucide-react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { GradientBackground } from '@/components/ui/gradient-background';

export default function NotFound() {
  return (
    <div className='relative grid min-h-[calc(100vh-60px)] place-items-center'>
      <GradientBackground />

      <section className='mx-auto w-full max-w-2xl px-6 text-center sm:px-8 lg:px-12'>
        <h1 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>We&apos;ve lost this page</h1>

        <p className='mt-4 text-neutral-300 sm:text-lg'>
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
        </p>

        <nav className='mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center' aria-label='Error page navigation'>
          <Button asChild size='lg'>
            <Link href='/' className='inline-flex items-center gap-2'>
              <ArrowLeft className='size-4' aria-hidden='true' />
              Back to Home
            </Link>
          </Button>
        </nav>
      </section>
    </div>
  );
}
