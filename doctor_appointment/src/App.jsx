
import All_Cards from './assets/Components/All_Cards';
import Diagnosis from './assets/Components/Diagnosis';
import Prev from './assets/Components/Prev';

function App() {
  return (
    <>
      {/* <Diagnosis />
      <All_Cards />
      <div style={{marginRight:200, paddingRight:1100,marginLeft:20}}>
      <Prev/>
      </div> */}

      <Diagnosis title="Disease" subtitle="Details about the disease"/>
      <All_Cards bgop = "bg-blue-1" b1="bg-gray-100" b2="bg-indigo-100" d1="Padauda!" d2 = "kaggle.com expert!" n1 ="Dr. Gaurav Chandra" n2 ="Dr. Garuav Saxena" />
      <All_Cards bgop ="bg-blue-100" b1="bg-green-100" b2="bg-red-100" n1="Dr. Aryan Sharma" n2 ="Dr. Yatin Sharma " d1 = "Op person" d2="yatin" />

       <footer className="bg-black">
        
        <section className="m-auto my-10 px-6 w-100vw">

      <a
        href="#"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >Have different symptoms!? Enter Here</a
      >
    </section>
        </footer> 
    </>
  );
}

export default App;

