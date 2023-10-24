import { Avatar, Button, Container, FormLabel, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { RiDeleteBin7Fill} from 'react-icons/ri'




const Profile = () => {


  const User = {
    name:"ashutosh chaudhary",
    email:"ashuchaudhary6969@gmail.com",
    createdAt:String(new Date().toISOString()),
    role:"user",
    subscription:{
      status:undefined,
    },
    playlist:[
      {
        course:"Web development",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGMJfTdEWCKPEOmiGHaUQOCB7gzBlKmsly5w&usqp=CAU"
      }
    
    ]
  };


  const [profileimg,setprofileimg] = useState('');
  const [uploadimage,setuploadimage] = useState('');
  
  const profileimghandler = (e)=>{
    const file = e.target.files[0]; 
    e.preventDefault();
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>{
      setprofileimg(reader.result)
      setuploadimage(file);
      // console.log(reader.result);
    }
    };

const RemovefromPlaylist = (id)=>{
console.log(id);
}


  return (
   <Container minH={'95vh'} maxW={'container.lg'} py={'8'}>
<Heading children='Profile' m={'8'} textTransform={'uppercase'} borderBottomWidth={'3px'} w={'-webkit-fit-content'}/>
<Stack direction={['column','row']} justifyContent={'flex-start'}  alignItems={'center'}  spacing={'16'}>
  <VStack spacing={'4'} justifyContent={'center'} alignItems={'center'}>
    <Avatar size={'2xl'} src={profileimg}/>
    <form action="">
<FormLabel htmlFor='chooseAvatar' className="custom-choose-file-button" children={"choose Profile"}/>
   <Input
   className='avatarchoose'
   required
   accept='image/*'
   id='chooseAvatar'
   type='file'
   onChange={profileimghandler}
   />
   <Button colorScheme='green' my={'4'}  type='submit'>Upload</Button>
   </form>
  </VStack>
  <VStack  pb={'8'} spacing={'4'} alignItems={['center','flex-start']}  >
    <HStack w={'full'}  >
    <Text fontWeight={'bold'}>Name</Text>
    <Text>{User.name}</Text>
    </HStack>
    <HStack w={'full'}>
    <Text fontWeight={'bold'}>Email</Text>
    <Text>{User.email}</Text>
    </HStack>
    <HStack w={'full'}>
    <Text fontWeight={'bold'}>Created At</Text>
    <Text>{User.createdAt.split('T')[0]}</Text>
    </HStack>
    {
    User.role !== 'admin' &&
      <HStack w={'full'}>
    <Text fontWeight={'bold'}>Subscription</Text>
    { User.subscription.status==='active'?(<Button colorScheme='green'>Cancel Subscription</Button>):(<Link to={'/subscribe'}><Button colorScheme='green'>Subscribe</Button></Link>)  }
    </HStack>
}

<Stack direction={['column','row']} mt={'4 '} w={'full'} >
    <Link to={'/updateprofile'}><Button w={'full'}>Update Profile</Button></Link>
    <Link to={'/changepassword'}><Button w={'full'}>Change Password</Button></Link>
  </Stack>
  </VStack>
</Stack>
<Heading fontSize={'xl'} children='Playlist' m={'8'} textTransform={'uppercase'} borderBottomWidth={'2px'} w={'-webkit-fit-content'}/>


{User.playlist.length > 0 ?(<Stack direction={['column','row']} spacing={'4'}  alignItems={'center'}  flexWrap={'wrap'} justifyContent={['center','flex-start']}>

{
  User.playlist.map((eachcourse,index)=>(
    <VStack w={'48'} m={'2'} key={eachcourse.course} boxShadow={'md'} >
    <Image boxSize={'full'} objectFit={'contain'} src={eachcourse.poster}/>
    <HStack m={'2'}>
      <Link to={`/course/${eachcourse.course}`}>
        <Button variant={'ghost'} colorScheme='green'>Watch now</Button>
      </Link>
        <Button  colorScheme='green' onClick={()=>RemovefromPlaylist(eachcourse.course)}><RiDeleteBin7Fill/></Button>
    </HStack>
    </VStack>
  ))
}

</Stack>):(<></>)
}

   </Container>
  )
}

export default Profile
