import {CERTIFICATIONS} from '../constants'
import { useRef } from 'react';

const  Certififation=()=>{

    const certificationRef = useRef(null)

    return(
        <section className='py-6' id='certification' ref={certificationRef}>
            <div className='mx-auto max-w-full px-4'>
                <h1 className='mb-8 text-center text-3xl font-medium lg:text-4xl'>Certifications</h1>
                <div className='space-y-4'>
                    {CERTIFICATIONS.map((certificate,index)=>{

                        return(
                            <div key={index} className="flex flex-col space-y-1 rounded-xl border border-purple-300/20 pt-5 px-4">
                                <h1 className="text-2xl mb-2">{certificate.name}</h1>
                                <h2 className="lg:text-xl text-sm">{certificate.institution}</h2>
                                <p className='className="mt-3 lg:text-xl text-sm"'>{certificate.date}</p> <br/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Certififation;