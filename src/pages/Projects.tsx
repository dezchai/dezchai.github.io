// import React from 'react'
import Project from "../components/Project"
const Projects = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-zinc-800 border-collapse">
      <h1 className="p-5 text-5xl font-medium leading-tight text-primary text-center">
        Projects
      </h1>
      <div className="w-2/3 p-10 flex flex-col items-center justify-center">
        <div className="flex flex-row text-center items-end">
          <Project
            title="Project 1"
            description="hi"
            thumbnail="https://cdn.discordapp.com/attachments/827619107359817728/1106393361146978374/lena-denk-vO_RghTzvxE-unsplash.jpg"
            video="https://cdn.discordapp.com/attachments/827619107359817728/1106404785869045820/pinkfloyd.mp4"
            position="3"
          />
          <Project
            title="Project 4"
            description="hi"
            thumbnail="https://cdn.discordapp.com/attachments/827619107359817728/1106393361146978374/lena-denk-vO_RghTzvxE-unsplash.jpg"
            video="https://cdn.discordapp.com/attachments/827619107359817728/1106404785869045820/pinkfloyd.mp4"
            position="1"
          />
        </div>
        <div className="flex flex-row text-center items-center">
          <Project
            title="Project 2"
            description="hi"
            thumbnail="https://cdn.discordapp.com/attachments/827619107359817728/1106393361146978374/lena-denk-vO_RghTzvxE-unsplash.jpg"
            video="https://cdn.discordapp.com/attachments/827619107359817728/1106404785869045820/pinkfloyd.mp4"
            position="999"
          />
          <Project
            title="Project 5"
            description="hi"
            thumbnail="https://cdn.discordapp.com/attachments/827619107359817728/1106393361146978374/lena-denk-vO_RghTzvxE-unsplash.jpg"
            video="https://cdn.discordapp.com/attachments/827619107359817728/1106404785869045820/pinkfloyd.mp4"
            position="1"
          />
        </div>
        <div className="flex flex-row text-center">
          <Project
            title="Project 3"
            description="hi"
            thumbnail="https://cdn.discordapp.com/attachments/827619107359817728/1106393361146978374/lena-denk-vO_RghTzvxE-unsplash.jpg"
            video="https://cdn.discordapp.com/attachments/827619107359817728/1106404785869045820/pinkfloyd.mp4"
            position="right"
          />
          <Project
            title="Project 6"
            description="hi"
            thumbnail="https://cdn.discordapp.com/attachments/827619107359817728/1106393361146978374/lena-denk-vO_RghTzvxE-unsplash.jpg"
            video="https://cdn.discordapp.com/attachments/827619107359817728/1106404785869045820/pinkfloyd.mp4"
            position="right"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
