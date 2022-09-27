import { Box, Flex, IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import CustomLink from '@/components/CustomLink';

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <nav>
      <Box px={4} py={2}>
        <Flex justify='space-between' align='center'>
          <CustomLink href='/'>
            <Box>Logo</Box>
          </CustomLink>
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
