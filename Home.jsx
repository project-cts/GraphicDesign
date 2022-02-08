import React from 'react'
import Products from './Products'


const Home  = () =>{
    return (
        <div className="hero">

            <div className="card bg-dark text-white border-0">
                <img src="/assets/Home.jpg" className="card-img" alt="Background" height='700px' />
                <div className="card-img-overlay">
                    
                </div>
            </div>
             <Products/>
        </div>
    )
}

export default Home
