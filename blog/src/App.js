/* eslint-disable */

import './App.css';
import {useState} from "react";

function App() {

    let [title, setTitle] = useState( ['남자코트 추천', '강남 우동맛집', '파이썬 독학'] );
    let [like, setLike] = useState([0,0,0]);
    let [modal, setModal] = useState(false);
    let [titleState, setTitleState] = useState(0);
    let [inputValue, setInputValue] = useState('');

    return (
        <div className="App">
            <div className="black-nav">
                <div>개발 blog</div>
            </div>
            <button onClick={ ()=>{
                let copy = [...title];
                copy[0] = '여자 코드 추천';
                setTitle(copy)
            } }> 수정버튼 </button>
            <button onClick={ ()=>{
                let copy = [...title];
                copy.sort();
                setTitle(copy)
            } }> 정렬버튼 </button>
            {
                title.map(function (a, i){
                    return (
                        <div className="list" key={i}>
                            <h4 onClick={ ()=>{ setModal(!modal); setTitleState(i) }}>{title[i]}
                                <span onClick={(e) => {
                                    e.stopPropagation();
                                    let copy = [...like];
                                    copy[i] = copy[i] + 1;
                                    setLike(copy)

                                }
                                }>👍</span> {like[i]}
                            </h4>
                            <p>2월 17일 발행</p>
                            <button onClick={()=>{
                                let copy = [...title];
                                copy.splice(i,1);
                                setTitle(copy)
                            }}>삭제</button>
                        </div>
                    )
                })
            }

            <input type="text" onChange={(e)=>{
                setInputValue(e.target.value);
                console.log(inputValue);
            }}/>
            <button onClick={()=>{
                let copy = [...title];
                copy.unshift(inputValue);
                setTitle(copy)
            }}>글 발행</button>

            {
                modal == true ? <Modal titleState={titleState} setTitle={setTitle} title={title} color={'yellow'}></Modal> : null
            }
        </div>
    );

    function Modal(props){
        return(
            <div className="modal" style={{background : props.color}}>
                <h4>{props.title[props.titleState]}</h4>
                <p>날짜</p>
                <p>상세내용</p>
                <button onClick={()=> { props.setTitle(['남자코트 추천', '강남 우동맛짐', '파이썬 독학'])}}>글 수정</button>
            </div>
        )
    }

    // 옛날 React 문법
    class Modal2 extends React.Component{
        constructor() {
            super();
            this.state = {
                name : 'kim',
                age : 20
            }
        }
        render() {
            return(
                <div>안녕 {this.state.age}
                    <button onClick={()=>{
                        this.setState({age:21})
                    }}>버튼</button>
                </div>
            )
        }
    }
}

export default App;
