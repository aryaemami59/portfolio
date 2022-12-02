import { Card, CardContent, Typography } from "@mui/material";
import type { FC } from "react";
import { memo } from "react";

const About: FC = () => (
  <Card raised>
    <CardContent>
      <Typography variant="h5">
        A fullstack developer with an emphasis in frontend technology. I use
        tools and technologies such as TypeScript, React, Python, React Native,
        SQL and Node to develop a variety of products. I have a passion for
        solving problems, automation and creating designs. I am a big fan of
        efficiency and I love tackling performance issues. I’ve showcased these
        strengths through personal projects. I am driven to learn, grow and
        excel in the world of development.
      </Typography>
    </CardContent>
  </Card>
);

export default memo(About);
