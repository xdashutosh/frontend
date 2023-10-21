import { Box, Button, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Coursedetail = () => {
    const description ="Lecture Description is here ..";
    const [url,seturl] = useState('');
    const [lecturenumber,setlecturenumber] = useState(0);
    const [title,settitle] = useState('');
    const [description,setdescription] = useState('');



    const Lectures =[
        {
            _id:"asasas",
            title:"sample",
            description:"sample description is gonna be here",
            video:{
                url:"https://www.w3schools.com/tags/movie.mp4"
            }
        },
        {
            _id:"asasas2",
            title:"sample2",
            description:"sample description is gonna be here",
            video:{
                url:"https://www.w3schools.com/tags/movie.mp4"
            }
        },
        {
            _id:"asasas3",
            title:"sample3",
            description:"sample description is gonna be here",
            video:{
                url:"https://www.w3schools.com/tags/movie.mp4"
            }
        },
        {
            _id:"asasas4",
            title:"sample4",
            description:"sample description is gonna be here",
            video:{
                url:"https://www.w3schools.com/tags/movie.mp4"
            }
        }
    ]
  return (
   <Grid minH={'90vh'} templateColumns={['1fr','3fr 1fr']}>

<Box>
<video
width={'100%'}
controls
controlsList='nodownload noremoteplayback'
disablePictureInPicture
disableRemotePlayback
src={Lectures[lecturenumber].video.url}
>
</video>
<Heading m={'4'}>{`#${lecturenumber+1} ${Lectures[lecturenumber]?.title}`}</Heading>

<Heading m={'4'}>Description</Heading>
<Text m={'4'} children={Lectures[lecturenumber].description}/>
</Box>
<VStack overflowY={'auto'} mx={'4'}>
    {Lectures.map((eachcourse,index)=>(
        <Button w={'full'} key={eachcourse._id} borderBottomWidth={'2px'} >
        <Text noOfLines={1}>
            #{index+1}{eachcourse.title}
        </Text>
        </Button>
    ))}
</VStack>
   </Grid>
  )
}

export default Coursedetail
