import React, {memo} from "react";
import {Link} from "react-router-dom";
import './footer.css';

function Footer() {
    return (
        <footer>
            <div className="row" style={{margin:"auto"}}>
                <div className="col-12 col-md-4 " style={{margin:"auto"}}>

                </div>
                <div className="col-12 col-md-4 " style={{margin:"auto"}}>
                    <div className="col-12" style={{marginLeft:"30px"}}>
                        <h6>Retrouvez-nous sur les réseaux sociaux !</h6>
                    </div>
                </div>
                <div className="col-12 col-md-4 " style={{margin:"auto"}}>
                    <div className="row" style={{margin:"auto"}}>
                        <div className="col-2">
                            <Link to="https://www.facebook.com/MacademiaFrance" target="_blank">
                                <img className="footer-social" src="/img/fb.png" alt={"Logo Facebook"}/>
                            </Link>
                        </div>
                        <div className="col-2">
                            <Link to="https://www.twitter.com/MacademiaFrance" target="_blank">
                                <img className="footer-social" src="/img/twit.png" alt={"Logo Twitter"}/>
                            </Link>
                        </div>
                        <div className="col-2">
                            <Link to="https://www.instagram.com/MacademiaFrance" target="_blank">
                                <img className="footer-social" src="/img/insta.png" alt={"Logo Instagram"}/>
                            </Link>
                        </div>
                        <div className="col-2">
                            <Link to="https://www.linkedin.com/company/MacademiaFrance" target="_blank">
                                <img className="footer-social" src="/img/lin.png" alt={"Logo Linkedin"}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default memo(Footer);
