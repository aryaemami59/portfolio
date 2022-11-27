import type { FC } from "react";
import { memo } from "react";

type Props = {
  props: string;
};

const Project: FC<Props> = () => {
  return <div />;
};

export default memo<Props>(Project);
