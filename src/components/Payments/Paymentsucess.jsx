import { Box, Button, Container, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import {RiCheckboxCircleFill} from 'react-icons/ri'
import React from 'react'
import { Link } from 'react-router-dom'

const Paymentsucess = () => {
  return (
    <Container size={'container.lg'}  >
      <HStack w={'full'} justifyContent={'center'} my={'8'}>
      <Heading> You Have Pro Pack</Heading>
      </HStack>
    <VStack boxShadow={'lg'}  w={'80%'} borderRadius={'lg'} alignItems={'center'} mx={'auto'} justifyContent={'center'}>
        <Box  w={'full'} px={'2'} py={'4'} borderTopRadius={'lg'} bg={'green.400'} textColor={'white'}>
            <Text fontWeight={'semibold'} letterSpacing={'widest'} >Payment Success</Text>
        </Box>
        <Box>
            <VStack w={'full'} justifyContent={'center'}  py={'8'} spacing={'16'} px={'2'}>
           <Text w={'70%'}  textAlign={'center'} fontWeight={'medium'} > Congratulation you're a pro member. You have access to premium content</Text>
           <RiCheckboxCircleFill size={'64'} color='black'/>
            </VStack>
        </Box>
        <Link to={'/profile'}>
        <Button variant={'ghost'}>Go to Profile</Button>
        </Link>
        <Text mb={'4'} fontWeight={'bold'}>Refernce: sdkmksdkjjsdjmoe</Text>
    </VStack>
        </Container>
  )
}

export default Paymentsucess
