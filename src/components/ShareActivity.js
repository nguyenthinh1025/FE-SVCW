import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

export default function ShareActivity (props) {
    const { share, handleClickShare, popupStyleShare, activityId } = props;

    return (
        <div>
            {share === true ? (
                <div className="post-new-popup" style={popupStyleShare}>
                    <div
                        className="popup"
                        style={{ width: 800, marginTop: '0px', zIndex: 80 }}
                    >
                        <span className="popup-closed" onClick={handleClickShare}>
                            <i className="icofont-close" />
                        </span>
                        <div className="popup-meta">
                            <div className="popup-head">
                                <h5>
                                    <i>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-plus"
                                        >
                                            <line x1={12} y1={5} x2={12} y2={19} />
                                            <line x1={5} y1={12} x2={19} y2={12} />
                                        </svg>
                                    </i>
                                    Chia sẻ bài viết
                                </h5>
                            </div>
                        </div>

                        <div className="" style={{ textAlign: 'center', fontSize: '20px', paddingTop: '50px' }}>
                            <NavLink to={`/detailactivity/${activityId}`}>
                                {` http://localhost:3000/detailactivity/${activityId}`}

                            </NavLink>
                        </div>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    )
}
