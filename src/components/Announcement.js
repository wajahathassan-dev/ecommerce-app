import styled from "styled-components";
import { max_545 } from "../responsive";

const Container = styled.div`
    text-align: center;
    padding: 8px;
    background-color: teal;
    color: white;
    font-weight: 500;
    font-size: 14px;
    ${max_545({position: 'absolute', top: 0, width: '100%'})}
`

const Announcement = () => {
    return ( 
        <Container>
            10% off on purchase above Rs 2000!
        </Container>
     );
}
 
export default Announcement;