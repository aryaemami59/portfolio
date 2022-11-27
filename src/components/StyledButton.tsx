import type { ButtonProps } from "@mui/material";
import { Button } from "@mui/material";
import "aos/dist/aos.css";
import type { FC } from "react";
import { memo } from "react";

type Props = ButtonProps;

const StyledButton: FC<Props> = props => (
  <Button
    size="large"
    {...props}
    className="button-slide"
  />
);

export default memo<Props>(StyledButton);
