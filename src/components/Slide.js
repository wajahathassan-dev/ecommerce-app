import styled from "styled-components"
import { max_475, max_560, max_635 } from "../responsive"

const Container = styled.div`
height: 100%;
min-width: 100vw;
display: flex;
align-items: center;
box-sizing: border-box;
padding: 0 10vw;
background-color: ${({bg}) => bg};
${max_560({ display: 'block'})}
`

const ImageContainer = styled.div`
width: 50%;
box-sizing: border-box;
${max_560({ height: 'auto', margin: '2vh auto'})}

`

const Image = styled.img`
width: 100%;
object-fit: contain;
background-position: center;
${max_560({height: '35vh'})}
`

const InfoContainer = styled.div`
width: 50%;
padding: 50px;
margin-right: 30px;
${max_560({ margin: '0 auto', width: '80%', textAlign: 'center', padding: 0})}
`

const Title = styled.h1`
font-size: 4.5vw;
color: #2a2a2a;
${max_635({ fontSize: '32px'})}
${max_475({ fontSize: '5vw'})}
`

const Desc = styled.p`
margin: 50px 0;
font-size: 1.6vw;
font-weight: 500;
letter-spacing: 2px;
line-height: 1.4;
${max_560({ margin: '20px 0'})}
${max_635({ fontSize: '13px'})}  
${max_475({ fontSize: '3.5vw'})}
`

const Button = styled.button`
padding: 10px;
font-size: 12px;
cursor: pointer;
background-color: transparent;
border: 1px solid black;
`

const Slide = ({bg, pic, title_text, desc_text}) => {
    return ( 
        <Container bg={bg}>
            <ImageContainer>
                <Image src={pic}/>
            </ImageContainer>
            <InfoContainer>
                <Title>{title_text}</Title>
                <Desc>{desc_text}</Desc>
                <Button onClick={() => window.scroll(0, window.innerHeight+20)}>SHOP NOW</Button>
            </InfoContainer>
        </Container>
     );
}
 
export default Slide;