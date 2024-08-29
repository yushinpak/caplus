import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { createGlobalStyle } from 'styled-components';

import Layout from './components/layout';
import DefaultPage from './pages/defaultPage';
import DownloadApplicantForm from './pages/download_applicant_form';

import styled from 'styled-components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // 공통 레이아웃을 정의
    children: [
      {
        path: '/',
        element: <DefaultPage />,
      },
      {
        path: '/applicant-form-download',
        element: <DownloadApplicantForm />,
      },
    ],
  },
]);

function App() {
  // 카카오톡 링크 http://pf.kakao.com/_tlnhn/chat

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    font-family: 'Pretendard-Regular','Arial', 'sans-serif';

  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

/* 전체 스크롤바 스타일 */
::-webkit-scrollbar {
  width: 12px; /* 스크롤바의 너비 */
}

/* 스크롤바 배경 */
::-webkit-scrollbar-track {
  background-color: #010101; /* 스크롤바 배경색 */
}

/* 스크롤바 핸들 */
::-webkit-scrollbar-thumb {
  background-color: #5d0304; /* 스크롤바 핸들의 색상 */
}
`;
