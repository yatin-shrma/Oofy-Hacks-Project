import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';

function AlwaysOpenExample() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Disease</Accordion.Header>
        <Accordion.Body >
          Details about the disease
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
  );
}

export default AlwaysOpenExample;