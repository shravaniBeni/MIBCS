import React, { useEffect } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  startDelay?: number;
  wordDelay?: number;
}

export function AnimatedText({ text, className = "", startDelay = 0, wordDelay = 150 }: AnimatedTextProps) {
  const words = text.split(' ');

  useEffect(() => {
    const animateWords = () => {
      const wordElements = document.querySelectorAll('.word-animate');
      wordElements.forEach(word => {
        const delay = parseInt(word.getAttribute('data-delay') || '0');
        setTimeout(() => {
          if (word) word.style.animation = 'word-appear 0.8s ease-out forwards';
        }, delay);
      });
    };
    const timeoutId = setTimeout(animateWords, startDelay);
    return () => clearTimeout(timeoutId);
  }, [startDelay]);

  return (
    <>
      <style>{`
        @keyframes word-appear { 
          0% { opacity: 0; transform: translateY(30px) scale(0.8); filter: blur(10px); } 
          50% { opacity: 0.8; transform: translateY(10px) scale(0.95); filter: blur(2px); } 
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); } 
        }
        .word-animate { 
          display: inline-block; 
          opacity: 0; 
          margin: 0 0.1em; 
          transition: color 0.3s ease, transform 0.3s ease; 
        }
        .word-animate:hover { 
          transform: translateY(-2px); 
        }
      `}</style>
      <span className={className}>
        {words.map((word, index) => (
          <span
            key={index}
            className="word-animate"
            data-delay={startDelay + (index * wordDelay)}
          >
            {word}
          </span>
        ))}
      </span>
    </>
  );
}