import {useParams} from "react-router-dom";
import styled from 'styled-components';

let Box = styled.div`
  padding : 20px;
  color : grey
`;
let YellowBtn = styled.button` 
  background : ${ props => props.bg };
  color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
  padding : 10px; 
`;

function Detail(props){
    let { id } = useParams();
    let product = props.shoes.find(function(x){ // props.shoes.find((x) => x.id == id ) 랑 똑같음
        return x.id == id
    });

    return (
        <div className="container">
            <Box>
                <YellowBtn bg="orange">오랜지색 버튼</YellowBtn>
                <YellowBtn bg="blue">파란색 버튼</YellowBtn>
            </Box>
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
            </div>
        </div>
    )
}

export default Detail