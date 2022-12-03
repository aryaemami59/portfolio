import type { OutlinedTextFieldProps, TextFieldProps } from "@mui/material";
import { TextField } from "@mui/material";
import type { ChangeEvent, FC } from "react";
import { memo, useCallback, useState } from "react";
import { useFormControl } from "@mui/material/FormControl";

type Props = TextFieldProps;

const InputField: FC<Props> = props => {
  const [val, setVal] = useState("");

  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  }, []);

  console.log(useFormControl());

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
