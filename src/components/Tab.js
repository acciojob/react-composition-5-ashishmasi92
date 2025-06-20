import React, { useState } from "react"


const Tab = ({ id, tabs }) => {
    let [index, setIndex] = useState(0)

    

    return (
        <>
            <div className="container">
                <div className="header">
                    <ul>
                        {tabs && tabs.map((v, i) => {
                            return <li onClick={() => {
                                setIndex(i)
                            }} >{v.title}</li>
                        })}
                    </ul>
                </div>
<div>
    {tabs[index].content}
</div>
            </div>

        </>
    )
}
export default Tab