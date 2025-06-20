import React from "react"


const Tab2 = ({ setTab }) => {

    return (
        <>
            <ul>
                <li onClick={(e) => {
                    setTab(e.target.innerText)
                }} >Tab A</li>
                <li onClick={(e) => {
                    setTab(e.target.innerText)
                }}  >Tab B</li>
                <li onClick={(e) => {
                    setTab(e.target.innerText)
                }} >Tab C</li>

            </ul>
        </>
    )
}
export default Tab2