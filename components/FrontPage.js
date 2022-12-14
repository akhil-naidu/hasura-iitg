import {
  Button,
  Heading,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

const FrontPage = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const color = useColorModeValue('red.500', 'red.200');

  return (
    <div>
      <Heading as='h1' color={color}>
        Checking Chakra UI
      </Heading>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? `dark` : 'light'}
      </Button>
    </div>
  );
};

export default FrontPage;
