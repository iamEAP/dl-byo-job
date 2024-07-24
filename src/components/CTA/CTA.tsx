import React from "react"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"

const CTA = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      alignSelf="center"
      spacing={1}
      useFlexGap
      sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
    >
      {/* <TextField
    id="outlined-basic"
    hiddenLabel
    size="small"
    variant="outlined"
    aria-label="Enter your email address"
    placeholder="Your email address"
    inputProps={{
      autoComplete: 'off',
      'aria-label': 'Enter your email address',
    }}
  /> */}
      <Button variant="contained" color="primary">
        Chat with a real resident
      </Button>
    </Stack>
  )
}

export default CTA
