import { Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Forgotpass = () => {

  const [email,setemail] = useState('');
  return (
   <Container >

<form action="">
    <Heading children={'Forget Password'} textTransform={'uppercase'} my={'16'} textAlign={['center','left']}/>
    <VStack justifyContent={'start'} alignItems={'start'}>
    <FormLabel  htmlFor='email' children={"Email Address"}/>
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
<Button type='submit' colorScheme='green' mt={'2'}>Send Resend link</Button>
    </VStack>
</form>
   </Container>
  )
}

export default Forgotpass
