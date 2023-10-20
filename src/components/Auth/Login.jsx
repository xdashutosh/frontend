import { Box, Button, Container, FormLabel, HStack, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import {FaEye,FaEyeSlash} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Login = () => {
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [hidepass,sethidepass] = useState('password');
   
  return (
   <Container h={"95vh"}>
    <VStack h={'full'} justifyContent={'center'} alignItems={'center'}  spacing={'16'}>
    <Heading children={"Welcome to LearnVita"} mt={'-28'} textAlign={'center'}/>

    <form style={{width:"100%"}}>
        <Box my={'4'}>
<FormLabel htmlFor='email' children={"Email Address"}/>
<Input 
required
id='email'
value={email}
onChange={(e)=>setemail(e.target.value)}
placeholder='abc@gmail.com'
type='email'
focusBorderColor='yellow'
/>
</Box>
<Box my={'4'}>
<FormLabel htmlFor='password' children={"Password"}/>
<HStack spacing={'1'}>
<Input 
required
id='password'
value={password}
onChange={(e)=>setpassword(e.target.value)}
placeholder='ex Abc@123'
type={hidepass}
focusBorderColor='yellow'
/>
{
    hidepass==="password"?<FaEye onClick={()=>{return(sethidepass('text') )}}/>:<FaEyeSlash onClick={()=>{sethidepass('password')}}/>
}
</HStack>
</Box>
<Box>
    <Link to={'/forgetpassword'}><Button fontSize={'sm'} variant={'link'} colorScheme='blue'>Forgot password?</Button></Link>
</Box>

<Button colorScheme='green' my={'4'}  type='submit'>Login</Button>
    </form>
</VStack>
   </Container>
  )
}

export default Login
