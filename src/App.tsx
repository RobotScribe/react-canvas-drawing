import { Container, GithubLink } from './App.style';
import CanvasDraw from './components/CanvasDraw';

function App() {
  return (
    <Container>
      <CanvasDraw canvasWidth={512} canvasHeight={512}/>
      <GithubLink
        href="https://github.com/RobotScribe/react-canvas-drawing"
        target="blank"
        rel="noopener noreferrer"
      >
        See the Github repository
      </GithubLink>
    </Container>
  );
}

export default App;
