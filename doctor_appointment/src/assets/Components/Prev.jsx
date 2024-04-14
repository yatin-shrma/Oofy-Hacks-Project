import Alert from 'react-bootstrap/Alert';
const Prev = () => {
    return (
        <>
            <Alert key="warning" variant="success">
          Having different Symptoms!? Find disease of yours{' '}
          <Alert.Link href="#">Here!</Alert.Link>
        </Alert>
        
        </>
    )
};

export default Prev;