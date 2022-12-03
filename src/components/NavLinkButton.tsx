import type { FC } from "react";
import { memo, useCallback } from "react";
import type { NavLinkProps } from "react-router-dom";
import { NavLink } from "react-router-dom";
import type { NavLinkClassName } from "../types/missingTypes";
import StyledButton from "./StyledButton";

type Props = NavLinkProps;

const NavLinkButton: FC<Props> = props => {
  const { children, className } = props;

  const classNameFunc: NavLinkClassName = useCallback(
    ({ isActive, isPending }) => (isActive ? "active" : "not-active"),
    []
  );

  return (
    // <StyledButton>
    <NavLink
      {...props}
      className={classNameFunc}
      // className={`button-slide ${className ?? ""}`}
    >
      {/* {children} */}
      {({ isActive, isPending }) => <StyledButton>{children}</StyledButton>}
    </NavLink>
    // </StyledButton>
  );
};

export default memo<Props>(NavLinkButton);
