import styled from "styled-components";
import Navbar from "../components/Navbar";
import  Announcement from '../components/Announcement';
import  Newsletter from '../components/Newsletter';
import  Footer from '../components/Footer';

import SingleItem from "../components/SingleItem";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { max_1036, max_1158, max_1275, max_370, max_630, max_750 } from "../responsive";

const Container  = styled.div`
`

const Wrapper  = styled.div`
    width: 70%;
    margin: 0 auto;
    margin-bottom: 2rem;
`

const Title = styled.h1`
    font-weight: 400;
    text-align: center;
    padding: 3rem 0;
`

const Top  = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    ${max_630({flexDirection: 'column', gap: '20px'})}
`

const Button = styled.button`
    padding: 5px 10px;
    background-color: ${({type}) => type === 'filled' ? '#292929' : 'transparent'};
    color: ${({type}) => type === 'filled' && 'white'};
    cursor: pointer;
    transition: all 150ms;
`

const ContinueButton = styled(Button)`
    &:hover {
        background-color: #2a2a2a;
        color: white;
    }
`

const CheckoutButton = styled(Button)`
    &:hover {
        background-color: transparent;
        color: black;
    }
`

const TopMid = styled.div`
`

const Status = styled.span`
    font-size: 15px;
    margin-right: 10px;
    border-bottom: 1px solid #2a2a2a;
`

const Bottom  = styled.div`
    display: flex;
    ${max_1036({flexDirection: 'column-reverse'})}
`

const Left  = styled.div`
    width: 70%;
    ${max_1036({width: '100%'})}
`
const InfoText = styled.p`
    padding-bottom: 10px;
    font-size: 16px;
    ${max_1275({fontSize: '14px'})}
    ${max_1158({fontSize: '12px'})}
    ${max_1036({fontSize: '16px'})}
    ${max_750({fontSize: '14px'})}
    ${max_370({fontSize: '12px'})}
`

const Label = styled.span`
    font-weight: 600;
    font-size: 20px;
    ${max_1275({fontSize: '17px'})}
    ${max_1158({fontSize: '15px'})}
    ${max_1036({fontSize: '20px'})}
    ${max_750({fontSize: '17px'})}
    ${max_370({fontSize: '15px'})}
`

const Right  = styled.div`
    width: 30%;
    ${max_1036({width: '100%'})}
`
const CheckoutWrapper = styled.div`
    border: 0.5px solid lightgray;
    box-sizing: border-box;
`

const Title2 = styled(Title)`
    font-size: 25px;
    font-weight: 300;
    ${max_1275({fontSize: '22px'})}
    ${max_1158({fontSize: '19px'})}
    ${max_1036({fontSize: '25px'})}
    ${max_750({fontSize: '22px'})}
    ${max_370({fontSize: '20px'})}
`

const CheckoutInfo = styled.div`
    display: flex;
    padding: 0.7rem 1.5rem;
`

const Cart = () => {
    const {items, subTotal} = useSelector(state => state.manage);
    const [sub, setSub] = useState(subTotal);
    const estimatedShip = items.length * 400;
    const shipDiscount = estimatedShip * 0.1;
    const total = sub + (estimatedShip - shipDiscount);

    return ( 
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <NavLink to='/'><ContinueButton>CONTINUE SHOPPING</ContinueButton></NavLink>
                    <TopMid>
                        <Status>Shopping Bag({items.length})</Status>
                    </TopMid>
                    <NavLink to='/cart'><CheckoutButton type='filled'>CHECKOUT NOW</CheckoutButton></NavLink>
                </Top>
                <Bottom>
                    <Left>
                        {items.map( item => (
                            <SingleItem item = {item} key={item.id} sub={sub} setSub={setSub}/>
                        ))}
                    </Left>
                    <Right>
                        <CheckoutWrapper>
                            <Title2>ORDER SUMMARY</Title2>
                            <CheckoutInfo>
                                <InfoText style={{width: '70%'}}>Subtotal</InfoText>
                                <InfoText>Rs {sub}</InfoText>
                            </CheckoutInfo>
                            <CheckoutInfo>
                                <InfoText style={{width: '70%'}}>Estimated Shipping</InfoText>
                                <InfoText>Rs {estimatedShip}</InfoText>
                            </CheckoutInfo>
                            <CheckoutInfo>
                                <InfoText style={{width: '70%'}}>Shipping Discount</InfoText>
                                <InfoText>Rs {shipDiscount}</InfoText>
                            </CheckoutInfo>
                            <CheckoutInfo>
                                <Label style={{width: '50%'}}>Total</Label>
                                <Label>Rs {total}</Label>
                            </CheckoutInfo>
                        </CheckoutWrapper>
                    </Right>
                </Bottom>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
     );
}
 
export default Cart;