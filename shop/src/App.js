import './App.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <div className="main-bg"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src={process.env.PUBLIC_URL + '/logo192.png'} width="80%" height="200px" />
                    <h4>상품명</h4>
                    <p>상품정보</p>
                </div>
                <div className="col-md-4">
                    <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" height="200px" />
                    <h4>상품명</h4>
                    <p>상품정보</p>
                </div>
                <div className="col-md-4">
                    <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" height="200px" />
                    <h4>상품명</h4>
                    <p>상품정보</p>
                </div>
            </div>
        </div>
        <Button variant="primary">Primary</Button>
    </div>
  );
}

export default App;
