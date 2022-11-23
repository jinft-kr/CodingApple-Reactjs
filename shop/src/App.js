import './App.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import data from './data' // 변수 여러개 import : import {a, b} from '경로'
import {createContext, useState} from "react";
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/Detail'
import axios from 'axios'
import Cart from './routes/Cart'

let Context1 = createContext() // state 보관함

function App() {

  let [shoes, setShoes] = useState(data)
  // let [last, setLast] = useState([10,11,12])

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
                    <button onClick={()=>{
                            axios.get('https://codingapple1.github.io/shop/data2.json')
                                .then((result)=>{
                                    console.log(result.data)
                                    let copy = [...shoes, ...result.data];
                                    setShoes(copy);

                                }).catch(()=>{
                                    console.log('실패')
                            })

                        // Promise.all([axios.get('/url1'), axios.get('url2')]).then().catch() //2가지 이상의 요청을 보내고 싶을 때
                        // fetch('URL').then(결과 => 결과.json()).then((결과) => { console.log(결과) } ) // fetch 사용하고 싶을 때
                        }
                    }>버튼</button>
                </>
            }/>
            <Route path="/detail/:id" element={  <Detail shoes={shoes}/>
            }/>
            <Route path="/cart" element={  <Cart></Cart>  }/>
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
