const About = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center min-h-screen bg-zinc-800">
      <h1 className="w-full text-center mb-2 mt-0 text-5xl font-medium leading-tight text-primary p-0">
        About Me
      </h1>
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <div className="break-normal max-w-sm md:max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          malesuada pretium ex, id elementum eros porta vitae. Etiam nunc felis,
          pulvinar ac nisi et, lobortis convallis ex. Mauris id fringilla metus.
          Vestibulum vitae congue nisi. Fusce eu aliquet enim, pulvinar rhoncus
          eros. Cras tempor, turpis id ornare dapibus, leo dolor lacinia est,
          eget commodo neque massa eu purus. Phasellus convallis sapien magna,
          ac ultrices ipsum molestie eu. Ut porttitor magna nibh, in dapibus
          erat elementum sagittis. Ut sit amet rutrum ligula. Nulla varius
          libero vitae nulla auctor placerat. Mauris consequat in lectus quis
          rhoncus. Aliquam erat volutpat. Aliquam erat volutpat.
        </div>
        <img
          className="w-1/4 m-4 xl:m-64 rounded-full"
          src={
            "https://cdn.discordapp.com/attachments/827619107359817728/1106010138579583087/profilepic_square.jpg"
          }
        ></img>
      </div>
    </div>
  )
}

export default About
