import type { ReactNode } from 'react';

import Image from 'next/image';

import { baseOptions } from '@/app/layout.config';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      themeSwitch={{ enabled: false }}
      nav={{
        title: (
          <div className='flex items-center gap-2'>
            <Image src='/logo.png' alt='AyuGram Logo' width={22} height={22} />
            <span>AyuGram Docs</span>
          </div>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
