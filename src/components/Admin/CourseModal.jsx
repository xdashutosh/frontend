import { Box, Button, FormLabel, Grid, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiDeleteBackFill, RiDeleteBin7Fill } from 'react-icons/ri';

const CourseModal = ({isOpen,onClose,id,deletebtnhandler,lectures,addlecturehandler,coursetitle}) => {
 

  const videoHandler = (e)=>{
    const file = e.target.files[0]; 
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>{
        setvideo(reader.result)
      console.log(reader.result)
      }
    };


const [title,settitle] =useState('');
const [description,setdescription] =useState('');
const [video,setvideo] =useState('');
const [videoupload,setvideoupload] =useState('');

const handleclose = (e,title,description,video)=>{
setdescription("");
settitle('');
setvideo('');
}

  return (
  <Modal isOpen={isOpen}  size={'full'} onClose={handleclose} scrollBehavior='outside'>
<ModalOverlay/>
<ModalContent>
  <ModalHeader>{coursetitle}</ModalHeader>
  <ModalCloseButton onClick={()=>onClose()}/>
  <ModalBody p={'16'}>
<Grid templateColumns={["1fr","3fr 1fr"]} >

<Box px={["0","16"]}  mt={['16','0']} className='column1'>
<Box my={'5'}>
<Heading>{coursetitle}</Heading>
<Heading size={'sm'} opacity={'0.4'}>{`#${id}`}</Heading>
</Box>
<Heading size={'lg'} opacity={'0.4'}>Lectures</Heading>
<Videocard description={description} title={title} num={1} lectureId={"ask34jaskj"} courseId={id}
deletebtnhandler={deletebtnhandler}/>

</Box>

<Box className='column2' >
<form onSubmit={e=>addlecturehandler(e,id,title,description,video)}>
  <VStack spacing={'4'}>
  <Heading size={'md'} textTransform={'uppercase'}>Add Lecture</Heading>
<Input focusBorderColor='green' placeholder='lecture title' value={title} onChange={(e)=>settitle(e.target.value)}/>
<Input focusBorderColor='green' placeholder='lecture description' value={description} onChange={(e)=>setdescription(e.target.value)}/>
<Box>
<FormLabel htmlFor='chooseAvatar' className="custom-choose-file-button" children={"choose Profile"}/>
   <Input
   className='avatarchoose'
   required
   accept='video/mp4'
   id='chooseAvatar'
   type='file'
   onChange={videoHandler}
   />
{
  video && (
    <video controlsList='nodownload' controls src={video}></video>
  )
}

</Box>
<Button type='submit' w={'full'} colorScheme='green'>Upload lecture</Button>
  </VStack>

</form>
</Box>

</Grid>
  </ModalBody>
</ModalContent>
  </Modal>
  )
}

export default CourseModal
 
function Videocard({title,description,num,lectureId,courseId,deletebtnhandler})
{
  return(
    <Stack direction={['column','row']} my={'8'} p={'4'} borderRadius={'lg'} boxShadow={"lg"} justifyContent={['flex-start','space-between']}  maxW={'70vw'} overflowX={'auto'} >
    <Box><Heading size={'sm'}>{`#${num} ${title}`}</Heading>
    <Text>{description}</Text>
    </Box>
    <Button colorScheme='green' onClick={()=>deletebtnhandler(courseId,lectureId)}><RiDeleteBin7Fill size={'30px'}/></Button>
    </Stack>
  )
}