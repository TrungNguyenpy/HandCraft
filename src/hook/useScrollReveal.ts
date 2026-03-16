"use client";
import { useEffect } from 'react';

export function useScrollReveal(selector: string, options: any) {
  useEffect(() => {
    import('scrollreveal').then((sr) => {
      sr.default().reveal(selector, options);
    });
  }, [selector, options]);
}