import { Box, Button, Container, FormLabel, HStack, Heading, Input, Text, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
  const [name,setname] = useState('');
  const [email,setemail] = useState('');
  const [message,setmessage] = useState('');
  return (
    <Container h={"95vh"} >
    <VStack h={'full'} justifyContent={'center'} alignItems={'center'}  spacing={'16'}>
    <Heading children={"Reach-Out to Us!"} textTransform={'uppercase'} mt={'-28'} textAlign={'center'}/>

    <form style={{width:"100%"}} method='post' action='/'>
        <Box my={'4'}>
<FormLabel htmlFor='name' children={"Username"}/>
<Input 
required
id='name'
value={name}
onChange={(e)=>setname(e.target.value)}
placeholder='abc'
type='text'
focusBorderColor='green.300'
/>
</Box>
<Box my={'4'}>
<FormLabel htmlFor='email' children={"Email Address"}/>
<Input 
autoComplete={false}
required
id='email'
value={email}
onChange={(e)=>setemail(e.target.value)}
placeholder='abc@gmail.com'
type='email'
focusBorderColor='green.300'
/>
</Box>
<Box my={'4'}>
<FormLabel htmlFor='message' children={"Text us your Query"}/>
<Textarea 
autoComplete={false}
required
id='message'
value={message}
onChange={(e)=>setmessage(e.target.value)}
type='email'
placeholder='????'
focusBorderColor='green.300'
/>
</Box>
<Button colorScheme='green' my={'4'}  type='submit'>Send Mail</Button>
<HStack mt={'4'}>
    <Text>Request for a course?</Text>
    <Link to={'/reqcourse'}><Button fontSize={'sm'} variant={'link'} colorScheme='blue'> <b className='signup'>Click</b>here</Button></Link>
    
</HStack>
    </form>
</VStack>
   </Container>
  )
}

export default Contact
