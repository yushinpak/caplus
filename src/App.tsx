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

  /* 추가적인 글로벌 스타일을 정의할 수 있습니다 */
  body {
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
