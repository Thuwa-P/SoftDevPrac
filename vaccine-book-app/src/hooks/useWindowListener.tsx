import { useEffect } from "react";

export function useWindowListener(
  eventType: string,
  listener: EventListener,
  targetElement: HTMLElement | null
) {
  useEffect(() => {
    targetElement?.addEventListener(eventType, listener);
    return () => {
      targetElement?.removeEventListener(eventType, listener);
    };
  }, [eventType, listener, targetElement]);
}
