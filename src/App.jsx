import React, { useState } from 'react'
import { Box, Container, Button } from '@mui/material'
import styled, {css} from 'styled-components'

export default function App() {
  let [btn, setBtn] = useState("ON")
  let [blbColor, setBlbColor] = useState("lightoff")



  const changeBtn = () => {
    if (btn === "ON") {
      setBtn("OFF")
      setBlbColor("lighton")
    }
    else {
      setBtn("ON")

      setBlbColor("lightoff")
    }
  }



  return (
    <>
      <Container>
        <Box mt={10} p={5} width={150} sx={{ border: '2px solid' }}>
          <Div variant={blbColor} />

          <Button id='btn' variant="contained" onClick={changeBtn}>{btn}</Button>

        </Box>
      </Container>
    </>
  )
}

const Div = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 75px;
  border: 2px solid;

  ${(props)=>
  props.variant === "lightoff" &&
  css`
    background-color: none;
  `}

  ${(props)=>
  props.variant === "lighton" &&
  css`
    background-color: yellow;
  `}
`;