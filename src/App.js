import React from 'react';
import { Box } from '@mui/material';

import { Navbar, MenuTop, Footer } from './components';

const App = () => {
    return (
        <Box>
            <Navbar />
            <MenuTop />
            <Footer />
        </Box>
    )
}

export default App