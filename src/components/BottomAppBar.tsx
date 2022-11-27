import type { AppBarProps, SxProps, Theme } from "@mui/material";
import { AppBar } from "@mui/material";
import type { FC } from "react";
import { memo } from "react";

const sx: SxProps<Theme> = { top: "auto", bottom: 0 };

type Props = AppBarProps;

const BottomAppBar: FC<Props> = props => (
  <AppBar
    sx={sx}
    position="static"
    className="mt-3"
    {...props}
  />
);

export default memo<Props>(BottomAppBar);
