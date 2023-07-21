import  {useEffect, useRef} from 'react';

export const useEffectOnUpdate = (callback: (args?: unknown) => unknown, deps: unknown[]) => {
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      callback();
    }
  }, deps);
};
