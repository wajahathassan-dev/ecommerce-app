import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(227, 227, 240, 0.5), rgba(171, 171, 182, 0.5)), 
    url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
    background-size: cover;
    background-position: bottom;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    width: 50%;
    background-color: #f7f2f2;
    padding: 3rem;

`

const Title = styled.h1`
    font-weight: 400;
    color: teal;
`

const Form = styled.form`
    margin: 1.5rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
`

const Input = styled.input`
    height: 35px;
    padding-left: 10px;
    width: 48%;
    box-sizing: border-box;
    margin-top: 10px;
    border: 0.5px solid gray;
    border-radius: 5px;
    cursor: pointer;
    &:focus-visible {
        outline: 1px solid teal;
    }
`

const FormWrapper = styled.div`
    margin-top: 1rem;
`
const User = styled.p`
    font-size: 14px;
`
    
const Link = styled.a`
    color: teal;
    text-decoration: none;
`

const Create = styled.button`
    background-color: transparent;
    border: 3px solid teal;
    padding: 8px 10px;
    margin-top: 1rem;
    cursor: pointer;
    transition: all 100ms ease-in-out;
    &:hover {
        background-color: teal;
        color: white;
    }
`

const Register = () => {
    return ( 
        <Container>
            <Wrapper>
                
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="Username" />
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm Password" />
                    <FormWrapper>
                        <User>Already a user? <Link href="">Sign In</Link></User>
                        <Create>REGISTER</Create>
                    </FormWrapper>
                </Form>
            </Wrapper>
        </Container>
     );
}
 
export default Register;