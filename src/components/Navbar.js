import { Search } from "@mui/icons-material";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { max_650, max_545 } from '../responsive';

const Container = styled.div`
    height: 60px;
    ${max_545({height: 'auto', marginTop: '20px '})}
`

const Wrapper = styled.div`
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${max_545({flexDirection: 'column-reverse'})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    max-width: 650px;
    ${max_545({marginTop: '10px'})}
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${max_650({display: 'none'})}
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${max_650({margin: 0})}
    max-width: 200px;
    overflow: hidden;
`

const Input = styled.input`
    border: none;
    outline: none;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    color: #202222;
    ${max_545({marginTop: '10px', fontSize: '25px'})}
`
const Right = styled.div`
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    ${max_545({marginTop: '20px'})}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin: 0 10px;
    color: #2a2a2a;
    &:hover {
        color: #1a5e5e;
    }
`

const Navbar = () => {
    const {items} = useSelector(state => state.manage)
    return ( 
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: 'gray', fontSize: 16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <NavLink to="/"><Logo>WAJAX.</Logo></NavLink>
                </Center>
                <Right>
                    <NavLink to="/"><MenuItem>HOME</MenuItem></NavLink>
                    <NavLink to="/cart">
                        <MenuItem>
                            <Badge badgeContent={items.length} color="primary">
                                <ShoppingCartOutlinedIcon  color="action"/>
                            </Badge>
                        </MenuItem>
                    </NavLink>
                </Right>
            </Wrapper>
        </Container>
     );
}
 
export default Navbar;