// import React from "react"
import { AiOutlineArrowDown } from "react-icons/ai"

const Homepage = () => {
  return (
    <div>
      <div className="min-h-screen bg-zinc-800 flex flex-col items-center justify-center">
        <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary">
          Hi
        </h1>
        <div className="flex flex-row scale-150">
          <AiOutlineArrowDown />
          <AiOutlineArrowDown />
          <AiOutlineArrowDown />
        </div>
      </div>
    </div>
  )
}

export default Homepage
