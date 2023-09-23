
import Detail from "./components/Detail.jsx/Detail"
import NavBar from "./components/Navbar/NavBar"
import RecentTap from "./components/RecentTap/RecentTap"
import RemoteNav from "./components/RemoteNav/RemoteNav"
import TopBar from "./components/TopBar/TopBar"


function App() {
 

  return (
<div className="">
  <div className="">
   <TopBar/>
   <div className="flex">
   <NavBar/>
   <Detail/>
   <RecentTap/>
   </div>
  
   <RemoteNav/>
    </div>
</div>
   
  )
}

export default App
