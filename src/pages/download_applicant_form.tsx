import styled from 'styled-components';

import header_web from '/assets/sub/caplus_pc_header_background.jpg';
import text_logo from '/assets/sub/caplus_text_logo.png';
import image_logo from '/assets/sub/image_logo.png';
import red_fill_color from '/assets/sub/red_fill_color.jpg';

const DownloadApplicantForm = () => {
  const handleDownload = () => {
    fetch('/docs/form.docx')
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'CAPLUS_50기_정규_지원서.docx';
        link.click();
        window.URL.revokeObjectURL(link.href); // 메모리 해제
      })
      .catch(error => console.error('Download error:', error));
  };
  

  return (
    <Container>
      <Header>
        <Link href="https://caplus.vercel.app/" rel="noopener noreferrer">
          <TextLogo src={text_logo} alt="카플러스" />
          <ImageLogo src={image_logo} alt="카플러스" />
        </Link>
        <ButtonContainer>
          <Link
            href="http://pf.kakao.com/_tlnhn/chat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>지원하기</Button>
          </Link>
        </ButtonContainer>
      </Header>

      <DownloadButton onClick={handleDownload}>
        지원서 word 파일 다운로드
      </DownloadButton>
    </Container>
  );
};

export default DownloadApplicantForm;

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
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

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ButtonContainer = styled.div`
  position: fixed;
  right: 10%;
  z-index: 1000; /* 버튼이 헤더 위에 보이도록 높은 z-index 설정 */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
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

  @media (max-width: 800px) {
    &:not(:last-child) {
      display: none; /* 마지막 버튼(지원하기)만 보이게 설정 */
    }
  }

  pointer-events: auto;
`;

const TextLogo = styled.img`
  position: fixed;
  left: 10%;
  width: 100px;

  pointer-events: auto;

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

  pointer-events: auto;

  @media (max-width: 800px) {
    width: 25px; /* 모바일에서 로고 크기 조정 */
  }
`;

const DownloadButton = styled.button`
  font-family: 'Pretendard-Regular';
  background: url(${red_fill_color}) no-repeat center center; /* 배경 이미지 설정 */

  background-size: cover; /* 이미지 크기를 버튼 크기에 맞게 조정 */
  border: none;
  border-radius: 35px;

  color: #d9b2b5;

  font-size: 24px;
  cursor: pointer;
  padding: 10px 20px;
  position: relative;
  pointer-events: auto; /* 버튼을 클릭 가능하게 설정 */
  text-align: center; /* 버튼 텍스트 가운데 정렬 */

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
