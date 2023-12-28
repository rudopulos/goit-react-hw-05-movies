import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ListItem = styled.li``;

export const StyledLink = styled(Link)`
  font-size: 18px;
  font-weight: 500;
`;
