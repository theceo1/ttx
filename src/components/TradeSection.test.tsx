import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Flex, Box, Heading } from '@chakra-ui/react';
import Button from '@/components/ui/Button';

test('renders TradeSection correctly', () => {
  render(
    <Flex>
      <Box>
        <Heading>Trade Section</Heading>
        <Button>Trade</Button>
      </Box>
    </Flex>
  );

  expect(screen.getByText('Trade Section')).toBeInTheDocument();
  expect(screen.getByText('Trade')).toBeInTheDocument();
});
