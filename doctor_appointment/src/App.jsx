
import All_Cards from './assets/Components/All_Cards';
import Diagnosis from './assets/Components/Diagnosis';
import Prev from './assets/Components/Prev';
import test from './assets/Components/test';
import './App.css';
function App() {
  return (
    <>
      <Diagnosis />

      <All_Cards />
      <div style={{marginRight:200, paddingRight:1100,marginLeft:20}}>
        <Prev/>

      </div>
    </>
  )
}

export default App

