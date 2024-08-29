import React from 'react';
import styled from 'styled-components';

const DownloadApplicantForm = () => {
  return (
    <Container>
      <a href={`../public/apply.docx`} download="카플러스_50기_지원서.docx">
        <DownloadButton>Download Word File</DownloadButton>
      </a>
    </Container>
  );
};

export default DownloadApplicantForm;

const Container = styled.div`
  background-color: black;
`;

const DownloadButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  height: 100px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
    height: 80px;
  }
`;
