import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import background from '../assets/image/background_black.jpg';

const Layout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #010101;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
