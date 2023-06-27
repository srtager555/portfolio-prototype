import Link from "next/link";
import styled from "styled-components";

export const Container = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  text-decoration: none;
  margin-top: 200px;
  margin-bottom: 100px;
  overflow: hidden;
`;

export const Next = styled.span`
  display: block;
  text-align: center;
  color: #000;
  /* position: absolute;
  transform: translate(-50%, -50%);
  top: -5%;
  left: 50%; */
  font-size: 10rem;
  font-family: "League Gothic";
  white-space: nowrap;
`;
