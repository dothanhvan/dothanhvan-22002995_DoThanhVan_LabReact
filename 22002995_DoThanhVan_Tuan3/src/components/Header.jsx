import { Box, Typography, Button, IconButton, Avatar } from "@mui/material";
import Input from '@mui/material/Input';

import SearchIcon from '@mui/icons-material/Search';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';

export default function Header() {
    return (
        <Box sx={{
            width: '100vw',
            height: '60px',
            boxShadow: '-1px 3px 20px #ccc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 4
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 3
            }}>
                <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'bold' }}>Chefify</Typography>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#f1f1f1',
                    padding: "4px 12px",
                    borderRadius: "8px"

                }}>
                    <IconButton sx={{ p: 0 }} >
                        <SearchIcon />
                    </IconButton>
                    <Input fullWidth disableUnderline sx={{ marginLeft: '8px', width: '300px' }} />
                </Box>
            </Box>
            <Box>
                <Button>
                    What to cook
                </Button>
                <Button>
                    Recipes
                </Button>
                <Button>
                    Ingredients
                </Button>
                <Button>
                    About Us
                </Button>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <Button startIcon={<Inventory2OutlinedIcon />}>
                    Your Recipe Box
                </Button>
                <Avatar sx={{ bgcolor: 'primary.main', width: 30, height: 30, marginLeft: 2 }}>V</Avatar>
            </Box>
        </Box>
    )
}