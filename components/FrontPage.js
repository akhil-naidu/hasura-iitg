import { Button, Heading, useColorMode } from '@chakra-ui/react';
import React from 'react';

const FrontPage = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <div>
      <Heading as='h1'>Checking Chakra UI</Heading>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? `dark` : 'light'}
      </Button>
    </div>
  );
};

export default FrontPage;
