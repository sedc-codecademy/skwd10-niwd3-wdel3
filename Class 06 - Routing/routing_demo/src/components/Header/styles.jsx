import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  border-bottom: 5px solid #f4f4f4;
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  & a {
    text-decoration: none;
    margin-right: 10px;
    color: #2c2828;
  }
`;
