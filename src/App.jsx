import './App.css'
// comps
import Statts from './assets/comp/statuss'
import TopBar from './assets/comp/top.jsx'
import LeftBar from './assets/comp/left.jsx'
import BottomBar from './assets/comp/bottom.jsx'
import Body from './assets/comp/body.jsx'

function App() {

  return (
    <>
    <TopBar />
    {/* <Statts /> */}
    <LeftBar />
    <Body />
    <BottomBar />
    </>
  )
}

export default App
