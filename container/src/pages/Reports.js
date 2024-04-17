import React, { useRef, useEffect } from 'react';

export default function Reports() {
  const ref = useRef(null);

  const renderMicrofrontend = () => {
    window.mountreportsMfe(ref.current);
  }

  useEffect(() => {
    if (window && document && !document.getElementById('app-reports')) {
      const script = document.createElement('script');
      script.id = 'app-reports';
      script.src = 'http://localhost:8081/main.js';
      script.onload = renderMicrofrontend;
      document.head.appendChild(script);
    } else {
      renderMicrofrontend();
    }
  }, []);

  return (
    <div ref={ref} />
  )
}