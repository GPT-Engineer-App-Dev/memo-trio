import { Box, List, ListItem } from '@chakra-ui/react';

const FavoriteNotes = () => {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  const favoriteNotes = notes.filter(note => note.favorite);

  return (
    <Box p={4}>
      <List spacing={3}>
        {favoriteNotes.map((note, index) => (
          <ListItem key={index} p={2} border="1px" borderColor="gray.200">
            {note.content}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FavoriteNotes;