import React from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material';
import Form from './Form'
import Note from './Note';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import EmptyNotes from './EmptyNotes';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reorder } from '../utils/common-utils';

function Notes(props) {
    const DrawerHeader = styled('div')(({ theme }) => ({
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));

    const onDragEnd = (result) => {
        if (!result.destination) 
          return;
    
        const items = reorder(notes, result.source.index, result.destination.index);    
        setNotes(items);
    }

    const { notes, setNotes } = useContext(DataContext)

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box component="main" sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                <Form />
                { notes.length > 0 ? 
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <Grid container style={{ marginTop: 16}}
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                {
                                    notes.map((note, index) => (
                                        <Draggable key={note.id} draggableId={note.id} index={index}>
                                            {(provided, snapshot) => (
                                                <Grid ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    item
                                                >
                                                    <Note note={note} />
                                                </Grid>
                                            )}
                                        </Draggable >
                                    ))
                                }
                                </Grid>
                            )}
                        </Droppable >
                    </DragDropContext>
                : <EmptyNotes /> }
            </Box>
        </Box>
    );
}

export default Notes;