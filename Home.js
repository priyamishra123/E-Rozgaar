import React from 'react'
// import rozgaarimg from '../Images/rozgaarimg.jpeg'
import logor from '../Images/logor-removebg-preview.png'
import buisness from '../Images/buisness.jpeg'
import vector from '../Images/vector.jpeg'
export default function Home() {
  return (
    <>
    <div>
      <div className="bc">
        <img src={logor} alt="logo"/>
        
           
            <p className="b">welcome to E-Labour Chowk</p>
            <p className="c">grow your buisness more</p>


    </div>
    <div class="a"> 
        <div class="g">
   
        
        <p class="fg">Brief about E-Labour Chowk</p> 
       <p class="h"> Why should you choose us? </p>
        
        <p class="e">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem dolorum rerum voluptatum exercitationem blanditiis excepturi officia suscipit, unde omnis iure nisi nostrum placeat nesciunt neque magni laudantium illo incidunt pariatur?</p>
        
       
        {/* <p class="e">Friday - Saturday : <span class="f">7:00 am - Midnight</span></p>
        
        <p class="e">Saturday - Sunday : <span class="f">9:00 am - 12:00 pm</span></p> */}
     

  
    
    </div>
     <img class="w" src={buisness} alt="man"/>
      <img src={vector} alt="curtains"/>
    </div>
    </div>
    </>
  )
}
