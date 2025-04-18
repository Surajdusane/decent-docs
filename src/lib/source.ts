import { docs } from '@/.source';
import { IconContainer } from '@/components/global/icon-container';
import { loader } from 'fumadocs-core/source';
import { icons } from 'lucide-react';
import { createElement } from 'react';


// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) {
      // You may set a default icon
      return;
    }
 
    if (icon in icons) return createElement(IconContainer ,{ icon : icons[icon as keyof typeof icons]});
  },
});
