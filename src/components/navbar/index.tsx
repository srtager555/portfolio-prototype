import styled from "styled-components";

const NavBtn = styled.button`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25px;
  height: 25px;
  background-color: #fff;
  border-radius: 100%;
  border: none;
  mix-blend-mode: difference;
  cursor: pointer;
`;

export function Nav() {
  return <NavBtn />;
}
