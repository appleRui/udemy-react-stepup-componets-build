import styled from "styled-components";

export const UserCard = (props) => {
  const { imageUrl, name, description } = props.detatil;

  return (
    <div className="UserCard">
      <SImage src={imageUrl} alt="Profile" />
      <SDetail>
        <STitle>{name}</STitle>
        <SDiscription>{description}</SDiscription>
      </SDetail>
    </div>
  );
};

const SDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SImage = styled.img`
  object-fit: cover;
  height: 120px;
  width: 120px;
`;

const STitle = styled.h3`
  margin: 0;
  padding: 0;
`;

const SDiscription = styled.p`
  margin: 0;
  padding: 0;
  color: #808080;
`;
