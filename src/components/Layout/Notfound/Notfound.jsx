import { Button, Container,  Heading, VStack } from '@chakra-ui/react'
import {RiInformationFill} from 'react-icons/ri'
import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <Container size={'container.lg'} py={'16'} >
      <VStack alignItems={'center'} justifyContent={'center'}>
<RiInformationFill size={'64'}/>
<Heading>Page Not Found</Heading>
<Link to={'/'}>
<Button variant={'ghost'}>Go to Home</Button>
</Link>
      </VStack>
        </Container>
  )
}

export default Notfound
