import { useEffect, useState, RefObject } from "react";

export function useIsVisible(ref: RefObject<Element>) {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          setIntersecting(entry.isIntersecting)
      });
      
      if (ref.current) {
        observer.observe(ref.current!);
      }
      
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current!);
        }
      };
    }, [ref]);
  
    return isIntersecting;
}
