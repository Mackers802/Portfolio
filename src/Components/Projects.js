import React /*,{useState} */ from 'react'
// import axios from "axios"

export default function Projects() {
    return (
        <>
            <div className="projectCont">
                <h1>Projects</h1>
                <div className="iFrames">
                    <iframe style={{width: "350px", height: "450px"}} src="https://memeitup.netlify.app/" title="Meme Gen"></iframe>
                </div>
                <div className="iFrames">
                    <iframe style={{width: "350px", height: "450px"}} src="https://reviewthisrandommovie.netlify.app/" title="Random Movie Reviewer"></iframe>
                </div>
                {/* <div className="iFrames">
                    <iframe style={{width: "325px", height: "450px"}} src="https://memeitup.netlify.app/" title="Meme Gen"></iframe>
                </div> */}

                
            </div>
        </>
    )
}
