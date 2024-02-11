import React from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material';

import Archive from './Archive';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';


function Archives(props) {
    const DrawerHeader = styled('div')(({ theme }) => ({
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));

    const { archiveNotes } = useContext(DataContext)

    return (
        <Box sx={{ display: 'flex' }}>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                        <Grid container style={{ marginTop: 50 }}>
                            {
                                archiveNotes.map(note => (
                                    <Grid item>
                                        <Archive note={note} />
                                    </Grid>
                                ))
                            }
                        </Grid>     
            </Box>
        </Box>
    );
}

export default Archives;