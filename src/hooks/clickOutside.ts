import { useRef, useEffect, RefObject } from "react";

export function useClickOutside<T extends HTMLElement>(
  callback: () => void
): RefObject<T> {
  const ref = useRef<T>(null);

  const click = (event: Event) => {
    const target = event.target as Node;
    if (target && ref.current && !ref.current.contains(target))
      return callback();
  };

  useEffect(() => {
    document.addEventListener("click", click, false);
    return () => document.removeEventListener("click", click, false);
  }, []);

  return ref;
}
