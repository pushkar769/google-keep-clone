import React, { useState, useRef, useContext } from 'react';
import { Box, TextField, styled, ClickAwayListener, Grid } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    margin: auto;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
    border-color: #e0e0e0;
    width: 600px;
    border-radius: 8px;
    min-height: 30px;
    padding: 10px 15px;
`

const note = {
    id: '',
    heading: '',
    text: ''
}

function Form(props) {
    const [showTextField, setTextField] = useState(false);
    const [addNote, setAddNote] = useState({ ...note, id: uuid() });

    const { notes, setNotes } = useContext(DataContext)

    const Containerref = useRef();

    const updateTextField = () => {
        setTextField(true);
        Containerref.current.style.minHeight = '70px'
    }
    const HandleClickAway = () => {
        setTextField(false);
        Containerref.current.style.minHeight = '30px'
        setAddNote({ ...note, id: uuid() })

        if (addNote.heading || addNote.text) {
            setNotes(prevArr => [addNote, ...prevArr]);
        }

        console.log(notes);
    }

    const onTextChange = (e) => {
        let changedNote = { ...addNote, [e.target.name]: e.target.value }
        setAddNote(changedNote)
    }
    return (
        <ClickAwayListener onClickAway={HandleClickAway}>

            <Container ref={Containerref} style={{ marginLeft: 250, position: 'relative' }}>
                {showTextField &&
                    <TextField
                        placeholder='Title'
                        variant='standard'
                        InputProps={{ disableUnderline: true }}
                        style={{ marginBottom: 10 }}
                        onChange={(e) => onTextChange(e)}
                        name='heading'
                        value={addNote.heading}
                    />
                }
                <TextField
                    placeholder='Take a note'
                    multiline
                    maxRows={Infinity}
                    variant='standard'
                    InputProps={{ disableUnderline: true }}
                    onClick={updateTextField}
                    onChange={(e) => onTextChange(e)}
                    name='text'
                    value={addNote.text}
                />
            </Container>

        </ClickAwayListener>
    );
}

export default Form;