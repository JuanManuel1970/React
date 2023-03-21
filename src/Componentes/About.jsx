


import React from 'react'

const About = (props) => {

    
    console.log(props.persona);



    return (
        <div className="m-3">
            <hr></hr>
                <h1 className='m-5 text-center'>
                    {props.persona} 
                </h1>
            <hr></hr>

        </div>
    )
}

export default About;












