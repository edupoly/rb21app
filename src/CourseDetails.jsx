import React from 'react'
import { useParams } from 'react-router-dom'

function CourseDetails() {
    var x = useParams();
    console.log(x)
    return (
        <div>
            <h1>CourseDetails:{x.cname}</h1>
        </div>
    )
}

export default CourseDetails