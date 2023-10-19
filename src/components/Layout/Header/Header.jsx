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

const LinkBut =({url="/",title="Home"})=>(
<Link to={url}>
    <Button variant={'ghost'} >{title}</Button>
</Link>
);


const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()


const [isAuthenticated ,setisAuthenticated] = useState(false);
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
            <LinkBut url={'/'} title={'Home'} />
            <LinkBut url={'/courses'} title={'Browse All Courses'}/>
            <LinkBut url={'/request'} title={'Request a Course'}/>
            <LinkBut url={'/contact'} title={'Contact Us'}/>
            <LinkBut url={'/about'} title={'About'}/>
           
          </VStack>
           
           
          </DrawerBody>

          <DrawerFooter>
        {isAuthenticated?(    
                <VStack>

                <HStack mt={'16'} spacing={'8'}>
                   <Link to={'/login'}>
                            <Button colorScheme='green' variant={'ghost'} >Profile</Button>
                           </Link>
                            <Link to={'/'}>
                            <Button  onClick={()=>setisAuthenticated(false)}><RiLogoutBoxLine/> Logout</Button>
                           </Link>
                    
                </HStack>
                
                <HStack >
{
    user && user.role==="admin" && <Link to={'/admin/dashboard'}>
    <Button colorScheme='green'><RiDashboardFill/>dashboard</Button>
    </Link>
}
                           </HStack>       
                </VStack>
                           ):(
                            <HStack spacing={'4'} mt={'16'}>
                                <Link to={'/login'}>
                            <Button colorScheme='green' onClick={()=>setisAuthenticated(true)}>Login</Button>
                           </Link>
                <text>or</text>
                <Link to={'/signup'}>
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

