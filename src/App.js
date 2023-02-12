import Navbar from "./components/navbar"
import SideBar from "./components/sidebar"
import Feed from "./components/feed"
import RightBar from "./components/rightbar"
import { Stack,Box } from "@mui/system"
function App() {
  return (
    <Box>
       <Navbar/>
      <Stack direction={"row"} justifyContent="space-between" spacing={2}>
         
          <SideBar/>
          <Feed/>
          <RightBar/>
      </Stack>
    </Box>
  );
}

export default App;
