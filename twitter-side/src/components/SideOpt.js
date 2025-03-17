import React from 'react'
import "./SideOpt.css";

function SideOpt({Text,Icon,Active}) {
  return (
    <div className={`sidebarOpt ${Active && "sidebarOpt_active"}`}>
        <Icon/>
     <h3>{Text}</h3>
    </div>
  )
}
export default SideOpt;