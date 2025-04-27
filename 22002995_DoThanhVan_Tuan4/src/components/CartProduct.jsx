import { Box, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

import { useDispatch } from "react-redux";
import { addItem, updateItem, removeItem } from "../store/cartSlice";

export default function CartProduct({ id, name, img, isSave, duration }) {

    const dispatch = useDispatch();

    return (
        <Card sx={{ maxWidth: 300, height: '100%' }} onClick={() => dispatch(addItem({ id, name, img, isSave, duration, quantity: 1 }))}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image={img}
            />
            <CardContent sx={{ '&:last-child': { paddingBottom: 2 }, }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        {name}
                    </Typography>
                    {isSave ? <BookmarkIcon /> : <BookmarkBorderOutlinedIcon />}
                </Box>
                <Chip sx={{ bgcolor: '#fef0f5', color: 'primary.main', fontSize: '0.6rem' }} label={`${duration} mins`} />
            </CardContent>
        </Card>
    );
}