import { Button } from "@mui/material";
import styled from "styled-components";

const StyledButton = styled(Button).withConfig({
  shouldForwardProp: (prop) => prop !== "variant",
})`
  margin: ${(props) => props.theme.margins.md};
`;

export default StyledButton;
