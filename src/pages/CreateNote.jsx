import { useState } from 'react';
import { Box, Button, Textarea, useToast } from '@chakra-ui/react';

const CreateNote = () => {
  const [note, setNote] = useState('');
  const toast = useToast();

  const handleSaveNote = () => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push({ content: note, favorite: false });
    localStorage.setItem('notes', JSON.stringify(notes));
    setNote('');
    toast({
      title: 'Note saved.',
      description: "Your note has been saved successfully.",
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box p={4}>
      <Textarea
        placeholder="Enter your note here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        size="sm"
      />
      <Button mt={4} colorScheme="blue" onClick={handleSaveNote}>
        Save Note
      </Button>
    </Box>
  );
};

export default CreateNote;