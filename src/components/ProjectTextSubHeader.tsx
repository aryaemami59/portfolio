import { Chip, Stack } from "@mui/material";
import type { FC } from "react";
import { memo } from "react";
import type { ProjectTextSubHeaderProps } from "../types/projects";

type Props = ProjectTextSubHeaderProps;

const ProjectTextSubHeader: FC<Props> = ({ techStack }) => (
  <Stack
    className="flex-wrap"
    direction="row"
    spacing={1}>
    {techStack.map(tech => (
      <Chip
        label={tech}
        key={tech}
      />
    ))}
  </Stack>
);

export default memo<Props>(ProjectTextSubHeader);
