import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <Fot className="row">
                        {/* Column 1 */}
                        <div className="col-md-4">
                            <h4>CityGuide Details</h4>
                            <hr />
                            <p className="text-white me-5">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                
                            </p>
                        </div>

                        {/* Column 2 */}
                        <div className="col-md-4">
                            <h4>Quick Links</h4>
                            <hr />
                            <div><Link to="/">Home</Link></div>
                            <div><Link to="/news">News</Link></div>
                            <div><Link to="/contact">Contact Us</Link></div>
                            <div><Link to="/details">Details</Link></div>
                        </div>

                        {/* Column 3 */}
                        <div className="col-md-4 ai">
                            <h4>Other Information</h4>
                            <hr />
                            <div><p className="text-white mb-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></div>
                            <div><p className="text-white mb-1">+91 899123918</p></div>
                            <div><p className="text-white mb-1">+91 393363663</p></div>
                            <div><p className="text-white mb-1">email@domain.com</p></div>
                        </div>

                    </Fot>

                    {/*Footer Bottom  */}
                    <div className="footer-bottom">
                        <p className="text-xs-center text-center">
                            &copy; {new Date().getFullYear()}, City guide Website- All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
.footer-middle {
background: var(--mainDark);
padding-top: 3rem;
color: var(--mainWhite)
}

.footer-middle a {
    color: var(--mainWhite);
    text-decoration: none;
    transition: all 0.5s ease-out;

}

.footer-middle a: hover{
    color: var(--mainLightGrey);
    
}

.footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
}

`
    ;
    const Fot = styled.div`
    @media(max-width: 728px) {
    
    .ai {
        margin-top: 1rem;
    }
    
    
    }

    
    `;
