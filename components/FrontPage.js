import {
  Center,
  Container,
  Flex,
  Heading,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import CustomLink from './CustomLink';

const FrontPage = () => {
  const color = useColorModeValue('green.500', 'green.200');

  return (
    <Flex
      flexDirection='column'
      justify='center'
      align='center'
      height='max-content'
    >
      <Center>
        <Heading as='h1' color={color}>
          IIT Guwahati X Hasura WorkShop
        </Heading>
      </Center>
      <Spacer />

      <Container
        bg={useColorModeValue('purple.200', 'purple.300')}
        rounded='md'
        m='16px'
        p='16px'
      >
        <Flex flexDirection='column' justify='center' align='center'>
          <CustomLink href='/counter/without-zustand'>
            Counter Without State Management
          </CustomLink>
          <CustomLink href='/counter/with-zustand'>
            Counter With State Management
          </CustomLink>
          <CustomLink href='/auth'>Login and Logout Page</CustomLink>
        </Flex>
      </Container>

      <Spacer />
    </Flex>
  );
};

export default FrontPage;
