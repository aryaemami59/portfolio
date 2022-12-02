import { useEffect } from "react";
import type { AnyObject } from "../types/missingTypes";

const useValueUpdateLogger = (
  value: AnyObject | unknown[] | (() => unknown)
) => {
  useEffect(() => {
    console.log(value, "changed");
  }, [value]);
};

export default useValueUpdateLogger;
