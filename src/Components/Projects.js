import React /*,{useState} */ from 'react'
// import axios from "axios"

export default function Projects() {
    return (
        <>
            <div className="projectCont">
                <h1>Projects</h1>

            <h2>Designed using React</h2>
                <div className="iFrames">
                    <iframe style={{width: "320px", height: "425px", borderRadius: "30px", borderStyle: "doublegroove", borderWidth: "8px", borderColor: " rgba(125, 120, 120, 0.361)" }} src="https://memeitup.netlify.app/" title="Meme Gen"></iframe>
                </div>
                <div className="iFrames">
                    <iframe style={{width: "320px", height: "425px", borderRadius: "30px", borderStyle: "groove", borderWidth: "8px", borderColor: " rgba(125, 120, 120, 0.361)" }} src="https://reviewthisrandommovie.netlify.app/" title="Random Movie Reviewer"></iframe>
                </div>
                <hr></hr>
                <br></br>
                <div>
                <h2>Designed using HTML / CSS / Javascript projects</h2>
                <div className="iFrames">
                    <iframe style={{width: "320px", height: "425px", borderRadius: "30px", borderStyle: "groove", borderWidth: "8px", borderColor: " rgba(125, 120, 120, 0.361)" }} src="https://mariopestcontrol.netlify.app/" title="Mario Pest Control"></iframe>
                </div>
                </div>

                
            </div>
        </>
    )
}
