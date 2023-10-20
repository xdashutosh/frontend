import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import {FaFacebook, FaInstagram, FaLinkedin, FaReddit, FaShare, FaTwitter, FaWhatsapp} from 'react-icons/fa'
import React from 'react'

const Footer = () => {
  return (
   <Box w={'full'} minH={'10vh'} bg={'blackAlpha.800'} p={'4'}>
<Stack w={'full'}  alignItems={'stretch'} justifyContent={'space-evenly'} spacing={['8','16']} direction={['column','row']}>
<VStack>
  <VStack>
    <HStack  spacing={'4'}>
      <Heading color={'white'}>𝕃𝕖𝕒𝕣𝕟𝕍𝕚𝕥𝕒</Heading>
  <Text fontSize={'l'} fontWeight={'bold'} letterSpacing={'wider'} color={'white'}>Social Links</Text>
    </HStack>
  <HStack  spacing={'4'}>
 <a href='https://facebook.com' >
   <FaFacebook color='green' size={'25'}/>
  </a>
  <FaInstagram color='green' size={'25'}/>
  <FaLinkedin color='green' size={'25'}/>
  <FaReddit color='green' size={'25'}/>
  <FaWhatsapp color='green' size={'25'}/>
  <FaTwitter color='green' size={'25'}/>
  </HStack>
  </VStack>
</VStack>
<VStack>
<HStack mb={'4'}>
<Input border={'none'} borderBottom={'2px solid'} borderRadius={'none'} focusBorderColor={'white'} placeholder='Email us' />
<Button borderRightRadius={'full'} colorScheme='green' ><FaShare size={'full'} /></Button>
</HStack>
<Text mb={'4'}>@rights reserved <b> ASHUTOSH CHAUDHARY </b></Text>
</VStack>
</Stack>
   </Box>
  )
}

export default Footer
