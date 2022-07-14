import styled from "styled-components";
import { BaseBtn } from "./BaseBtn";

export const PrimaryBtn = (props) => {
  const { children } = props;
  return <SBtn>{children}</SBtn>;
};

const SBtn = styled(BaseBtn)`
  background-color: #f3f3f3;
`;
