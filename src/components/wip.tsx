import Link from 'next/link';

import { siteConfig } from '@/config/site';

export default function WorkInProgress() {
  return (
    <div className='not-prose bg-fd-card flex flex-col items-center justify-center gap-2 rounded-lg p-8 text-center'>
      <p className='text-fd-muted-foreground'>
        Seems like this page is not ready yet.
      </p>
    </div>
  );
}
