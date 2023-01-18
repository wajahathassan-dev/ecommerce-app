import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { max_599, max_900 } from "../responsive";

const Container = styled.div`
    flex: 1;
    height: 70vh;
    min-width: 200px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    margin: 5px;
`
const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    background-color: teal;
    opacity: 0.5;
    position: absolute;
    
`
const Centered = styled.div`
    position: absolute;
    width: 100%;
    height: 14rem;
    text-align: center;
    top: 38%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 5;
`

const Title = styled.h1`
    color: white;
    font-size: 2vw;
    ${max_900({fontSize: '3.7vw'})}
    ${max_599({fontSize: '6vw'})}
`
const Button = styled.button`
    margin-top: 20px;
    border: none;
    width: 10vw;
    height: 3vw;
    cursor: pointer;
    z-index: 3;
    font-size: 1vw;
    transition: background 300ms;
    &:hover {
        background-color: #bbb3b3;
    }
    ${max_900({fontSize: '1.5vw', height: '3.5vw', width: '13vw'})}
    ${max_599({fontSize: '3vw', height: '6vw', width: '25vw'})}
`

const ImageContainer = styled.div`
    height: 60vh;
    height: 100%;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`



const CategoryItem = ({item}) => {
    return ( 
        <Container>
            <Wrapper />
                <Centered>
                <Title>{item.title}</Title>
                <NavLink to={'/category/'+item.id} onClick={() => window.scroll(0, 0)}><Button>Shop Now</Button></NavLink>
                </Centered>
                
                <ImageContainer>
                    <Image src={item.img} /> 
                </ImageContainer>
            
        </Container>
     );
}
 
export default CategoryItem;