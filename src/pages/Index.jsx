import { Box, Link, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Index = () => {
  return (
    <Flex direction="column" align="center" justify="center" p={10}>
      <Box p={4}>
        <Link as={RouterLink} to="/" p={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/create" p={2}>
          Create Note
        </Link>
        <Link as={RouterLink} to="/favorites" p={2}>
          Favorite Notes
        </Link>
      </Box>
    </Flex>
  );
};

export default Index;