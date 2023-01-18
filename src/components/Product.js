import { SearchOutlined, ShoppingCartOutlined} from "@mui/icons-material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/manage";
import { useState } from "react";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    display: flex;
    justify-content: center;
    padding: 15px;
    box-sizing: border-box;
    position: relative;
    background-color: #ebe6e6;
    transition: background-color 0.3s;
    flex-basis: 15vw;
    min-width: 200px;
    &:hover {
        background-color: #d3d1d1;
    }
`

const Image = styled.img`
    width: 100%;
    height: 30vh;
    object-fit: contain;
`

const Menu = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;  
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.4s;
    
    &:hover {
        opacity: 1;
    }
`
const Option = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin: 5px;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
        transform: scale(1.1);
    }
`

const Msg = styled.h2`
    background-color: ${({type}) => type === 'error' ? "#C75A36" : "teal"};
    position: absolute;
    color: white;
    width: 100%;
    top:0;
    font-size: 18px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: height 0.3s;
    overflow: hidden;
    height: 0;
`

const Product = ({item}) => {
    const {ids} = useSelector(state => state.manage);
    const navigate = useNavigate();
    const handleSearch = () => {
        navigate('/singleproduct/' + item.id)
    };

    const dispatch = useDispatch();
    const [addMsg, setaddMsg] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);

    const handleCart = () => {
        if (ids.includes(item.id)){
            setErrorMsg(true)
            setTimeout(() => {
                setErrorMsg(false)
            }, 1000)
        } else {
            item['quantity'] = 1
            dispatch(addItem(item))
            setaddMsg(true)
            setTimeout(() => {
                setaddMsg(false)
            }, 1000)
        }
        
    }

    return ( 
        <Container>
            <Image src={item.img}/>
            <Menu>
                <Option title='Add to Cart'
                    onClick={() => handleCart()}
                >
                    <ShoppingCartOutlined/>
                </Option>
                <Option title='Details' onClick={() => handleSearch()}>
                    <SearchOutlined />
                </Option>
            </Menu>
            <Msg style={{height: addMsg && '40px'}}>Added!</Msg>
            <Msg type='error' style={{height: errorMsg && '40px'}}>Already Added!</Msg>
        </Container>
     );
}
 
export default Product;