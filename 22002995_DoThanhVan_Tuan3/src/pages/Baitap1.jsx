import Header from '../components/Header'
import Filters from '../components/Filters'
import ContainerResult from '../components/ContainerResult';

import { Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
function BaiTap1() {

  return (
    <>
      <Header />
      <Grid sx={{ width: '80vw', margin: 'auto', paddingTop: 8 }} container spacing={2}>
        <Grid size={3}>
          <Filters />
        </Grid>
        <Grid size={9}>
          <ContainerResult />
        </Grid>

      </Grid>
      <Box sx={{ display: 'flex', width: '80vw', margin: 'auto' }}>

      </Box>
    </>
  )
}

export default BaiTap1
