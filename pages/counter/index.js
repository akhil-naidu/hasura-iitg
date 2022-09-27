import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useToast } from '@chakra-ui/react';

const CounterRedirect = () => {
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    router.push('/');

    toast({
      title: 'Page Does not Exist',
      description: 'Redirecting to Home Page',
      status: 'warning',
      duration: 3000,
      isClosable: true,
    });
  }, [router, toast]);

  return <div></div>;
};

export default CounterRedirect;
