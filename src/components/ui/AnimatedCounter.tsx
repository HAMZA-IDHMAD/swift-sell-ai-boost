
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  className = "",
  suffix = "",
  prefix = ""
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);
  const countRef = useRef(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, [end]);

  const startCounting = () => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    
    const step = Math.ceil(end / (duration / 16));
    
    timerRef.current = window.setInterval(() => {
      countRef.current = Math.min(countRef.current + step, end);
      setCount(countRef.current);
      
      if (countRef.current >= end) {
        if (timerRef.current) window.clearInterval(timerRef.current);
      }
    }, 16);
  };

  return (
    <span ref={counterRef} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default AnimatedCounter;
