import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  HStack,
  Heading,
  Image,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {BiAddToQueue, BiUserCircle} from 'react-icons/bi'
import {FaEye} from 'react-icons/fa'

const Courses = () => {
  const [keyword, setkeyword] = useState('');
  const [coursecat, setcoursecat] = useState('');

  const addtoplaylisthandler = ()=>{
    console.log('addded to playlist');
  }  


  const Course = ({
    views,
    title,
    imageSrc,
    id,
    addtoplaylisthandler,
    creator,
    description,
    lecture,
  }) => {
    return (
  <VStack className='course' alignItems={['center','flex-start']}>
   <Image 
   src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6QqOKuNoRQLq-jGYg63HqsGoeDDI7n7H2JA&usqp=CAU'} boxSize={'60'} objectFit={'contain'}/>
   <Heading children={title} size={'sm'} noOfLines={3} maxW={'200px'} fontFamily={'sans-serif'}/>
   <Text children={description} noOfLines={2} maxW={'240px'} textAlign={['center','left']}/>
   <HStack spacing={'2'}>
    <Text fontWeight={'bold'} textTransform={'uppercase'} noOfLines={2}>
      <HStack>
      <BiUserCircle size={'24'}/>
      <Text fontSize={'sm'}>
        {creator}
        </Text>
      </HStack>
      </Text>
      <Text h={'4'} border={'1px solid'}/>
    <Text noOfLines={2} fontSize={'xs'}>
    <HStack spacing={'1'}>
      <FaEye size={'16'}/>
      <Text>
        {views}
        </Text>
      </HStack>
    </Text>
   </HStack>
<Text><b>Lectures: </b>{lecture}</Text>
<HStack spacing={'4'}>
<Link to={`/course/${id}`}>
  <Button colorScheme='green'>Watch Now</Button>
</Link>
  <Button variant={'ghost'} onClick={()=>addtoplaylisthandler(id)}><HStack justifyContent={'center'} alignItems={'center'} ><BiAddToQueue size={'16'}/><Text>ADD</Text></HStack></Button>
</HStack>
  </VStack>
    );
  };

  const CourseCategories = [
    'Web development',
    'Artificial intelligence',
    'Security',
    'backend tutorial',
    'frontend tutorial',
    'SEO',
    'Datastructure and algorithms',
  ];
  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />
      <style>
        {`
    @media (max-width: 768px) {
      /* Hide the scrollbar on small devices */
      ::-webkit-scrollbar {
        display: none;
      }
    }

    ::-webkit-scrollbar {
      width: 8px;
      height: 6px;
    }

    ::-webkit-scrollbar-thumb {
      background: green; // Color of the scrollbar thumb
      border-radius: 4px; // Adjust the thumb's border radius
    }
  `}
      </style>

      <Input
        type="text"
        focusBorderColor="green.400"
        value={keyword}
        onChange={e => {
          setkeyword(e.target.value);
        }}
        placeholder="Search a course ..."
      />
      <HStack
        w={'full'}
        m={'2'}
        overflowX={'auto'}
        py={'4'}
        spacing={['2', '4']}
      >
        {CourseCategories.map((course, index) => (
          <Button
            minW={'-webkit-fit-content'}
            fontSize={['sm', 'lg']}
            key={index}
            onClick={() => setcoursecat(course)}
          >
            {course}
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course
        imageSrc={'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
        title ="Photoshop Crash course"
        views={1203}
        lecture={45}
        description={"In this code, we've defined a styled component called ScrollableContainer that includes the styles for the scrollbar. You can use this component in your React application to create a scrollable container with a customized scrollbar. Make sure to adjust the styles to match your design preferences"}
        creator={"Ashu chaudhary"}
        addtoplaylisthandler={addtoplaylisthandler}

        />
        
      </Stack>
    </Container>
  );
};

export default Courses;
