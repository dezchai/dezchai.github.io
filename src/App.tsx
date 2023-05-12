import ReactFullpage from "@fullpage/react-fullpage"
import "./index.css"
import Homepage from "./pages/Homepage"
import About from "./pages/About"
import Projects from "./pages/Projects"
const components = [Homepage, About, Projects]
const anchors = ["Homepage", "About", "Projects"]

// there is currently a bug in safari that causes a white flicker when scrolling
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
console.log("isSafari", isSafari)
const App = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    credits={{ enabled: false }}
    licenseKey={"gplv3-license"}
    bigSectionsDestination={"top"}
    keyboardScrolling={true}
    // scrollingSpeed={5000}
    // sectionsColor={["#272A35", "#272A35", "#272A35"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction })
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi)

      return (
        <div>
          {components.map((Component, index) => {
            return (
              <div
                key={index}
                className={`section ${isSafari ? "fixFlicker" : ""}`}
              >
                <Component />
              </div>
            )
          })}
        </div>
      )
    }}
  />
)
export default App
