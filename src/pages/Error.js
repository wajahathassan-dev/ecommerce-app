import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8c5c5;
`

const Wrapper = styled.div`
    width: 45%;
    text-align: center;
    background-color: #c0bfbf;
    padding: 10vh 0;
    border-radius: 10px;
    height: 30vh;
    box-sizing: border-box;
`

const Text = styled.h2`
    font-weight: 400;
`

const GoHome = styled.button`
    display: inline-block;
    padding: 8px 15px;
    background-color: teal;
    color: white;
    border: none;
    margin-top: 25px;
    cursor: pointer;
    transition: all 100ms;
    &:hover {
        background: transparent;
        border: 1.5px solid teal;
        color: black;
        font-weight: 500;
    }
`

const Error = () => {
    return ( 
        <Container>
            <Wrapper>
                <Text>Sorry, No Such Page.</Text>
                <NavLink to='/'><GoHome>GO TO HOME</GoHome></NavLink>
            </Wrapper>
        </Container>
     );
}
 
export default Error;