import { TextField } from "@mui/material";
import type { FC } from "react";
import { memo } from "react";
import StyledButton from "./StyledButton";

const Contact: FC = () => (
  <form
    name="contact"
    action=""
    className="d-flex flex-column"
    method="POST">
    <div className="row mb-3">
      <TextField
        label="Name"
        required
      />
    </div>
    <div className="row mb-3">
      <TextField
        label="Email"
        required
      />
    </div>
    <div className="row mb-3">
      <TextField
        rows={6}
        label="Message"
        required
        multiline
      />
    </div>
    <StyledButton className="align-self-center">Send</StyledButton>
  </form>
);

export default memo(Contact);
