"use client"

import { useEffect } from "react"

export default function LayoutScripts() {
  useEffect(() => {
    // This is where you can add 3rd party scripts that need to be loaded on the client side
    // For example:
    
    // Google Analytics example
    // const loadGoogleAnalytics = () => {
    //   const script = document.createElement('script')
    //   script.src = 'https://www.googletagmanager.com/gtag/js?id=YOUR_MEASUREMENT_ID'
    //   script.async = true
    //   document.head.appendChild(script)
    //   
    //   window.dataLayer = window.dataLayer || []
    //   function gtag() { dataLayer.push(arguments) }
    //   gtag('js', new Date())
    //   gtag('config', 'YOUR_MEASUREMENT_ID')
    // }
    // loadGoogleAnalytics()
    
    // HotJar example
    // const loadHotjar = () => {
    //   (function(h,o,t,j,a,r){
    //     h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    //     h._hjSettings={hjid:YOUR_HJID,hjsv:6};
    //     a=o.getElementsByTagName('head')[0];
    //     r=o.createElement('script');r.async=1;
    //     r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    //     a.appendChild(r);
    //   })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    // }
    // loadHotjar()
    
    // Custom script example
    // const loadCustomScript = () => {
    //   const script = document.createElement('script')
    //   script.src = 'https://example.com/script.js'
    //   script.async = true
    //   document.body.appendChild(script)
    // }
    // loadCustomScript()
    
    // Add more 3rd party scripts as needed
    
  }, [])

  return null
} 