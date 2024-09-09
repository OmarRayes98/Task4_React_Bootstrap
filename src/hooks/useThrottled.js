import { useRef } from 'react';

const useThrottled = (callback, delay,stopThrottledByHeight) => {
  const throttled = useRef(false);

  const throttledCallback = () => {

    if(window.scrollY< stopThrottledByHeight){
      callback();

    }else if (!throttled.current) {

      callback();
      
      throttled.current = true;
      setTimeout(() => {
        throttled.current = false;
      }, delay);
    }
  };

  return throttledCallback;
};

export default useThrottled;
