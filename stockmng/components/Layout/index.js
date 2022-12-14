import { useState } from 'react'
import Image from 'next/image'
import Logo from   '../../public/logo.png'
import {
    Skeleton,
    useColorMode,
    Switch,
    Flex,
    Button,
    IconButton, Box, useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import {signOut, useSession} from "next-auth/client";
import ToggleTheme from "../DarkModeSwitch";
import { BiMoon, BiSun } from 'react-icons/bi'
export const Nav = () => {
  async function hlogout(){
    signOut()
    }
  const [session,load]=useSession()
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [display, changeDisplay] = useState('none')
    const SwitchIcon = useColorModeValue(BiMoon, BiSun)
  return (

         <Flex>

      <Flex

        top="1rem"
        left="1rem"
        align="center"
      >
        {/* Desktop */}
        {load?<Skeleton><div></div></Skeleton>:<Flex
          display={['none', 'none', 'flex','flex']}
        >

          <Link href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="50%"
            >
                <Image
                    src={Logo}
                    alt="Picture of the author"
                    width={500} 
                     height={300}
                   
                />
                    </Button>
          </Link>
            
{!session && (
              <Link href="/login" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Login"
              my={5}
              w="50%"
       
            >
                  LOGIN
                    </Button>
          </Link>
          )}
          {!session && (
              <Link href="/register" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Register"
              my={5}
              w="50%"
       
            >
                  Register
                    </Button>
          </Link>
          )}


          {session&&(
               <Link href="/products" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Profile"
              my={5}
              w="50%"
            >
             PRODUCTS
                    </Button>
          </Link>
          )
          }
          {session&&(

            <Button
                onClick={hlogout}
              as="a"
              variant="ghost"
              aria-label="Profile"
              my={5}
              w="50%"
            >
             LOGOUT
                    </Button>

          )
           }
            
        </Flex>}


        {/* Mobile */}
        <IconButton
            bg={"transparent"}
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={
            <HamburgerIcon />
          }
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none', 'none']}
        />

      </Flex>

      {/* Mobile Content */}
      <Flex
        w='100vw'
        display={display}
        bgColor={useColorModeValue('gray.50', 'gray.900')}
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"

        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
            <IconButton
                bg={"transparent"}
                aria-label="Open Menu"
                size="lg"
                mr={2}
                icon={
                    <CloseIcon />
                }
                onClick={() => changeDisplay('none')}
                display={['flex', 'flex', 'none', 'none']}
            />
        </Flex>

        <Flex
          flexDir="column"
          align="center"
        >
          <Link href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
              onClick={() => changeDisplay('none')}
            >
              Home
                    </Button>
          </Link>

          {!session && (
              <Link href="/login" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Login"
              my={5}
              w="100%"
              onClick={() => changeDisplay('none')}
            >
              Login
                    </Button>
          </Link>
          )}


 {session&&(
               <Link href="/student" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Profile"
              my={5}
              w="100%"
              onClick={() => changeDisplay('none')}
            >
              Profile
                    </Button>
          </Link>
          )
          }

          {session&&(

            <Button
               onClick={()=>{
                    hlogout()
                    changeDisplay('none')
                }}
              as="a"
              variant="ghost"
              aria-label="Profile"
              my={5}
              w="100%"

            >
              Logout
                    </Button>

          )
          }
            <Link href="/about" passHref>
                <Button
                    as="a"
                    variant="ghost"
                    aria-label="About"
                    my={5}
                    w="100%"
                    onClick={() => changeDisplay('none')}
                >
                    About
                </Button>
            </Link>
            <IconButton
                variant="ghost"
                my={5}
                w="50%"
                icon={<SwitchIcon size={25} />}
                onClick={toggleColorMode}
            />
        </Flex>
      </Flex>
    </Flex>


  )
}