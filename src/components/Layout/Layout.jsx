import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Main, Navigation, StyledNavLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </Navigation>
      </Header>
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default Layout;
