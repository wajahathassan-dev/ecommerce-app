import styled from "styled-components";
import { popularProducts } from "../data";
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

const Title = styled.h1`
    text-align: center;
    margin-bottom: 3.5rem;
`

const PopularProducts = () => {
    return (
        <Container>
            <Title>Popular Products</Title>
            <Wrapper>
                {popularProducts.map( item => (
                    <Product item={item} key={item.id}/>
                ))}
            </Wrapper>
        </Container>
     );
}
 
export default PopularProducts;