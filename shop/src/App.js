import './App.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import data from './data' // 변수 여러개 import : import {a, b} from '경로'
import {useState} from "react";
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/Detail'

function App() {

  let [shoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
                    <Nav.Link onClick={()=>{navigate('/detail')}}>Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        <Routes>
            < Route path ="/" element={
                <>
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
                </>
            }/>
            <Route path="/detail" element={<Detail/>}/>
            <Route path="/about" element={<About/>}>
                <Route path="member" element={<div>멤버임</div>}></Route>
                <Route path="location" element={<About/>}></Route>
            </Route>
            <Route path="/event" element={<EventPage/>}>
                <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
                <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
            </Route>
            <Route path="*" element={<div>없는 페이지요</div>}/>
        </Routes>
        <Button variant="primary">Primary</Button>
    </div>
    )

    function EventPage(){
        return (
            <div>
                <h4>오늘의 이벤트</h4>
                <Outlet></Outlet>
            </div>
        )
    }

    function About(){
      return(
          <div>
              <h4>회사정보임</h4>
              <Outlet></Outlet>
          </div>
      )
    }
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
