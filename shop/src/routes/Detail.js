import {useParams} from "react-router-dom";
import styled from 'styled-components';
import {useEffect, useState} from "react";

let Box = styled.div`
  padding : 20px;
  color : grey
`;
let YellowBtn = styled.button` 
  background : ${ props => props.bg };
  color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
  padding : 10px; 
`;

function Detail(props) {

    let {id} = useParams();
    let product = props.shoes.find(function (x) { // props.shoes.find((x) => x.id == id ) 랑 똑같음
        return x.id == id
    });
    let [count, setCount] = useState(0)
    let [alert2, setAlert2] = useState(true)
    let [num, setNum] = useState('')

    useEffect(()=>{
        if (isNaN(num) == true){
            alert('그러지마세요')
        }
    }, [num])

    useEffect(() => {
        let a = setTimeout(() => {
            setAlert2(false)
        }, 2000)

        return () => {
            clearTimeout(a)
        }
    })

    // useEffect(()=>{ }) // 재렌더링마다 코드실행하고 싶으면
    // userEffect(()=>{}, []) // mount시 1회 코드 실행하고 싶으면
    // useEffect(() =>{
    //      //unmount시 1회 코드 실행하고 싶으면
    //  }
    // },[])
    return (
        <div className="container">
            {
                alert2 == true
                    ? <div className="alert alert-warning">
                        2초이내 구매시 할인
                    </div>
                    : null
            }
            <Box>
                <YellowBtn bg="orange">오랜지색 버튼</YellowBtn>
                <YellowBtn bg="blue">파란색 버튼</YellowBtn>
            </Box>
            <button onClick={()=>{ setCount(count+1)}}>버튼</button>
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes" + id + ".jpg"} width="100%"/>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{product.title}</h4>
                    <p>{product.content}</p>
                    <p>{product.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
                <input onChange={((e)=>{ setNum(e.target.value) })} />
            </div>
        </div>
    )
}

export default Detail