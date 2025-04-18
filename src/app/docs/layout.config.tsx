import Logo from '@/components/global/logo';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  // TODO: add your own links here
  githubUrl: 'https://github.com/sunarjs/sunar',
  nav: {
    title: (
      <div className='flex justify-center items-center gap-2'>
        <Logo />
        <span className='text-lg capitalize text-muted-foreground'>decent-docs</span>
      </div>
    ),
    transparentMode: 'top',
  },
};
