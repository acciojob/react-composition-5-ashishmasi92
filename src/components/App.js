
import React,{useState} from "react";
import './../styles/App.css';
import Tab from "./Tab"
const App = () => {

const firstTabs = [
    { title: 'Tab 1', content: 'Content for Tab 1' },
    { title: 'Tab 2', content: 'Content for Tab 2' },
    { title: 'Tab 3', content: 'Content for Tab 3' },
  ];

  const secondTabs = [
    { title: 'Tab A', content: 'Content for Tab A' },
    { title: 'Tab B', content: 'Content for Tab B' },
    { title: 'Tab C', content: 'Content for Tab C' },
  ];



  return (
    <div>


<Tab
id="tabs1"
tabs={firstTabs}
/>

<Tab
id="tabs2"
tabs={secondTabs}
/>


    </div>
  )
}

export default App
