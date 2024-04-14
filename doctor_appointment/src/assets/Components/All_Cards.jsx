import Cards from './Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';

function HorizontalExample() {
  return (
    <Stack direction="horizontal" gap={3}>
      <div className="p-2"><Cards/></div>
      <div className="p-2"><Cards/></div>
      
    </Stack>
  );
}

export default HorizontalExample;