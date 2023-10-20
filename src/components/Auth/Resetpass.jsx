import { Box, Button, Container, FormLabel, HStack, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const Resetpass = () => {

    const [password,setpassword] = useState('');
    const [hidepass,sethidepass] = useState('password');
const params = useParams();

if(params.token==="ashuchaudhary") return (
   <Container  >

<form action="">
    <Heading children={'Forget Password'} textTransform={'uppercase'} my={'16'} textAlign={['center','left']}/>
    <VStack justifyContent={'start'} alignItems={'start'}>
  
    {/* <Box my={'4'}> */}
<FormLabel htmlFor='password' children={"Password"}/>
<HStack spacing={'1'} w={['70vw','50vw','30vw']}>
<Input 
required
id='password'
value={password}
onChange={(e)=>setpassword(e.target.value)}
placeholder='New password'
type={hidepass}
focusBorderColor='green.300'
/>
{
    hidepass==="password"?<FaEyeSlash onClick={()=>{return(sethidepass('text') )}}/>:<FaEye onClick={()=>{sethidepass('password')}}/>
}
</HStack>
{/* </Box> */}

<Button type='submit' colorScheme='green' mt={'2'} w={['-webkit-fit-content','10vw']}>Reset</Button>
    </VStack>
</form>
   </Container>
  )
}

export default Resetpass
