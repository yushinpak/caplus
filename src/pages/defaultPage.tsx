import styled from 'styled-components';

// 웹용 asset
import caplus_update from '../assets/caplus_update.jpeg';
import header from '../assets/header.png';

// 모바일용 asset
import mobile from '../assets/mobile.jpeg';

function DefaultPage() {
  return (
    <>
      <Container>
        <Header src={header} alt="header" />
        <Img src={caplus_update} alt="photo" />
      </Container>
    </>
  );
}

export default DefaultPage;

const Container = styled.div`
  width: 100%;
  min-height: 100vh; /* 화면 전체를 커버하기 위해 최소 높이 설정 */
  height: auto;
  overflow: auto; /* 스크롤을 가능하게 하되 스크롤바 숨기기 */
  position: relative; /* Header의 position을 fixed로 설정하기 위한 기준점 설정 */
`;



const Header = styled.img`
  position: fixed; /* 헤더를 고정 위치로 설정 */
  top: 0; /* 페이지 상단에 고정 */
  left: 0;
  width: 100%;
  z-index: 1000; /* 헤더가 항상 위에 표시되도록 z-index 설정 */

  @media (max-width: 768px) {
    height: 50px;
  }
`;

const Img = styled.img`
  display: block; /* 이미지에 대해 불필요한 공간을 방지 */
  width: 100%;
  height: auto; /* 이미지 비율을 유지하면서 높이 자동 조정 */
  min-height: 100vh; /* 페이지의 콘텐츠가 스크롤 가능하도록 설정 */
  margin: 0; /* 불필요한 여백 제거 */
  padding: 0; /* 불필요한 패딩 제거 */

  @media (max-width: 768px) {
    content: url(${mobile}); /* 모바일용 이미지를 사용 */
    min-height: 50vh; /* 모바일에서는 최소 높이를 줄임 */
  }
`;

// 소개, 커리큘럼, 헤더
