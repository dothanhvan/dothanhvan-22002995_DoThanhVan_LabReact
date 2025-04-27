import { Box, IconButton, Typography } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Filters() {
    return (
        <Box sx={{
            height: 100,
            border: '1px solid #ccc',
            p: 2,
            borderRadius: 2,

        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <MenuIcon />
                <Typography variant="subtitle1">Filters</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="body1">Type</Typography>

                <IconButton color='primary.main' sx={{ p: 0 }} >
                    <ExpandMoreIcon  sx={{ color: 'primary.main'}} />
                </IconButton>
            </Box>
        </Box>
    )
}