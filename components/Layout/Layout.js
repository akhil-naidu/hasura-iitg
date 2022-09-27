import { Box, Container, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <Flex flexDirection='column' minH='100vh'>
      <Navbar />
      <Box>{children}</Box>
      <Spacer />
      <Footer />
    </Flex>
  );
};

export default Layout;
