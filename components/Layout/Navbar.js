import { Box, Flex, Button, useColorMode } from '@chakra-ui/react';
import React from 'react';

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <nav>
      <Box px={4} py={2}>
        <Flex justify='space-between'>
          <Box>Logo</Box>
          <Box>
            <Button onClick={toggleColorMode}>
              Toggle {colorMode === 'light' ? `dark` : 'light'}
            </Button>
          </Box>
        </Flex>
      </Box>
    </nav>
  );
};

export default Navbar;
