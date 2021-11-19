import React from 'react';
import av1 from "../images/avatars/avatar-1.png";
import av2 from "../images/avatars/avatar-2.png";
import av3 from "../images/avatars/avatar-3.png";
import av4 from "../images/avatars/avatar-4.png";
import av5 from "../images/avatars/avatar-5.png";

function Reviews() {
    return (
        <div>

            {/* R1 */}
            <div className="media mb-3 mt-5">
                <div className="row g-0">
                    <div className="col-md-1 d-flex justify-content-center align-self-center">
                        <img
                            src={av1}
                            alt="jnshd"
                            style={{ width: '40px' }}
                            className="mr-3"
                        />
                    </div>
                    <div className="col-md-11">
                        <div className="media-body">
                            <h5 className="mt-0">Ibrahim</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* R2 */}
            <div className="media mb-3 mt-5">
                <div className="row g-0">
                    <div className="col-md-1 d-flex justify-content-center align-self-center">
                        <img
                            src={av2}
                            alt="jnshd"
                            style={{ width: '40px' }}
                            className="mr-3"
                        />
                    </div>
                    <div className="col-md-11">
                        <div className="media-body">
                            <h5 className="mt-0">John</h5>
                            <p>Natus exercitationem, omnis perferendis ullam quisquam atque neque excepturi!</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* R3 */}
            <div className="media mb-3 mt-5">
                <div className="row g-0">
                    <div className="col-md-1 d-flex justify-content-center align-self-center">
                        <img
                            src={av3}
                            alt="jnshd"
                            style={{ width: '40px' }}
                            className="mr-3"
                        />
                    </div>
                    <div className="col-md-11">
                        <div className="media-body">
                            <h5 className="mt-0">Ayesha</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* R4 */}
            <div className="media mb-3 mt-5">
                <div className="row g-0">
                    <div className="col-md-1 d-flex justify-content-center align-self-center">
                        <img
                            src={av4}
                            alt="jnshd"
                            style={{ width: '40px' }}
                            className="mr-3"
                        />
                    </div>
                    <div className="col-md-11">
                        <div className="media-body">
                            <h5 className="mt-0">Bob</h5>
                            <p>Natus exercitationem, omnis perferendis ullam quisquam atque neque excepturi!</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* R5 */}
            <div className="media mb-3 mt-5">
                <div className="row g-0">
                    <div className="col-md-1 d-flex justify-content-center align-self-center">
                        <img
                            src={av5}
                            alt="jnshd"
                            style={{ width: '40px' }}
                            className="mr-3"
                        />
                    </div>
                    <div className="col-md-11">
                        <div className="media-body">
                            <h5 className="mt-0">Rida</h5>
                            <p>Eligendi at cum, fugiat tempore inventore possimus dolorum, quas minima ea eius veniam.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Reviews;
