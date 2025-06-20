import React from "react"


const Tab1 = ({ setTab }) => {



    return (
        <>
            <ul>
                <li onClick={(e) => {
                    setTab(e.target.innerText)

                }} >Tab 1</li>
                <li onClick={(e) => {
                    setTab(e.target.innerText)

                }}  >Tab 2</li>
                <li onClick={(e) => {
                    setTab(e.target.innerText)

                }}  >Tab 3</li>

            </ul>
        </>
    )
}
export default Tab1