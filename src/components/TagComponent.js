import styled from "styled-components";

const TagComponent = ({ label, ...otherProps }) => {
  return (
    <TagStyled {...otherProps}>
      <div>{label}</div>
    </TagStyled>
  );
};

const TagStyled = styled.div`
  font-weight: 400;
  font-size: 11.375px;
  border-radius: 6px;
  padding: 4px 16px;
  width: auto;

  &.tags-warning {
    color: #ff6b00;
    background: #fff7e7;
  }

  &.tags-success {
    color: #038c00;
    background: #e6ffe5;
  }
`;

export default TagComponent;
