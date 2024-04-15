
import All_Cards from './assets/Components/All_Cards';
import Diagnosis from './assets/Components/Diagnosis';
import './index.css';

const App = () => {
  return (
    <>
      <Diagnosis title="Disease" subtitle="Details about the disease"/>
      <All_Cards bgop = "bg-blue-1" b1="bg-gray-100" b2="bg-indigo-100" d1="" d2 = "" n1 ="Dr. Gaurav" n2 ="Dr. Garuav Saxena" />
      <All_Cards bgop ="bg-blue-100" b1="bg-pink-100" b2="bg-gray-100" n1="Dr. Vikas Chauhan" n2 ="Dr. Chetan Chaupati " d1 = "" d2="" />

       <footer className="bg-black">
        
        <section className="m-auto my-10 px-6">

      <a
        href="#"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover-bg-gray-700"
        >Have different symptoms!? Enter Here</a
      >
    </section>
        </footer> 
    </>
  );
}

export default App;

