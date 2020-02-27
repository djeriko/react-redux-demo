import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { buyCoffee } from "../redux"

function CoffeeContainer() {
  const numOfCoffee = useSelector(state => state.coffee.numOfCoffee)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Number of coffee - {numOfCoffee}</h1>
      <button onClick={() => dispatch(buyCoffee())}>Buy Coffee</button>
    </div>
  )
}

export default CoffeeContainer
