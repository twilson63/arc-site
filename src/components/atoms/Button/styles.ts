import styled from "styled-components";

export const Primary = styled.button`
  position: relative;
  background: ${(props) => props.theme.colors.button.primary.background};
  color: ${(props) => props.theme.colors.button.primary.label};
  border: 1.5px solid ${(props) => props.theme.colors.button.primary.border};
  height: 33.5px;
  width: 150px;
  text-overflow: ellipsis;
  overflow-x: hidden;
  padding: 1.5px 9.5px 1.5px 11.5px;
  &:hover {
    background: ${(props) => props.theme.colors.button.primary.hover};
  }
  &:focus {
    background: ${(props) => props.theme.colors.button.primary.hover};
  }
  &:disabled {
    background: ${(props) => props.theme.colors.button.primary.disabled.background};
    color: ${(props) => props.theme.colors.button.primary.disabled.label};
    border: 1.5px solid ${(props) => props.theme.colors.button.primary.disabled.border};
  }
`;