import type { ButtonProps } from "@mui/material";
import { Button } from "@mui/material";
import type { ElementType } from "react";
import { memo } from "react";

const StyledButton = <C extends ElementType = "button">(
  props: ButtonProps<C, { component?: C }>
) => {
  const { children, className } = props;
  return (
    <Button
      {...props}
      size="large"
      className={`button-slide ${className ?? ""}`}>
      {children}
    </Button>
  );
};

export default memo(StyledButton) as typeof StyledButton;
