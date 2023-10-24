import { Box, Button, Container, FormLabel, HStack, Heading, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import {FaEye,FaEyeSlash} from 'react-icons/fa'


const Changepassword = () => {


    const [oldpassword,setoldpassword] = useState('');
    const [newpassword,setnewpassword] = useState('');
    const [hidepass,sethidepass] = useState('password');
  return (
    <Container py={'8'} minH={'90vh'}>
<Heading children='Change Password'  textTransform={'uppercase'} borderBottomWidth={'3px'} fontSize={['xl','2xl']} w={'-webkit-fit-content'}/>
 <form action="">
 <Box mt={'8'} mx={'4'}>
<FormLabel htmlFor='oldpassword' children={"Old Password"}/>
<HStack spacing={'1'}>
<Input 
required
id='password'
value={oldpassword}
onChange={(e)=>setoldpassword(e.target.value)}
placeholder='ex Abc@123'
type={hidepass}
focusBorderColor='green.300'
/>

</HStack>
</Box>
<Box  mx={'4'} mt={'4'}>
<FormLabel htmlFor='newpassword' children={"New Password"}/>

<Input 
required
id='password'
value={newpassword}
onChange={(e)=>setnewpassword(e.target.value)}
placeholder='ex Abc@123'
type={hidepass}
focusBorderColor='green.300'
/>
<HStack w={'full'} mt={'4'} justifyContent={'flex-end'} >
{
    hidepass==="password"?<FaEyeSlash size={'25px'} onClick={()=>{return(sethidepass('text') )}}/>:<FaEye size={'25px'} onClick={()=>{sethidepass('password')}}/>
}
    </HStack>

</Box>
<Button mt={'4'} type='submit' w={'full'} colorScheme='green'>Change</Button>
 </form>


    </Container>
  )
}

export default Changepassword
