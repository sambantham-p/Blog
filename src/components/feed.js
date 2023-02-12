import { Box } from "@mui/material"
import Post from "./post"

const Feed = () => {
  
  
  return (
    <Box p={2} flex={4}>
        <Post name="Sambantham" date="feb 14, 2023" syb="S"/>
        <Post name="Ramanathan" date="mar 12, 2023" syb="R"/>
        <Post name="Ganesh" date="jan 01, 2023" syb="G"/>
        <Post name="Kathick" date="feb 24, 2023" syb="K"/>
        <Post name="Harini" date="mar 08, 2023" syb="H"/>
        <Post name="Jeevan" date="April 14, 2023" syb="J"/>
        <Post name="Vidhya" date="May 14, 2023" syb="V"/>
    </Box>
  )
}

export default Feed