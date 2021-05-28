import { Container } from './App.style';
import CanvasDraw from './components/CanvasDraw';

function App() {
  return (
    <Container>
      <CanvasDraw canvasWidth={512} canvasHeight={512}/>
    </Container>
  );
}

export default App;
