import React from "react";

function Blog() {

    function BlogTable(props) {
        return (
            <div data-aos= {props.animtion} data-aos-duration="1500" className="bloggy">
                <div className="imgsOfBlog">
                    <div className="coverImg"></div>
                        <div className="middle">
                            <img src="imgs\link.svg" />
                        </div>
                    <img className="blogImg" src={props.BlogImg} alt="" />
                </div>

                <div className="blogDetalis">
                    <div className="blogInfo">
                        <h3 >
                            <a className="blogLink" href="#">{props.blogTitle}</a>
                        </h3>
                        <a className="blogDefind"> <img src={props.icon} alt="" /> {props.blogDefind}</a>
                    </div>
                    <p className="blogIdtintfiy">{props.blogText}</p>

                </div>
            </div>
        )
    }

    return (
        <div className="continer4">
            <div className="blogContiner">
                <div className="blog">
                    <h2 data-aos="fade-down" data-aos-duration="1500" className="blogTitle">Our Blog</h2>
                    <div className="blogs">
                        <BlogTable animtion = "fade-left" icon="imgs\card.svg" BlogImg="https://demo.epic-webdesign.com/tf-smart/v1/images/blog4.jpg" blogTitle="The Guide To LinkedIn Ads" blogDefind="Marketing & Design — 11 Min Read" blogText="Quis autem velis reprehender nets quiste voluptate velite estum quants etsamis sedit varias nets." />
                        <BlogTable animtion = "fade-down" icon="imgs\playInCircle.svg" BlogImg="https://demo.epic-webdesign.com/tf-smart/v1/images/blog2.jpg" blogTitle="The Guide To LinkedIn Ads" blogDefind="Marketing & Design — 11 Min Read" blogText="Quis autem velis reprehender nets quiste voluptate velite estum quants etsamis sedit varias nets." />
                        <BlogTable animtion = "fade-right" icon="imgs\mic.svg" BlogImg="https://demo.epic-webdesign.com/tf-smart/v1/images/blog3.jpg" blogTitle="The Guide To LinkedIn Ads" blogDefind="Marketing & Design — 11 Min Read" blogText="Quis autem velis reprehender nets quiste voluptate velite estum quants etsamis sedit varias nets." />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Blog;