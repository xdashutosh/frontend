import { Box, Button, Container, FormLabel, Grid, HStack, Heading, Image, Input, Select, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

import Sidebar from '../../Admin/Sidebar'
import { BiUserCircle } from 'react-icons/bi';
const Createcourse = () => {

  const [title,settitle] = useState('');
  const [description,setdescription] = useState('');
  const [createdby,setcreatedby] = useState('');
  const [category,setcategory] = useState('');
  const [banner,setbanner] = useState('');
  const [uploadimage,setuploadimage] = useState('');
  const CourseCategories = [
    'Web development',
    'Artificial intelligence',
    'Security',
    'backend tutorial',
    'frontend tutorial',
    'SEO',
    'Datastructure and algorithms',
  ];


  const profileimghandler = (e)=>{
    const file = e.target.files[0]; 
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>{
        setbanner(reader.result)
        setuploadimage(file);
    }
    };


  return (
    <Grid 
    minH={'100vh'}  templateColumns={['1fr','5fr 1fr']}>
<Container py={'16'} >
  <form action="">

<Heading
          children="Create Course"
          textAlign={['center', 'start']}
          ml={['0', '8']}
          borderBottomWidth={['0', '2px']}
          w={['full', '-webkit-max-content']}
          />

<VStack m={'auto'} spacing={'8'} mt={'4'}>


    <Input 
    id='title'
    value={title}
    onChange={(e)=>settitle(e.target.value)}
    placeholder='Title'
    type={'text'}
    focusBorderColor='green.300'
    />
    
    <Input 
    id='Description'
    value={description}
    onChange={(e)=>setdescription(e.target.value)}
    placeholder='Course description...'
    type={'text'}
    focusBorderColor='green.300'
    />

    <Input 
    id='createdby'
    value={createdby}
    onChange={(e)=>setcreatedby(e.target.value)}
    placeholder='Creater Name'
    type={'text'}
    focusBorderColor='green.300'
    />
    <Select focusBorderColor='green' value={category}  onChange={(e)=>setcategory(e.target.value)} >
<option value={''}>Category</option>
{CourseCategories.map((eachcourse,index)=>(
  <option value={eachcourse} key={index}>{eachcourse}</option>
))}
    </Select>
  
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

{banner && (
  <Box boxShadow={'dark-lg'} p={'2'} >
    <Image 
   src={banner} boxSize={'60'} objectFit={'contain'}/>
   <Heading children={title} size={'sm'} noOfLines={3} maxW={'200px'} fontFamily={'sans-serif'}/>
   <Text children={description} noOfLines={2} maxW={'240px'} textAlign={['center','left']}/>
   <HStack spacing={'2'}>
    <Text fontWeight={'bold'} textTransform={'uppercase'} noOfLines={2}>
      <HStack>
      <BiUserCircle size={'24'}/>
      </HStack>
      </Text>
    <Text noOfLines={2} fontSize={'xs'}>
    <HStack spacing={'1'}>
      <Text fontSize={'xl'}>
        <b>
        {createdby}
        </b>
        </Text>
      </HStack>
    </Text>
   </HStack>
<Text fontSize={'md'}><b>Category: </b>{category}</Text>
  </Box>
)}
<Button w={'full'} colorScheme='green' type='submit' children="Create"/>
</VStack>

          </form>
</Container>
<Sidebar/>
    </Grid>
  )
}

export default Createcourse
