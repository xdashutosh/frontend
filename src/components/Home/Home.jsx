import { Box, Button, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import mainlogo from '../../assets/images/homelogo.png'

import {FaYoutube,FaGoogle,FaTwitter,FaWhatsapp,FaLinkedin, FaArrowAltCircleRight, FaArrowAltCircleDown} from 'react-icons/fa';
import './Home.css';
const Home = () => {
  return (
   <section className='home'>
<div className='container'>
<Stack h={'100%'} direction={['column','row']} justifyContent={'center'} alignItems={'center'} spacing={['2','8']}>
<VStack w={'full'} spacing={'4'} alignItems={['center','flex-end']}>
<Heading  children="LEARN FROM EXPERTS" size={'2xl'}/>
<Text  children="Find Valuebale Content At Reasonable Price"/>
<Button size={'lg'} colorScheme='green' >Explore Now</Button>
</VStack>
<Image boxSize={'md'} src={mainlogo} className='mainlogo' objectFit={'contain'} style={{
  animation: "updown 4s infinite , glow 1s infinite alternate",

}}/>
<style>
  {
  `
  @keyframes updown {
    0%,100% {
       transform: translateY(20px)
      
    }
    50%{
       transform: translateY(-40px)
      
      
    }
  }
  @keyframes moveRightToLeft {
    0% {
      transform: translateX(30%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  


  `
  }
</style>
</Stack>
</div>
<Box w={'full'} mt={['-16','-8']}>
<Heading children="Our Brands" borderBottom={'2px solid'} w={'-webkit-fit-content'} ml={['8','16']} fontFamily={'body'}  color={'green.400'}/>
<HStack w={'full'} my={['2','8']} py={['8','16']} className='brands' bg={'blackAlpha.300'} alignItems={'center'} justifyContent={'center'} spacing={['8','24']} fontSize={['2xl','3xl','5xl']} ><FaYoutube color=''/><FaGoogle /><FaLinkedin /><FaTwitter /><FaWhatsapp /></HStack>
</Box>

<Stack w={'full'} h={'70vh'}  justifyContent={'space-between'} direction={['column','row']}>
<VStack h={'full'} w={['100%','70%']} justifyContent={'center'} alignItems={'center'}>
<Heading fontSize={['3xl','4xl','5xl']} color={'green.400'}> Want to Know us?</Heading>
 <FaArrowAltCircleRight   className='rightarrow' size={'72'}  style={{
  animation: "moveRightToLeft 2s infinite alternate",

}}/>
<FaArrowAltCircleDown   className='downarrow' size={'72'}  style={{
  animation: "updown 2s infinite ",

}}/>
</VStack>
<VStack h={'full'} w={'full'}  justifyContent={'center'} alignItems={'center'} >
<video className='videohome' src={'https://www.w3schools.com/tags/movie.mp4'} controlsList='nodownload nofullscreen noremoteplayback' disablePictureInPicture disableRemotePlayback  autoPlay controls ></video>
</VStack>
</Stack>
   </section>
  )
}

export default Home
