
import { Box, Breadcrumbs } from "@mui/material"
import Header from "./components/Header"
import Breadcrumb from "./components/Breadcrumb"
import UserInfo from "./components/UserInfo"
import ListProduct from "./components/ListProduct"

function App() {

  return (
    <>
      <Header />
      <Box sx={{ width: '80vw', margin: '20px auto' }}>
        <Breadcrumb />
        <UserInfo/>
        <ListProduct/>
      </Box>
    </>
  )
}

export default App
