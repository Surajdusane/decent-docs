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
  nav: {
    title: (
      <div className='flex justify-center items-center gap-2'>
        <Logo />
      </div>
    ),
    transparentMode: 'top',
  },
  links: [
		{
			text: 'Documentation',
			url: '/docs',
			active: 'nested-url',
		},
	],
};
