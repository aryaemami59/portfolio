import { AppBar, AppBarProps, SxProps, Theme } from "@mui/material";
import { FC, memo } from "react";

const sx: SxProps<Theme> = { top: "auto", bottom: 0 };

type Props = AppBarProps;

const BottomAppBar: FC<Props> = props => (
  <AppBar
    sx={sx}
    {...props}
  />
);

export default memo<Props>(BottomAppBar);
