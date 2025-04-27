import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';


export default function Breadcrumb() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="primary.main" href="/">
      Home
    </Link>,
    <Typography key="3" sx={{ color: 'text.primary' }}>
      Your Recipe Box
    </Typography>
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}