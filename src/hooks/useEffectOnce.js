import { useEffect } from "react";

const useEffectOnce = (func) => {
  return useEffect(() => {
    func();
  }, []);
};

export default useEffectOnce;
