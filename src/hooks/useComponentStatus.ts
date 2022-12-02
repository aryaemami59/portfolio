import { useEffect } from "react";

const useComponentStatus = (component: string) => {
  useEffect(() => {
    console.log(`${component} Mounted`);
    return () => {
      console.log(`${component} Unmounted`);
    };
  }, [component]);
};

export default useComponentStatus;
