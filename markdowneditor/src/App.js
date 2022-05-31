import './App.css';
import styled from 'styled-components'

const AppContainer = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

const Title = styled.div`
  font-size:25px;
  font-weight:700;
  font-family:"Lato", sans-serif;
  margin-bottom:1em;
`

const EditorContainer = styled.div`
  width:100%;
  height:100%;
  display:flex;
`

function App() {
  return (
    <AppContainer>
      <Title>Markdown editor</Title>
      <EditorContainer>
        
      </EditorContainer>
    </AppContainer>
  );
}

export default App;
