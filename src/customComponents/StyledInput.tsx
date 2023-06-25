import { TextField } from "@mui/material";
import styled from "styled-components";

const StyledInput = styled(TextField).withConfig({
  shouldForwardProp: (prop) => prop !== "variant",
})`
  margin: ${(props) => props.theme.margins.md};
`;

export default StyledInput;
