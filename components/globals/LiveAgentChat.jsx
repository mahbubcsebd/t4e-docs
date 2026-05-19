'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function LiveAgentChat() {
  const pathname = usePathname();

  useEffect(() => {
    // Only run on the home page
    if (pathname === '/' || pathname === '') {
      const scriptId = 'la_x2s6df8d';
      if (!document.getElementById(scriptId)) {
        (function(d, src, c) { 
          var t=d.scripts[d.scripts.length - 1],s=d.createElement('script');
          s.id=scriptId;
          s.defer=true;
          s.src=src;
          s.onload=s.onreadystatechange=function(){
            var rs=this.readyState;
            if(rs&&(rs!='complete')&&(rs!='loaded')){return;}
            c(this);
          };
          t.parentElement.insertBefore(s,t.nextSibling);
        })(document, 'https://think4ever.ladesk.com/scripts/track.js', function(e){ 
          if (window.LiveAgent) {
            window.LiveAgent.createButton('h56vh0bc', e); 
          }
        });
      }
    }
  }, [pathname]);

  return null;
}
