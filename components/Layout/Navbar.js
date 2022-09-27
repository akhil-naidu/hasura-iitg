import { Box, Flex, IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <nav>
      <Box px={4} py={2}>
        <Flex justify='space-between' align='center'>
          <Box>Logo</Box>
          <Box>
            <IconButton
              colorScheme='green'
              aria-label='Toggle Theme'
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
            />
          </Box>
        </Flex>
      </Box>
    </nav>
  );
};

export default Navbar;
