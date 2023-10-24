import { Button, VStack } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom';
import {RiAddCircleFill, RiDashboardFill, RiEyeFill, RiUser3Fill} from 'react-icons/ri'
import React from 'react'

const Sidebar = () => {
const Location  =  useLocation();
  return (
  <VStack  spacing={'8'} p={'4'} boxShadow={'md'} maxH={'100vh'} >
  <SidebarNavbtns url={'dashboard'} Icon={RiDashboardFill} text={'DashBoard'} active={Location.pathname==="/admin/dashboard"}/>
  <SidebarNavbtns url={'createcourse'} Icon={RiAddCircleFill} text={'Create Course'} active={Location.pathname==="/admin/createcourse"}/>
  <SidebarNavbtns url={'courses'} Icon={RiEyeFill} text={'Courses'} active={Location.pathname==="/admin/courses"}/>
  <SidebarNavbtns url={'users'} Icon={RiUser3Fill} text={'Users'} active={Location.pathname==="/admin/users"}/>
  </VStack>
  )
}

export default Sidebar
function SidebarNavbtns({url,Icon ,text,active})
{
return(
    <Link to={`/admin/${url}`}>
    <Button fontSize={'larger'} colorScheme={active?"green":""}  variant={'ghost'}>
        <Icon style={{margin:'10px'}} size={'25px'}/>{text}</Button>
   </Link>
)
}