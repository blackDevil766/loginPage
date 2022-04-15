import React from "react";

function OurTeam() {

    function TeamItem(props) {
        return (
            <div className="team" data-aos={props.teamAnimate} data-aos-duration="1000">
                <div className="imgsOfOurTeam">
                    <img className="teamImg" src={props.imgTeams} alt="" />
                </div>

                <div className="teamDetalis">
                    <h4>{props.name}</h4>
                    <div className="teamInfo">
                        <p className="jobsDefind">{props.jobs}</p>
                    </div>
                    <p className="teamIdtintfiy">{props.aboutJob}</p>
                    <ul className="iconsList">
                        <li data-aos="fade-up"  data-aos-duration="1000" className="listIcon li1"> <a href="" className="brandIcons"> <img data-aos="fade-down"  data-aos-duration="4000"  src="imgs\icons\twitter.svg" alt="" /> </a> </li>
                        <li data-aos="fade-down" data-aos-duration="1000" className="listIcon li2"> <a href="" className="brandIcons"></a> <img data-aos="fade-up" data-aos-duration="4000" src="imgs\icons\instagram.svg" alt="" /> </li>
                        <li data-aos="fade-up"  data-aos-duration="1000" className="listIcon li3"> <a href="" className="brandIcons"></a> <img data-aos="fade-down"  data-aos-duration="4000"  src="imgs\icons\mic.svg" alt="" /> </li>
                        <li data-aos="fade-down" data-aos-duration="1000" className="listIcon li4"> <a href="" className="brandIcons"></a> <img data-aos="fade-up" data-aos-duration="4000" src="imgs\icons\envelope.svg" alt="" /> </li>
                    </ul>
                </div>
            </div>
        )
    }

    return (
        <div className="OurteamContainer">

            <div className="textCenter">
                <h2 className="teamTitle">Meet Our Team</h2>
            </div>

            <div className="teamsContiner">
                <TeamItem
                teamAnimate = "fade-up-right"
                    name="Christina Hawkings"
                    jobs="Head of SEO"
                    aboutJob="Johnathan is our co-founder and has developed search strategies for a variety of clients for over 5 years."
                    imgTeams="https://demo.epic-webdesign.com/tf-smart/v1/images/team001.jpg" />

                <TeamItem
                teamAnimate = "fade-down"
                    name="Andreas Johansons"
                    jobs="Marketing Manager"
                    aboutJob="Andres fell in love with marketing at the school and looks forward to being part of the industry for years."
                    imgTeams="https://demo.epic-webdesign.com/tf-smart/v1/images/team002.jpg" />

                <TeamItem
                teamAnimate = "fade-up-left"
                    name="Alexandra Smiths"
                    jobs="SEO Specialist"
                    aboutJob="Graduating with a degree in Spanish, English and French, she has always loved writing."
                    imgTeams="https://demo.epic-webdesign.com/tf-smart/v1/images/team003.jpg" />

            </div>
        </div>
    )
}


export default OurTeam;