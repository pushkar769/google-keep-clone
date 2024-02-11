import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles'
import React from 'react';
import { RestoreFromTrashOutlined as Restore, DeleteForeverOutlined as DeleteForever } from '@mui/icons-material';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

const StyledCard = styled(Card)`
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    width: 240px;
    margin: 8px;
    box-shadow: none
`;


function DeleteNote({ note }) {
    const { notes, deletedNotes, setNotes, setArchive, setDeletedNotes } = useContext(DataContext)
    const restoreNote = (note) => {
        const updatedNotes = deletedNotes.filter(data => data.id !== note.id);
        setDeletedNotes(updatedNotes);
        setNotes(prevArr => [note, ...prevArr]);


    }

    const deleteForeverNote = (note) => {
        const updatedNotes = deletedNotes.filter(data => data.id !== note.id);
        setDeletedNotes(updatedNotes);
    }
    return (
        <StyledCard>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions>
                <DeleteForever fontSize='small'
                   
                    onClick={() => deleteForeverNote(note)}
                />
                <Restore
                    fontSize='small'
                    onClick={() => restoreNote(note)}
                />
            </CardActions>
        </StyledCard>
    );
}

export default DeleteNote;