import React from 'react'
import "./color.scss"

export default function Color({className = "", array = []}) {
  return (
    <React.Fragment>
        {
            array.map((colorName, index)=>{
                const css = {background: colorName}
                return(
                    <React.Fragment key={index}>
                        <span className={`Color ${className}`} style={css}></span>
                    </React.Fragment>
                )
            })
        }
    </React.Fragment>
  )
}
