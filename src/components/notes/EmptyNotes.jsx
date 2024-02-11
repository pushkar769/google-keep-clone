import React from 'react';
import { LightbulbOutlined as Lightbulb } from '@mui/icons-material';
import { Typography, Box, styled} from '@mui/material';

const Light = styled(Lightbulb)`
    font-size: 120px;
    color: #F5F5F5;
`

const Text = styled(Typography)`
    color: #80868b;
    font-size: 22px;

`
const EmptyContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 30vh;
    margin-top: 20vh;

`

function EmptyNotes(props) {
    return (
       <EmptyContainer>
            <Light />
            <Text>Notes you add appear here</Text>
       </EmptyContainer>
    );
}

export default EmptyNotes;