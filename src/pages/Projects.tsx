// import React from 'react'
import Project from "../components/Project"
const Projects = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center h-screen bg-zinc-800 border-collapse">
      <div className="w-1/2 min-h-screen flex flex-row items-center justify-center">
        <div className="flex flex-col text-center items-end">
          <Project
            title="Project 1"
            description="hi"
            thumbnail="https://cdn.discordapp.com/attachments/827619107359817728/1106393361146978374/lena-denk-vO_RghTzvxE-unsplash.jpg"
            video="https://cdn.discordapp.com/attachments/827619107359817728/1106404785869045820/pinkfloyd.mp4"
            position="left"
          />
          <Project
            title="Project 1"
            description="hi"
            thumbnail="https://cdn.discordapp.com/attachments/827619107359817728/1106393361146978374/lena-denk-vO_RghTzvxE-unsplash.jpg"
            video="https://cdn.discordapp.com/attachments/827619107359817728/1106404785869045820/pinkfloyd.mp4"
            position="left"
          />
        </div>
        <div className="flex flex-col text-center items-center">
          <Project
            title="Project 1"
            description="hi"
            thumbnail="https://cdn.discordapp.com/attachments/827619107359817728/1106393361146978374/lena-denk-vO_RghTzvxE-unsplash.jpg"
            video="https://cdn.discordapp.com/attachments/827619107359817728/1106404785869045820/pinkfloyd.mp4"
            position="right"
          />
          <Project
            title="Project 1"
            description="hi"
            thumbnail="https://cdn.discordapp.com/attachments/827619107359817728/1106393361146978374/lena-denk-vO_RghTzvxE-unsplash.jpg"
            video="https://cdn.discordapp.com/attachments/827619107359817728/1106404785869045820/pinkfloyd.mp4"
            position="right"
          />
        </div>
        <div className="flex flex-col text-center">
          <Project
            title="Project 1"
            description="hi"
            thumbnail="https://cdn.discordapp.com/attachments/827619107359817728/1106393361146978374/lena-denk-vO_RghTzvxE-unsplash.jpg"
            video="https://cdn.discordapp.com/attachments/827619107359817728/1106404785869045820/pinkfloyd.mp4"
            position="right"
          />
          <Project
            title="Project 1"
            description="hi"
            thumbnail="https://cdn.discordapp.com/attachments/827619107359817728/1106393361146978374/lena-denk-vO_RghTzvxE-unsplash.jpg"
            video="https://cdn.discordapp.com/attachments/827619107359817728/1106404785869045820/pinkfloyd.mp4"
            position="right"
          />
        </div>
      </div>
      <h1 className="w-1/2 mb-2 mt-0 text-5xl font-medium leading-tight text-primary text-center p-0">
        Projects
      </h1>
    </div>
  )
}

export default Projects
