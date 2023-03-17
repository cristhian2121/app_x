import { Box, CircularProgress } from "@mui/material"

const Loading = () => {
  return (
    <Box
        sx={{
          backgroundColor: "white",
          height: "100%",
          minHeight: "100vh",
          paddingTop: 10,
          height: "100%",
          display: "grid",
          placeItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
  )
}

export default Loading