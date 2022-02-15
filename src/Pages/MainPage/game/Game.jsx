import React from 'react'
import styles from "./Game.module.css"
import { ws } from '../../../socket'

function Game() {

  ws.onopen = (e) =>{
      console.log(e)
  }

  return (
    <div>

    </div>
  )
}

export default Game