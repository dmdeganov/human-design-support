import {useEffect} from 'react';

const useBackListener = (callback: () => void) => {
  const handleEvent = () => {
    callback();
    history.go(1);
  };

  useEffect(() => {
    window.history.pushState({page: 1}, '', '');
    window.addEventListener('popstate', handleEvent);
    return () => window.removeEventListener('popstate', handleEvent);
  });
};

export default useBackListener;
