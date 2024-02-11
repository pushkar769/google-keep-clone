import React from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material';
import DeleteNote from './DeleteNote';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';


function DeleteNotes(props) {
    const DrawerHeader = styled('div')(({ theme }) => ({
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));

    const { deletedNotes } = useContext(DataContext)

    return (
        <Box sx={{ display: 'flex' }}>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                        <Grid container style={{ marginTop: 50 }}>
                            {
                                deletedNotes.map(note => (
                                    <Grid item>
                                        <DeleteNote note={note} />
                                    </Grid>
                                ))
                            }
                        </Grid>
            </Box>
        </Box>
    );
}

export default DeleteNotes;