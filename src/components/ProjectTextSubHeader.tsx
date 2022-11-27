import { Badge, Chip, Stack } from "@mui/material";
import { FC, memo } from "react";

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
        // component="div"
        // badgeContent={tech}
        label={tech}
        key={tech}
      />
    ))}
  </Stack>
  // <div className="d-flex h-100">
  //   {techStack.map(tech => (
  //     <Badge
  //       component="div"
  //       badgeContent={tech}
  //       key={tech}>
  //       {tech}
  //     </Badge>
  //   ))}
  // </div>
);

export default memo<Props>(ProjectTextSubHeader);
