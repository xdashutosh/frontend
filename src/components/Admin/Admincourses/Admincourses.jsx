import { Box, Button, Grid, HStack, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'

import Sidebar from '../../Admin/Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from '../CourseModal';

const Admincourses = () => {

const {isOpen,onClose,onOpen} = useDisclosure();

const courses =[
  {
_id:"asasass823nknsd",
poster:"https://www.webhopers.com/wp-content/uploads/2021/05/MERN-Stack-Development-Company.png",
title:"Reactjs carsh course",
Category:"Web development",
createdBy:"ashutosh chaudhary",
views:122,
numOfVideos:23
}

];

const lectures = [];

const deletelecturebtnhandler = (courseId,lectureId)=>{

}

const deletehandler = (userId)=>{
console.log("delete" +userId);
};

const addLecturehandler=(e,courseId,title,description,video)=>{
e.preventDefault();
}

const CourseDetailhandler = (userId)=>{
onOpen();
};

  return (
    <Grid 
    minH={'100vh'} templateColumns={['1fr','5fr 1fr']}
    >
<Box p={['0','8']} overflowX={'auto'}>
<Heading
          children="All Courses"
          textAlign={['center', 'start']}
          ml={['0', '8']}
          borderBottomWidth={['0', '2px']}
          w={['full', '-webkit-max-content']}
          />

<TableContainer w={['100vw','full']}>
<Table variant={'simple'} size={'lg'}>
<TableCaption>All available courses in the database</TableCaption>
<Thead>
  <Tr>
    <Th>Id</Th>
    <Th>Poster</Th>
    <Th>Title</Th>
    <Th>Category</Th>
    <Th>Creator</Th>
    <Th isNumeric>Views</Th>
    <Th isNumeric>Lectures</Th>
    <Th isNumeric>Action</Th>
  </Tr>
</Thead>

<Tbody>
  {courses.map((item,index)=>(
<Row item={item} key={index} CourseDetailhandler={CourseDetailhandler} deletehandler={deletehandler}/>
  ))}
</Tbody>
</Table>
</TableContainer>

<CourseModal isOpen={isOpen} onClose={onClose} deletebtnhandler={deletelecturebtnhandler} addLecturehandler ={addLecturehandler} id={'asasass823nknsd'} coursetitle={"Reactjs carsh course"} lectures={lectures}/>

 <style>
        {`

    ::-webkit-scrollbar {
      width: 8px;
      height: 3px;
    }

    ::-webkit-scrollbar-thumb {
      background: green; // Color of the scrollbar thumb
      border-radius: 4px; // Adjust the thumb's border radius
    }
  `}
      </style>

</Box>
<Sidebar/>
    </Grid>
  )
}


export default Admincourses;
function Row({item,CourseDetailhandler,deletehandler}){
  return (
    <Tr>
<Td>#{item._id}</Td>
<Td>
  <Image boxSize={'12'} src={item.poster} objectFit={'contain'}/>
</Td>
<Td>{item.title}</Td>
<Td textTransform={'uppercase'}>{item.Category}</Td>
<Td>{item.createdBy}</Td>
<Td isNumeric>{item.views}</Td>
<Td isNumeric>{item.numOfVideos}</Td>
<Td isNumeric>
<HStack justifyContent={'flex-end'}>
<Button variant={'outline'} colorScheme='green' onClick={()=>CourseDetailhandler(item._id)} >View Lectures</Button>
<Button colorScheme='green' onClick={()=>deletehandler(item._id)}><RiDeleteBin7Fill/></Button>
</HStack>
</Td>

    </Tr>
  )
}
