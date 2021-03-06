import React from "react";
import { Link } from "react-router-dom";



class Home extends React.Component {

    render() {
        return (
            <div>
                <div className="video-component jumbo">
                    <video muted="true" autoplay="true" loop playsinline="true">
                        <source type="video/mp4" src="https://d3ss0gp3e5d7m3.cloudfront.net/assets/images/gateway-stitch-fix-video.10yH0.mp4" />
                    </video>
                    <div className="button-area container height-100">
                        <div className="row center justify-center height-100">
                            <div className="col-center">
                                <Link className="button-primary" to="/signup">TAKE YOUR STYLE QUIZ</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col title-1 text-center">
                            <h2>We'll Find Style For Your Life</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <div className="description">
                                <p>With clothing hand selected by our expert stylists for your unique size & style,
                                you’ll always look and feel your best. No subscription required.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col picture-links">
                            <img src="https://d3ss0gp3e5d7m3.cloudfront.net/assets/images/women@1x.3EGxS.jpg" alt="" />
                            <span>Women</span>
                        </div>
                        <div className="col picture-links">
                            <img src="https://d3ss0gp3e5d7m3.cloudfront.net/assets/images/men@1x.ze6gY.jpg" alt="" />
                            <span>Men</span>
                        </div>
                        <div className="col picture-links">
                            <img src="https://d3ss0gp3e5d7m3.cloudfront.net/assets/images/kids@1x.1oBXa.jpg" alt="" />
                            <span>Kids</span>
                        </div>
                    </div>
                </div>

                <div className="container list-container">
                    <div className="list-border">
                        <div className="row">
                            <div className="col text-center">
                                <h2 className="list-title">How Stitch Fix Works</h2>
                            </div>
                        </div>
                        <ol className="row list-ol">
                            <li className="col list-li">
                                <p>
                                    <strong>Tell us your price range,</strong> size & style. You’ll pay just a $20
                                        styling fee, which gets credited toward pieces you keep.
                                    </p>
                            </li>
                            <li className="col list-li">
                                <p>
                                    <strong>Get a Fix when you want.</strong> Try on pieces at home before you buy.
                                            Keep your favorites, send back the rest.
                                    </p>
                            </li>
                            <li className="col list-li-last">
                                <p>

                                    <strong>Free shipping, returns & exchanges</strong>—a prepaid return envelope is included.
                                        There are no hidden fees, ever.
                                    </p>
                            </li>
                        </ol>
                    </div>

                </div>
            </div>
        )
    }
}

export default Home;