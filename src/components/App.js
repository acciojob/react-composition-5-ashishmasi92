
import React,{useState} from "react";
import './../styles/App.css';
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
const App = () => {
let [tab1,setTab1] = useState("Tab 1")
let [tab2,setTab2] = useState("Tab A")




  return (
    <div>
<Tab1
setTab = {setTab1}
/>
<p>Component for {tab1}</p>
<Tab2
setTab={setTab2}
/>

<p>Component for {tab2}</p>

    </div>
  )
}

export default App
