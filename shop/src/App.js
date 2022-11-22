import './App.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import data from './data' // 변수 여러개 import : import {a, b} from '경로'
import {useState} from "react";

function App() {

  let [shoes] = useState(data)

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
                {
                    shoes.map((a, i)=>{
                        return(
                            <Card shoes={shoes[i]} i={i}></Card>
                        )
                    })
                }
            </div>
        </div>
        <Button variant="primary">Primary</Button>
    </div>
    )

    function Card(props){
        return (
            <div className="col-md-4">
                <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="80%" height="200px"/>
                <h4>{ props.shoes.title }</h4>
                <p>{ props.shoes.price }</p>
            </div>
        )
    }
}

export default App;
