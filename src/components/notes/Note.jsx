import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles'
import React from 'react';
import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Trash } from '@mui/icons-material';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

const StyledCard = styled(Card)`
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    width: 240px;
    margin: 8px;
    box-shadow: none
`;


function Note({ note }) {
    const { notes, setNotes, setArchive, setDeletedNotes } = useContext(DataContext)
    const archiveNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setArchive(prevArr => [note, ...prevArr]);


    }

    const deleteNote = () => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setDeletedNotes(prevArr => [note, ...prevArr]);
    }
    return (
        <StyledCard>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions>
                <Archive fontSize='small'
                    style={{ marginLeft: 'auto' }}
                    onClick={() => archiveNote(note)}
                />
                <Trash
                    fontSize='small'
                    onClick={() => deleteNote(note)}
                />
            </CardActions>
        </StyledCard>
    );
}

export default Note;