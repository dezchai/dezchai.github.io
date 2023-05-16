import { useState } from "react"
import "./project.css"
// import styled, { keyframes } from "styled-components"

interface ProjectProps {
  title: string
  description: string
  thumbnail: string
  video: string
  position: string
}

// const animate = keyframes`
//  0% {
//  box-shadow: 0px 0px 20px hsl(0, 100%, 50%);
//  }
//  /* Cycle through all colors of the rainbow */
//  25% {
//  box-shadow: 0px 0px 20px hsl(90, 100%, 50%);
//  }
//  50% {
//  box-shadow: 0px 0px 20px hsl(180, 100%, 50%);
//  }
//  75% {
//  box-shadow: 0px 0px 20px hsl(270, 100%, 50%);
//  }
//  /* Add an additional keyframe that matches the first keyframe */
//  100% {
//  box-shadow: 0px 0px 20px hsl(0, 100%, 50%);
//  }
// `
// const AnimatedDiv = styled.div`
//   animation: ${animate} 5s linear infinite;
// `

const Project = (props: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="w-40 h-24 m-2.5 sm:m-0 sm:h-56 sm:w-96 hover:scale-125 transition duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        window.open(props.video)
      }}
    >
      <video
        className={`w-full object-cover transition-opacity  ${
          isHovered ? "opacity-100 block" : "opacity-0 hidden"
        }`}
        src={props.video}
        autoPlay
        muted
        loop
      />
      <img
        className={`m-0 h-5/6 w-full object-cover ${
          isHovered ? "hidden" : "block"
        }`}
        src={props.thumbnail}
      />
      <div className="bg-neutral-900 h-1/6 text-xs sm:text-base">
        {props.title}
      </div>
    </div>
  )
}

export default Project
