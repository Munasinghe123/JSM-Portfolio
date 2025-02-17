import { useRef } from "react";
import { SKILLS } from "../constants";

const  Skills =()=>{

    const skillsRef = useRef(null);

    return(
        <section className="py-16" id="skills" ref={skillsRef}>
            <div className="px-4">
                <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">Skills</h2>
            </div>

            <div className="grid grid-cols-2 gpa-8 md:grid-cols-3 lg:grid-cols-4">
                {SKILLS.map((skill,index)=>{
                    return(
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="mb-4">
                                {skill.icon}
                            </div>
                            <h3 className="lg:text-xl">
                                {skill.name}
                            </h3>
                            <div className="mt-7"></div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Skills;