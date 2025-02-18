import { EDUCATION } from "../constants";
import { useRef } from "react";

const Education =()=>{

    const educationRef= useRef(null);

    return(
        <section className="py-16" id="education" ref={educationRef}>
            <div className="mx-auto max-w-full px-4">
                <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">Education</h2>
                <div className="space-y-4 ">
                    {EDUCATION.map((edu,index)=>{
                        return(
                            <div key={index} className="flex flex-col space-y-1 rounded-xl border border-purple-300/20 pt-5 px-4">
                                <h2 className="text-2xl mb-2">{edu.degree}</h2>
                                <h3 className="lg:text-xl text-sm">{edu.institution}</h3> <h4>{edu.duration}</h4>
                                <h3 className="mt-3 lg:text-xl text-sm" style={{ whiteSpace: "pre-line" }}>{edu.results}</h3> <br/>
                            </div>
                        )
                        
                    })}
                </div>
            </div>

        </section>
    )
}

export default Education;