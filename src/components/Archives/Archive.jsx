import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles'
import React from 'react';
import { UnarchiveOutlined as Unarchive, DeleteOutlineOutlined as Trash } from '@mui/icons-material';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

const StyledCard = styled(Card)`
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    width: 240px;
    margin: 8px;
    box-shadow: none
`;


function Archive({ note }) {
    const { notes, archiveNotes,  setNotes, setArchive, setDeletedNotes } = useContext(DataContext)

    const unarchiveNote = (note) => {
        const updatedNotes = archiveNotes.filter(data => data.id !== note.id);
        setArchive(updatedNotes);
        setNotes(prevArr => [note, ...prevArr]);


    }

    const deleteNote = (note) => {
        const updatedNotes = archiveNotes.filter(data => data.id !== note.id);
        setArchive(updatedNotes);
        setDeletedNotes(prevArr => [note, ...prevArr]);
    }
    return (
        <StyledCard>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions>
                <Unarchive fontSize='small'
                    style={{ marginLeft: 'auto' }}
                    onClick={() => unarchiveNote(note)}
                />
                <Trash
                    fontSize='small'
                    onClick={() => deleteNote(note)}
                />
            </CardActions>
        </StyledCard>
    );
}

export default Archive;