import { Email, LocalPhone, LocationOn } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { max_580, max_800, max_940 } from "../responsive";

const Container = styled.div`
    display: flex;
    width: 70%;
    margin: 0 auto;
    padding: 4rem;
    background-color: #f8e6e6;
    box-sizing: border-box;
    margin-top: 4rem;
    ${max_580({flexDirection: 'column', padding: '4rem 2rem'})}
`
const Left = styled.div`
    flex: 1;
    ${max_580({marginBottom: '1rem'})}
`

const Right = styled.div`
    flex: 1;
`

const Title = styled.h2`
    padding-bottom: 20px;
    ${max_940({fontSize: '22px'})}
`

const Nav = styled.nav`
`

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    width: 65%;
`

const ListItem = styled.li`
    width: 50%;
    padding-bottom: 8px;
    font-size: 14px;
    ${max_940({fontSize: '11px'})}
    ${max_800({width: '100%'})}
    color: #d34c4c;
`

const Contact = styled.div`
`

const ContactItem = styled.div`
    display: flex;
    padding-bottom: 15px;
`

const Info = styled.p`
    padding-left: 10px;
    font-size: 14px;
    ${max_940({fontSize: '11px'})}
`

const Payment = styled.img`
    width: 30%;
    object-fit: contain;
`
const Footer = () => {
    const goUp = () => window.scroll(0, 0)
    return ( 
        <Container>
            <Left>
                <Title>Useful Links</Title>
                <Nav>
                    <List>
                        <ListItem><NavLink to='/' onClick={() => goUp()}>Home</NavLink></ListItem>
                        <ListItem><NavLink to='/category/1' onClick={() => goUp()}>Shirt Style</NavLink></ListItem>
                        <ListItem><NavLink to='/category/2' onClick={() => goUp()}>Lounge Wear</NavLink></ListItem>
                        <ListItem><NavLink to='/category/3' onClick={() => goUp()}>Light Jackets</NavLink></ListItem>
                        <ListItem><NavLink to='/cart' onClick={() => goUp()}>Cart</NavLink></ListItem>
                    </List>
                </Nav>
            </Left>
            <Right>
                <Title>Contact</Title>
                <Contact>
                    <ContactItem>
                        <LocationOn style={{fontSize: "20px"}}/>
                        <Info>Muslim Town, Lahore</Info>
                    </ContactItem>
                    <ContactItem>
                        <LocalPhone  style={{fontSize: "20px"}}/>
                        <Info>03221133444</Info>
                    </ContactItem>
                    <ContactItem>
                        <Email  style={{fontSize: "20px"}}/>
                        <Info>contact@wajax.com</Info>
                    </ContactItem>
                    <ContactItem>
                        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
                    </ContactItem>
                </Contact>
            </Right>
        </Container>
     );
}
 
export default Footer;