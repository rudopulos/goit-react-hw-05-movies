import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const StyledLinkBtn = styled(Link)`
  margin-left: 15px;
  padding: 4px 8px;
  border: 1px solid #808080;
  border-radius: 5px;
  color: #000;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
`;

export const AddInfo = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  border-top: 1px solid #a3a3a3;
  border-bottom: 1px solid #a3a3a3;
  width: 100vw;
`;

export const Title = styled.p`
  font-size: 18px;
`;
