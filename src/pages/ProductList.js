import { useParams } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container = styled.div``

const Wrapper = styled.div`
    width: 70%;
    margin: 0 auto;
`
const Title = styled.h1`
    padding-top: 2rem;
    color: #2a2a2a;
    font-weight: 300;
`

// const FilterContainer = styled.div`
//     display: flex;
//     justify-content: space-between;
// `

// const Filter = styled.div``

// const FilterText = styled.span`
//     font-size: 20px;
//     font-weight: 600;
// `

// const Select = styled.select`
//     margin-left: 15px;
//     width: ${({size}) => size === 'wide' ? '6rem' : '5rem'};
//     cursor: pointer;
//     outline: none;
// `

// const Option = styled.option`
// `

const ProductList = () => {
    const {id} = useParams();
    const title = {
        1: 'Shirt Style',
        2: 'Lounge Wear',
        3: 'Light Jacket'
    }

    return ( 
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>{title[id]}</Title>
                {/* <FilterContainer>
                    <Filter>
                        <FilterText>Filter Products</FilterText>
                        <Select>
                            <Option selected>Season</Option>
                            <Option>Summer</Option>
                            <Option>Winter</Option>
                            <Option>Autumn</Option>
                        </Select>
                        <Select>
                            <Option selected>Size</Option>
                            <Option>Small</Option>
                            <Option>Medium</Option>
                            <Option>Large</Option>
                        </Select>
                        </Filter>
                    <Filter>
                        <FilterText>Sort Products</FilterText>
                        <Select size="wide">
                            <Option selected>Price</Option>
                            <Option>Low To High</Option>
                            <Option>High To Low</Option>
                        </Select>
                    </Filter>
                </FilterContainer> */}
            </Wrapper>
            
            <Products />
            <Newsletter />
            <Footer />
        </Container>
     );
}
 
export default ProductList;