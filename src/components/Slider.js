import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import Slide from './Slide';
import { sliderItems } from '../data';
import { max_650 } from "../responsive";

const Container = styled.div`
    height: 87.6vh;
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div`
    background-color: #fff7f7;
    width: 5vw;
    height: 5vw;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:0;
    bottom:0;
    margin: auto;
    left: ${({direction}) => direction === "left" && "10px"};
    right: ${({direction}) => direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    ${max_650({width: '35px', height: '35px'})}
`
const Wrapper = styled.div`
    height: 100%;
    background-color: red;
    display: flex;
    transition: all 1s;
    transform: translateX(${({moveX}) => moveX}vw);
    
`


const Slider = () => {
    const [move, setMove] = useState(0);

    const handleClick = direction => {
        if (direction === "right"){
            if (move === -200){
                setMove(0)
            } else {
                setMove(move-100)
            }
        } else {
            if ( move === 0){
                setMove(-200)
            } else{
                setMove(move + 100)
            }
        }
    }

    return ( 
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper moveX={move}>
                {sliderItems.map( item => (
                    <Slide bg={item.bg} pic={item.img}
                    title_text={item.title}
                    desc_text={item.desc} key={item.id}
                    /> )
                ) }
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
     );
}
 
export default Slider;