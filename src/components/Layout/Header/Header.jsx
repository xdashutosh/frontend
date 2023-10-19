import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    HStack,
  } from '@chakra-ui/react'
  import {BiMenuAltLeft} from 'react-icons/bi'
  import {ColorModeSwitcher} from '../../../ColorModeSwitcher'
const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
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
          <DrawerHeader>𝕃earn <b>𝕍ita</b></DrawerHeader>

          <DrawerBody>
          
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <ColorModeSwitcher/>
          </HStack>
   
  )
}

export default Header
