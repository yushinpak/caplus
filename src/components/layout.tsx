import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import background from '../assets/image/background_black.jpg';
import header_web from '../assets/sub/caplus_pc_header_background.jpg'
// import header_web from '../assets/header/caplus_pc_header.jpg';
import header_mobile from '../assets/header/caplus_mobile_header.jpg';

const Layout = () => {
  return (
    <Container>
      {/* <Header src={header_web} alt="header" />
      <HeaderSpace /> */}
      <Outlet />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  // background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #010101;
  // background-color: ;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.img`
  pointer-events: none;

  position: fixed; /* 헤더를 고정 위치로 설정 */
  top: 0; /* 페이지 상단에 고정 */
  left: 0;
  width: 100%;
  height: auto;
  z-index: 1000; /* 헤더가 항상 위에 표시되도록 z-index 설정 */

  // @media (max-width: 768px) {
  //   content: url(${header_mobile}); /* 모바일용 이미지를 사용 */
  // }
`;

const HeaderSpace = styled.div`
  @media (min-width: 769px) {
    height: 60px;
  }
`;
