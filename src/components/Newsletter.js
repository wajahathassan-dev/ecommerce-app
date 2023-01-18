import { Send } from "@mui/icons-material";
import styled from "styled-components";
import { max_540 } from "../responsive";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #f7f7f7;
    width: 70%;
    margin: 0 auto;
    padding: 5rem 2rem;
    box-sizing: border-box;
`

const Title = styled.h1`
    font-size: 25px;
    letter-spacing: 1px;
    padding-bottom: 10px;
    ${max_540({fontSize: '20px'})}
`

const Subtitle = styled.p`
    font-size: 15px;
    padding-bottom: 20px;
    ${max_540({fontSize: '12px'})}
`

const Wrapper = styled.div`
    min-width: 45%;
    height: 35px;
    display: flex;
    box-sizing: border-box;
    overflow: hidden;
    ${max_540({height: '30px'})}
`

const EmailInput = styled.input`
    flex: 1;
    height: 100%;
    font-size: 13px;
    border: 0.5px solid lightgray;
    padding-left: 10px;
    outline: none;
    box-sizing: border-box;
    ${max_540({fontSize: '10px'})}
`

const Submit = styled.button`
    display: inline-block;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
    padding: 10px 20px;
    transition: background-color 300ms;
    &:hover {
        background-color: #077474;
    }

`
const Newsletter = () => {
    return ( 
        <Container>
            <Title>Newsletter</Title>
            <Subtitle>Get timely updates from your favorite products.</Subtitle>
            <Wrapper>
                <EmailInput placeholder="Your Email." type="email"></EmailInput>
                <Submit><Send fontSize="small"/></Submit>
            </Wrapper>
        </Container>
     );
}
 
export default Newsletter;