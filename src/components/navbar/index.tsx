import styled from "styled-components";

const NavBtn = styled.button`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 100%;
  border: none;
  transition: 200ms ease-in-out;
  mix-blend-mode: difference;
  cursor: pointer;

  &:hover {
    width: 22px;
    height: 22px;
  }
`;

export function Nav() {
  return <NavBtn />;
}
