import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.jsx';
import Mapway from './components/Mapway.jsx';
import Imagery from './components/healthcare.jpeg';
import Imagery1 from './components/diagnosis.jpg';
import Imagery2 from './components/doct.jpg';
import Footer from './components/Footer.jsx';
import './components/Map.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='back'>
        <div className="container-fluid py-4">
          <h2>Fastest Way Of Booking Your Ambulance</h2>
        </div>
        <div style={{ height: '2px', backgroundColor: '#EEF5DB', padding: '20px' }} className="w-100"></div>
        <div className='main'>
          <div className='but'>
            <div className='tt1'>Get your symptoms checked and diagnosed at the convenience of your home. With various symptoms to choose from, this software with its intricate machine learning algorithms, gives the accurate diagnosis, alongwith iits medications and precautions. Thus providing highly useful real life applications.</div>
            <button className='b1'>DIAGNOSIS</button>
          </div>
          <div className='img-map'>
            <img className='img-main' src={Imagery} />
          </div>
        </div>
        <div className="img1">
          <img src={Imagery1} className='img2' />
          <div className="desc">The inspiration behind this proposal stems from the desire to improve access to critical healthcare services for all individuals. Witnessing the impact of delayed emergency response and the struggle to navigate the healthcare system highlights the need for a seamless, integrated digital solution. By combining efficient ambulance booking with specialist doctor appointments, we aim to enhance the quality of care, improve patient experiences, and ultimately save lives. This project is a step towards making healthcare more accessible, convenient, and transparent for everyone.</div>
        </div>
        <div className="img3">
          < div className="desc2">Not only do we give the option to book emergency ambulance, but also the option to book appointments with specialised doctors for general healthcare. Keeping in mind to provide the user with the feature to choose from multiple doctors along with their ratings and slots available, in order to provide clarity of choice. </div>
          <img src={Imagery2} className="img4" />
        </div>
      </div>
      <div style={{backgroundColor:'#EEF5DB' }}>
        <Footer/>
      </div>
    </>
  )
}

export default App
