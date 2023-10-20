import { Avatar, Box, Button, Container, FormLabel, HStack, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import {FaEye,FaEyeSlash} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Register = () => {
    const [name,setname] = useState('');
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [hidepass,sethidepass] = useState('password');
    const [profileimg,setprofileimg] = useState('');
   const [uploadimage,setuploadimage] = useState('');
const profileimghandler = (e)=>{
const file = e.target.files[0]; 
const reader = new FileReader();
reader.readAsDataURL(file);
reader.onload = () =>{
    setprofileimg(reader.result)
    setuploadimage(file);
}
}

  return (
   <Container h={"95vh"}>
    <VStack h={'full'} justifyContent={'center'} alignItems={'center'}  spacing={'16'}>
    <Heading children={"Register to LearnVita!"} textTransform={'uppercase'} mt={'-28'} textAlign={'center'}/>

    <form style={{width:"100%"}}>

<Box my={'4'} w={'full'} display={'flex'} justifyContent={'center'} >
<Avatar size={'2xl'} src={profileimg}/>
</Box>

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
<FormLabel htmlFor='password' children={"Password"}/>
<HStack spacing={'1'}>
<Input 
autoComplete={false}
required
id='password'
value={password}
onChange={(e)=>setpassword(e.target.value)}
placeholder='ex Abc@123'
type={hidepass}
focusBorderColor='green.300'
/>
{
    hidepass==="password"?<FaEye onClick={()=>{return(sethidepass('text') )}}/>:<FaEyeSlash onClick={()=>{sethidepass('password')}}/>
}
</HStack>
</Box>

<Box>
<FormLabel htmlFor='chooseAvatar' className="custom-choose-file-button" children={"choose Profile"}/>
   <Input
   className='avatarchoose'
   required
   accept='image/*'
   id='chooseAvatar'
   type='file'
   onChange={profileimghandler}
   />
</Box>

<Button colorScheme='green' my={'4'}  type='submit'>Register Now</Button>
<HStack mt={'4'}>
    <Text>already have an Account?</Text>
    <Link to={'/login'}><Button fontSize={'sm'} variant={'link'} colorScheme='blue'> <b className='signup'>Login</b>here</Button></Link>
    
</HStack>
    </form>
</VStack>
   </Container>
  )
}

export default Register
