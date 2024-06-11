'use client'

import {docs} from './api/firebase.js'
import { Suspense, lazy } from "react"
import { Spinner } from '@nextui-org/spinner'


export default function Works(){
    const works = docs()
    const Projects = lazy(()=>import('@/components/Projects'))
    return (

        <div className="w-[90%] mt-20 flex items-center justify-center">
           <Suspense fallback={<Spinner label="Loading projects..." color="default"/>}> 
                <Projects/>
            </Suspense>
        </div>
    )
}
