import { Badge } from "@mui/material";
import type { FC } from "react";
import { memo } from "react";

type Props = {
  tech: string;
};

const ProjectTechStack: FC<Props> = ({ tech }) => <Badge>{tech}</Badge>;

export default memo<Props>(ProjectTechStack);
