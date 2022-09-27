import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      This is a navbar from _app
      <Component {...pageProps} />
      this is a footer from _app
    </ChakraProvider>
  );
}

export default MyApp;
