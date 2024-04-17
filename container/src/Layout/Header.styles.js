import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Header = styled.header`  
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ContactLink = styled(Link)`
  position: relative;
  padding-right: 20px;
`;