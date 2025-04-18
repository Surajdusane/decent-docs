import { META_THEME_COLORS, siteConfig } from '@/config/site';
import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Metadata, Viewport } from 'next';
import Analytics from '@/components/global/analytics';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "Sahil",
      url: "",
    },
  ],
  creator: "shadcn",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@shadcn",
  },
  icons: {
    icon: [
      {
				rel: 'icon', // optional, 'icon' is the default value
				media: '(prefers-color-scheme: light)',
				url: '/logos/black-logo.svg'
			},
			{
				rel: 'icon', // optional, 'icon' is the default value
				media: '(prefers-color-scheme: dark)',
				url: '/logos/white-logo.svg'
			}
    ],
    shortcut: "/logos/white-logo.svg",
    apple: "/logos/white-logo.svg",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.dark,
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider theme={{
          defaultTheme: "system"
        }}>
          <Analytics />
          {children}
          </RootProvider>
      </body>
    </html>
  );
}
