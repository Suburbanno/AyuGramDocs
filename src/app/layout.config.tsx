import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

import Image from 'next/image';

import { siteConfig } from '@/config/site';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className='flex items-center gap-2'>
        <Image src='/logo.png' alt='AyuGram Logo' width={22} height={22} />
        <span>AyuGram</span>
      </div>
    ),
    transparentMode: 'none',
  },
  disableThemeSwitch: true,
  githubUrl: siteConfig.links.github,
  links: [
  ]
};
