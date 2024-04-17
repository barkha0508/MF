import React, { useRef, useEffect } from 'react';

export default function Contact({ }) {
  const ref = useRef(null);

  const renderMicrofrontend = () => {
    window.mountContactMfe(ref.current);
  }

  useEffect(() => {
    if (window && document && !document.getElementById('app-contact')) {
      const script = document.createElement('script');
      script.id = 'app-contact';
      script.src = 'http://localhost:8082/main.js';
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