import React, { useState } from 'react'
import { Box, Container, Button } from '@mui/material'

export default function App() {
  let [btn, setBtn] = useState("ON")
  let [blbColor, setBlbColor] = useState("noColor")


  const changeBtn = () => {
    if (btn === "ON") {
      setBtn("OFF")
      setBlbColor("yellow")
    }
    else {
      setBtn("ON")

      setBlbColor("noColor")
    }
  }



  return (
    <>
      <Container>
        <Box mt={10} p={5} width={150} sx={{ border: '2px solid' }}>
          <div id='bulb' className={blbColor} />

          <Button id='btn' variant="contained" onClick={changeBtn}>{btn}</Button>

        </Box>
      </Container>
    </>
  )
}
