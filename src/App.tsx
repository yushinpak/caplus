import caplus from './assets/caplus.jpg';
import styled from 'styled-components';

function App() {
  return (
    <>
      <Img src={caplus} />
    </>
  );
}

export default App;

const Img = styled.img`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 1000vh;
  background-size: cover;
  background-repeat: no-repeat;
  height: auto;
  overflow: auto;

  /* 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox용 */
  -ms-overflow-style: none; /* Internet Explorer와 Edge용 */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera용 */
  }
`;
