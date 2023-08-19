
import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Home () {
    return (
        <div>

            <div className="theme-layout">
                <div className="responsive-header">
                    <div className="logo res"><img src="images/logo.png" alt /><span>Socimo</span></div>
                    <div className="user-avatar mobile">
                        <a href="profile.html" title="View Profile"><img alt src="images/resources/user.jpg" /></a>
                        <div className="name">
                            <h4>Danial Cardos</h4>
                            <span>Ontario, Canada</span>
                        </div>
                    </div>
                    <div className="right-compact">
                        <div className="sidemenu">
                            <i>
                                <svg id="side-menu2" xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
                                    <line x1={3} y1={12} x2={21} y2={12} />
                                    <line x1={3} y1={6} x2={21} y2={6} />
                                    <line x1={3} y1={18} x2={21} y2={18} />
                                </svg></i>
                        </div>
                        <div className="res-search">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
                                    <circle cx={11} cy={11} r={8} />
                                    <line x1={21} y1={21} x2="16.65" y2="16.65" />
                                </svg></span>
                        </div>
                    </div>
                    <div className="restop-search">
                        <span className="hide-search"><i className="icofont-close-circled" /></span>
                        <form method="post">
                            <input type="text" placeholder="Search..." />
                        </form>
                    </div>
                </div>{/* responsive header */}
                <header className>
                    <div className="topbar stick">
                        <div className="logo"><img src="images/logo.png" alt /><span>Socimo</span></div>
                        <div className="searches">
                            <form method="post">
                                <input type="text" placeholder="Search..." />
                                <button type="submit"><i className="icofont-search" /></button>
                                <span className="cancel-search"><i className="icofont-close" /></span>
                                <div className="recent-search">
                                    <h4 className="recent-searches">Your's Recent Search</h4>
                                    <ul className="so-history">
                                        <li>
                                            <div className="searched-user">
                                                <figure><img src="images/resources/user1.jpg" alt /></figure>
                                                <span>Danial Carabal</span>
                                            </div>
                                            <span className="trash"><i className="icofont-close-circled" /></span>
                                        </li>
                                        <li>
                                            <div className="searched-user">
                                                <figure><img src="images/resources/user2.jpg" alt /></figure>
                                                <span>Maria K</span>
                                            </div>
                                            <span className="trash"><i className="icofont-close-circled" /></span>
                                        </li>
                                        <li>
                                            <div className="searched-user">
                                                <figure><img src="images/resources/user3.jpg" alt /></figure>
                                                <span>Fawad Khan</span>
                                            </div>
                                            <span className="trash"><i className="icofont-close-circled" /></span>
                                        </li>
                                        <li>
                                            <div className="searched-user">
                                                <figure><img src="images/resources/user4.jpg" alt /></figure>
                                                <span>Danial Sandos</span>
                                            </div>
                                            <span className="trash"><i className="icofont-close-circled" /></span>
                                        </li>
                                        <li>
                                            <div className="searched-user">
                                                <figure><img src="images/resources/user5.jpg" alt /></figure>
                                                <span>Jack Carter</span>
                                            </div>
                                            <span className="trash"><i className="icofont-close-circled" /></span>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                        <ul className="web-elements">
                            <li>
                                <div className="user-dp">
                                    <NavLink to="/profile">
                                        <img alt src="images/resources/user.jpg" />
                                        <div className="name">
                                            <h4>Danial Cardos</h4>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li className="go-live">
                                <a href="live-stream.html" title="Go Live" data-toggle="tooltip">
                                    <i>
                                        <svg fill="#f00" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18px" height="18px">
                                            <path d="M 6.1015625 6.1015625 C 3.5675625 8.6345625 2 12.134 2 16 C 2 19.866 3.5675625 23.365437 6.1015625 25.898438 L 7.5195312 24.480469 C 5.3465312 22.307469 4 19.308 4 16 C 4 12.692 5.3465312 9.6925313 7.5195312 7.5195312 L 6.1015625 6.1015625 z M 25.898438 6.1015625 L 24.480469 7.5195312 C 26.653469 9.6925312 28 12.692 28 16 C 28 19.308 26.653469 22.307469 24.480469 24.480469 L 25.898438 25.898438 C 28.432437 23.365437 30 19.866 30 16 C 30 12.134 28.432437 8.6345625 25.898438 6.1015625 z M 9.6367188 9.6367188 C 8.0077188 11.265719 7 13.515 7 16 C 7 18.485 8.0077187 20.734281 9.6367188 22.363281 L 11.052734 20.947266 C 9.7847344 19.680266 9 17.93 9 16 C 9 14.07 9.7847344 12.319734 11.052734 11.052734 L 9.6367188 9.6367188 z M 22.363281 9.6367188 L 20.947266 11.052734 C 22.215266 12.319734 23 14.07 23 16 C 23 17.93 22.215266 19.680266 20.947266 20.947266 L 22.363281 22.363281 C 23.992281 20.734281 25 18.485 25 16 C 25 13.515 23.992281 11.265719 22.363281 9.6367188 z M 16 12 A 4 4 0 0 0 16 20 A 4 4 0 0 0 16 12 z" />
                                        </svg></i>
                                </a>
                            </li>
                            <li>
                                <a href="index.html" title="Home" data-toggle="tooltip">
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                            <polyline points="9 22 9 12 15 12 15 22" />
                                        </svg></i>
                                </a>
                            </li>
                            <li>
                                <a className="mesg-notif" href="#" title="Messages" data-toggle="tooltip">
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                        </svg></i>
                                </a>
                                <span />
                            </li>
                            <li>
                                <a className="mesg-notif" href="#" title="Notifications" data-toggle="tooltip">
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell">
                                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                                        </svg></i>
                                </a>
                                <span />
                            </li>
                            <li>
                                <a className="create" href="#" title="Add New" data-toggle="tooltip">
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                                            <line x1={12} y1={5} x2={12} y2={19} />
                                            <line x1={5} y1={12} x2={19} y2={12} />
                                        </svg></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" title>
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid">
                                            <rect x={3} y={3} width={7} height={7} />
                                            <rect x={14} y={3} width={7} height={7} />
                                            <rect x={14} y={14} width={7} height={7} />
                                            <rect x={3} y={14} width={7} height={7} />
                                        </svg>
                                    </i>
                                </a>
                                <ul className="dropdown">
                                    <li><a href="profile.html" title><i className="icofont-user-alt-3" /> Your Profile</a></li>
                                    <li><a href="add-new-course.html" title><i className="icofont-plus" /> New Course</a></li>
                                    <li><a className="invite-new" href="#" title><i className="icofont-brand-slideshare" /> Invite
                                        Collegue</a></li>
                                    <li><a href="pay-out.html" title><i className="icofont-price" /> Payout</a></li>
                                    <li><a href="price-plan.html" title><i className="icofont-flash" /> Upgrade</a></li>
                                    <li><a href="help-faq.html" title><i className="icofont-question-circle" /> Help</a></li>
                                    <li><a href="settings.html" title><i className="icofont-gear" /> Setting</a></li>
                                    <li><a href="privacy-n-policy.html" title><i className="icofont-notepad" /> Privacy</a>
                                    </li>
                                    <li><a className="dark-mod" href="#" title><i className="icofont-moon" /> Dark Mode</a></li>
                                    <li className="logout"><a href="sign-in.html" title><i className="icofont-power" /> Logout</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </header>{/* header */}
                <nav className="sidebar">
                    <ul className="menu-slide">
                        <li className="active menu-item-has-children">
                            <a className href="#" title>
                                <i><svg id="icon-home" className="feather feather-home" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                    <polyline points="9 22 9 12 15 12 15 22" />
                                </svg></i> Home
                            </a>
                            <ul className="submenu">
                                <li><a href="index.html" title>Newsfeed</a></li>
                                <li><a href="company-home.html" title>Company Home</a></li>
                                <li><a href="profile-page2.html" title>User Profile</a></li>
                                <li><a href="profile.html" title>Student User Profile</a></li>
                                <li><a href="groups.html" title>Groups</a></li>
                                <li><a href="group-detail.html" title>Group Detail</a></li>
                                <li><a href="post-detail.html" title>Social Post Detail</a></li>
                                <li><a href="messages.html" title>Chat/Messages</a></li>
                                <li><a href="notifications.html" title>Notificatioins</a></li>
                                <li><a href="search-result.html" title>Search Result</a></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children">
                            <a className href="#" title>
                                <i className><svg id="ab7" className="feather feather-zap" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                </svg></i> Features
                            </a>
                            <ul className="submenu">
                                <li><a href="videos.html" title>Videos</a></li>
                                <li><a href="live-stream.html" title>Live Stream</a></li>
                                <li><a href="event-page.html" title>Events Page</a></li>
                                <li><a href="event-detail.html" title>Event Detail</a></li>
                                <li><a href="Q-A.html" title>QA</a></li>
                                <li><a href="Q-detail.html" title>QA Detail</a></li>
                                <li><a href="help-faq.html" title>Support Help</a></li>
                                <li><a href="help-faq-detail.html" title>Support Detail</a></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children">
                            <a className href="#" title>
                                <i className>
                                    <svg id="ab5" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag">
                                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                        <line x1={3} y1={6} x2={21} y2={6} />
                                        <path d="M16 10a4 4 0 0 1-8 0" />
                                    </svg></i> Market Place
                            </a>
                            <ul className="submenu">
                                <li><a href="books.html" title>Books</a></li>
                                <li><a href="book-detail.html" title>Books Detail</a></li>
                                <li><a href="courses.html" title>Course</a></li>
                                <li><a href="course-detail.html" title>course Detail</a></li>
                                <li><a href="add-new-course.html" title>Add New Course</a></li>
                                <li><a href="product-cart.html" title>Cart Page</a></li>
                                <li><a href="product-checkout.html" title>Checkout</a></li>
                                <li><a href="add-credits.html" title>Add Credit</a></li>
                                <li><a href="pay-out.html" title>Payouts</a></li>
                                <li><a href="price-plan.html" title>Pricing Plans</a></li>
                                <li><a href="invoice.html" title>Invoice</a></li>
                                <li><a href="thank-you.html" title>Thank you Page</a></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children">
                            <a className href="#" title>
                                <i className><svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-coffee">
                                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                                    <line x1={6} y1={1} x2={6} y2={4} />
                                    <line x1={10} y1={1} x2={10} y2={4} />
                                    <line x1={14} y1={1} x2={14} y2={4} />
                                </svg>
                                </i> Blogs
                            </a>
                            <ul className="submenu">
                                <li><a href="blog.html" title>Blog</a></li>
                                <li><a href="blog-detail.html" title>Blog Detail</a></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children">
                            <a className href="#" title>
                                <i><svg id="ab8" className="feather feather-file" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                                    <polyline points="13 2 13 9 20 9" />
                                </svg></i> Featured Pages
                            </a>
                            <ul className="submenu">
                                <li><a href="404.html" title>Error 404</a></li>
                                <li><a href="coming-soon.html" title>Coming Soon</a></li>
                                <li><a href="send-feedback.html" title>Send Feedback</a></li>
                                <li><a href="badges.html" title>Badges</a></li>
                                <li><a href="thank-you.html" title>Thank You</a></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children">
                            <a className href="#" title>
                                <i className>
                                    <svg id="ab9" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock">
                                        <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg></i> Authentications
                            </a>
                            <ul className="submenu">
                                <li><a href="sign-in.html" title>Sign In</a></li>
                                <li><a href="signup.html" title>Sign Up</a></li>
                                <li><a href="forgot-password.html" title>Forgot Password</a></li>
                            </ul>
                        </li>
                        <li className>
                            <a className href="about-university.html" title>
                                <i><svg id="ab1" className="feather feather-users" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle r={4} cy={7} cx={9} />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg></i> University Profile
                            </a>
                        </li>
                        <li className>
                            <a className href="messages.html" title>
                                <i className>
                                    <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg" id="ab2">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" style={{ strokeDasharray: '68, 88', strokeDashoffset: 0 }} />
                                    </svg></i> Live Chat
                            </a>
                        </li>
                        <li className>
                            <a className href="privacy-n-policy.html" title><i className>
                                <svg id="ab4" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-airplay">
                                    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1">
                                    </path>
                                    <polygon points="12 15 17 21 7 21 12 15" />
                                </svg></i> Privacy Polices
                            </a>
                        </li>
                        <li className>
                            <a className href="settings.html" title><i className>
                                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings">
                                    <circle cx={12} cy={12} r={3} />
                                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                                    </path>
                                </svg></i> Web Settings
                            </a>
                        </li>
                        <li className="menu-item-has-children">
                            <a className="#" href="#" title>
                                <i className>
                                    <svg id="team" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-smile">
                                        <circle cx={12} cy={12} r={10} />
                                        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                                        <line x1={9} y1={9} x2="9.01" y2={9} />
                                        <line x1={15} y1={9} x2="15.01" y2={9} />
                                    </svg></i> Development Tools
                            </a>
                            <ul className="submenu">
                                <li><a href="widgets.html" title>Widgets Collection</a></li>
                                <li><a href="development-component.html" title>Web Component</a></li>
                                <li><a href="development-elements.html" title>Web Elements</a></li>
                                <li><a href="loader-spiners.html" title>Loader Spiners</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>{/* nav sidebar */}
                <section>
                    <div className="white-bg">
                        <div className="container-fluid">
                            <div className="menu-caro">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <div className="sidemenu">
                                            <i>
                                                <svg id="side-menu" xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
                                                    <line x1={3} y1={12} x2={21} y2={12} />
                                                    <line x1={3} y1={6} x2={21} y2={6} />
                                                    <line x1={3} y1={18} x2={21} y2={18} />
                                                </svg></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="page-caro">
                                            <div className="link-item">
                                                <a className="active" href="feed.html" title>
                                                    <i className>
                                                        <svg className="feather feather-zap" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
                                                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                                        </svg>
                                                    </i>
                                                    <p>Newsfeed</p>
                                                </a>
                                            </div>
                                            <div className="link-item">
                                                <a href="videos.html" title>
                                                    <i className>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-youtube">
                                                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z">
                                                            </path>
                                                            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02">
                                                            </polygon>
                                                        </svg>
                                                    </i>
                                                    <p>Videos</p>
                                                </a>
                                            </div>
                                            <div className="link-item">
                                                <a href="courses.html" title>
                                                    <i className>
                                                        <svg className="feather feather-airplay" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
                                                            <polygon points="12 15 17 21 7 21 12 15" />
                                                        </svg></i>
                                                    <p>Courses</p>
                                                </a>
                                            </div>
                                            <div className="link-item">
                                                <a href="books.html" title>
                                                    <i className>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-book">
                                                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z">
                                                            </path>
                                                        </svg></i>
                                                    <p>Books</p>
                                                </a>
                                            </div>
                                            <div className="link-item">
                                                <a href="blog.html" title>
                                                    <i className><svg className="feather feather-layout" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
                                                        <rect ry={2} rx={2} height={18} width={18} y={3} x={3} />
                                                        <line y2={9} x2={21} y1={9} x1={3} />
                                                        <line y2={9} x2={9} y1={21} x1={9} />
                                                    </svg></i>
                                                    <p>Blog</p>
                                                </a>
                                            </div>
                                            <div className="link-item">
                                                <a href="groups.html" title>
                                                    <i className>
                                                        <svg className="feather feather-users" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                                            <circle r={4} cy={7} cx={9} />
                                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                                        </svg>
                                                    </i>
                                                    <p>Groups</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <div className="user-inf">
                                            <div className="folowerz">Followers: 204</div>
                                            <ul className="stars">
                                                <li><i className="icofont-star" /></li>
                                                <li><i className="icofont-star" /></li>
                                                <li><i className="icofont-star" /></li>
                                                <li><i className="icofont-star" /></li>
                                                <li><i className="icofont-star" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* carousel menu */}
                <section>
                    <div className="gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div id="page-contents" className="row merged20">
                                        <div className="col-lg-3">
                                            <aside className="sidebar static left">
                                                <div className="widget whitish low-opacity">
                                                    <img src="images/time-clock.png" alt />
                                                    <div className="bg-image" style={{ backgroundImage: 'url(images/resources/time-bg.jpg)' }} />
                                                    <div className="date-time">
                                                        <div className="realtime">
                                                            <span id="hours">00</span>
                                                            <span id="point">:</span>
                                                            <span id="min">00</span>
                                                        </div>
                                                        <span id="date" />
                                                    </div>
                                                </div>
                                                <div className="widget">
                                                    <h4 className="widget-title">Complete Your Profile</h4>
                                                    <span>Your Profile is missing followings!</span>
                                                    <div data-progress="tip" className="progress__outer" data-value="0.67">
                                                        <div className="progress__inner">82%</div>
                                                    </div>
                                                    <ul className="prof-complete">
                                                        <li><i className="icofont-plus-square" /> <a href="#" title>Upload Your
                                                            Picture</a><em>10%</em></li>
                                                        <li><i className="icofont-plus-square" /> <a href="#" title>Your
                                                            University?</a><em>20%</em></li>
                                                        <li><i className="icofont-plus-square" /> <a href="#" title>Add Payment
                                                            Method</a><em>20%</em></li>
                                                    </ul>
                                                </div>{/* complete profile widget */}
                                                <div className="advertisment-box">
                                                    <h4 className><i className="icofont-info-circle" /> advertisment</h4>
                                                    <figure>
                                                        <a href="#" title="Advertisment"><img src="images/resources/ad-widget2.gif" alt /></a>
                                                    </figure>
                                                </div>{/* adversment widget */}
                                                <div className="widget">
                                                    <h4 className="widget-title"><i className="icofont-flame-torch" /> Popular Courses
                                                    </h4>
                                                    <ul className="premium-course">
                                                        <li>
                                                            <figure>
                                                                <img src="images/resources/course-5.jpg" alt />
                                                                <span className="tag">Free</span>
                                                            </figure>
                                                            <div className="vid-course">
                                                                <h5><a href="course-detail.html" title>Wordpress Online video
                                                                    course</a></h5>
                                                                <ins className="price">$19/M</ins>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <figure>
                                                                <img src="images/resources/course-3.jpg" alt />
                                                                <span className="tag">Premium</span>
                                                            </figure>
                                                            <div className="vid-course">
                                                                <h5><a href="course-detail.html" title>Node JS Online video
                                                                    course</a></h5>
                                                                <ins className="price">$29/M</ins>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>{/* popular courses */}
                                                <div className="widget">
                                                    <h4 className="widget-title">Recent Blogs <a className="see-all" href="#" title>See All</a></h4>
                                                    <ul className="recent-links">
                                                        <li>
                                                            <figure><img alt src="images/resources/recentlink-1.jpg" />
                                                            </figure>
                                                            <div className="re-links-meta">
                                                                <h6><a title href="#">Moira's fade reach much farther...</a>
                                                                </h6>
                                                                <span>2 weeks ago </span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <figure><img alt src="images/resources/recentlink-2.jpg" />
                                                            </figure>
                                                            <div className="re-links-meta">
                                                                <h6><a title href="#">Daniel asks The voice of
                                                                    doomfist...</a></h6>
                                                                <span>3 months ago </span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <figure><img alt src="images/resources/recentlink-3.jpg" />
                                                            </figure>
                                                            <div className="re-links-meta">
                                                                <h6><a title href="#">The socimo over watch scandals.</a>
                                                                </h6>
                                                                <span>1 day before</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>{/* recent blog */}
                                                <div className="widget">
                                                    <h4 className="widget-title">Your profile has a new Experience section</h4>
                                                    <p>
                                                        Showcase your professional experience and education to help potential
                                                        employers and collaborators find and contact you about career
                                                        opportunities.
                                                    </p>
                                                    <a className="main-btn" href="profile.html" title data-ripple>view
                                                        profile</a>
                                                </div>{/* your profile */}
                                                <div className="widget web-links stick-widget">
                                                    <h4 className="widget-title">Useful Links <a title href="#" className="see-all">See All</a></h4>
                                                    <ul>
                                                        <li><i className="icofont-dotted-right" /> <a title href="#">about</a>
                                                        </li>
                                                        <li><i className="icofont-dotted-right" /> <a title href="#">career</a>
                                                        </li>
                                                        <li><i className="icofont-dotted-right" /> <a title href="#">advertise</a></li>
                                                        <li><i className="icofont-dotted-right" /> <a title href="#">socimo
                                                            Apps</a></li>
                                                        <li><i className="icofont-dotted-right" /> <a title href="#">socimo
                                                            Blog</a></li>
                                                        <li><i className="icofont-dotted-right" /> <a title href="#">Help</a>
                                                        </li>
                                                        <li><i className="icofont-dotted-right" /> <a title href="#">socimo
                                                            Gifts</a></li>
                                                        <li><i className="icofont-dotted-right" /> <a title href="#">content
                                                            policy</a></li>
                                                        <li><i className="icofont-dotted-right" /> <a title href="#">User
                                                            Policy</a></li>
                                                    </ul>
                                                    <p>© Socimo 2020. All Rights Reserved.</p>
                                                </div>{/* links */}
                                            </aside>
                                        </div>
                                        <div className="col-lg-6">
                                            <ul className="filtr-tabs">
                                                <li><a className="active" href="#" title>Home</a></li>
                                                <li><a href="#" title>Recent</a></li>
                                                <li><a href="#" title>Favourit</a></li>
                                            </ul>{/* tab buttons */}
                                            <div className="main-wraper">
                                                <span className="new-title">Create New Post</span>
                                                <div className="new-post">
                                                    <form method="post">
                                                        <i className="icofont-pen-alt-1" />
                                                        <input type="text" placeholder="Create New Post" />
                                                    </form>
                                                    <ul className="upload-media">
                                                        <li>
                                                            <a href="#" title>
                                                                <i><img src="images/image.png" alt /></i>
                                                                <span>Photo/Video</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title>
                                                                <i><img src="images/activity.png" alt /></i>
                                                                <span>Feeling/Activity</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="live-stream.html" title>
                                                                <i><img src="images/live-stream.png" alt /></i>
                                                                <span>Live Stream</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>{/* create new post */}
                                            <div className="story-card">
                                                <div className="story-title">
                                                    <h5>Recent Stories</h5>
                                                    <a href="#" title>See all</a>
                                                </div>
                                                <div className="story-wraper ">
                                                    <img src="images/resources/story-card5.jpg" alt />
                                                    <div className="users-dp">
                                                        <img src="images/resources/user3.jpg" alt />
                                                    </div>
                                                    <a className="add-new-stry" href="#" title><i className="icofont-plus" /></a>
                                                    <span>Add Your Story</span>
                                                </div>
                                                <div className="story-wraper">
                                                    <img src="images/resources/story-card.jpg" alt />
                                                    <div className="users-dp">
                                                        <img src="images/resources/user6.jpg" alt />
                                                    </div>
                                                    <span>Tamana Bhatia</span>
                                                </div>
                                                <div className="story-wraper">
                                                    <img src="images/resources/story-card2.jpg" alt />
                                                    <div className="users-dp">
                                                        <img src="images/resources/user7.jpg" alt />
                                                    </div>
                                                    <span>Emily Caros</span>
                                                </div>
                                                <div className="story-wraper">
                                                    <img src="images/resources/story-card3.jpg" alt />
                                                    <div className="users-dp">
                                                        <img src="images/resources/user8.jpg" alt />
                                                    </div>
                                                    <span>Daniel Cardos</span>
                                                </div>
                                                <div className="story-wraper">
                                                    <img src="images/resources/story-card4.jpg" alt />
                                                    <div className="users-dp">
                                                        <img src="images/resources/user4.jpg" alt />
                                                    </div>
                                                    <span>Emma Watson</span>
                                                </div>
                                            </div>{/* stories */}
                                            <div className="main-wraper">
                                                <div className="chatroom-title">
                                                    <i>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-tv">
                                                            <rect x={2} y={7} width={20} height={15} rx={2} ry={2} />
                                                            <polyline points="17 2 12 7 7 2" />
                                                        </svg></i>
                                                    <span>Chat Rooms <em>Video chat with friends</em></span>
                                                    <a className="create-newroom" href="#" title>Create Room</a>
                                                </div>
                                                <ul className="chat-rooms">
                                                    <li>
                                                        <div className="room-avatar">
                                                            <img src="images/resources/user2.jpg" alt />
                                                            <span className="status online" />
                                                        </div>
                                                        <span>Sara's Room</span>
                                                        <a className="join" href="#" title="Join Room">Join</a>
                                                        <a className="say-hi send-mesg" href="#" title="Send Message"><i className="icofont-facebook-messenger" /></a>
                                                    </li>
                                                    <li>
                                                        <div className="room-avatar">
                                                            <img src="images/resources/user3.jpg" alt />
                                                            <span className="status offline" />
                                                        </div>
                                                        <span>jawad's Room</span>
                                                        <a className="join" href="#" title="Join Room">Join</a>
                                                        <a className="say-hi send-mesg" href="#" title="Send Message"><i className="icofont-facebook-messenger" /></a>
                                                    </li>
                                                    <li>
                                                        <div className="room-avatar">
                                                            <img src="images/resources/user4.jpg" alt />
                                                            <span className="status away" />
                                                        </div>
                                                        <span>Jack's Room</span>
                                                        <a className="join" href="#" title="Join Room">Join</a>
                                                        <a className="say-hi send-mesg" href="#" title="Send Message"><i className="icofont-facebook-messenger" /></a>
                                                    </li>
                                                    <li>
                                                        <div className="room-avatar">
                                                            <img src="images/resources/user5.jpg" alt />
                                                            <span className="status online" />
                                                        </div>
                                                        <span>jobidn's Room</span>
                                                        <a className="join" href="#" title="Join Room">Join</a>
                                                        <a className="say-hi send-mesg" href="#" title="Send Message"><i className="icofont-facebook-messenger" /></a>
                                                    </li>
                                                    <li>
                                                        <div className="room-avatar">
                                                            <img src="images/resources/user6.jpg" alt />
                                                            <span className="status offline" />
                                                        </div>
                                                        <span>Emily's Room</span>
                                                        <a className="join" href="#" title="Join Room">Join</a>
                                                        <a className="say-hi send-mesg" href="#" title="Send Message"><i className="icofont-facebook-messenger" /></a>
                                                    </li>
                                                </ul>
                                            </div>{/* chat rooms */}
                                            <div className="main-wraper">
                                                <div className="user-post">
                                                    <div className="friend-info">
                                                        <figure>
                                                            <i className="icofont-learn" />
                                                        </figure>
                                                        <div className="friend-name">
                                                            <ins><a title href="time-line.html">Suggested</a></ins>
                                                            <span><i className="icofont-runner-alt-1" /> Follow similar
                                                                People</span>
                                                        </div>
                                                        <ul className="suggested-caro">
                                                            <li>
                                                                <figure><img src="images/resources/speak-1.jpg" alt /></figure>
                                                                <span>Amy Watson</span>
                                                                <ins>Department of Socilolgy</ins>
                                                                <a href="#" title data-ripple><i className="icofont-star" />
                                                                    Follow</a>
                                                            </li>
                                                            <li>
                                                                <figure><img src="images/resources/speak-2.jpg" alt /></figure>
                                                                <span>Muhammad Khan</span>
                                                                <ins>Department of Socilolgy</ins>
                                                                <a href="#" title data-ripple><i className="icofont-star" />
                                                                    Follow</a>
                                                            </li>
                                                            <li>
                                                                <figure><img src="images/resources/speak-3.jpg" alt /></figure>
                                                                <span>Sadia Gill</span>
                                                                <ins>Department of Socilolgy</ins>
                                                                <a href="#" title data-ripple><i className="icofont-star" />
                                                                    Follow</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>{/* suggested friends */}
                                            <div className="main-wraper">
                                                <div className="user-post">
                                                    <div className="friend-info">
                                                        <figure>
                                                            <em>
                                                                <svg style={{ verticalAlign: 'middle' }} xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24">
                                                                    <path fill="#7fba00" stroke="#7fba00" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z">
                                                                    </path>
                                                                </svg></em>
                                                            <img alt src="images/resources/user7.jpg" />
                                                        </figure>
                                                        <div className="friend-name">
                                                            <div className="more">
                                                                <div className="more-post-optns">
                                                                    <i className>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal">
                                                                            <circle cx={12} cy={12} r={1} />
                                                                            <circle cx={19} cy={12} r={1} />
                                                                            <circle cx={5} cy={12} r={1} />
                                                                        </svg></i>
                                                                    <ul>
                                                                        <li>
                                                                            <i className="icofont-pen-alt-1" />Edit Post
                                                                            <span>Edit This Post within a Hour</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-ban" />Hide Post
                                                                            <span>Hide This Post</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-ui-delete" />Delete Post
                                                                            <span>If inappropriate Post By Mistake</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-flag" />Report
                                                                            <span>Inappropriate content</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <ins>
                                                                <a title="verified" href="time-line.html">Andrew</a> Post
                                                                Audio</ins>
                                                            <span><i className="icofont-globe" /> published: Sep,15 2020</span>
                                                        </div>
                                                        <div className="post-meta">
                                                            <p>
                                                                Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                                                                condimentum rhoncus, sem quam semper libero.
                                                            </p>
                                                            <div className="aud-vid">
                                                                <audio id="plyr-audio-player" className="audio-player" controls>
                                                                    <source src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3" type="audio/mp3" />
                                                                    <source src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.ogg" type="audio/ogg" />
                                                                </audio>
                                                            </div>
                                                            <div className="we-video-info">
                                                                <ul>
                                                                    <li>
                                                                        <span title="views" className="views">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye">
                                                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z">
                                                                                    </path>
                                                                                    <circle cx={12} cy={12} r={3} />
                                                                                </svg></i>
                                                                            <ins>1.2k</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span title="Comments" className="Recommend">
                                                                            <i>
                                                                                <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                                                                </svg></i>
                                                                            <ins>54</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span title="follow" className="Follow">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                                                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                                                    </polygon>
                                                                                </svg></i>
                                                                            <ins>5k</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="share-pst" title="Share">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2">
                                                                                    <circle cx={18} cy={5} r={3} />
                                                                                    <circle cx={6} cy={12} r={3} />
                                                                                    <circle cx={18} cy={19} r={3} />
                                                                                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                                                                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                                                                </svg></i>
                                                                            <ins>205</ins>
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                                <a href="post-detail.html" title className="reply">Reply <i className="icofont-reply" /></a>
                                                            </div>
                                                            <div className="stat-tools">
                                                                <div className="box">
                                                                    <div className="Like"><a className="Like__link"><i className="icofont-like" /> Like</a>
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
                                                                <a title href="#" className="comment-to"><i className="icofont-comment" /> Comment</a>
                                                                <a title href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                                                                <div className="emoji-state">
                                                                    <div className="popover_wrapper">
                                                                        <a className="popover_title" href="#" title><img alt src="images/smiles/thumb.png" /></a>
                                                                        <div className="popover_content">
                                                                            <span><img alt src="images/smiles/thumb.png" />
                                                                                Likes</span>
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
                                                                            <span><img alt src="images/smiles/heart.png" />
                                                                                Love</span>
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
                                                                            <span><img alt src="images/smiles/smile.png" />
                                                                                Happy</span>
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
                                                                            <span><img alt src="images/smiles/weep.png" />
                                                                                Dislike</span>
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
                                                                <div className="new-comment" style={{ display: 'none' }}>
                                                                    <form method="post">
                                                                        <input type="text" placeholder="write comment" />
                                                                        <button type="submit"><i className="icofont-paper-plane" /></button>
                                                                    </form>
                                                                    <div className="comments-area">
                                                                        <ul>
                                                                            <li>
                                                                                <figure><img alt src="images/resources/user1.jpg" />
                                                                                </figure>
                                                                                <div className="commenter">
                                                                                    <h5><a title href="#">Jack Carter</a>
                                                                                    </h5>
                                                                                    <span>2 hours ago</span>
                                                                                    <p>
                                                                                        i think that some how, we learn who we
                                                                                        really are and then live with that
                                                                                        decision, great post!
                                                                                    </p>
                                                                                    <span>you can view the more detail via
                                                                                        link</span>
                                                                                    <a title href="https://www.youtube.com/watch?v=HpZgwHU1GcI" target="_blank">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                                                </div>
                                                                                <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                                                <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                                            </li>
                                                                            <li>
                                                                                <figure><img alt src="images/resources/user2.jpg" />
                                                                                </figure>
                                                                                <div className="commenter">
                                                                                    <h5><a title href="#">Ching xang</a></h5>
                                                                                    <span>2 hours ago</span>
                                                                                    <p>
                                                                                        i think that some how, we learn who we
                                                                                        really are and then live with that
                                                                                        decision, great post!
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
                                            </div>{/* share audio post */}
                                            <div className="main-wraper">
                                                <div className="user-post">
                                                    <div className="friend-info">
                                                        <figure>
                                                            <em>
                                                                <svg style={{ verticalAlign: 'middle' }} xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24">
                                                                    <path fill="#7fba00" stroke="#7fba00" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z">
                                                                    </path>
                                                                </svg></em>
                                                            <img alt src="images/resources/user6.jpg" />
                                                        </figure>
                                                        <div className="friend-name">
                                                            <div className="more">
                                                                <div className="more-post-optns">
                                                                    <i className>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal">
                                                                            <circle cx={12} cy={12} r={1} />
                                                                            <circle cx={19} cy={12} r={1} />
                                                                            <circle cx={5} cy={12} r={1} />
                                                                        </svg></i>
                                                                    <ul>
                                                                        <li>
                                                                            <i className="icofont-pen-alt-1" />Edit Post
                                                                            <span>Edit This Post within a Hour</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-ban" />Hide Post
                                                                            <span>Hide This Post</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-ui-delete" />Delete Post
                                                                            <span>If inappropriate Post By Mistake</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-flag" />Report
                                                                            <span>Inappropriate content</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <ins>
                                                                <a title="verified" href="time-line.html">Elie Honey</a>
                                                                Podcast</ins>
                                                            <span><i className="icofont-globe" /> published: Sep,15 2020</span>
                                                        </div>
                                                        <div className="post-meta">
                                                            <a href="post-detail.html" className="post-title">Supervision as a
                                                                Personnel Development Device</a>
                                                            <p>
                                                                Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                                                                condimentum rhoncus, sem quam semper libero.
                                                            </p>
                                                            <div className="aud-vid">
                                                                <div className="video-player">
                                                                    <iframe src="https://www.youtube.com/embed/RBfJR4oRC0k?origin=https://plyr.io&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1" allowFullScreen allow="autoplay" />
                                                                </div>
                                                            </div>
                                                            <div className="we-video-info">
                                                                <ul>
                                                                    <li>
                                                                        <span title="views" className="views">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye">
                                                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z">
                                                                                    </path>
                                                                                    <circle cx={12} cy={12} r={3} />
                                                                                </svg></i>
                                                                            <ins>1.2k</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span title="Comments" className="Recommend">
                                                                            <i>
                                                                                <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                                                                </svg></i>
                                                                            <ins>54</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span title="follow" className="Follow">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                                                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                                                    </polygon>
                                                                                </svg></i>
                                                                            <ins>5k</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="share-pst" title="Share">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2">
                                                                                    <circle cx={18} cy={5} r={3} />
                                                                                    <circle cx={6} cy={12} r={3} />
                                                                                    <circle cx={18} cy={19} r={3} />
                                                                                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                                                                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                                                                </svg></i>
                                                                            <ins>205</ins>
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                                <a href="post-detail.html" title className="reply">Reply <i className="icofont-reply" /></a>
                                                            </div>
                                                            <div className="stat-tools">
                                                                <div className="box">
                                                                    <div className="Like"><a className="Like__link"><i className="icofont-like" /> Like</a>
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
                                                                <a title href="#" className="comment-to"><i className="icofont-comment" /> Comment</a>
                                                                <a title href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                                                                <div className="emoji-state">
                                                                    <div className="popover_wrapper">
                                                                        <a className="popover_title" href="#" title><img alt src="images/smiles/thumb.png" /></a>
                                                                        <div className="popover_content">
                                                                            <span><img alt src="images/smiles/thumb.png" />
                                                                                Likes</span>
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
                                                                            <span><img alt src="images/smiles/heart.png" />
                                                                                Love</span>
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
                                                                            <span><img alt src="images/smiles/smile.png" />
                                                                                Happy</span>
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
                                                                            <span><img alt src="images/smiles/weep.png" />
                                                                                Dislike</span>
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
                                                                <div className="new-comment" style={{ display: 'none' }}>
                                                                    <form method="post">
                                                                        <input type="text" placeholder="write comment" />
                                                                        <button type="submit"><i className="icofont-paper-plane" /></button>
                                                                    </form>
                                                                    <div className="comments-area">
                                                                        <ul>
                                                                            <li>
                                                                                <figure><img alt src="images/resources/user1.jpg" />
                                                                                </figure>
                                                                                <div className="commenter">
                                                                                    <h5><a title href="#">Jack Carter</a>
                                                                                    </h5>
                                                                                    <span>2 hours ago</span>
                                                                                    <p>
                                                                                        i think that some how, we learn who we
                                                                                        really are and then live with that
                                                                                        decision, great post!
                                                                                    </p>
                                                                                    <span>you can view the more detail via
                                                                                        link</span>
                                                                                    <a title href="https://www.youtube.com/watch?v=HpZgwHU1GcI" target="_blank">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                                                </div>
                                                                                <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                                                <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                                            </li>
                                                                            <li>
                                                                                <figure><img alt src="images/resources/user2.jpg" />
                                                                                </figure>
                                                                                <div className="commenter">
                                                                                    <h5><a title href="#">Ching xang</a></h5>
                                                                                    <span>2 hours ago</span>
                                                                                    <p>
                                                                                        i think that some how, we learn who we
                                                                                        really are and then live with that
                                                                                        decision, great post!
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
                                            </div>{/* share video post */}
                                            <div className="main-wraper">
                                                <div className="user-post">
                                                    <div className="friend-info">
                                                        <figure>
                                                            <em>
                                                                <svg style={{ verticalAlign: 'middle' }} xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24">
                                                                    <path fill="#7fba00" stroke="#7fba00" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z">
                                                                    </path>
                                                                </svg></em>
                                                            <img alt src="images/resources/user1.jpg" />
                                                        </figure>
                                                        <div className="friend-name">
                                                            <div className="more">
                                                                <div className="more-post-optns">
                                                                    <i className>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal">
                                                                            <circle cx={12} cy={12} r={1} />
                                                                            <circle cx={19} cy={12} r={1} />
                                                                            <circle cx={5} cy={12} r={1} />
                                                                        </svg></i>
                                                                    <ul>
                                                                        <li>
                                                                            <i className="icofont-pen-alt-1" />Edit Post
                                                                            <span>Edit This Post within a Hour</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-ban" />Hide Post
                                                                            <span>Hide This Post</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-ui-delete" />Delete Post
                                                                            <span>If inappropriate Post By Mistake</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-flag" />Report
                                                                            <span>Inappropriate content</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <ins>
                                                                <a title="verified" href="time-line.html">Jack Carter</a> Share
                                                                Post</ins>
                                                            <span><i className="icofont-globe" /> published: Sep,15 2020</span>
                                                        </div>
                                                        <div className="post-meta">
                                                            <a href="post-detail.html" className="post-title">Supervision as a
                                                                Personnel Development Device</a>
                                                            <p>
                                                                Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                                                                condimentum rhoncus, sem quam semper libero.
                                                            </p>
                                                            <div className="we-video-info">
                                                                <ul>
                                                                    <li>
                                                                        <span title="views" className="views">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye">
                                                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z">
                                                                                    </path>
                                                                                    <circle cx={12} cy={12} r={3} />
                                                                                </svg></i>
                                                                            <ins>1.2k</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span title="Comments" className="Recommend">
                                                                            <i>
                                                                                <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                                                                </svg></i>
                                                                            <ins>54</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span title="follow" className="Follow">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                                                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                                                    </polygon>
                                                                                </svg></i>
                                                                            <ins>5k</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="share-pst" title="Share">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2">
                                                                                    <circle cx={18} cy={5} r={3} />
                                                                                    <circle cx={6} cy={12} r={3} />
                                                                                    <circle cx={18} cy={19} r={3} />
                                                                                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                                                                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                                                                </svg></i>
                                                                            <ins>205</ins>
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                                <a href="post-detail.html" title className="reply">Reply <i className="icofont-reply" /></a>
                                                            </div>
                                                            <div className="stat-tools">
                                                                <div className="box">
                                                                    <div className="Like"><a className="Like__link"><i className="icofont-like" /> Like</a>
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
                                                                <a title href="#" className="comment-to"><i className="icofont-comment" /> Comment</a>
                                                                <a title href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                                                                <div className="emoji-state">
                                                                    <div className="popover_wrapper">
                                                                        <a className="popover_title" href="#" title><img alt src="images/smiles/thumb.png" /></a>
                                                                        <div className="popover_content">
                                                                            <span><img alt src="images/smiles/thumb.png" />
                                                                                Likes</span>
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
                                                                            <span><img alt src="images/smiles/heart.png" />
                                                                                Love</span>
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
                                                                            <span><img alt src="images/smiles/smile.png" />
                                                                                Happy</span>
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
                                                                            <span><img alt src="images/smiles/weep.png" />
                                                                                Dislike</span>
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
                                                                <div className="new-comment" style={{ display: 'none' }}>
                                                                    <form method="post">
                                                                        <input type="text" placeholder="write comment" />
                                                                        <button type="submit"><i className="icofont-paper-plane" /></button>
                                                                    </form>
                                                                    <div className="comments-area">
                                                                        <ul>
                                                                            <li>
                                                                                <figure><img alt src="images/resources/user1.jpg" />
                                                                                </figure>
                                                                                <div className="commenter">
                                                                                    <h5><a title href="#">Jack Carter</a>
                                                                                    </h5>
                                                                                    <span>2 hours ago</span>
                                                                                    <p>
                                                                                        i think that some how, we learn who we
                                                                                        really are and then live with that
                                                                                        decision, great post!
                                                                                    </p>
                                                                                    <span>you can view the more detail via
                                                                                        link</span>
                                                                                    <a title href="https://www.youtube.com/watch?v=HpZgwHU1GcI" target="_blank">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                                                </div>
                                                                                <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                                                <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                                            </li>
                                                                            <li>
                                                                                <figure><img alt src="images/resources/user2.jpg" />
                                                                                </figure>
                                                                                <div className="commenter">
                                                                                    <h5><a title href="#">Ching xang</a></h5>
                                                                                    <span>2 hours ago</span>
                                                                                    <p>
                                                                                        i think that some how, we learn who we
                                                                                        really are and then live with that
                                                                                        decision, great post!
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
                                            </div>{/* share post without image */}
                                            <div className="main-wraper">
                                                <div className="user-post">
                                                    <div className="friend-info">
                                                        <figure>
                                                            <em>
                                                                <svg style={{ verticalAlign: 'middle' }} xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24">
                                                                    <path fill="#82828e" stroke="#82828e" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z">
                                                                    </path>
                                                                </svg></em>
                                                            <img alt src="images/resources/user2.jpg" />
                                                        </figure>
                                                        <div className="friend-name">
                                                            <div className="more">
                                                                <div className="more-post-optns">
                                                                    <i className>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal">
                                                                            <circle cx={12} cy={12} r={1} />
                                                                            <circle cx={19} cy={12} r={1} />
                                                                            <circle cx={5} cy={12} r={1} />
                                                                        </svg></i>
                                                                    <ul>
                                                                        <li>
                                                                            <i className="icofont-pen-alt-1" />Edit Post
                                                                            <span>Edit This Post within a Hour</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-ban" />Hide Post
                                                                            <span>Hide This Post</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-ui-delete" />Delete Post
                                                                            <span>If inappropriate Post By Mistake</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-flag" />Report
                                                                            <span>Inappropriate content</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <ins><a title href="time-line.html">Maria k.</a> Premium
                                                                Product</ins>
                                                            <span><i className="icofont-globe" /> published: Sep,15 2020</span>
                                                        </div>
                                                        <div className="post-meta">
                                                            <figure className="premium-post"><img src="images/resources/book5.jpg" alt /></figure>
                                                            <div className="premium">
                                                                <a href="book-detail.html" className="post-title">Technicial words
                                                                    2020 Book world</a>
                                                                <p>
                                                                    Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                                                                    condimentum rhoncus, sem quam semper libero.
                                                                </p>
                                                                <a className="main-btn purchase-btn" title href="book-detail.html"><i className="icofont-cart-alt" /> Buy
                                                                    Now</a>
                                                            </div>
                                                            <div className="we-video-info">
                                                                <ul>
                                                                    <li>
                                                                        <span title="views" className="views">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye">
                                                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z">
                                                                                    </path>
                                                                                    <circle cx={12} cy={12} r={3} />
                                                                                </svg></i>
                                                                            <ins>1.2k</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span title="Comments" className="Recommend">
                                                                            <i>
                                                                                <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                                                                </svg></i>
                                                                            <ins>54</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span title="follow" className="Follow">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                                                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                                                    </polygon>
                                                                                </svg></i>
                                                                            <ins>5k</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="share-pst" title="Share">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2">
                                                                                    <circle cx={18} cy={5} r={3} />
                                                                                    <circle cx={6} cy={12} r={3} />
                                                                                    <circle cx={18} cy={19} r={3} />
                                                                                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                                                                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                                                                </svg></i>
                                                                            <ins>205</ins>
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                                <a href="post-detail.html" title className="reply">Reply <i className="icofont-reply" /></a>
                                                            </div>
                                                            <div className="stat-tools">
                                                                <div className="box">
                                                                    <div className="Like"><a className="Like__link"><i className="icofont-like" /> Like</a>
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
                                                                <a title href="#" className="comment-to"><i className="icofont-comment" /> Comment</a>
                                                                <a title href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                                                                <div className="emoji-state">
                                                                    <div className="popover_wrapper">
                                                                        <a className="popover_title" href="#" title><img alt src="images/smiles/thumb.png" /></a>
                                                                        <div className="popover_content">
                                                                            <span><img alt src="images/smiles/thumb.png" />
                                                                                Likes</span>
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
                                                                            <span><img alt src="images/smiles/heart.png" />
                                                                                Love</span>
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
                                                                            <span><img alt src="images/smiles/smile.png" />
                                                                                Happy</span>
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
                                                                            <span><img alt src="images/smiles/weep.png" />
                                                                                Dislike</span>
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
                                                                <div className="new-comment" style={{ display: 'block' }}>
                                                                    <form method="post">
                                                                        <input type="text" placeholder="write comment" />
                                                                        <button type="submit"><i className="icofont-paper-plane" /></button>
                                                                    </form>
                                                                    <div className="comments-area">
                                                                        <ul>
                                                                            <li>
                                                                                <figure><img alt src="images/resources/user1.jpg" />
                                                                                </figure>
                                                                                <div className="commenter">
                                                                                    <h5><a title href="#">Jack Carter</a>
                                                                                    </h5>
                                                                                    <span>2 hours ago</span>
                                                                                    <p>
                                                                                        i think that some how, we learn who we
                                                                                        really are and then live with that
                                                                                        decision, great post!
                                                                                    </p>
                                                                                    <span>you can view the more detail via
                                                                                        link</span>
                                                                                    <a title href="#">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                                                </div>
                                                                                <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                                                <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                                            </li>
                                                                            <li>
                                                                                <figure><img alt src="images/resources/user2.jpg" />
                                                                                </figure>
                                                                                <div className="commenter">
                                                                                    <h5><a title href="#">Ching xang</a></h5>
                                                                                    <span>2 hours ago</span>
                                                                                    <p>
                                                                                        i think that some how, we learn who we
                                                                                        really are and then live with that
                                                                                        decision, great post!
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
                                            </div>{/* post sell book */}
                                            <div className="main-wraper">
                                                <div className="wraper-title">
                                                    <span><i className="icofont-video-alt" /> Videos Play List</span>
                                                    <a href="videos.html" title>See all Videos</a>
                                                </div>
                                                <div className="videos-caro">
                                                    <div className="item-video" data-merge={2}>
                                                        <a className="owl-video" href="https://www.youtube.com/watch?v=8iZTb9NWbz8" />
                                                        <div className="posted-user">
                                                            <img src="images/resources/user4.jpg" alt />
                                                            <span>Frank J.</span>
                                                        </div>
                                                        <div className="vid-info">
                                                            <span>1 year ago</span>
                                                            <span><i className="icofont-eye-open" /> 3.1k</span>
                                                        </div>
                                                    </div>
                                                    <div className="item-video" data-merge={2}>
                                                        <a className="owl-video" href="https://www.youtube.com/watch?v=8itUNRIWVIs" />
                                                        <div className="posted-user">
                                                            <img src="images/resources/user2.jpg" alt />
                                                            <span>Maria K.</span>
                                                        </div>
                                                        <div className="vid-info">
                                                            <span>2 weeks ago</span>
                                                            <span><i className="icofont-eye-open" /> 1.1k</span>
                                                        </div>
                                                    </div>
                                                    <div className="item-video" data-merge={2}>
                                                        <a className="owl-video" href="https://www.youtube.com/watch?v=JpxsRwnRwCQ" />
                                                        <div className="posted-user">
                                                            <img src="images/resources/user1.jpg" alt />
                                                            <span>Jack Carter</span>
                                                        </div>
                                                        <div className="vid-info">
                                                            <span>4 weeks ago</span>
                                                            <span><i className="icofont-eye-open" /> 20k</span>
                                                        </div>
                                                    </div>
                                                    <div className="item-video" data-merge={2}>
                                                        <a className="owl-video" href="https://www.youtube.com/watch?v=WNeLUngb-Xg" />
                                                        <div className="posted-user">
                                                            <img src="images/resources/user3.jpg" alt />
                                                            <span>Fawad Jan</span>
                                                        </div>
                                                        <div className="vid-info">
                                                            <span>1 Month ago</span>
                                                            <span><i className="icofont-eye-open" /> 8k</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>{/* video playlist carousel */}
                                            <div className="main-wraper">
                                                <div className="user-post">
                                                    <div className="friend-info">
                                                        <figure>
                                                            <em>
                                                                <svg style={{ verticalAlign: 'middle' }} xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24">
                                                                    <path fill="#7fba00" stroke="#7fba00" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z">
                                                                    </path>
                                                                </svg></em>
                                                            <img alt src="images/resources/user3.jpg" />
                                                        </figure>
                                                        <div className="friend-name">
                                                            <div className="more">
                                                                <div className="more-post-optns">
                                                                    <i className>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal">
                                                                            <circle cx={12} cy={12} r={1} />
                                                                            <circle cx={19} cy={12} r={1} />
                                                                            <circle cx={5} cy={12} r={1} />
                                                                        </svg></i>
                                                                    <ul>
                                                                        <li>
                                                                            <i className="icofont-pen-alt-1" />Edit Post
                                                                            <span>Edit This Post within a Hour</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-ban" />Hide Post
                                                                            <span>Hide This Post</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-ui-delete" />Delete Post
                                                                            <span>If inappropriate Post By Mistake</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-flag" />Report
                                                                            <span>Inappropriate content</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <ins><a title href="time-line.html">Turgut Alp</a> Create
                                                                Post</ins>
                                                            <span><i className="icofont-globe" /> published: Sep,15 2020</span>
                                                        </div>
                                                        <div className="post-meta">
                                                            <figure>
                                                                <a data-toggle="modal" data-target="#img-comt" href="images/resources/album1.jpg">
                                                                    <img src="images/resources/study.jpg" alt />
                                                                </a>
                                                            </figure>
                                                            <a href="post-detail.html" className="post-title">Supervision as a
                                                                Personnel Development Device</a>
                                                            <p>
                                                                Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                                                                condimentum rhoncus, sem quam semper libero.
                                                            </p>
                                                            <div className="we-video-info">
                                                                <ul>
                                                                    <li>
                                                                        <span title="views" className="views">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye">
                                                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z">
                                                                                    </path>
                                                                                    <circle cx={12} cy={12} r={3} />
                                                                                </svg></i>
                                                                            <ins>1.2k</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span title="Comments" className="Recommend">
                                                                            <i>
                                                                                <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                                                                </svg></i>
                                                                            <ins>54</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span title="follow" className="Follow">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                                                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                                                    </polygon>
                                                                                </svg></i>
                                                                            <ins>5k</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="share-pst" title="Share">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2">
                                                                                    <circle cx={18} cy={5} r={3} />
                                                                                    <circle cx={6} cy={12} r={3} />
                                                                                    <circle cx={18} cy={19} r={3} />
                                                                                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                                                                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                                                                </svg></i>
                                                                            <ins>205</ins>
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                                <a href="post-detail.html" title className="reply">Reply <i className="icofont-reply" /></a>
                                                            </div>
                                                            <div className="stat-tools">
                                                                <div className="box">
                                                                    <div className="Like"><a className="Like__link"><i className="icofont-like" /> Like</a>
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
                                                                <a title href="#" className="comment-to"><i className="icofont-comment" /> Comment</a>
                                                                <a title href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                                                                <div className="emoji-state">
                                                                    <div className="popover_wrapper">
                                                                        <a className="popover_title" href="#" title><img alt src="images/smiles/thumb.png" /></a>
                                                                        <div className="popover_content">
                                                                            <span><img alt src="images/smiles/thumb.png" />
                                                                                Likes</span>
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
                                                                            <span><img alt src="images/smiles/heart.png" />
                                                                                Love</span>
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
                                                                            <span><img alt src="images/smiles/smile.png" />
                                                                                Happy</span>
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
                                                                            <span><img alt src="images/smiles/weep.png" />
                                                                                Dislike</span>
                                                                            <ul className="namelist">
                                                                                <li>Danial Carbal</li>
                                                                                <li>Amara Sin</li>
                                                                                <li>Sarah K.</li>
                                                                                <li><span>15+ more</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <p>30+</p>
                                                                </div>
                                                                <div className="new-comment" style={{ display: 'none' }}>
                                                                    <form method="post">
                                                                        <input type="text" placeholder="write comment" />
                                                                        <button type="submit"><i className="icofont-paper-plane" /></button>
                                                                    </form>
                                                                    <div className="comments-area">
                                                                        <ul>
                                                                            <li>
                                                                                <figure><img alt src="images/resources/user1.jpg" />
                                                                                </figure>
                                                                                <div className="commenter">
                                                                                    <h5><a title href="#">Jack Carter</a>
                                                                                    </h5>
                                                                                    <span>2 hours ago</span>
                                                                                    <p>
                                                                                        i think that some how, we learn who we
                                                                                        really are and then live with that
                                                                                        decision, great post!
                                                                                    </p>
                                                                                    <span>you can view the more detail via
                                                                                        link</span>
                                                                                    <a title href="#">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                                                </div>
                                                                                <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                                                <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                                            </li>
                                                                            <li>
                                                                                <figure><img alt src="images/resources/user2.jpg" />
                                                                                </figure>
                                                                                <div className="commenter">
                                                                                    <h5><a title href="#">Ching xang</a></h5>
                                                                                    <span>2 hours ago</span>
                                                                                    <p>
                                                                                        i think that some how, we learn who we
                                                                                        really are and then live with that
                                                                                        decision, great post!
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
                                            </div>{/* share image with post */}
                                            <div className="main-wraper">
                                                <div className="user-post">
                                                    <div className="friend-info">
                                                        <figure>
                                                            <em>
                                                                <svg style={{ verticalAlign: 'middle' }} xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24">
                                                                    <path fill="#82828e" stroke="#82828e" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z">
                                                                    </path>
                                                                </svg></em>
                                                            <img alt src="images/resources/user4.jpg" />
                                                        </figure>
                                                        <div className="friend-name">
                                                            <div className="more">
                                                                <div className="more-post-optns">
                                                                    <i className>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal">
                                                                            <circle cx={12} cy={12} r={1} />
                                                                            <circle cx={19} cy={12} r={1} />
                                                                            <circle cx={5} cy={12} r={1} />
                                                                        </svg></i>
                                                                    <ul>
                                                                        <li>
                                                                            <i className="icofont-pen-alt-1" />Edit Post
                                                                            <span>Edit This Post within a Hour</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-ban" />Hide Post
                                                                            <span>Hide This Post</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-ui-delete" />Delete Post
                                                                            <span>If inappropriate Post By Mistake</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-flag" />Report
                                                                            <span>Inappropriate content</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <ins><a title href="time-line.html">Saim turan</a> added image
                                                                album</ins>
                                                            <span><i className="icofont-globe" /> published: Sep,15 2020</span>
                                                        </div>
                                                        <div className="post-meta">
                                                            <figure>
                                                                <div className="img-bunch">
                                                                    <div className="row">
                                                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                                                            <figure>
                                                                                <a data-toggle="modal" data-target="#img-comt" href="images/resources/album1.jpg">
                                                                                    <img src="images/resources/album1.jpg" alt />
                                                                                </a>
                                                                            </figure>
                                                                            <figure>
                                                                                <a data-toggle="modal" data-target="#img-comt" href="images/resources/album2.jpg"><img src="images/resources/album2.jpg" alt />
                                                                                </a>
                                                                            </figure>
                                                                        </div>
                                                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                                                            <figure>
                                                                                <a data-toggle="modal" data-target="#img-comt" href="images/resources/album6.jpg"><img src="images/resources/album6.jpg" alt />
                                                                                </a>
                                                                            </figure>
                                                                            <figure>
                                                                                <a data-toggle="modal" data-target="#img-comt" href="images/resources/album5.jpg"><img src="images/resources/album5.jpg" alt />
                                                                                </a>
                                                                            </figure>
                                                                            <figure>
                                                                                <a data-toggle="modal" data-target="#img-comt" href="images/resources/album4.jpg"><img src="images/resources/album4.jpg" alt />
                                                                                </a>
                                                                                <div className="more-photos">
                                                                                    <span>+15</span>
                                                                                </div>
                                                                            </figure>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </figure>
                                                            <a href="post-detail.html" className="post-title">Supervision as a
                                                                Personnel Development Device</a>
                                                            <p>
                                                                Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                                                                condimentum rhoncus, sem quam semper libero.
                                                            </p>
                                                            <div className="we-video-info">
                                                                <ul>
                                                                    <li>
                                                                        <span title="views" className="views">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye">
                                                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z">
                                                                                    </path>
                                                                                    <circle cx={12} cy={12} r={3} />
                                                                                </svg></i>
                                                                            <ins>1.2k</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span title="Comments" className="Recommend">
                                                                            <i>
                                                                                <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                                                                </svg></i>
                                                                            <ins>54</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span title="follow" className="Follow">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                                                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                                                    </polygon>
                                                                                </svg></i>
                                                                            <ins>5k</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="share-pst" title="Share">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2">
                                                                                    <circle cx={18} cy={5} r={3} />
                                                                                    <circle cx={6} cy={12} r={3} />
                                                                                    <circle cx={18} cy={19} r={3} />
                                                                                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                                                                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                                                                </svg></i>
                                                                            <ins>205</ins>
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                                <a href="post-detail.html" title className="reply">Reply <i className="icofont-reply" /></a>
                                                            </div>
                                                            <div className="stat-tools">
                                                                <div className="box">
                                                                    <div className="Like"><a className="Like__link"><i className="icofont-like" /> Like</a>
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
                                                                <a title href="#" className="comment-to"><i className="icofont-comment" /> Comment</a>
                                                                <a title href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                                                                <div className="emoji-state">
                                                                    <div className="popover_wrapper">
                                                                        <a className="popover_title" href="#" title><img alt src="images/smiles/thumb.png" /></a>
                                                                        <div className="popover_content">
                                                                            <span><img alt src="images/smiles/thumb.png" />
                                                                                Likes</span>
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
                                                                            <span><img alt src="images/smiles/heart.png" />
                                                                                Love</span>
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
                                                                            <span><img alt src="images/smiles/smile.png" />
                                                                                Happy</span>
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
                                                                            <span><img alt src="images/smiles/weep.png" />
                                                                                Dislike</span>
                                                                            <ul className="namelist">
                                                                                <li>Danial Carbal</li>
                                                                                <li>Amara Sin</li>
                                                                                <li>Sarah K.</li>
                                                                                <li><span>15+ more</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <p>50+</p>
                                                                </div>
                                                                <div className="new-comment" style={{ display: 'none' }}>
                                                                    <form method="post">
                                                                        <input type="text" placeholder="write comment" />
                                                                        <button type="submit"><i className="icofont-paper-plane" /></button>
                                                                    </form>
                                                                    <div className="comments-area">
                                                                        <ul>
                                                                            <li>
                                                                                <figure><img alt src="images/resources/user1.jpg" />
                                                                                </figure>
                                                                                <div className="commenter">
                                                                                    <h5><a title href="#">Jack Carter</a>
                                                                                    </h5>
                                                                                    <span>2 hours ago</span>
                                                                                    <p>
                                                                                        i think that some how, we learn who we
                                                                                        really are and then live with that
                                                                                        decision, great post!
                                                                                    </p>
                                                                                    <span>you can view the more detail via
                                                                                        link</span>
                                                                                    <a title href="#">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                                                </div>
                                                                                <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                                                <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                                            </li>
                                                                            <li>
                                                                                <figure><img alt src="images/resources/user2.jpg" />
                                                                                </figure>
                                                                                <div className="commenter">
                                                                                    <h5><a title href="#">Ching xang</a></h5>
                                                                                    <span>2 hours ago</span>
                                                                                    <p>
                                                                                        i think that some how, we learn who we
                                                                                        really are and then live with that
                                                                                        decision, great post!
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
                                            </div>{/* share image album */}
                                            <div className="main-wraper">
                                                <div className="user-post">
                                                    <div className="friend-info">
                                                        <figure>
                                                            <em>
                                                                <svg style={{ verticalAlign: 'middle' }} xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24">
                                                                    <path fill="#7fba00" stroke="#7fba00" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z">
                                                                    </path>
                                                                </svg></em>
                                                            <img alt src="images/resources/user5.jpg" />
                                                        </figure>
                                                        <div className="friend-name">
                                                            <div className="more">
                                                                <div className="more-post-optns">
                                                                    <i className>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal">
                                                                            <circle cx={12} cy={12} r={1} />
                                                                            <circle cx={19} cy={12} r={1} />
                                                                            <circle cx={5} cy={12} r={1} />
                                                                        </svg></i>
                                                                    <ul>
                                                                        <li>
                                                                            <i className="icofont-pen-alt-1" />Edit Post
                                                                            <span>Edit This Post within a Hour</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-ban" />Hide Post
                                                                            <span>Hide This Post</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-ui-delete" />Delete Post
                                                                            <span>If inappropriate Post By Mistake</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-flag" />Report
                                                                            <span>Inappropriate content</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <ins><a title href="time-line.html">Andrew Jhon</a> Shared
                                                                Link</ins>
                                                            <span><i className="icofont-globe" /> published: Sep,15 2020</span>
                                                        </div>
                                                        <div className="post-meta">
                                                            <em><a href="https://themeforest.net/item/winku-social-network-toolkit-responsive-template/22363538" title target="_blank">https://themeforest.net/item/winku-social-network-toolkit-responsive-template/22363538</a></em>
                                                            <figure>
                                                                <span>fetched-image</span>
                                                                <img src="images/resources/laptop.png" alt />
                                                            </figure>
                                                            <a href="https://themeforest.net/item/winku-social-network-toolkit-responsive-template/22363538" className="post-title" target="_blank">Winku Social Network with
                                                                Company Pages Theme</a>
                                                            <p>
                                                                “Winku” is a social community mobile app kit with features. user
                                                                can use this app for sharing blog, posts, timeline, create
                                                                Group, Create Pages, chat/Messages, Movies sharing, QA, and Much
                                                                More.
                                                            </p>
                                                            <div className="we-video-info">
                                                                <ul>
                                                                    <li>
                                                                        <span title="views" className="views">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye">
                                                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z">
                                                                                    </path>
                                                                                    <circle cx={12} cy={12} r={3} />
                                                                                </svg></i>
                                                                            <ins>1.2k</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span title="Comments" className="Recommend">
                                                                            <i>
                                                                                <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                                                                </svg></i>
                                                                            <ins>54</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span title="follow" className="Follow">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                                                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                                                    </polygon>
                                                                                </svg></i>
                                                                            <ins>5k</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="share-pst" title="Share">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2">
                                                                                    <circle cx={18} cy={5} r={3} />
                                                                                    <circle cx={6} cy={12} r={3} />
                                                                                    <circle cx={18} cy={19} r={3} />
                                                                                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                                                                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                                                                </svg></i>
                                                                            <ins>205</ins>
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                                <a href="post-detail.html" title className="reply">Reply <i className="icofont-reply" /></a>
                                                            </div>
                                                            <div className="stat-tools">
                                                                <div className="box">
                                                                    <div className="Like"><a className="Like__link"><i className="icofont-like" /> Like</a>
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
                                                                <a title href="#" className="comment-to"><i className="icofont-comment" /> Comment</a>
                                                                <a title href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                                                                <div className="emoji-state">
                                                                    <div className="popover_wrapper">
                                                                        <a className="popover_title" href="#" title><img alt src="images/smiles/thumb.png" /></a>
                                                                        <div className="popover_content">
                                                                            <span><img alt src="images/smiles/thumb.png" />
                                                                                Likes</span>
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
                                                                            <span><img alt src="images/smiles/heart.png" />
                                                                                Love</span>
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
                                                                            <span><img alt src="images/smiles/smile.png" />
                                                                                Happy</span>
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
                                                                            <span><img alt src="images/smiles/weep.png" />
                                                                                Dislike</span>
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
                                                                <div className="new-comment" style={{ display: 'block' }}>
                                                                    <form method="post">
                                                                        <input type="text" placeholder="write comment" />
                                                                        <button type="submit"><i className="icofont-paper-plane" /></button>
                                                                    </form>
                                                                    <div className="comments-area">
                                                                        <ul>
                                                                            <li>
                                                                                <figure><img alt src="images/resources/user1.jpg" />
                                                                                </figure>
                                                                                <div className="commenter">
                                                                                    <h5><a title href="#">Jack Carter</a>
                                                                                    </h5>
                                                                                    <span>2 hours ago</span>
                                                                                    <p>
                                                                                        i think that some how, we learn who we
                                                                                        really are and then live with that
                                                                                        decision, great post!
                                                                                    </p>
                                                                                    <span>you can view the more detail via
                                                                                        link</span>
                                                                                    <a title href="#">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                                                </div>
                                                                                <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                                                <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                                            </li>
                                                                            <li>
                                                                                <figure><img alt src="images/resources/user2.jpg" />
                                                                                </figure>
                                                                                <div className="commenter">
                                                                                    <h5><a title href="#">Ching xang</a></h5>
                                                                                    <span>2 hours ago</span>
                                                                                    <p>
                                                                                        i think that some how, we learn who we
                                                                                        really are and then live with that
                                                                                        decision, great post!
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
                                            </div>{/* share link */}
                                            <div className="main-wraper">
                                                <div className="user-post">
                                                    <div className="friend-info">
                                                        <figure>
                                                            <em>
                                                                <svg style={{ verticalAlign: 'middle' }} xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24">
                                                                    <path fill="#7fba00" stroke="#7fba00" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z">
                                                                    </path>
                                                                </svg></em>
                                                            <img alt src="images/resources/user2.jpg" />
                                                        </figure>
                                                        <div className="friend-name">
                                                            <div className="more">
                                                                <div className="more-post-optns">
                                                                    <i className>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal">
                                                                            <circle cx={12} cy={12} r={1} />
                                                                            <circle cx={19} cy={12} r={1} />
                                                                            <circle cx={5} cy={12} r={1} />
                                                                        </svg></i>
                                                                    <ul>
                                                                        <li>
                                                                            <i className="icofont-pen-alt-1" />Edit Post
                                                                            <span>Edit This Post within a Hour</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-ban" />Hide Post
                                                                            <span>Hide This Post</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-ui-delete" />Delete Post
                                                                            <span>If inappropriate Post By Mistake</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-flag" />Report
                                                                            <span>Inappropriate content</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <ins><a title href="time-line.html">Maria k.</a> Shared
                                                                Link</ins>
                                                            <span><i className="icofont-globe" /> published: Sep,15 2020</span>
                                                        </div>
                                                        <div className="post-meta">
                                                            <em><a href="https://www.youtube.com/embed/zdow47FQRfQ" title target="_blank">https://www.youtube.com/embed/zdow47FQRfQ</a>
                                                            </em>
                                                            <iframe height={285} src="https://www.youtube.com/embed/zdow47FQRfQ" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                                            <p>
                                                                Cookie? Biscuit? Bikkie? They all mean the same thing! Our
                                                                lovely English teachers will quickly show you some pronunciation
                                                                and vocabulary differences from Australia, America, and England!
                                                            </p>
                                                            <div className="we-video-info">
                                                                <ul>
                                                                    <li>
                                                                        <span title="views" className="views">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye">
                                                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z">
                                                                                    </path>
                                                                                    <circle cx={12} cy={12} r={3} />
                                                                                </svg></i>
                                                                            <ins>1.2k</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span title="Comments" className="Recommend">
                                                                            <i>
                                                                                <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                                                                </svg></i>
                                                                            <ins>54</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span title="follow" className="Follow">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                                                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                                                    </polygon>
                                                                                </svg></i>
                                                                            <ins>5k</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="share-pst" title="Share">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2">
                                                                                    <circle cx={18} cy={5} r={3} />
                                                                                    <circle cx={6} cy={12} r={3} />
                                                                                    <circle cx={18} cy={19} r={3} />
                                                                                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                                                                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                                                                </svg></i>
                                                                            <ins>205</ins>
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                                <a href="post-detail.html" title className="reply">Reply <i className="icofont-reply" /></a>
                                                            </div>
                                                            <div className="stat-tools">
                                                                <div className="box">
                                                                    <div className="Like"><a className="Like__link"><i className="icofont-like" /> Like</a>
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
                                                                <a title href="#" className="comment-to"><i className="icofont-comment" /> Comment</a>
                                                                <a title href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                                                                <div className="emoji-state">
                                                                    <div className="popover_wrapper">
                                                                        <a className="popover_title" href="#" title><img alt src="images/smiles/thumb.png" /></a>
                                                                        <div className="popover_content">
                                                                            <span><img alt src="images/smiles/thumb.png" />
                                                                                Likes</span>
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
                                                                            <span><img alt src="images/smiles/heart.png" />
                                                                                Love</span>
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
                                                                            <span><img alt src="images/smiles/smile.png" />
                                                                                Happy</span>
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
                                                                            <span><img alt src="images/smiles/weep.png" />
                                                                                Dislike</span>
                                                                            <ul className="namelist">
                                                                                <li>Danial Carbal</li>
                                                                                <li>Amara Sin</li>
                                                                                <li>Sarah K.</li>
                                                                                <li><span>15+ more</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <p>20+</p>
                                                                </div>
                                                                <div className="new-comment" style={{ display: 'none' }}>
                                                                    <form method="post">
                                                                        <input type="text" placeholder="write comment" />
                                                                        <button type="submit"><i className="icofont-paper-plane" /></button>
                                                                    </form>
                                                                    <div className="comments-area">
                                                                        <ul>
                                                                            <li>
                                                                                <figure><img alt src="images/resources/user1.jpg" />
                                                                                </figure>
                                                                                <div className="commenter">
                                                                                    <h5><a title href="#">Jack Carter</a>
                                                                                    </h5>
                                                                                    <span>2 hours ago</span>
                                                                                    <p>
                                                                                        i think that some how, we learn who we
                                                                                        really are and then live with that
                                                                                        decision, great post!
                                                                                    </p>
                                                                                    <span>you can view the more detail via
                                                                                        link</span>
                                                                                    <a title href="#">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                                                </div>
                                                                                <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                                                <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                                            </li>
                                                                            <li>
                                                                                <figure><img alt src="images/resources/user2.jpg" />
                                                                                </figure>
                                                                                <div className="commenter">
                                                                                    <h5><a title href="#">Ching xang</a></h5>
                                                                                    <span>2 hours ago</span>
                                                                                    <p>
                                                                                        i think that some how, we learn who we
                                                                                        really are and then live with that
                                                                                        decision, great post!
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
                                            </div>{/* share video */}
                                            <div className="main-wraper">
                                                <div className="user-post">
                                                    <div className="friend-info">
                                                        <figure>
                                                            <em>
                                                                <svg style={{ verticalAlign: 'middle' }} xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24">
                                                                    <path fill="#7fba00" stroke="#7fba00" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z">
                                                                    </path>
                                                                </svg></em>
                                                            <img alt src="images/resources/user2.jpg" />
                                                        </figure>
                                                        <div className="friend-name">
                                                            <div className="more">
                                                                <div className="more-post-optns">
                                                                    <i className>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal">
                                                                            <circle cx={12} cy={12} r={1} />
                                                                            <circle cx={19} cy={12} r={1} />
                                                                            <circle cx={5} cy={12} r={1} />
                                                                        </svg></i>
                                                                    <ul>
                                                                        <li>
                                                                            <i className="icofont-pen-alt-1" />Edit Post
                                                                            <span>Edit This Post within a Hour</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-ban" />Hide Post
                                                                            <span>Hide This Post</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-ui-delete" />Delete Post
                                                                            <span>If inappropriate Post By Mistake</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-flag" />Report
                                                                            <span>Inappropriate content</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <ins><a title href="time-line.html">Maria k.</a> Shared
                                                                Link</ins>
                                                            <span><i className="icofont-globe" /> published: Sep,15 2020</span>
                                                        </div>
                                                        <div className="post-meta">
                                                            <img className="gif" src="images/giphy.png" data-gif="images/giphy-sample.gif" alt />
                                                            <div className="we-video-info">
                                                                <ul>
                                                                    <li>
                                                                        <span title="views" className="views">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye">
                                                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z">
                                                                                    </path>
                                                                                    <circle cx={12} cy={12} r={3} />
                                                                                </svg></i>
                                                                            <ins>1.2k</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span title="Comments" className="Recommend">
                                                                            <i>
                                                                                <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                                                                </svg></i>
                                                                            <ins>54</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span title="follow" className="Follow">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                                                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                                                    </polygon>
                                                                                </svg></i>
                                                                            <ins>5k</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="share-pst" title="Share">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2">
                                                                                    <circle cx={18} cy={5} r={3} />
                                                                                    <circle cx={6} cy={12} r={3} />
                                                                                    <circle cx={18} cy={19} r={3} />
                                                                                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                                                                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                                                                </svg></i>
                                                                            <ins>205</ins>
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                                <a href="post-detail.html" title className="reply">Reply <i className="icofont-reply" /></a>
                                                            </div>
                                                            <div className="stat-tools">
                                                                <div className="box">
                                                                    <div className="Like"><a className="Like__link"><i className="icofont-like" /> Like</a>
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
                                                                <a title href="#" className="comment-to"><i className="icofont-comment" /> Comment</a>
                                                                <a title href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                                                                <div className="emoji-state">
                                                                    <div className="popover_wrapper">
                                                                        <a className="popover_title" href="#" title><img alt src="images/smiles/thumb.png" /></a>
                                                                        <div className="popover_content">
                                                                            <span><img alt src="images/smiles/thumb.png" />
                                                                                Likes</span>
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
                                                                            <span><img alt src="images/smiles/heart.png" />
                                                                                Love</span>
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
                                                                            <span><img alt src="images/smiles/smile.png" />
                                                                                Happy</span>
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
                                                                            <span><img alt src="images/smiles/weep.png" />
                                                                                Dislike</span>
                                                                            <ul className="namelist">
                                                                                <li>Danial Carbal</li>
                                                                                <li>Amara Sin</li>
                                                                                <li>Sarah K.</li>
                                                                                <li><span>15+ more</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <p>20+</p>
                                                                </div>
                                                                <div className="new-comment" style={{ display: 'none' }}>
                                                                    <form method="post">
                                                                        <input type="text" placeholder="write comment" />
                                                                        <button type="submit"><i className="icofont-paper-plane" /></button>
                                                                    </form>
                                                                    <div className="comments-area">
                                                                        <ul>
                                                                            <li>
                                                                                <figure><img alt src="images/resources/user1.jpg" />
                                                                                </figure>
                                                                                <div className="commenter">
                                                                                    <h5><a title href="#">Jack Carter</a>
                                                                                    </h5>
                                                                                    <span>2 hours ago</span>
                                                                                    <p>
                                                                                        i think that some how, we learn who we
                                                                                        really are and then live with that
                                                                                        decision, great post!
                                                                                    </p>
                                                                                    <span>you can view the more detail via
                                                                                        link</span>
                                                                                    <a title href="#">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                                                </div>
                                                                                <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                                                <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                                            </li>
                                                                            <li>
                                                                                <figure><img alt src="images/resources/user2.jpg" />
                                                                                </figure>
                                                                                <div className="commenter">
                                                                                    <h5><a title href="#">Ching xang</a></h5>
                                                                                    <span>2 hours ago</span>
                                                                                    <p>
                                                                                        i think that some how, we learn who we
                                                                                        really are and then live with that
                                                                                        decision, great post!
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
                                            </div>{/* gif image post */}
                                            <div className="main-wraper">
                                                <div className="user-post">
                                                    <div className="friend-info">
                                                        <figure>
                                                            <img alt src="images/resources/sponsor.png" />
                                                        </figure>
                                                        <div className="friend-name">
                                                            <div className="more">
                                                                <div className="more-post-optns">
                                                                    <i className>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal">
                                                                            <circle cx={12} cy={12} r={1} />
                                                                            <circle cx={19} cy={12} r={1} />
                                                                            <circle cx={5} cy={12} r={1} />
                                                                        </svg></i>
                                                                    <ul>
                                                                        <li>
                                                                            <i className="icofont-pen-alt-1" />Edit Post
                                                                            <span>Edit This Post within a Hour</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-ban" />Hide Post
                                                                            <span>Hide This Post</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-ui-delete" />Delete Post
                                                                            <span>If inappropriate Post By Mistake</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-flag" />Report
                                                                            <span>Inappropriate content</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <ins><a title href="time-line.html">Sponsors Ads</a></ins>
                                                            <span><i className="icofont-globe" /> Sponsor</span>
                                                        </div>
                                                        <div className="post-meta">
                                                            <ul className="sponsored-caro">
                                                                <li>
                                                                    <figure><img src="images/resources/sponsor-prod1.jpg" alt /></figure>
                                                                    <div className="sponsor-prod-name">
                                                                        <a href="#" title>Aloevera Juice 1 liter</a>
                                                                        <span>$24</span>
                                                                    </div>
                                                                    <a href="#" title className="shop-btn">Shop Now</a>
                                                                    <div className="share-info">
                                                                        <span>50 shares</span>
                                                                        <span>20k Likes</span>
                                                                    </div>
                                                                    <div className="stat-tools">
                                                                        <div className="box">
                                                                            <div className="Like"><a className="Like__link"><i className="icofont-like" /> Like</a>
                                                                                <div className="Emojis">
                                                                                    <div className="Emoji Emoji--like">
                                                                                        <div className="icon icon--like" />
                                                                                    </div>
                                                                                    <div className="Emoji Emoji--love">
                                                                                        <div className="icon icon--heart" />
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
                                                                            </div>
                                                                        </div>
                                                                        <a title href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <figure><img src="images/resources/sponsor-prod5.jpg" alt /></figure>
                                                                    <div className="sponsor-prod-name">
                                                                        <a href="#" title>Beauty Cosmetics</a>
                                                                        <span>$24</span>
                                                                    </div>
                                                                    <a href="#" title className="shop-btn">Shop Now</a>
                                                                    <div className="share-info">
                                                                        <span>50 shares</span>
                                                                        <span>20k Likes</span>
                                                                    </div>
                                                                    <div className="stat-tools">
                                                                        <div className="box">
                                                                            <div className="Like"><a className="Like__link"><i className="icofont-like" /> Like</a>
                                                                                <div className="Emojis">
                                                                                    <div className="Emoji Emoji--like">
                                                                                        <div className="icon icon--like" />
                                                                                    </div>
                                                                                    <div className="Emoji Emoji--love">
                                                                                        <div className="icon icon--heart" />
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
                                                                            </div>
                                                                        </div>
                                                                        <a title href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <figure><img src="images/resources/sponsor-prod4.jpg" alt /></figure>
                                                                    <div className="sponsor-prod-name">
                                                                        <a href="#" title>Overtime For Men</a>
                                                                        <span>$24</span>
                                                                    </div>
                                                                    <a href="#" title className="shop-btn">Shop Now</a>
                                                                    <div className="share-info">
                                                                        <span>50 shares</span>
                                                                        <span>20k Likes</span>
                                                                    </div>
                                                                    <div className="stat-tools">
                                                                        <div className="box">
                                                                            <div className="Like"><a className="Like__link"><i className="icofont-like" /> Like</a>
                                                                                <div className="Emojis">
                                                                                    <div className="Emoji Emoji--like">
                                                                                        <div className="icon icon--like" />
                                                                                    </div>
                                                                                    <div className="Emoji Emoji--love">
                                                                                        <div className="icon icon--heart" />
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
                                                                            </div>
                                                                        </div>
                                                                        <a title href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <figure><img src="images/resources/sponsor-prod3.jpg" alt /></figure>
                                                                    <div className="sponsor-prod-name">
                                                                        <a href="#" title>Redish Baby Items</a>
                                                                        <span>$24</span>
                                                                    </div>
                                                                    <a href="#" title className="shop-btn">Shop Now</a>
                                                                    <div className="share-info">
                                                                        <span>50 shares</span>
                                                                        <span>20k Likes</span>
                                                                    </div>
                                                                    <div className="stat-tools">
                                                                        <div className="box">
                                                                            <div className="Like"><a className="Like__link"><i className="icofont-like" /> Like</a>
                                                                                <div className="Emojis">
                                                                                    <div className="Emoji Emoji--like">
                                                                                        <div className="icon icon--like" />
                                                                                    </div>
                                                                                    <div className="Emoji Emoji--love">
                                                                                        <div className="icon icon--heart" />
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
                                                                            </div>
                                                                        </div>
                                                                        <a title href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <figure><img src="images/resources/sponsor-prod2.jpg" alt /></figure>
                                                                    <div className="sponsor-prod-name">
                                                                        <a href="#" title>Potato Baby Fider</a>
                                                                        <span>$24</span>
                                                                    </div>
                                                                    <a href="#" title className="shop-btn">Shop Now</a>
                                                                    <div className="share-info">
                                                                        <span>50 shares</span>
                                                                        <span>20k Likes</span>
                                                                    </div>
                                                                    <div className="stat-tools">
                                                                        <div className="box">
                                                                            <div className="Like"><a className="Like__link"><i className="icofont-like" /> Like</a>
                                                                                <div className="Emojis">
                                                                                    <div className="Emoji Emoji--like">
                                                                                        <div className="icon icon--like" />
                                                                                    </div>
                                                                                    <div className="Emoji Emoji--love">
                                                                                        <div className="icon icon--heart" />
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
                                                                            </div>
                                                                        </div>
                                                                        <a title href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <figure><img src="images/resources/sponsor-prod3.jpg" alt /></figure>
                                                                    <div className="sponsor-prod-name">
                                                                        <a href="#" title>Baby items fider</a>
                                                                        <span>$24</span>
                                                                    </div>
                                                                    <a href="#" title className="shop-btn">Shop Now</a>
                                                                    <div className="share-info">
                                                                        <span>50 shares</span>
                                                                        <span>20k Likes</span>
                                                                    </div>
                                                                    <div className="stat-tools">
                                                                        <div className="box">
                                                                            <div className="Like"><a className="Like__link"><i className="icofont-like" /> Like</a>
                                                                                <div className="Emojis">
                                                                                    <div className="Emoji Emoji--like">
                                                                                        <div className="icon icon--like" />
                                                                                    </div>
                                                                                    <div className="Emoji Emoji--love">
                                                                                        <div className="icon icon--heart" />
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
                                                                            </div>
                                                                        </div>
                                                                        <a title href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>{/* advertisment carousel */}
                                            <div className="loadmore">
                                                <div className="sp sp-bars" />
                                                <a href="#" title data-ripple>Load More..</a>
                                            </div>{/* loadmore buttons */}
                                        </div>
                                        <div className="col-lg-3">
                                            <aside className="sidebar static right">
                                                <div className="widget">
                                                    <h4 className="widget-title">Your Groups</h4>
                                                    <ul className="ak-groups">
                                                        <li>
                                                            <figure><img src="images/resources/your-group1.jpg" alt /></figure>
                                                            <div className="your-grp">
                                                                <h5><a href="group-detail.html" title>Good Group</a></h5>
                                                                <a href="#" title><i className="icofont-bell-alt" />Notifilactions
                                                                    <span>13</span></a>
                                                                <a href="group-feed.html" title className="promote">view feed</a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <figure><img src="images/resources/your-group2.jpg" alt /></figure>
                                                            <div className="your-grp">
                                                                <h5><a href="group-detail.html" title>E-course Group</a></h5>
                                                                <a href="#" title><i className="icofont-bell-alt" />Notifilactions
                                                                    <span>13</span></a>
                                                                <a href="group-feed.html" title className="promote">view feed</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>{/* Your groups */}
                                                <div className="widget">
                                                    <h4 className="widget-title">Suggested Group</h4>
                                                    <div className="sug-caro">
                                                        <div className="friend-box">
                                                            <figure>
                                                                <img alt src="images/resources/sidebar-info.jpg" />
                                                                <span>Members: 505K</span>
                                                            </figure>
                                                            <div className="frnd-meta">
                                                                <img alt src="images/resources/frnd-figure2.jpg" />
                                                                <div className="frnd-name">
                                                                    <a title href="#">Social Research</a>
                                                                    <span>@biolabest</span>
                                                                </div>
                                                                <a className="main-btn2" href="#" title>Join Community</a>
                                                            </div>
                                                        </div>
                                                        <div className="friend-box">
                                                            <figure>
                                                                <img alt src="images/resources/sidebar-info2.jpg" />
                                                                <span>Members: 505K</span>
                                                            </figure>
                                                            <div className="frnd-meta">
                                                                <img alt src="images/resources/frnd-figure3.jpg" />
                                                                <div className="frnd-name">
                                                                    <a title href="#">Bio Labest Group</a>
                                                                    <span>@biolabest</span>
                                                                </div>
                                                                <a className="main-btn2" href="#" title>Join Community</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>{/* suggested group */}
                                                <div className="widget">
                                                    <h4 className="widget-title">Ask Research Question?</h4>
                                                    <div className="ask-question">
                                                        <i className="icofont-question-circle" />
                                                        <h6>Ask questions in Q&amp;A to get help from experts in your field.</h6>
                                                        <a className="ask-qst" href="#" title>Ask a question</a>
                                                    </div>
                                                </div>{/* ask question widget */}
                                                <div className="widget">
                                                    <h4 className="widget-title">Explor Events <a className="see-all" href="#" title>See All</a></h4>
                                                    <div className="rec-events bg-purple">
                                                        <i className="icofont-gift" />
                                                        <h6><a title href>BZ University good night event in columbia</a>
                                                        </h6>
                                                        <img alt src="images/clock.png" />
                                                    </div>
                                                    <div className="rec-events bg-blue">
                                                        <i className="icofont-microphone" />
                                                        <h6><a title href>The 3rd International Conference 2020</a></h6>
                                                        <img alt src="images/clock.png" />
                                                    </div>
                                                </div>{/* event widget */}
                                                <div className="widget">
                                                    <span><i className="icofont-globe" /> Sponsored</span>
                                                    <ul className="sponsors-ad">
                                                        <li>
                                                            <figure><img src="images/resources/sponsor.jpg" alt /></figure>
                                                            <div className="sponsor-meta">
                                                                <h5><a href="#" title>IQ Options Broker</a></h5>
                                                                <a href="#" title target="_blank">www.iqvie.com</a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <figure><img src="images/resources/sponsor2.jpg" alt /></figure>
                                                            <div className="sponsor-meta">
                                                                <h5><a href="#" title>BM Fashion Designer</a></h5>
                                                                <a href="#" title target="_blank">www.abcd.com</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>{/* sponsord */}
                                                <div className="widget stick-widget">
                                                    <h4 className="widget-title">Who's follownig</h4>
                                                    <ul className="followers">
                                                        <li>
                                                            <figure><img alt src="images/resources/friend-avatar.jpg" />
                                                            </figure>
                                                            <div className="friend-meta">
                                                                <h4>
                                                                    <a title href="time-line.html">Kelly Bill</a>
                                                                    <span>Dept colleague</span>
                                                                </h4>
                                                                <a className="underline" title href="#">Follow</a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <figure><img alt src="images/resources/friend-avatar2.jpg" />
                                                            </figure>
                                                            <div className="friend-meta">
                                                                <h4>
                                                                    <a title href="time-line.html">Issabel</a>
                                                                    <span>Dept colleague</span>
                                                                </h4>
                                                                <a className="underline" title href="#">Follow</a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <figure><img alt src="images/resources/friend-avatar3.jpg" />
                                                            </figure>
                                                            <div className="friend-meta">
                                                                <h4>
                                                                    <a title href="time-line.html">Andrew</a>
                                                                    <span>Dept colleague</span>
                                                                </h4>
                                                                <a className="underline" title href="#">Follow</a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <figure><img alt src="images/resources/friend-avatar4.jpg" />
                                                            </figure>
                                                            <div className="friend-meta">
                                                                <h4>
                                                                    <a title href="time-line.html">Sophia</a>
                                                                    <span>Dept colleague</span>
                                                                </h4>
                                                                <a className="underline" title href="#">Follow</a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <figure><img alt src="images/resources/friend-avatar5.jpg" />
                                                            </figure>
                                                            <div className="friend-meta">
                                                                <h4>
                                                                    <a title href="time-line.html">Allen</a>
                                                                    <span>Dept colleague</span>
                                                                </h4>
                                                                <a className="underline" title href="#">Follow</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>{/* whos following */}
                                            </aside>
                                        </div>
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
                <div className="cart-product">
                    <a href="product-cart.html" title="View Cart" data-toggle="tooltip"><i className="icofont-cart-alt" /></a>
                    <span>03</span>
                </div>{/* view cart button */}
                <div className="chat-live">
                    <a className="chat-btn" href="#" title="Start Live Chat" data-toggle="tooltip"><i className="icofont-facebook-messenger" /></a>
                    <span>07</span>
                </div>{/* chat button */}
                <div className="chat-box">
                    <div className="chat-head">
                        <h4>New Messages</h4>
                        <span className="clozed"><i className="icofont-close-circled" /></span>
                        <form method="post">
                            <input type="text" placeholder="To.." />
                        </form>
                    </div>
                    <div className="user-tabs">
                        <ul className="nav nav-tabs">
                            <li className="nav-item"><a className="active" href="#link1" data-toggle="tab">All Friends</a></li>
                            <li className="nav-item"><a className href="#link2" data-toggle="tab">Active</a><em>3</em></li>
                            <li className="nav-item"><a className href="#link3" data-toggle="tab">Groups</a></li>
                        </ul>
                        {/* Tab panes */}
                        <div className="tab-content">
                            <div className="tab-pane active fade show " id="link1">
                                <div className="friend">
                                    <a href="#" title>
                                        <figure>
                                            <img src="images/resources/user1.jpg" alt />
                                            <span className="status online" />
                                        </figure>
                                        <span>Oliver</span>
                                        <i className><img src="images/resources/user1.jpg" alt /></i>
                                    </a>
                                    <a href="#" title>
                                        <figure>
                                            <img src="images/resources/user2.jpg" alt />
                                            <span className="status away" />
                                        </figure>
                                        <span>Amelia</span>
                                        <i className="icofont-check-circled" />
                                    </a>
                                    <a href="#" title>
                                        <figure>
                                            <img src="images/resources/user3.jpg" alt />
                                            <span className="status offline" />
                                        </figure>
                                        <span>George</span>
                                        <i className><img src="images/resources/user3.jpg" alt /></i>
                                    </a>
                                    <a href="#" title>
                                        <figure>
                                            <img src="images/resources/user4.jpg" alt />
                                            <span className="status online" />
                                        </figure>
                                        <span>Jacob</span>
                                        <i className="icofont-check-circled" />
                                    </a>
                                    <a href="#" title>
                                        <figure>
                                            <img src="images/resources/user5.jpg" alt />
                                            <span className="status away" />
                                        </figure>
                                        <span>Poppy</span>
                                        <i className="icofont-check-circled" />
                                    </a>
                                    <a href="#" title>
                                        <figure>
                                            <img src="images/resources/user6.jpg" alt />
                                            <span className="status online" />
                                        </figure>
                                        <span>Sophia</span>
                                        <i className><img src="images/resources/user6.jpg" alt /></i>
                                    </a>
                                    <a href="#" title>
                                        <figure>
                                            <img src="images/resources/user7.jpg" alt />
                                            <span className="status away" />
                                        </figure>
                                        <span>Leo king</span>
                                        <i className><img src="images/resources/user7.jpg" alt /></i>
                                    </a>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="link2">
                                <div className="friend">
                                    <a href="#" title>
                                        <figure>
                                            <img src="images/resources/user1.jpg" alt />
                                            <span className="status online" />
                                        </figure>
                                        <span>Samu Jane</span>
                                        <i className><img src="images/resources/user1.jpg" alt /></i>
                                    </a>
                                    <a href="#" title>
                                        <figure>
                                            <img src="images/resources/user6.jpg" alt />
                                            <span className="status online" />
                                        </figure>
                                        <span>Tina Mark</span>
                                        <i className><img src="images/resources/user6.jpg" alt /></i>
                                    </a>
                                    <a href="#" title>
                                        <figure>
                                            <img src="images/resources/user7.jpg" alt />
                                            <span className="status online" />
                                        </figure>
                                        <span>Ak William</span>
                                        <i className><img src="images/resources/user7.jpg" alt /></i>
                                    </a>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="link3">
                                <div className="friend">
                                    <a href="#" title>
                                        <figure className="group-chat">
                                            <img src="images/resources/user5.jpg" alt />
                                            <img className="two" src="images/resources/user3.jpg" alt />
                                            <span className="status online" />
                                        </figure>
                                        <span>Boys World</span>
                                        <i className="icofont-check-circled" />
                                    </a>
                                    <a href="#" title>
                                        <figure className="group-chat">
                                            <img src="images/resources/user2.jpg" alt />
                                            <img className="two" src="images/resources/user3.jpg" alt />
                                            <span className="status online" />
                                        </figure>
                                        <span>KK university Fellows</span>
                                        <i className="icofont-check-circled" />
                                    </a>
                                    <a href="#" title>
                                        <figure className="group-chat">
                                            <img src="images/resources/user3.jpg" alt />
                                            <img className="two" src="images/resources/user2.jpg" alt />
                                            <span className="status away" />
                                        </figure>
                                        <span>Education World</span>
                                        <i className="icofont-check-circled" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chat-card">
                        <div className="chat-card-head">
                            <img src="images/resources/user13.jpg" alt />
                            <h6>George Floyd</h6>
                            <div className="frnd-opt">
                                <div className="more">
                                    <div className="more-post-optns">
                                        <i className>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal">
                                                <circle cx={12} cy={12} r={1} />
                                                <circle cx={19} cy={12} r={1} />
                                                <circle cx={5} cy={12} r={1} />
                                            </svg></i>
                                        <ul>
                                            <li>
                                                <i className="icofont-pen-alt-1" />Edit Post
                                                <span>Edit This Post within a Hour</span>
                                            </li>
                                            <li>
                                                <i className="icofont-ban" />Hide Chat
                                                <span>Hide This Post</span>
                                            </li>
                                            <li>
                                                <i className="icofont-ui-delete" />Delete Chat
                                                <span>If inappropriate Post By Mistake</span>
                                            </li>
                                            <li>
                                                <i className="icofont-flag" />Report
                                                <span>Inappropriate Chat</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <span className="close-mesage"><i className="icofont-close" /></span>
                            </div>
                        </div>
                        <div className="chat-list">
                            <ul>
                                <li className="me">
                                    <div className="chat-thumb"><img src="images/resources/chatlist1.jpg" alt /></div>
                                    <div className="notification-event">
                                        <div className="chat-message-item">
                                            <figure><img src="images/resources/album5.jpg" alt /></figure>
                                            <div className="caption">4.5kb <i className="icofont-download" title="Download" /></div>
                                        </div>
                                        <span className="notification-date">
                                            <time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at
                                                8:10pm</time>
                                            <i><img src="images/d-tick.png" alt /></i>
                                        </span>
                                    </div>
                                </li>
                                <li className="me">
                                    <div className="chat-thumb"><img src="images/resources/chatlist1.jpg" alt /></div>
                                    <div className="notification-event">
                                        <span className="chat-message-item">
                                            Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the
                                            gifts and Jake’s gonna get the drinks
                                        </span>
                                        <span className="notification-date">
                                            <time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at
                                                8:10pm</time>
                                            <i><img src="images/d-tick.png" alt /></i>
                                        </span>
                                    </div>
                                </li>
                                <li className="you">
                                    <div className="chat-thumb"><img src="images/resources/chatlist2.jpg" alt /></div>
                                    <div className="notification-event">
                                        <span className="chat-message-item">
                                            Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the
                                            gifts and Jake’s gonna get the drinks
                                        </span>
                                        <span className="notification-date">
                                            <time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at
                                                8:10pm</time>
                                            <i><img src="images/d-tick.png" alt /></i>
                                        </span>
                                    </div>
                                </li>
                                <li className="me">
                                    <div className="chat-thumb"><img src="images/resources/chatlist1.jpg" alt /></div>
                                    <div className="notification-event">
                                        <span className="chat-message-item">
                                            Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the
                                            gifts and Jake’s gonna get the drinks
                                        </span>
                                        <span className="notification-date">
                                            <time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at
                                                8:10pm</time>
                                            <i><img src="images/d-tick.png" alt /></i>
                                        </span>
                                    </div>
                                </li>
                            </ul>
                            <form className="text-box">
                                <textarea placeholder="Write Mesage..." defaultValue={""} />
                                <div className="add-smiles">
                                    <span><img src="images/smiles/happy-3.png" alt /></span>
                                </div>
                                <div className="smiles-bunch">
                                    <i><img src="images/smiles/thumb.png" alt /></i>
                                    <i><img src="images/smiles/angry-1.png" alt /></i>
                                    <i><img src="images/smiles/angry.png" alt /></i>
                                    <i><img src="images/smiles/bored-1.png" alt /></i>
                                    <i><img src="images/smiles/confused-1.png" alt /></i>
                                    <i><img src="images/smiles/wink.png" alt /></i>
                                    <i><img src="images/smiles/weep.png" alt /></i>
                                    <i><img src="images/smiles/tongue-out.png" alt /></i>
                                    <i><img src="images/smiles/suspicious.png" alt /></i>
                                    <i><img src="images/smiles/crying-1.png" alt /></i>
                                    <i><img src="images/smiles/crying.png" alt /></i>
                                    <i><img src="images/smiles/embarrassed.png" alt /></i>
                                    <i><img src="images/smiles/emoticons.png" alt /></i>
                                    <i><img src="images/smiles/happy-2.png" alt /></i>
                                </div>
                                <button type="submit"><i className="icofont-paper-plane" /></button>
                            </form>
                        </div>
                    </div>
                </div>{/* chat box */}
                <div className="createroom-popup">
                    <div className="popup">
                        <span className="popup-closed"><i className="icofont-close" /></span>
                        <div className="popup-meta">
                            <div className="popup-head text-center">
                                <h5 className="only-icon"><i className="icofont-video-cam" /></h5>
                            </div>
                            <div className="room-meta">
                                <h4>Create Your Room</h4>
                                <ul>
                                    <li>
                                        <i className="icofont-hand" />
                                        <div>
                                            <h6>Room Activity</h6>
                                            <span>Jack's Room</span>
                                        </div>
                                        <div className="checkbox">
                                            <input type="checkbox" id="checkbox3" />
                                            <label htmlFor="checkbox3" />
                                        </div>
                                    </li>
                                    <li>
                                        <i className="icofont-clock-time" />
                                        <div>
                                            <h6>Start Time</h6>
                                            <span>Now</span>
                                        </div>
                                        <div className="checkbox">
                                            <input type="checkbox" id="checkbox4" />
                                            <label htmlFor="checkbox4" />
                                        </div>
                                    </li>
                                    <li>
                                        <i className="icofont-users-alt-4" />
                                        <div>
                                            <h6>Invite to All Friends</h6>
                                            <span>Allow All friends to see this room</span>
                                        </div>
                                        <div className="checkbox">
                                            <input type="checkbox" id="checkbox5" />
                                            <label htmlFor="checkbox5" />
                                        </div>
                                    </li>
                                </ul>
                                <span>Your room isn't visible until you invite people after you've created it.</span>
                                <a href="#" title className="main-btn full-width">Create Room</a>
                            </div>
                        </div>
                    </div>
                </div>{/* create new room */}
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
        </div>
    )
}

