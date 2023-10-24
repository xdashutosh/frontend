import { Box, Grid, HStack, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import cursor from '../../assets/images/Cursor.png'
import Sidebar from './Sidebar'
import {RiArrowUpLine,RiArrowDownLine} from "react-icons/ri"


const Databox = ({title,qty,qtypercent,profit})=>{
  return(
    <Box w={['full','40%','20%']} boxShadow={'lg'} p={'8'} borderRadius={'lg'}>
<Text fontWeight={'bold'}>{title}</Text>
<HStack>
  <HStack spacing={'8'}>
  <Text fontSize={'2xl'} fontWeight={'bolder'}>{qty}</Text>
  <Text>{`${qtypercent}%`}</Text>
  </HStack>
  {profit?<RiArrowUpLine color='green'/>:<RiArrowDownLine color='red'/>}
</HStack>
<Text fontSize={'sm'} opacity={'0.5'}>Since last month</Text>
    </Box>
  )
}

const Dashboard = () => {
  return (
    <Grid 
    css={{
      cursor: `url(${cursor}),default`,
    }}
    minH={'80vh'} templateColumns={['1fr','5fr 1fr']}
    
    >
<Box 
boxSizing='border-box'
px={['4','0']}>
<Text textAlign={'center'} opacity={'.5'}>Last update on {new Date().toISOString().split('T')[0]}</Text>
<Heading children="DashBoard" textAlign={['center','start']} ml={['0','8']} borderBottomWidth={['0','2px']} w={['full','-webkit-max-content']}/>
<Stack direction={['column','row']} justifyContent={'center'}>
  <Databox title ="Views" qty={123} qtypercent={30} profit={true}/>
  <Databox title ="Users" qty={32} qtypercent={78} profit={true}/>
  <Databox title ="Subscription" qty={13} qtypercent={20} profit={false}/>

</Stack>
</Box>
<Sidebar/>
    </Grid>
  )
}

export default Dashboard
