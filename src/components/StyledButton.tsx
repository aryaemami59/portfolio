import type {
  ButtonProps,
  ButtonTypeMap,
  ExtendButtonBase,
} from "@mui/material";
import { Button } from "@mui/material";
import type { LinkProps } from "@mui/material/Link";
// import type { OverrideProps } from "@mui/material/OverridableComponent";
import "aos/dist/aos.css";
import console from "console";
import type { AnchorHTMLAttributes, ElementType, FC } from "react";
import { memo } from "react";

// type Props = OverrideProps<Button, >;
// type Props = ExtendButtonBase<
//   ButtonTypeMap<ButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>, "button">
// >;
type Props = ButtonProps & LinkProps;

// const StyledButton: FC<Props> = <C extends ElementType>(
//   props: ButtonProps<C, { component?: C }> & Props
const StyledButton: FC<Props> = props => {
  // console.log(props);
  const { children } = props;
  return (
    <Button
      size="large"
      className="button-slide"
      {...props}>
      {children}
    </Button>
  );
};

// console.log(Button);

// StyledButton.muiName = Button.muiName;

export default memo<Props>(StyledButton);
