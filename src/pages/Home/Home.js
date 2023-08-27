
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Clock from '../../components/Clock'
import { GetUserByIdAction, GetUserBystatisticAction, } from '../../redux/actions/UserAction';
import { useDispatch, useSelector } from 'react-redux';
import { GetProfileByIdAction } from '../../redux/actions/ProfileAction';
import CompleteInfo from '../../components/CompleteInfo';
import CreateActivity from '../../components/CreateActivity';
import SuggestedFanpage from './SuggestedFanpage';
import { GetListFanpageAction } from '../../redux/actions/FanpageAction';
import { GetActivityTitleAction, GetListActivityAction, GetListEndActivityAction } from '../../redux/actions/ActivityAction';
import ItemEndActivity from '../../components/ItemEndActivity';
import ListEndActivity from '../../components/ListEndActivity';
import YourFanpage from '../../components/YourFanpage';
import { GetListReportAction, GetListReportByTypeAction } from '../../redux/actions/ReportAction';
import EndActivity from '../Profile/EndActivity';
export default function Home (props) {
    const dispatch = useDispatch()
    const { userID } = useSelector((root) => root.LoginReducer);
    const { arrFanpage } = useSelector((root) => root.FanpageReducer);
    const { arrActivity, activityId, arrActivityRecomment } = useSelector((root) => root.ActivityReducer);
    const { arrEndActivity } = useSelector((root) => root.EndActivityReducer);
    console.log(localStorage.getItem('title'));
    useEffect(() => {
        const user = localStorage.getItem('userID');
        if (user) {
            console.log('có user');
            const action3 = GetListActivityAction();
            dispatch(action3)
            const action = GetUserByIdAction(localStorage.getItem('userID'));
            dispatch(action);
            const action1 = GetProfileByIdAction(userID);
            dispatch(action1)
            const action2 = GetListFanpageAction();
            dispatch(action2)
            const action4 = GetListReportAction();
            dispatch(action4);
            const action5 = GetListEndActivityAction();
            dispatch(action5)


        } else {
            alert('Vui lòng đăng nhập để trải nghiệm tốt hơn');
            props.history.push('/');
        }
    }, []);

    return (
        <div className="theme-layout">
            <section>
                <div className="gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div id="page-contents" className="row merged20">
                                    <div className="col-lg-3">
                                        <aside className="sidebar static left">
                                            <Clock />
                                            <CompleteInfo />
                                        </aside>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="filtr-tabs nav nav-tabs about-btn">
                                            <li className="nav-item">
                                                <a
                                                    className="active"
                                                    href="#home"
                                                    data-toggle="tab"
                                                >
                                                    Trang chủ
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className href="#endactivity" data-toggle="tab">
                                                    Danh sách kết thúc chiến dịch
                                                </a>
                                            </li>
                                            {/* <li><NavLink className="active" to="/home" title>Trang chủ</NavLink></li>
                                            <li><NavLink to="/endactivity" title>Chiến dịch đã kết thúc</NavLink></li> */}

                                        </ul>{/* tab buttons */}
                                        <div className="tab-content">
                                            <div className=" tab-pane active fade show " id="home">
                                                <CreateActivity />
                                                <SuggestedFanpage arrFanpage={arrFanpage} />
                                                <ListEndActivity arrActivity={arrActivity} />
                                                <div className="loadmore">
                                                    <div className="sp sp-bars" />
                                                    <a href="#" title data-ripple>Load More..</a>
                                                </div>
                                            </div>
                                            <div className=" tab-pane fade" id="endactivity">
                                                <SuggestedFanpage arrFanpage={arrFanpage} />
                                                <ListEndActivity arrActivity={arrEndActivity} />
                                            </div>
                                        </div>
                                    </div>
                                    <YourFanpage />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{/* content */}
            <figure className="bottom-mockup"><img src="images/footer.png" alt /></figure>
            <div className="bottombar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className>© copyright All rights reserved by socimo 2020</span>
                        </div>
                    </div>
                </div>
            </div>{/* bottombar */}
            <div className="wraper-invite">
                <div className="popup">
                    <span className="popup-closed"><i className="icofont-close" /></span>
                    <div className="popup-meta">
                        <div className="popup-head">
                            <h5><i>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                    </path>
                                    <polyline points="22,6 12,13 2,6" />
                                </svg></i> Invite Colleagues</h5>
                        </div>
                        <div className="invitation-meta">
                            <p>
                                Enter an email address to invite a colleague or co-author to join you on socimo. They will
                                receive an email and, in some cases, up to two reminders.
                            </p>
                            <form method="post" className="c-form">
                                <input type="text" placeholder="Enter Email" />
                                <button type="submit" className="main-btn">Invite</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>{/* invite colleague popup */}
            <div className="popup-wraper">
                <div className="popup">
                    <span className="popup-closed"><i className="icofont-close" /></span>
                    <div className="popup-meta">
                        <div className="popup-head">
                            <h5><i>
                                <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg></i> Send Message</h5>
                        </div>
                        <div className="send-message">
                            <form method="post" className="c-form">
                                <input type="text" placeholder="Enter Name.." />
                                <input type="text" placeholder="Subject" />
                                <textarea placeholder="Write Message" defaultValue={""} />
                                <div className="uploadimage">
                                    <i className="icofont-file-jpg" />
                                    <label className="fileContainer">
                                        <input type="file" />Attach file
                                    </label>
                                </div>
                                <button type="submit" className="main-btn">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>{/* send message popup */}
            <div className="side-slide">
                <span className="popup-closed"><i className="icofont-close" /></span>
                <div className="slide-meta">
                    <ul className="nav nav-tabs slide-btns">
                        <li className="nav-item"><a className="active" href="#messages" data-toggle="tab">Messages</a></li>
                        <li className="nav-item"><a className href="#notifications" data-toggle="tab">Notifications</a></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active fade show" id="messages">
                            <h4><i className="icofont-envelope" /> messages</h4>
                            <a href="#" className="send-mesg" title="New Message" data-toggle="tooltip"><i className="icofont-edit" /></a>
                            <ul className="new-messages">
                                <li>
                                    <figure><img src="images/resources/user1.jpg" alt /></figure>
                                    <div className="mesg-info">
                                        <span>Ibrahim Ahmed</span>
                                        <a href="#" title>Helo dear i wanna talk to you</a>
                                    </div>
                                </li>
                                <li>
                                    <figure><img src="images/resources/user2.jpg" alt /></figure>
                                    <div className="mesg-info">
                                        <span>Fatima J.</span>
                                        <a href="#" title>Helo dear i wanna talk to you</a>
                                    </div>
                                </li>
                                <li>
                                    <figure><img src="images/resources/user3.jpg" alt /></figure>
                                    <div className="mesg-info">
                                        <span>Fawad Ahmed</span>
                                        <a href="#" title>Helo dear i wanna talk to you</a>
                                    </div>
                                </li>
                                <li>
                                    <figure><img src="images/resources/user4.jpg" alt /></figure>
                                    <div className="mesg-info">
                                        <span>Saim Turan</span>
                                        <a href="#" title>Helo dear i wanna talk to you</a>
                                    </div>
                                </li>
                                <li>
                                    <figure><img src="images/resources/user5.jpg" alt /></figure>
                                    <div className="mesg-info">
                                        <span>Alis wells</span>
                                        <a href="#" title>Helo dear i wanna talk to you</a>
                                    </div>
                                </li>
                            </ul>
                            <a href="#" title className="main-btn" data-ripple>view all</a>
                        </div>
                        <div className="tab-pane fade" id="notifications">
                            <h4><i className="icofont-bell-alt" /> notifications</h4>
                            <ul className="notificationz">
                                <li>
                                    <figure><img src="images/resources/user5.jpg" alt /></figure>
                                    <div className="mesg-info">
                                        <span>Alis wells</span>
                                        <a href="#" title>recommend your post</a>
                                    </div>
                                </li>
                                <li>
                                    <figure><img src="images/resources/user4.jpg" alt /></figure>
                                    <div className="mesg-info">
                                        <span>Alis wells</span>
                                        <a href="#" title>share your post <strong>a good time today!</strong></a>
                                    </div>
                                </li>
                                <li>
                                    <figure><img src="images/resources/user2.jpg" alt /></figure>
                                    <div className="mesg-info">
                                        <span>Alis wells</span>
                                        <a href="#" title>recommend your post</a>
                                    </div>
                                </li>
                                <li>
                                    <figure><img src="images/resources/user1.jpg" alt /></figure>
                                    <div className="mesg-info">
                                        <span>Alis wells</span>
                                        <a href="#" title>share your post <strong>a good time today!</strong></a>
                                    </div>
                                </li>
                                <li>
                                    <figure><img src="images/resources/user3.jpg" alt /></figure>
                                    <div className="mesg-info">
                                        <span>Alis wells</span>
                                        <a href="#" title>recommend your post</a>
                                    </div>
                                </li>
                            </ul>
                            <a href="#" title className="main-btn" data-ripple>view all</a>
                        </div>
                    </div>
                </div>
            </div>{/* side slide message & popup */}
            <div className="post-new-popup">
                <div className="popup" style={{ width: 800 }}>
                    <span className="popup-closed"><i className="icofont-close" /></span>
                    <div className="popup-meta">
                        <div className="popup-head">
                            <h5><i>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                                    <line x1={12} y1={5} x2={12} y2={19} />
                                    <line x1={5} y1={12} x2={19} y2={12} />
                                </svg></i>Create New Post</h5>
                        </div>
                        <div className="post-new">
                            <div className="post-newmeta">
                                <ul className="post-categoroes">
                                    <li><i className="icofont-camera" /> Photo / Video</li>
                                    <li><i className="icofont-google-map" /> Post Location</li>
                                    <li><i className="icofont-file-gif" /> Post Gif</li>
                                    <li><i className="icofont-ui-tag" /> Tag to Friend</li>
                                    <li><i className="icofont-users" /> Share in Group</li>
                                    <li><i className="icofont-link" /> Share Link</li>
                                    <li><i className="icofont-video-cam" /> Go Live</li>
                                    <li><i className="icofont-sale-discount" /> Post Online Course</li>
                                    <li><i className="icofont-read-book" /> Post A Book</li>
                                    <li><i className="icofont-globe" /> Post an Ad</li>
                                </ul>
                                <form method="post" className="dropzone" action="/upload-target">
                                    <div className="fallback">
                                        <input name="file" type="file" multiple />
                                    </div>
                                </form>
                            </div>
                            <form method="post" className="c-form">
                                <textarea id="emojionearea1" placeholder="What's On Your Mind?" defaultValue={""} />
                                <div className="activity-post">
                                    <div className="checkbox">
                                        <input type="checkbox" id="checkbox" defaultChecked />
                                        <label htmlFor="checkbox"><span>Activity Feed</span></label>
                                    </div>
                                    <div className="checkbox">
                                        <input type="checkbox" id="checkbox2" defaultChecked />
                                        <label htmlFor="checkbox2"><span>My Story</span></label>
                                    </div>
                                </div>
                                <div className="select-box">
                                    <div className="select-box__current" tabIndex={1}>
                                        <div className="select-box__value"><input className="select-box__input" type="radio" id={0} defaultValue={1} name="Ben" defaultChecked="checked" />
                                            <p className="select-box__input-text"><i className="icofont-globe-alt" /> Public</p>
                                        </div>
                                        <div className="select-box__value"><input className="select-box__input" type="radio" id={1} defaultValue={2} name="Ben" defaultChecked="checked" />
                                            <p className="select-box__input-text"><i className="icofont-lock" /> Private</p>
                                        </div>
                                        <div className="select-box__value"><input className="select-box__input" type="radio" id={2} defaultValue={3} name="Ben" defaultChecked="checked" />
                                            <p className="select-box__input-text"><i className="icofont-user" /> Specific Friend
                                            </p>
                                        </div>
                                        <div className="select-box__value"><input className="select-box__input" type="radio" id={3} defaultValue={4} name="Ben" defaultChecked="checked" />
                                            <p className="select-box__input-text"><i className="icofont-star" /> Only Friends</p>
                                        </div>
                                        <div className="select-box__value"><input className="select-box__input" type="radio" id={4} defaultValue={5} name="Ben" defaultChecked="checked" />
                                            <p className="select-box__input-text"><i className="icofont-users-alt-3" /> Joined
                                                Groups</p>
                                        </div>
                                        <img className="select-box__icon" src="images/arrow-down.svg" alt="Arrow Icon" aria-hidden="true" />
                                    </div>
                                    <ul className="select-box__list">
                                        <li><label className="select-box__option" htmlFor={0}><i className="icofont-globe-alt" />
                                            Public</label></li>
                                        <li><label className="select-box__option" htmlFor={1}><i className="icofont-lock" />
                                            Private</label></li>
                                        <li><label className="select-box__option" htmlFor={2}><i className="icofont-user" /> Specific
                                            Friend</label></li>
                                        <li><label className="select-box__option" htmlFor={3}><i className="icofont-star" /> Only
                                            Friends</label></li>
                                        <li><label className="select-box__option" htmlFor={4}><i className="icofont-users-alt-3" />
                                            Joined Groups</label></li>
                                    </ul>
                                </div>
                                <input className="schedule-btn" type="text" id="datetimepicker" readOnly />
                                <input type="text" placeholder="https://www.youtube.com/watch?v=vgvsuiFlA-Y&t=56s" />
                                <button type="submit" className="main-btn">Publish</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>{/* New post popup */}
            <div className="new-question-popup">
                <div className="popup">
                    <span className="popup-closed"><i className="icofont-close" /></span>
                    <div className="popup-meta">
                        <div className="popup-head">
                            <h5><i>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle">
                                    <circle cx={12} cy={12} r={10} />
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                    <line x1={12} y1={17} x2="12.01" y2={17} />
                                </svg></i> Ask Question</h5>
                        </div>
                        <div className="post-new">
                            <form method="post" className="c-form">
                                <input type="text" placeholder="Question Title" />
                                <textarea placeholder="Write Question" defaultValue={""} />
                                <select>
                                    <option>Select Your Question Type</option>
                                    <option>Article</option>
                                    <option>Book</option>
                                    <option>Chapter</option>
                                    <option>Code</option>
                                    <option>conference Paper</option>
                                    <option>Cover Page</option>
                                    <option>Data</option>
                                    <option>Exprement Finding</option>
                                    <option>Method</option>
                                    <option>Poster</option>
                                    <option>Preprint</option>
                                    <option>Technicial Report</option>
                                    <option>Thesis</option>
                                    <option>Research</option>
                                </select>
                                <div className="uploadimage">
                                    <i className="icofont-eye-alt-alt" />
                                    <label className="fileContainer">
                                        <input type="file" />Upload File
                                    </label>
                                </div>
                                <button type="submit" className="main-btn">Post</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>{/* ask question */}

            <div className="share-wraper">
                <div className="share-options">
                    <span className="close-btn"><i className="icofont-close-circled" /></span>
                    <h5><i>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share">
                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                            <polyline points="16 6 12 2 8 6" />
                            <line x1={12} y1={2} x2={12} y2={15} />
                        </svg></i>Share To!</h5>
                    <form method="post">
                        <textarea placeholder="Write Something" defaultValue={""} />
                    </form>
                    <ul>
                        <li><a title href="#">Your Timeline</a></li>
                        <li className="friends"><a title href="#">To Friends</a></li>
                        <li className="socialz"><a className="active" title href="#">Social Media</a></li>
                    </ul>
                    <div style={{ display: 'block' }} className="social-media">
                        <ul>
                            <li><a title href="#" className="facebook"><i className="icofont-facebook" /></a></li>
                            <li><a title href="#" className="twitter"><i className="icofont-twitter" /></a></li>
                            <li><a title href="#" className="instagram"><i className="icofont-instagram" /></a></li>
                            <li><a title href="#" className="pinterest"><i className="icofont-pinterest" /></a></li>
                            <li><a title href="#" className="youtube"><i className="icofont-youtube" /></a></li>
                            <li><a title href="#" className="dribble"><i className="icofont-dribbble" /></a></li>
                            <li><a title href="#" className="behance"><i className="icofont-behance-original" /></a></li>
                        </ul>
                    </div>
                    <div style={{ display: 'none' }} className="friends-to">
                        <div className="follow-men">
                            <figure><img className="mCS_img_loaded" src="images/resources/user1.jpg" alt /></figure>
                            <div className="follow-meta">
                                <h5><a href="#" title>Jack Carter</a></h5>
                                <span>family member</span>
                            </div>
                            <a href="#" title>Share</a>
                        </div>
                        <div className="follow-men">
                            <figure><img className="mCS_img_loaded" src="images/resources/user2.jpg" alt /></figure>
                            <div className="follow-meta">
                                <h5><a href="#" title>Xang Ching</a></h5>
                                <span>Close Friend</span>
                            </div>
                            <a href="#" title>Share</a>
                        </div>
                        <div className="follow-men">
                            <figure><img className="mCS_img_loaded" src="images/resources/user3.jpg" alt /></figure>
                            <div className="follow-meta">
                                <h5><a href="#" title>Emma Watson</a></h5>
                                <span>Matul Friend</span>
                            </div>
                            <a href="#" title>Share</a>
                        </div>
                    </div>
                    <button type="submit" className="main-btn">Publish</button>
                </div>
            </div>{/* share post */}


            <div className="modal fade" id="img-comt">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            <div className="row merged">
                                <div className="col-lg-9">
                                    <div className="pop-image">
                                        <div className="pop-item">
                                            <div className="action-block">
                                                <a className="action-button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-tag">
                                                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                                                        <line x1={7} y1={7} x2="7.01" y2={7} />
                                                    </svg>
                                                </a>
                                                <a className="action-button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin">
                                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                        <circle cx={12} cy={10} r={3} />
                                                    </svg>
                                                </a>
                                                <a className="action-button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down">
                                                        <line x1={12} y1={5} x2={12} y2={19} />
                                                        <polyline points="19 12 12 19 5 12" />
                                                    </svg>
                                                </a>
                                                <a className="action-button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
                                                        <circle cx={12} cy={12} r={1} />
                                                        <circle cx={12} cy={5} r={1} />
                                                        <circle cx={12} cy={19} r={1} />
                                                    </svg>
                                                </a>
                                            </div>
                                            <figure><img src="images/resources/blog-detail.jpg" alt /></figure>
                                            <div className="stat-tools">
                                                <div className="box">
                                                    <div className="Like"><a className="Like__link"><i className="icofont-like" />
                                                        Like</a>
                                                        <div className="Emojis">
                                                            <div className="Emoji Emoji--like">
                                                                <div className="icon icon--like" />
                                                            </div>
                                                            <div className="Emoji Emoji--love">
                                                                <div className="icon icon--heart" />
                                                            </div>
                                                            <div className="Emoji Emoji--haha">
                                                                <div className="icon icon--haha" />
                                                            </div>
                                                            <div className="Emoji Emoji--wow">
                                                                <div className="icon icon--wow" />
                                                            </div>
                                                            <div className="Emoji Emoji--sad">
                                                                <div className="icon icon--sad" />
                                                            </div>
                                                            <div className="Emoji Emoji--angry">
                                                                <div className="icon icon--angry" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="box">
                                                    <div className="Emojis">
                                                        <div className="Emoji Emoji--like">
                                                            <div className="icon icon--like" />
                                                        </div>
                                                        <div className="Emoji Emoji--love">
                                                            <div className="icon icon--heart" />
                                                        </div>
                                                        <div className="Emoji Emoji--haha">
                                                            <div className="icon icon--haha" />
                                                        </div>
                                                        <div className="Emoji Emoji--wow">
                                                            <div className="icon icon--wow" />
                                                        </div>
                                                        <div className="Emoji Emoji--sad">
                                                            <div className="icon icon--sad" />
                                                        </div>
                                                        <div className="Emoji Emoji--angry">
                                                            <div className="icon icon--angry" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <a title href="#" className="share-to"><i className="icofont-share-alt" />
                                                    Share</a>
                                                <div className="emoji-state">
                                                    <div className="popover_wrapper">
                                                        <a className="popover_title" href="#" title><img alt src="images/smiles/thumb.png" /></a>
                                                        <div className="popover_content">
                                                            <span><img alt src="images/smiles/thumb.png" /> Likes</span>
                                                            <ul className="namelist">
                                                                <li>Jhon Doe</li>
                                                                <li>Amara Sin</li>
                                                                <li>Sarah K.</li>
                                                                <li><span>20+ more</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="popover_wrapper">
                                                        <a className="popover_title" href="#" title><img alt src="images/smiles/heart.png" /></a>
                                                        <div className="popover_content">
                                                            <span><img alt src="images/smiles/heart.png" /> Love</span>
                                                            <ul className="namelist">
                                                                <li>Amara Sin</li>
                                                                <li>Jhon Doe</li>
                                                                <li><span>10+ more</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="popover_wrapper">
                                                        <a className="popover_title" href="#" title><img alt src="images/smiles/smile.png" /></a>
                                                        <div className="popover_content">
                                                            <span><img alt src="images/smiles/smile.png" /> Happy</span>
                                                            <ul className="namelist">
                                                                <li>Sarah K.</li>
                                                                <li>Jhon Doe</li>
                                                                <li>Amara Sin</li>
                                                                <li><span>100+ more</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="popover_wrapper">
                                                        <a className="popover_title" href="#" title><img alt src="images/smiles/weep.png" /></a>
                                                        <div className="popover_content">
                                                            <span><img alt src="images/smiles/weep.png" /> Dislike</span>
                                                            <ul className="namelist">
                                                                <li>Danial Carbal</li>
                                                                <li>Amara Sin</li>
                                                                <li>Sarah K.</li>
                                                                <li><span>15+ more</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <p>10+</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="commentbar">
                                        <div className="user">
                                            <figure><img src="images/resources/user1.jpg" alt /></figure>
                                            <div className="user-information">
                                                <h4><a href="#" title>Danile Walker</a></h4>
                                                <span>2 hours ago</span>
                                            </div>
                                            <a href="#" title="Follow" data-ripple>Follow</a>
                                        </div>
                                        <div className="we-video-info">
                                            <ul>
                                                <li>
                                                    <span title="Comments" className="liked">
                                                        <i>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up">
                                                                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3">
                                                                </path>
                                                            </svg></i>
                                                        <ins>52</ins>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span title="Comments" className="comment">
                                                        <i>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square">
                                                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
                                                                </path>
                                                            </svg></i>
                                                        <ins>52</ins>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <a title="Share" href="#" className>
                                                            <i>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2">
                                                                    <circle cx={18} cy={5} r={3} />
                                                                    <circle cx={6} cy={12} r={3} />
                                                                    <circle cx={18} cy={19} r={3} />
                                                                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                                                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                                                </svg></i>
                                                        </a>
                                                        <ins>20</ins>
                                                    </span>
                                                </li>
                                            </ul>
                                            <div className="users-thumb-list">
                                                <a href="#" title data-toggle="tooltip" data-original-title="Anderw">
                                                    <img src="images/resources/userlist-1.jpg" alt />
                                                </a>
                                                <a href="#" title data-toggle="tooltip" data-original-title="frank">
                                                    <img src="images/resources/userlist-2.jpg" alt />
                                                </a>
                                                <a href="#" title data-toggle="tooltip" data-original-title="Sara">
                                                    <img src="images/resources/userlist-1.jpg" alt />
                                                </a>
                                                <a href="#" title data-toggle="tooltip" data-original-title="Amy">
                                                    <img src="images/resources/userlist-2.jpg" alt />
                                                </a>
                                                <span><strong>You</strong>, <b>Sarah</b> and <a title href="#">24+
                                                    more</a> liked</span>
                                            </div>
                                        </div>
                                        <div className="new-comment" style={{ display: 'block' }}>
                                            <form method="post">
                                                <input type="text" placeholder="write comment" />
                                                <button type="submit"><i className="icofont-paper-plane" /></button>
                                            </form>
                                            <div className="comments-area">
                                                <ul>
                                                    <li>
                                                        <figure><img alt src="images/resources/user1.jpg" /></figure>
                                                        <div className="commenter">
                                                            <h5><a title href="#">Jack Carter</a></h5>
                                                            <span>2 hours ago</span>
                                                            <p>
                                                                i think that some how, we learn who we really are and then
                                                                live with that decision, great post!
                                                            </p>
                                                            <span>you can view the more detail via link</span>
                                                            <a title href="#">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                        </div>
                                                        <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                        <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                    </li>
                                                    <li>
                                                        <figure><img alt src="images/resources/user2.jpg" /></figure>
                                                        <div className="commenter">
                                                            <h5><a title href="#">Ching xang</a></h5>
                                                            <span>2 hours ago</span>
                                                            <p>
                                                                i think that some how, we learn who we really are and then
                                                                live with that decision, great post!
                                                            </p>
                                                        </div>
                                                        <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                        <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                    </li>
                                                    <li>
                                                        <figure><img alt src="images/resources/user3.jpg" /></figure>
                                                        <div className="commenter">
                                                            <h5><a title href="#">Danial Comb</a></h5>
                                                            <span>2 hours ago</span>
                                                            <p>
                                                                i think that some how, we learn who we really are and then
                                                                live with that decision, great post!
                                                            </p>
                                                        </div>
                                                        <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                        <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                    </li>
                                                    <li>
                                                        <figure><img alt src="images/resources/user4.jpg" /></figure>
                                                        <div className="commenter">
                                                            <h5><a title href="#">Jack Carter</a></h5>
                                                            <span>2 hours ago</span>
                                                            <p>
                                                                i think that some how, we learn who we really are and then
                                                                live with that decision, great post!
                                                            </p>
                                                        </div>
                                                        <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                        <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>{/* The Scrolling Modal image with comment */}
        </div>
    )
}

