import Script from 'next/script';

export default function Analytics() {
    return (
        <>
          <Script
            async src={`https://www.googletagmanager.com/gtag/js?id=G-84L4LLL6ZJ`}
          />
    
          <Script id='' strategy='lazyOnload'>
            {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-84L4LLL6ZJ')
              `}
          </Script>
        </>
      );
}
