import styled from 'styled-components';
import header_web from '../assets/sub/caplus_pc_header_background.jpg';
import text_logo from '../assets/sub/caplus_text_logo.png';
import image_logo from '../assets/sub/image_logo.png';

// 웹용 asset
import content_web from '../assets/main/caplus_pc.jpg';

// 모바일용 asset
import content_mobile from '../assets/main/caplus_mobile.jpg';

function DefaultPage() {
  return (
    <>
      <Container>
        <Header>
          <TextLogo src={text_logo} alt="카플러스" />
          <ImageLogo src={image_logo} alt="카플러스" />
          <ButtonContainer>
            <Button>소개</Button>
            <Button>커리큘럼</Button>
            <Button>지원일정</Button>
            <Button>지원하기</Button>
          </ButtonContainer>
        </Header>
        <HeaderSpace />
        <Img src={content_web} alt="photo" />
      </Container>
    </>
  );
}

export default DefaultPage;

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-image: url(${header_web});
  z-index: 999;
  pointer-events: none; /* 헤더를 클릭하지 못하게 설정 */
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const HeaderSpace = styled.div`
  height: 70px;

  @media (min-width: 800px) {
    height: 70px;
  }
`;

const TextLogo = styled.img`
  position: fixed;
  left: 10%;
  width: 100px;

  @media (max-width: 800px) {
    left: 5%;
    width: 80px; /* 모바일에서 로고 크기 조정 */
  }
`;

const ImageLogo = styled.img`
  position: fixed;
  left: 50%;
  transform: translateX(-50%); /* 중앙 정렬 */
  width: 30px;

  @media (max-width: 800px) {
    width: 25px; /* 모바일에서 로고 크기 조정 */
  }
`;

const ButtonContainer = styled.div`
  position: fixed;
  right: 10%;
  z-index: 1000; /* 버튼이 헤더 위에 보이도록 높은 z-index 설정 */
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    right: 5%;
    display: flex;
    justify-content: flex-end;
  }
`;

const Button = styled.button`
  z-index: 1000;

  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  margin-left: 15px;
  transition:
    color 0.3s ease-in-out,
    font-size 0.3s ease-in-out; 

  &:hover {
    color: red; /* 텍스트 색상이 빨간색으로 변함 */
    font-size: 18px;
  }

  @media (max-width: 800px) {
    &:not(:last-child) {
      display: none; /* 마지막 버튼(지원하기)만 보이게 설정 */
    }
  }

  /* 클릭 가능하도록 pointer-events 추가 */
  pointer-events: auto;
`;


const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  pointer-events: none;
  display: block;
  width: 100%;
  height: auto;
  min-height: 100vh;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    content: url(${content_mobile});
    min-height: 50vh;
  }
`;
