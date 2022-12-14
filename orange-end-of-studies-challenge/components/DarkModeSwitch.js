import {Flex, IconButton, useColorMode, useColorModeValue} from '@chakra-ui/react'
import { BiMoon, BiSun } from 'react-icons/bi'

const ToggleTheme = ()=> {
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(BiMoon, BiSun)
  const { toggleColorMode: toggleMode } = useColorMode()
  return (
    <IconButton

      icon={<SwitchIcon size={25} />}
    />
  )
}

export default ToggleTheme