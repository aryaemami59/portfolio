import type { TextFieldProps } from "@mui/material";
import { TextField } from "@mui/material";
import type { ChangeEvent, FC } from "react";
import { memo, useCallback, useState } from "react";

type Props = TextFieldProps;

const InputField: FC<Props> = props => {
  const [val, setVal] = useState("");

  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  }, []);

  return (
    <TextField
      {...props}
      onChange={changeHandler}
      value={val}
      required
    />
  );
};

export default memo<Props>(InputField);
