import styled from "styled-components";
import {categories} from '../data';
import CategoryItem from "./CategoryItem";

const Container = styled.div`
    margin-top: 5rem;
`
const Wrapper = styled.div`
    display: flex;
    width: 70%;
    margin: 0 auto;
    flex-wrap: wrap;
`

const Title = styled.h1`
    text-align: center;
    margin-bottom: 3.5rem;
`
const Categories = () => {
    return (
        <Container>
            <Title>Categories</Title>
            <Wrapper>
                {categories.map( item => (
                    <CategoryItem item={item} key={item.id}/>
                ))}
            </Wrapper>
        </Container>
     );
}
 
export default Categories;