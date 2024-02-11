import React, { useState } from 'react';
import { createContext } from 'react';

export const DataContext = createContext(null);

function DataProvider({children}) {
    const [notes, setNotes] = useState([]);
    const [archiveNotes, setArchive] = useState([]);
    const [deletedNotes, setDeletedNotes] = useState([]);
    return (
        <DataContext.Provider value={{
            notes,
            setNotes,
            archiveNotes,
            setArchive,
            deletedNotes,
            setDeletedNotes
        }}>

            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;