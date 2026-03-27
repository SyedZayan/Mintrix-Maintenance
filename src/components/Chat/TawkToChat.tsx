"use client";
import Script from 'next/script';

export default function TawkToChat() {
  return (
    <Script
      id="tawk-to-script"
      strategy="afterInteractive" // Best practice: loads after the page is interactive
      dangerouslySetInnerHTML={{
        __html: `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
            var s1=document.createElement("script"),
                s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/69c4ea49c881121c3990fb3f/1jkkj6bog';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();
        `,
      }}
    />
  );
}