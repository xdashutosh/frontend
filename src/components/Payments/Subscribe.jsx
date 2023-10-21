import { Box, Button, Container,Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Subscribe = () => {
  return (
    <Container size={'container.lg'}  >
<VStack boxShadow={'lg'}  w={'80%'} borderRadius={'lg'} alignItems={'center'} mx={'auto'} justifyContent={'center'}>
    <Box  w={'full'} px={'2'} py={'4'} borderTopRadius={'lg'} bg={'green.400'} textColor={'white'}>
        <Text fontWeight={'semibold'} letterSpacing={'widest'} >Buy pro pack @299</Text>
    </Box>
    <Box>
        <VStack w={'full'} justifyContent={'center'}  py={'8'} spacing={'16'} px={'2'}>
       <Text w={'70%'}  textAlign={'center'} fontWeight={'bold'} fontFamily={'mono'}>Join pro pack and get access to all content</Text>
       <Text fontWeight={'bolder'}  fontSize={'2xl'}>₹299 Only</Text>
       <Button colorScheme='green' w={'full'} >Buy Now</Button>
        </VStack>
    </Box>
    <Box  w={'full'} px={'4'} py={'4'}  bg={'blackAlpha.800'} textColor={'white'} borderBottomRadius={'lg'}>
       <VStack w={'full'} alignItems={'start'} letterSpacing={'wider'} >
        <Text textTransform={'uppercase'} fontSize={['sm','lg']}>100% Refund at cancelalation</Text>
        <Text textTransform={'uppercase'} fontSize={['xs','sm']}>*Terms & Conditions Apply </Text>
       </VStack>
    </Box>
</VStack>
    </Container>
  )
}

export default Subscribe
