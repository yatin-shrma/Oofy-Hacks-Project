import '../../index.css';

const Diagnosis = (props) => {
  return (
    <section className="bg-pink-600 py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-center text-4xl flex font-extrabold text-white sm-text-5xl md-text-6xl"  style={{marginLeft:400}}>
            {props.title}
          </h1>
          <p className="my-4 text-xl text-white" style={{marginLeft:400}}>
           {props.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Diagnosis;