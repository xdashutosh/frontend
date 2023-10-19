import { Button, Container, HStack, Heading, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const Courses = () => {
    const [keyword,setkeyword] = useState("");
    const [coursecat,setcoursecat] = useState("");
     
    const CourseCategories = [
        "Web development",
        "Artificial intelligence",
        "Security",
        "backend tutorial",
        "frontend tutorial",
        "SEO",
        "Datastructure and algorithms",
    ]
  return (
    <Container minH={"95vh"} maxW={"container.lg"} 
    paddingY={'8'}>
<Heading children="All Courses" m={'8'}/>
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

<Input type='text' focusBorderColor='green.400' value={keyword} onChange={(e)=>{setkeyword(e.target.value)}} placeholder='Search a course ...'/>
<HStack w={'full'} m={'2'} overflowX={'auto'} py={'4'} spacing={'4'}>
{
    CourseCategories.map((course,index)=>(
        <Button   minW={'-webkit-fit-content'} fontSize={['sm','lg']} key={index} onClick={()=>setcoursecat(course)}>{course}</Button>
    ))

}

  
</HStack>
    </Container>
  )
}

export default Courses
