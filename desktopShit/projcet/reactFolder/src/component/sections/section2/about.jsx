import React from "react";
import TestmoniaksMaker,{TrustedCard, HowItWorkMaker} from "./testmoniaksMaker";


function TestimonialsSection() {

    


    function ClikeDiscover() {
        window.scrollTo(0, 0);
    }

   

    return (

        <div>

            <div className="HowItWork">
                <h2 data-aos="zoom-in-up" data-aos-duration="1000" className="HowItWorkMainWord">How It Works</h2>

                <div className="howItWork" >
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <HowItWorkMaker
                            icon="imgs\megaphone.svg"
                            title="Search Oportunities"
                            meaning="Curabitur quamtis etsum lacus etsumis nulatis iaculis etsum vitae etsum ets nisle varius."
                        />
                    </div>


                    <div data-aos="fade-up" data-aos-duration="1000">
                        <HowItWorkMaker
                            icon="imgs\gem.svg"
                            title="Reach Clients"
                            meaning="Curabitur quamtis etsum lacus etsumis nulatis iaculis etsum vitae etsum ets nisle varius."
                        />
                    </div>


                    <div data-aos="fade-left" data-aos-duration="1000">
                        <HowItWorkMaker
                            icon="imgs\speedometer.svg"
                            title="Get Rewarded"
                            meaning="Curabitur quamtis etsum lacus etsumis nulatis iaculis etsum vitae etsum ets nisle varius."
                        />
                    </div>



                </div>
            </div>



            <div className="ShowCaseOfTrusting">



                <div style={{ height: "550px" }} id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel" >

                    <div data-aos="fade-down" data-aos-duration="1000">
                        <div id="carsoul__nav" class="carousel-indicators">
                            <button id="carsoul-btn__indecator" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button id="carsoul-btn__indecator" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button id="carsoul-btn__indecator" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>


                        <div class="carousel-item active" data-bs-interval="10000">
                            <TestmoniaksMaker
                                testClass="testmonialContianer"
                                class="testmonialsIntreVideo"
                                img="imgs\testimonials3.jpg"
                                text="Nemo enimat ipsam voluptatem quia voluptas situm ets aspernatis netsum loris fugit,sed quia magnitus honoratis quis ratione sequi etum nets."
                                brandName="JENNIFER SMITH — Designer"
                                brandType="@EpicThemes"
                            />
                        </div>

                        <div class="carousel-item" data-bs-interval="2000">
                            <TestmoniaksMaker
                                testClass="testmonialContianer"
                                class="testmonialsIntreVideo"
                                img="https://demo.epic-webdesign.com/tf-smart/v1/images/testimonials2.jpg"
                                text="Nemo enimat ipsam voluptatem quia voluptas situm ets aspernatis netsum loris fugit,sed quia magnitus honoratis quis ratione sequi etum nets."
                                brandName="JOHN DOE — General Manager"
                                brandType="@BeSmart"

                            />
                        </div>

                        <div class="carousel-item">
                            <TestmoniaksMaker
                                testClass="testmonialContianer"
                                class="testmonialsIntreVideo"
                                img="	https://demo.epic-webdesign.com/tf-smart/v1/images/testimonials1.jpg"
                                text="Nemo enimat ipsam voluptatem quia voluptas situm ets aspernatis netsum loris fugit,sed quia magnitus honoratis quis ratione sequi etum nets."
                                brandName="EMILY RICHARDS — Copywriter"
                                brandType="@Books-Online"

                            />
                        </div>
                    </div>



                </div>

                <div className="trustDiv">
                    <div className="TrustedSection">
                        <h3 className="midTitle">Trusted By Over 9,000+ Businesses</h3>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="1000" className="trustedBusness">
                        <TrustedCard img="https://demo.epic-webdesign.com/tf-smart/v1/images/partner1.png" />
                        <TrustedCard img="https://demo.epic-webdesign.com/tf-smart/v1/images/partner2.png" />
                        <TrustedCard img="https://demo.epic-webdesign.com/tf-smart/v1/images/partner3.png" />
                        <TrustedCard img="https://demo.epic-webdesign.com/tf-smart/v1/images/partner4.png" />
                        <TrustedCard img="https://demo.epic-webdesign.com/tf-smart/v1/images/partner5.png" />

                        <div data-aos="fade-up" data-aos-duration="1000" className="trustedBusnessNextLine">
                            <TrustedCard img="https://demo.epic-webdesign.com/tf-smart/v1/images/partner6.png" />
                            <TrustedCard img="https://demo.epic-webdesign.com/tf-smart/v1/images/partner7.png" />
                            <TrustedCard img="https://demo.epic-webdesign.com/tf-smart/v1/images/partner9.png" />
                            <TrustedCard img="https://demo.epic-webdesign.com/tf-smart/v1/images/partner8.png" />
                        </div>
                    </div>
                </div>


                {/* next part  Discover */}

                <div className="discoverContiner">
                    <div className="descoverSection1">
                        <div data-aos="zoom-in" data-aos-duration="1000">
                            <h3 className="DicoverText">Discover how we can help you to grow your business fast.</h3>
                            <p>Anticas quia voluptas sit aspernatur netsum demo ets ipsam voluptatem lorem fugit, seditum netis velas net nesciunt.</p>

                            <ul className="benefits">
                                <li> <img src="imgs\trueMark.svg" alt="" /> Quias netus magni netsum qui ratione sequi.</li>
                                <li> <img src="imgs\trueMark.svg" alt="" /> Venis ratione sequi netus enim tempor magni.</li>
                                <li> <img src="imgs\trueMark.svg" alt="" /> Enim ipsam netus voluptatem voluptas.</li>
                            </ul>

                            <button onClick={ClikeDiscover} type="button" className="DiscoverBtn btn btn-primary">Discover More</button>
                        </div>
                    </div>

                    <div data-aos="zoom-in" data-aos-duration="1000" className="discoverSection2">
                        <img src="https://demo.epic-webdesign.com/tf-smart/v1/images/digital-marketing.png" alt="" />
                    </div>
                </div>


                {/* next part  facts ahency*/}


                <div className="aboutAhency">
                    <h3 className="funH3">Fun Facts About Our Agency</h3>
                    <div className="ahency">
                        <ul className="AhencyIcons">

                            <div data-aos="fade-left" data-aos-duration="1000" className="iconsContainer">
                                <li><img src="imgs\gift.svg" alt="" /></li>
                                <p className="fun"><span className="funSpan">1050+</span> Projects Completed</p>
                            </div>

                            <div data-aos="fade-left" data-aos-duration="1000" className="iconsContainer">
                                <li><img src="imgs\heart.svg" alt="" /></li>
                                <p className="fun"><span className="funSpan">217K</span> Happy Clients</p>
                            </div>

                            <div data-aos="zoom-in" data-aos-duration="1000" className="iconsContainer">
                                <li><img src="imgs\award.svg" alt="" /></li>
                                <p className="fun"><span className="funSpan">1210</span> Disign Awards</p>
                            </div>

                            <div data-aos="fade-right" data-aos-duration="1000" className="iconsContainer">
                                <li><img src="imgs\basket.svg" alt="" /></li>
                                <p className="fun"><span className="funSpan">217K</span>Happy Clients</p>
                            </div>

                            <div data-aos="fade-right" data-aos-duration="1000" className="iconsContainer">
                                <li><img src="imgs\bell.svg" alt="" /></li>
                                <p className="fun"><span className="funSpan">2137</span> Line Of Codes</p>
                            </div>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    )
}


export default TestimonialsSection;