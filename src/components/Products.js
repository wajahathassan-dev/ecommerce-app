import { useParams } from "react-router-dom";
import styled from "styled-components";
import {lightJacket, loungeWear, shirtStyle} from '../data';
import Product from "./Product";

const Container = styled.div`
    width: 70%;
    margin: 5rem auto;
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
`

const Products = () => {
    const {id} = useParams();
    const cats = {
        1: shirtStyle,
        2: loungeWear,
        3: lightJacket         
    };
   
    const pros = cats[id]
    return (
        <Container>
            <Wrapper>
                {pros.map( item => (
                    <Product item={item} key={item.id}/>
                ))}
            </Wrapper>
        </Container>
     );
}
 
export default Products;