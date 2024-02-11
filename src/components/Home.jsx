import React from 'react';
import SwipeDrawer from './SwipeDrawer';
import Notes from './notes/Notes';
import { Box } from '@mui/material';
import Archives from './Archives/Archives';
import DeleteNotes from './Delete/DeleteNotes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home(props) {
    return (
        <Box style={{ display: 'flex', width: '100%'}}>
            <Router>
            <SwipeDrawer/>
            <Routes>
                <Route path='/' element={<Notes />} />
                <Route path='/archive' element={<Archives />} />
                <Route path='/trash' element={<DeleteNotes />} />
            </Routes>
            </Router>

        </Box>
    );
}

export default Home;