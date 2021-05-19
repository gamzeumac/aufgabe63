import React from 'react'

function Card() {
    return (
        <div className="row sec-cards">
            <div className="col-12 col-md-11 col-lg-5 border">
                <img src="./images/mountain.jpg" alt=""/>
            
            <div>
            <h4>Mountains</h4>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
            </div>  
            </div>   
            <div className="col-12 col-md-11 col-lg-5 border">
                <img src="./images/surfer.jpg" alt="" />                                
                 
            <div>
            <h4>Surfer</h4>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
            </div>
            </div>  
            <div className="col-12 col-md-11 col-lg-5 border">
                <img src="./images/tree.jpg" alt="" />                                
                  
            <div>
            <h4>Tree</h4>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
            </div></div> 
        </div>
    )
}
export default Card;