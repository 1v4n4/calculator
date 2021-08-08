import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

function App() {
  const forLinters = Calculate('=', { total: '5', next: '3', operation: '+' });
  return (
    <>
      <div>{forLinters}</div>
      <Display />
      <ButtonPanel />

    </>
  );
}

export default App;
