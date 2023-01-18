import styled from "styled-components";
import {  Quantity, QuantityButton } from "../pages/SingleProduct";
import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../redux/manage";
import { max_1190, max_750, max_970} from "../responsive";
const Container = styled.div`
    
    border-bottom: 0.5px solid lightgray;
    box-sizing: border-box;
`

const Item = styled.div`
    display: flex;
    ${max_750({display: 'block'})}
`

const ImgContainer = styled.div`
    height: 100%;
    flex-basis: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    ${max_750({display: 'block'})}

`

const Image = styled.img`
    width: 5rem;
    height: 10rem;
    object-fit: contain;
`

const InfoContainer = styled.div`
flex: 1;
padding-top: 2rem;
display: flex;
justify-content: space-between;
${max_970 ({flexDirection: 'column'})}
`

const InfoLeft = styled.div`
`

const InfoText = styled.p`
padding-bottom: 10px;
${max_1190 ({fontSize: '13px'})}
`

const Label = styled.span`
    font-weight: 600;
`

const InfoRight = styled.div`
    padding-right: 4rem;
    text-align: center;
    ${max_970 ({textAlign: 'left'})}
`

const QtyWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 0 1rem 0;
    ${max_970 ({textAlign: 'left', padding: 0})}
`
const QuanBtn = styled(QuantityButton)`
    
`

const Quan = styled(Quantity)`
    ${max_1190 ({fontSize: '13px', width: '20px', height: '20px'})}
`

const Price = styled.p`
    font-size: 25px;
    font-weight: 300;
    ${max_1190 ({fontSize: '18px', paddingTop: '13px', marginBottom:'13px'})}
` 

const SingleItem = ({item, sub, setSub}) => {
    const [qty, setQty] = useState(item.quantity);
    const {ids} = useSelector(state => state.manage)
    const item_pos = ids.indexOf(item.id)
    
    const dispatch = useDispatch();

    const handleClick = type => {
        if (type === 'increase'){
            setQty(qty + 1)
            dispatch(increaseQuantity(item_pos))
            setSub(sub + item.price)
            console.log(sub)
        } else if ( type === 'decrease' && qty > 1) {
            setQty(qty - 1)
            dispatch(decreaseQuantity(item_pos))
            setSub(sub - item.price)
            console.log(sub)
        };
}

    return ( 
        <Container>
            <Item>
                <ImgContainer>
                    <Image src={item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <InfoLeft>
                        <InfoText>
                            <Label>Product:</Label> {item.title}
                        </InfoText>
                        <InfoText>
                            <Label>ID:</Label> {item.id}
                        </InfoText>
                        <InfoText>
                            <Label>Size:</Label> Medium
                        </InfoText>
                    </InfoLeft>
                    <InfoRight>
                        <QtyWrapper>
                            <QuanBtn onClick={() => handleClick('decrease')}><Remove /></QuanBtn>
                            <Quan>{qty}</Quan>
                            <QuanBtn onClick={() => handleClick('increase')}><Add /></QuanBtn>
                        </QtyWrapper>
                        <Price>Rs {item.price * qty}</Price>
                    </InfoRight>
                </InfoContainer>
            </Item>
        </Container>
     );
}
 
export default SingleItem;