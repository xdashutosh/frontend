import React, { useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    HStack,
    VStack,
    DrawerFooter,
  } from '@chakra-ui/react'
  import {BiMenuAltLeft} from 'react-icons/bi'
  import {ColorModeSwitcher} from '../../../ColorModeSwitcher'
import { Link } from 'react-router-dom'
import { RiDashboardFill, RiLogoutBoxLine} from 'react-icons/ri'

const LinkBut =({url="/",title="Home",onClose})=>(
<Link to={url} onClick={onClose}>
    <Button variant={'ghost'} >{title}</Button>
</Link>
);


const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()


const isAuthenticated =true;
const user = {
    role:"admin"
};

  return (
   
    <HStack w={'full'} justifyContent={'space-between'}>

      <Button ref={btnRef} colorScheme='green' rounded={'full'} w={'12'} h={'12'} onClick={onOpen} m={'4'}>
        <BiMenuAltLeft />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={'xs'}
        >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth={'1px'}>𝕃earn <b>𝕍ita</b></DrawerHeader>

          <DrawerBody>
          <VStack spacing={'8'} alignItems={'flex-start'}>
            <LinkBut onClose={onClose} url={'/'} title={'Home'} onClick={onClose}/>
            <LinkBut  onClose={onClose} url={'/courses'} title={'Browse All Courses'}/>
            <LinkBut  onClose={onClose} url={'/reqcourse'} title={'Request a Course'}/>
            <LinkBut  onClose={onClose} url={'/contactus'} title={'Contact Us'}/>
            <LinkBut  onClose={onClose} url={'/about'} title={'About'}/>
           
          </VStack>
           
          </DrawerBody>

          <DrawerFooter>
        {isAuthenticated?(    
                <VStack>

                <HStack mt={'16'} spacing={'8'}>
                   <Link to={'/profile'} onClick={onClose}>
                            <Button colorScheme='green' variant={'ghost'} >Profile</Button>
                           </Link>
                            <Link to={'/'} onClick={onClose}>
                            <Button><RiLogoutBoxLine/> Logout</Button>
                           </Link>
                    
                </HStack>
                
                <HStack >
{
    user && user.role==="admin" && <Link to={'/admin/dashboard'} onClick={onClose}>
    <Button colorScheme='green'><RiDashboardFill/>dashboard</Button>
    </Link>
}
                           </HStack>       
                </VStack>
                           ):(
                            <HStack spacing={'4'} mt={'16'}>
                                <Link to={'/login'} onClick={onClose}>
                            <Button colorScheme='green'>Login</Button>
                           </Link>
                <text>or</text>
                <Link to={'/register'} onClick={onClose}>
                <Button variant={'solid'}>Signup</Button>
                </Link>
                </HStack>
                            )}

        </DrawerFooter>

        </DrawerContent>
       
      </Drawer>
      <ColorModeSwitcher/>
          </HStack>
   
  )
}

export default Header;

