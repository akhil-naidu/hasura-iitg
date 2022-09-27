import {
  Button,
  Center,
  Heading,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

const FrontPage = () => {
  const color = useColorModeValue('green.500', 'green.200');

  return (
    <React.Fragment>
      <Center>
        <Heading as='h1' color={color}>
          Welcome IITG
        </Heading>
      </Center>
    </React.Fragment>
  );
};

export default FrontPage;
