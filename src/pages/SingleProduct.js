import { Add, Remove } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { allPros } from '../data';
import { addItem } from "../redux/manage";
import { max_580, max_750 } from "../responsive";

const Container = styled.div`
`

const Wrapper = styled.div`
    width: 70%;
    margin: 4rem auto;
    display: flex;
    ${max_750({flexDirection: 'column'})}
`

const ImgContainer = styled.div`
    width: 50%;
    ${max_750({width: '100%'})}
`

const Image = styled.img`
    width: 100%;
    height: 74vh;
    object-fit: contain;
    ${max_750({height: '40vh'})}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 2rem;
`

const Title = styled.h1`
    margin-bottom: 20px;
    font-weight: 400;
    ${max_750({fontSize: '25px'})}
    ${max_580({fontSize: '20px'})}
`

const Desc = styled.p`
    line-height: 1.3;
    margin-bottom: 20px;
    font-weight: 300;
    ${max_580({fontSize: '15px'})}
`

const Price = styled.p`
    font-size: 40px;
    font-weight: 100;
    color: #6b6b6b;
    ${max_750({fontSize: '35px'})}
    ${max_580({fontSize: '30px'})}
`

// const FilterContainer = styled.div`
//     margin-top: 20px;
//     display: flex;
//     justify-content: space-between;
//     ${max_475({flexDirection: 'column', gap: '20px'})}
// `

// const Filter = styled.div`
//     display: flex;
// `

// const FilterTitle = styled.span`
//     margin-right: 15px;
// `

// export const FilterColor = styled.div`
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     margin: 0 5px;
//     background-color: ${({color}) => color};
// `

// const FilterSize = styled.select`
//     cursor: pointer;
// `

// const FilterSizeOption = styled.option`
// `

const AmountContainer = styled.div`
    margin-top: 20px;
`

const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
`

export const QuantityButton = styled.button`
    background: transparent;
    width: 2rem;
    height: 2rem;
    box-sizing: border-box;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    &:hover {
        border: 0.5px solid gray;
    }
`

export const Quantity = styled.span`
    border: 0.3px solid lightgray;
    border-radius: 5px;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
`

const Buy = styled.button`
    background-color: transparent;
    border: 3px solid teal;
    padding: 8px 10px;
    margin-top: 2rem;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    &:hover {
        background-color: teal;
        color: white;
    }
`

const SingleProduct = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const {id} = useParams()

    const [qty, setQty] = useState(1);

    const handleClick = type => {
        type === 'increase' ? setQty(qty + 1) : qty > 1 && setQty(qty - 1)
    }

    const product = allPros[id-1]
    const dispatch = useDispatch()
    const handleCart = () => {
        product['quantity'] = qty
        dispatch(addItem(product))
    }
 
    return ( 
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>RS {product.price}/-</Price>
                    {/* <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>Small</FilterSizeOption>
                                <FilterSizeOption>Medium</FilterSizeOption>
                                <FilterSizeOption>Large</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer> */}
                    <AmountContainer>
                        <QuantityContainer>
                            <QuantityButton onClick={() => handleClick('decrease')}><Remove /></QuantityButton>
                            <Quantity>{qty}</Quantity>
                            <QuantityButton  onClick={() => handleClick('increase')}><Add /></QuantityButton>
                        </QuantityContainer>
                        <Buy onClick={() => handleCart()}>ADD TO CART</Buy>
                    </AmountContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
     );
}
 
export default SingleProduct;