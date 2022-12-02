export type ProjectProps = {
  name: string;
  id: number;
  description: string;
  screenshot: string;
  github: string;
  live: string;
  techStack: string[];
};

export type ProjectImageProps = Pick<ProjectProps, "name" | "screenshot">;

export type ProjectTextSubHeaderProps = Pick<ProjectProps, "techStack">;
