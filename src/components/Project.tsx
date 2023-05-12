import { useState } from "react"
import "./project.css"
import styled, { keyframes } from "styled-components"

interface ProjectProps {
  title: string
  description: string
  thumbnail: string
  video: string
  position: "left" | "right"
}

const animate = keyframes`
 0% {
 box-shadow: 0px 0px 20px hsl(0, 100%, 50%);
 }
 /* Cycle through all colors of the rainbow */
 25% {
 box-shadow: 0px 0px 20px hsl(90, 100%, 50%);
 }
 50% {
 box-shadow: 0px 0px 20px hsl(180, 100%, 50%);
 }
 75% {
 box-shadow: 0px 0px 20px hsl(270, 100%, 50%);
 }
 /* Add an additional keyframe that matches the first keyframe */
 100% {
 box-shadow: 0px 0px 20px hsl(0, 100%, 50%);
 }
`
const AnimatedDiv = styled.div`
  animation: ${animate} 5s linear infinite;
`

const Project = (props: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <AnimatedDiv
      className={`border overflow-hidden w-32 h-32 sm:w-96 sm:h-56 ${
        isHovered ? "expanded" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <video
          className="m-0 h-5/6 w-full object-cover"
          src={props.video}
          autoPlay
          muted
        />
      ) : (
        <img className="m-0 h-5/6 w-full object-cover" src={props.thumbnail} />
      )}
      <div>Project 1</div>
    </AnimatedDiv>
  )
}

export default Project
