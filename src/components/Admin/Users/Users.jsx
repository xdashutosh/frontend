import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

import Sidebar from '../../Admin/Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri';

const Users = () => {

const users =[
  {
_id:"asasass823nknsd",
name:"Ashutosh chaudhary",
email:"ashuchaudhary6969@gmail.com",
role:"admin",
subscription:{
  status:"active"
}


  }
];

const deletehandler = (userId)=>{
console.log("delete" +userId);
};
const updatehandler = (userId)=>{
  console.log("update"+ userId);
};

  return (
    <Grid 
    minH={'100vh'} templateColumns={['1fr','5fr 1fr']}
    >
<Box p={['0','16']} overflowX={'auto'}>
<Heading
          children="All users"
          textAlign={['center', 'start']}
          ml={['0', '8']}
          borderBottomWidth={['0', '2px']}
          w={['full', '-webkit-max-content']}
          />

<TableContainer w={['100vw','full']}>
<Table variant={'simple'} size={'lg'}>
<TableCaption>All available users in the database</TableCaption>
<Thead>
  <Tr>
    <Th>Id</Th>
    <Th>Name</Th>
    <Th>Email</Th>
    <Th>Role</Th>
    <Th>Subscription</Th>
    <Th isNumeric>Action</Th>
  </Tr>
</Thead>

<Tbody>
  {users.map((item,index)=>(
<Row item={item} key={index} updatehandler={updatehandler} deletehandler={deletehandler}/>
  ))}
</Tbody>
</Table>
</TableContainer>


</Box>
<Sidebar/>
    </Grid>
  )
}

export default Users
function Row({item,updatehandler,deletehandler}){
  return (
    <Tr>
<Td>#{item._id}</Td>
<Td>{item.name}</Td>
<Td>{item.email}</Td>
<Td>{item.role}</Td>
<Td>{item.subscription.status==="active"?"Active":"Not Active"}</Td>
<Td isNumeric>

<HStack justifyContent={'flex-end'}>
<Button variant={'outline'} colorScheme='green' onClick={()=>updatehandler(item._id)} >Change Role</Button>
<Button colorScheme='green' onClick={()=>deletehandler(item._id)}><RiDeleteBin7Fill/></Button>
</HStack>
</Td>

    </Tr>
  )
}