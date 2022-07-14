import styled from "styled-components";

export const Input = (props) => {
  const { placeholder } = props;
  return <SInput text="text" placeholder={placeholder}></SInput>;
};

const SInput = styled.input`
  margin-right: 0.5rem;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 50px;
`;
