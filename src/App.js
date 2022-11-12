import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import { Navbar, MenuTop, Footer, Container, LeagueDetail } from './components';

const App = () => {
    return (
        <BrowserRouter>
            <Box>
                <Navbar />
                <MenuTop />
                <Routes>
                    <Route path='/' exact element={<Container />} />
                    <Route path='/league/:leagueName' element={<Container />} />
                </Routes>
                <Footer />
            </Box>
        </BrowserRouter>

    )
}

export default App