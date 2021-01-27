import React /*,{useState} */ from 'react'
// import axios from "axios"

export default function Projects() {
    return (
        <>
            <div className="projectCont">
                <h1>Projects</h1>
                    <h2>Created using React</h2>
                <div className="iFrames">
                    <iframe style={{width: "400px", height: "400px"}} src="https://reviewthisrandommovie.netlify.app/" title="Random Movie Reviewer"></iframe>
                </div>
                <div className="iFrames">
                    <iframe style={{width: "400px", height: "400px"}} src="https://memeitup.netlify.app/" title="Meme Gen"></iframe>
                </div>
            
            </div>
        </>
    )
}
