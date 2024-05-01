import { Box, List, ListItem, Button } from '@chakra-ui/react';

const ListNotes = () => {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];

  const handleFavorite = (index) => {
    const updatedNotes = notes.map((note, i) => {
      if (i === index) {
        return { ...note, favorite: !note.favorite };
      }
      return note;
    });
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    window.location.reload();
  };

  return (
    <Box p={4}>
      <List spacing={3}>
        {notes.map((note, index) => (
          <ListItem key={index} p={2} border="1px" borderColor="gray.200">
            {note.content}
            <Button ml={2} colorScheme={note.favorite ? 'pink' : 'gray'} onClick={() => handleFavorite(index)}>
              {note.favorite ? 'Unfavorite' : 'Favorite'}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ListNotes;