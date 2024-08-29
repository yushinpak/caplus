import styled from 'styled-components';
// import core from '../assets/image/core.png'

const DownloadApplicantForm = () => {
  return (
    <Container>
      {/* <CoreImg src={core} alt="코어" /> */}
      <a
        href={`../public/applicant-form.docx`}
        download="카플러스_50기_지원서.docx"
      >
        {/* 나중에 변경 */}
        <DownloadButton>지원서 word 파일 다운로드</DownloadButton>
      </a>
    </Container>
  );
};

export default DownloadApplicantForm;

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DownloadButton = styled.button`
margin-top: 200px;
padding: 10px;
  font-size: 16px;
  cursor: pointer;
  // height: 50px;
  color: red;
  // border-radius: 50px;
  background-color: transparent;
  border: none;
  border-bottom: red 2px solid;

  // @media (max-width: 768px) {
  //   font-size: 14px;
  //   padding: 8px 16px;
  //   height: 80px;
  // }
`;
