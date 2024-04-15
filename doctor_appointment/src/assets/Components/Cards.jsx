import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cards = (props) => {
  return <div className={`${props.bg} p-6 rounded-lg shadow-md`}>
    {props.children}
  </div>
}

export default Cards;