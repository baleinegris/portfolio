import React, { useEffect, useRef } from 'react';

const SvgMorphAnimation = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Load Kute.js from CDN
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/kute.js@2.1.2/dist/kute.min.js';
          script.onload = () => {
            // Start the animation when Kute.js is loaded
            const tween = KUTE.fromTo(
              '#startPath',
              { path: '#startPath' },
              { path: '#endPath' },
              { duration: 2000, repeat: 999, yoyo: true }
            );
            tween.start();
          };
          document.body.appendChild(script);
          observer.disconnect(); // Stop observing once the animation starts
        }
      },
      { threshold: 0.1 }
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => {
      if (svgRef.current) {
        observer.unobserve(svgRef.current);
      }
    };
  }, []);

  return (
    <svg ref={svgRef} width="200" height="200" viewBox="0 0 200 200">
      <path id="startPath" d="M10 80 Q 95 10 180 80 T 180 180" fill="none" stroke="black" />
      <path id="endPath" d="M10 80 Q 95 150 180 80 T 180 180" fill="none" stroke="black" style={{ display: 'none' }} />
    </svg>
  );
};

export default SvgMorphAnimation;