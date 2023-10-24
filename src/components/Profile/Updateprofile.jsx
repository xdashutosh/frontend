import { Box, Button, Container, FormLabel, HStack, Heading, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import {FaEye,FaEyeSlash} from 'react-icons/fa'
const Updateprofile = () => {
    const [newusername,setnewusername] = useState('');
    const [newemail,setnewemail] = useState('');
 
  return (
    <Container py={'8'} minH={'90vh'}>
    <Heading children='Update Profile'  textTransform={'uppercase'} borderBottomWidth={'3px'} fontSize={['xl','2xl']} w={'-webkit-fit-content'}/>
     <form action="">
     <Box mt={'8'} mx={'4'}>
    <FormLabel htmlFor='newusername' children={"Name"}/>
    <HStack spacing={'1'}>
    <Input 
 
    id='oldpassword'
    value={newusername}
    onChange={(e)=>setnewusername(e.target.value)}
    placeholder='New username'
    type={'text'}
    focusBorderColor='green.300'
    />
    
    </HStack>
    </Box>
    <Box  mx={'4'} mt={'4'}>
    <FormLabel htmlFor='newemail' children={"New Email"}/>
    
    <Input 
  
    id='newemail'
    value={newemail}
    onChange={(e)=>setnewemail(e.target.value)}
    placeholder='ex Abc12@gmail.com'
    type={'email'}
    focusBorderColor='green.300'
    />
 
    
    </Box>
    <Button mt={'4'} type='submit' w={'full'} colorScheme='green'>Update</Button>
     </form>
    
    
        </Container>
  )
}

export default Updateprofile
