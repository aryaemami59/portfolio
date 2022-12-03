import { FormControl, FormGroup } from "@mui/material";
import type { FC } from "react";
import { memo } from "react";
import InputField from "./InputField";
import StyledButton from "./StyledButton";

const Contact: FC = () => {
  // const [error, setError] = useState(false)

  // const handleSubmit = useCallback(() => {

  // }, [])

  return (
    <form
      name="contact"
      action="https://formsubmit.co/aryaemami59@yahoo.com"
      className="d-flex flex-column"
      method="POST">
      <FormControl margin="normal">
        {/* <FormGroup row> */}
        <InputField
          // fullWidth
          // margin="normal"
          label="Name"
          type="text"
          name="name"
        />
        {/* </FormGroup> */}
      </FormControl>
      <FormControl margin="normal">
        <InputField
          type="email"
          name="email"
          label="Email"
        />
      </FormControl>
      <FormControl margin="normal">
        <InputField
          rows={6}
          type="text"
          name="message"
          label="Message"
          multiline
        />
      </FormControl>
      <StyledButton
        type="submit"
        className="align-self-center">
        Send
      </StyledButton>
    </form>
  );
};

export default memo(Contact);
