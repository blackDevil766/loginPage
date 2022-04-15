import React from "react";
import AOS from "aos";


function HomeContiner() {

    AOS.init();
    return (
        <div className="HolPage">

            <div className="continar">
                <div className="topContinarHalf1">


                    <h1 data-aos="fade-right" data-aos-duration="1000" className="topText">Discover The Wold's Most Advanced Online Tool<img src="imgs\chat.svg" alt="" /> </h1>
                    <p data-aos="fade-right" data-aos-duration="1000" className="topPara">Track and analyze all your data in one central location.</p>

                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div className="emailSection">
                            <img className="emailInputLogo" src="imgs\mail.svg" alt="" />
                            <input type="email" className="emailInput" placeholder="Enter Your Email Address"></input>
                            <button type="button" className="emailBtn" > GET STARTED! </button>
                        </div>
                        <p className="sign"><span style={{ marginRight: "20px", marginLeft: "5px" }}><img src="imgs\trueMark.svg" alt="" />  Free 30-Day Trial</span><span><img src="imgs\trueMark.svg" alt="" />  Money Back Guarantee</span></p>
                    </div>


                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className="topContinarHalf2">
                    <img className="openingImg" src="imgs\ui-design.png" alt="" />
                </div>


            </div>
        </div>

    )

}



export default HomeContiner;