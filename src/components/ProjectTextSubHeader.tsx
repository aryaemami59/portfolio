import { Chip, Stack } from "@mui/material";
import type { FC } from "react";
import { memo } from "react";

type Props = {
  techStack: string[];
};

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
