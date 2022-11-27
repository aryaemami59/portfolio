import { Button, ButtonProps } from "@mui/material";
import "aos/dist/aos.css";
import { FC, memo } from "react";

type Props = ButtonProps;

const StyledButton: FC<Props> = props => (
  <Button
    // LinkComponent="a"
    {...props}
    className="button-slide"
  />
);

export default memo<Props>(StyledButton);
