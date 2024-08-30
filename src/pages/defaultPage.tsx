import styled from 'styled-components';

import header_web from '/assets/sub/caplus_pc_header_background.jpg';
import text_logo from '/assets/sub/caplus_text_logo.png';
import image_logo from '/assets/sub/image_logo.png';
import red_fill_color from '/assets/sub/red_fill_color.jpg';

// web asset
import home from '../assets/main/pc_1.jpg';
import introduce_caplus from '../assets/main/pc_2.jpg'; 
import introduce_detail from '../assets/main/pc_3.jpg';
import curriculum from '../assets/main/pc_4.jpg';
import application_guide from '../assets/main/pc_5.jpg';
import ending from '../assets/main/pc_6.jpg';

// mobile asset
import content_mobile from '/assets/main/caplus_mobile.jpg';

function DefaultPage() {
  return (
    <>
      <Container>
        <Header>
          <Link href="#home-section">
            <TextLogo src={text_logo} alt="카플러스" />
          </Link>
          <ImageLogo src={image_logo} alt="카플러스" />
          <ButtonContainer>
            <Link href="#introduce">
              <Button>소개</Button>
            </Link>
            <Link href="#curriculum">
              <Button>커리큘럼</Button>
            </Link>
            <Link href="#apply">
              <Button>지원안내</Button>
            </Link>
            <a
              href="http://pf.kakao.com/_tlnhn/chat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>지원하기</Button>
            </a>
          </ButtonContainer>
        </Header>
        <HeaderSpace />
        <ContentContainer>
          <WebSection src={home} id="home-section" alt="홈 이미지" />
          <WebSection src={introduce_caplus} alt="학회 소개" />
          <WebSection id="introduce" src={introduce_detail} alt="디테일 학회 소개" />
          <WebSection id="curriculum" src={curriculum} alt="커리큘럼" />
          <WebSection id="apply" src={application_guide} alt="지원안내" />
          <WebSection src={ending} alt="엔딩" />
          <MobileSection src={content_mobile} alt="photo" />
          <ApplyContainer>
            <ApplyLink
              href={`../public/applicant-form.docx`}
              download="카플러스_50기_지원서.docx"
            >
              <ApplyButton>지원서 다운받기</ApplyButton>
            </ApplyLink>
            <ApplyLink
              href="http://pf.kakao.com/_tlnhn/chat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ApplyButton>지원하기</ApplyButton>
            </ApplyLink>
          </ApplyContainer>
        </ContentContainer>
      </Container>
    </>
  );
}

export default DefaultPage;

const WebSection = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    pointer-events: none;
    display: block;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
  }
`;

const MobileSection = styled.img`
  /* 모바일에서는 보이도록 설정 */
  display: block;
  width: 100%;

  @media (min-width: 768px) {
    /* 데스크탑에서는 숨김 */
    display: none;
  }
`;

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
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const HeaderSpace = styled.div`
  height: 70px;

  @media (min-width: 768px) {
    height: 70px;
  }
`;

const TextLogo = styled.img`
  position: fixed;
  left: 10%;
  width: 100px;

  pointer-events: auto;

  @media (max-width: 768px) {
    left: 5%;
    width: 80px; /* 모바일에서 로고 크기 조정 */
  }
`;

const ImageLogo = styled.img`
  position: fixed;
  left: 50%;
  transform: translateX(-50%); /* 중앙 정렬 */
  width: 30px;

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
    right: 5%;
    display: flex;
    justify-content: flex-end;

    /* 모바일에서는 마지막 자식 요소를 제외한 나머지 요소를 숨김 */
    & > *:not(:last-child) {
      display: none;
    }
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
    color: red;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    &:not(:last-child) {
      display: none; /* 마지막 버튼(지원하기)만 보이게 설정 */
    }
  }

  pointer-events: auto;
`;

const Container = styled.div`
  pointer-events: none;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  position: relative;
  box-sizing: border-box;
`;

const ApplyContainer = styled.div`
  position: absolute; /* 절대 위치 지정 */
  bottom: 9%; /* 컨텐츠 하단에서 10% 떨어지게 설정 */
  left: 50%;
  transform: translateX(-50%); /* 좌우 중앙 정렬 */
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    bottom: 6%;
  }
`;

const ApplyLink = styled.a`
  text-decoration: none; /* 링크 기본 스타일 제거 */
  margin: 10px 0; /* 버튼 간격 설정 */
  pointer-events: auto; /* 링크를 클릭 가능하게 설정 */
`;

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ApplyButton = styled.button`
  font-family: 'Pretendard-Regular';
  background: url(${red_fill_color}) no-repeat center center; /* 배경 이미지 설정 */

  background-size: cover; /* 이미지 크기를 버튼 크기에 맞게 조정 */
  border: none;
  border-radius: 35px;
  color: black;
  color: #d9b2b5;
  font-size: 24px;
  width: 250px;

  cursor: pointer;
  padding: 10px 20px;
  position: relative;
  pointer-events: auto; /* 버튼을 클릭 가능하게 설정 */
  text-align: center; /* 버튼 텍스트 가운데 정렬 */

  @media (max-width: 768px) {
    font-size: 15px;
    width: 150px; /* 버튼 너비 설정 */
  }
`;
