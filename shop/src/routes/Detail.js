import {useParams} from "react-router-dom";

function Detail(props){
    let { id } = useParams();
    let product = props.shoes.find(function(x){ // props.shoes.find((x) => x.id == id ) 랑 똑같음
        return x.id == id
    });

    return (
        <div className="container">
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