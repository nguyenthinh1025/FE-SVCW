
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Clock from '../../components/Clock'
import CompleteProfile from '../../components/CompleteProfile'
import { http } from '../../utils/reponse';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { GetProfileByIdAction } from '../../redux/actions/ProfileAction';
import moment from 'moment';
import CreateActivity from '../../components/CreateActivity';
import ItemActivity from '../../components/ItemActivity';
import ListActivity from '../../components/ListActivity';
import Albums from './Albums';
import PersonalDetail from './PersonalDetail';

export default function Profile (props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [reloadPage, setReloadPage] = useState(false);
    const { userID } = useSelector((root) => root.LoginReducer);
    const { getUserId, arrActivityUser } = useSelector(root => root.ProfileReducer)
    useEffect(() => {
        let { id } = props.match.params;
        console.log(userID);
        // const action = GetProfileByIdAction(id);
        // dispatch(action);

        const action = GetProfileByIdAction(userID);
        dispatch(action)
    }, []);
    return (
        <div><div className="theme-layout">

            <section>
                <div className="gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div id="page-contents" className="row merged20">
                                    <div className="col-lg-3">
                                        <aside className="sidebar static left">
                                            <Clock />
                                            <CompleteProfile />
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
                                            </div>

                                        </aside>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="group-feed">
                                            <div className="group-avatar">
                                                {getUserId.coverImage === "none" ? <img src='https://img4.thuthuatphanmem.vn/uploads/2020/05/12/hinh-anh-mau-xam-chi_103623490.jpg' /> : <img src={getUserId.coverImage} style={{ objectFit: 'cover' }} alt />}
                                                <div className='follow'><i className="icofont-check-circled" />Follow</div>
                                                <figure className="group-dp"> {getUserId.image === "none" ? <img src='https://nhanvietluanvan.com/wp-content/uploads/2023/05/c6e56503cfdd87da299f72dc416023d4-736x620.jpg' /> : <img src={getUserId.image} alt />}</figure>
                                            </div>
                                            <div className="grp-info about">
                                                <h4>{getUserId?.username} <span>{getUserId?.fullName !== 'none' ? `@${getUserId?.fullName}` : ''}</span></h4>
                                                <ul className="joined-info">
                                                    <li>
                                                        <span>Ngày tạo tài khoản:</span>{' '}
                                                        {moment(getUserId?.createAt).format('DD-MM-YYYY')}
                                                    </li>
                                                    <li>
                                                        <span>Số nhóm đã theo dõi:</span>{' '}
                                                        {getUserId?.followFanpage?.length}
                                                    </li>
                                                    <li>
                                                        <span>Số bài viết:</span>{' '}
                                                        {getUserId?.activity?.length}
                                                    </li>
                                                    <li>
                                                        <span>Số người thích:</span>{' '}
                                                    </li>
                                                </ul>

                                                <ul className="nav nav-tabs about-btn" style={{ margin: '20px 0' }}>
                                                    <li className="nav-item">
                                                        <a
                                                            className="active"
                                                            href="#posts"
                                                            data-toggle="tab"
                                                        >
                                                            Bài viết
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className href="#pictures" data-toggle="tab">
                                                            Hình ảnh
                                                        </a>
                                                    </li>

                                                    <li className="nav-item">
                                                        <a className href="#about" data-toggle="tab">
                                                            Thông tin cá nhân
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            href="#"
                                                            className
                                                            data-toggle="tab"
                                                        // onClick={() => {
                                                        //     history.push(`/endactivity?userId=${userID}`);
                                                        // }}
                                                        >
                                                            Danh sách kết thúc chiến dịch
                                                        </a>
                                                    </li>

                                                </ul>
                                            </div>
                                            <div className="main-wraper">
                                                <div className="grp-about">
                                                    <div className="row">
                                                        <div className="col-lg-8 col-md-6">
                                                            <h4>Chi tiết</h4>
                                                            <p>{getUserId?.description}</p>
                                                            <ul className="badges">
                                                                <li><img src="images/badges/badge2.png" alt /></li>
                                                                <li><img src="images/badges/badge3.png" alt /></li>
                                                                <li><img src="images/badges/badge4.png" alt /></li>
                                                                <li><img src="images/badges/badge5.png" alt /></li>
                                                                <li><img src="images/badges/badge7.png" alt /></li>
                                                                <li><img src="images/badges/badge8.png" alt /></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="tab-content">

                                                        <div className=" tab-pane active fade show " id="posts">
                                                            <div className="row merged20">
                                                                <div className="col-lg-8">
                                                                    <CreateActivity />{/* create new post */}
                                                                    <div className="">
                                                                        <ListActivity arrActivity={getUserId?.activity} />
                                                                    </div>

                                                                    <div className="sp sp-bars" />
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <aside className="sidebar static left">
                                                                        <div className="advertisment-box">
                                                                            <h4 className><i className="icofont-info-circle" /> advertisment</h4>
                                                                            <figure>
                                                                                <a href="#" title="Advertisment"><img src="images/resources/ad-widget2.gif" alt /></a>
                                                                            </figure>
                                                                        </div>
                                                                        <div className="widget">
                                                                            <h4 className="widget-title">Follow People <a title href="#" className="see-all">See All</a></h4>
                                                                            <ul className="invitepage">
                                                                                <li>
                                                                                    <figure>
                                                                                        <img alt src="images/resources/friend-avatar.jpg" />
                                                                                        <a href>Jack carter</a>
                                                                                    </figure>
                                                                                    <button className="sug-like"><i className="invit">Follow</i><i className="icofont-check-alt" /></button>
                                                                                </li>
                                                                                <li>
                                                                                    <figure>
                                                                                        <img alt src="images/resources/friend-avatar2.jpg" />
                                                                                        <a href>Emma watson</a>
                                                                                    </figure>
                                                                                    <button className="sug-like"><i className="invit">Follow</i><i className="icofont-check-alt" /></button>
                                                                                </li>
                                                                                <li>
                                                                                    <figure>
                                                                                        <img alt src="images/resources/friend-avatar3.jpg" />
                                                                                        <a href>Andrew</a>
                                                                                    </figure>
                                                                                    <button className="sug-like"><i className="invit">Follow</i><i className="icofont-check-alt" /></button>
                                                                                </li>
                                                                                <li>
                                                                                    <figure>
                                                                                        <img alt src="images/resources/friend-avatar4.jpg" />
                                                                                        <a href>Moona Singh</a>
                                                                                    </figure>
                                                                                    <button className="sug-like"><i className="invit">Follow</i><i className="icofont-check-alt" /></button>
                                                                                </li>
                                                                                <li>
                                                                                    <figure>
                                                                                        <img alt src="images/resources/friend-avatar5.jpg" />
                                                                                        <a href>Harry pooter</a>
                                                                                    </figure>
                                                                                    <button className="sug-like"><i className="invit">Follow</i><i className="icofont-check-alt" /></button>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="widget">
                                                                            <h4 className="widget-title">Recent Media</h4>
                                                                            <div className="recent-media">
                                                                                <figure>
                                                                                    <img src="images/resources/user-video7.jpg" alt />
                                                                                    <a className="play-btn" data-fancybox href="https://www.youtube.com/embed/vP-l9L3Ku5Y"><i className="icofont-play" /></a>
                                                                                    <span>Pool Party 2020</span>
                                                                                </figure>
                                                                                <figure>
                                                                                    <img src="images/resources/user-video10.jpg" alt />
                                                                                    <a className="play-btn" data-fancybox href="https://www.youtube.com/embed/vP-l9L3Ku5Y"><i className="icofont-play" /></a>
                                                                                    <span>Spring Break Pool</span>
                                                                                </figure>
                                                                            </div>
                                                                        </div>
                                                                        <div className="widget stick-widget">
                                                                            <h4 className="widget-title">You May Like Groups</h4>
                                                                            <ul className="suggestd">
                                                                                <li>
                                                                                    <a className="sug-pic" href="#" title><img src="images/resources/sug-page-1.jpg" alt /></a>
                                                                                    <a className="sug-title" href="#" title>Physics Shop</a>
                                                                                    <button className="sug-like"><i className="icofont-like" /><i className="icofont-check-alt" /></button>
                                                                                </li>
                                                                                <li>
                                                                                    <a className="sug-pic" href="#" title><img src="images/resources/sug-page-2.jpg" alt /></a>
                                                                                    <a className="sug-title" href="#" title>Sun Rise</a>
                                                                                    <button className="sug-like"><i className="icofont-like" /><i className="icofont-check-alt" /></button>
                                                                                </li>
                                                                                <li>
                                                                                    <a className="sug-pic" href="#" title><img src="images/resources/sug-page-3.jpg" alt /></a>
                                                                                    <a className="sug-title" href="#" title>Big Botny</a>
                                                                                    <button className="sug-like"><i className="icofont-like" /><i className="icofont-check-alt" /></button>
                                                                                </li>
                                                                                <li>
                                                                                    <a className="sug-pic" href="#" title><img src="images/resources/sug-page-4.jpg" alt /></a>
                                                                                    <a className="sug-title" href="#" title>King Work</a>
                                                                                    <button className="sug-like"><i className="icofont-like" /><i className="icofont-check-alt" /></button>
                                                                                </li>
                                                                                <li>
                                                                                    <a className="sug-pic" href="#" title><img src="images/resources/sug-page-5.jpg" alt /></a>
                                                                                    <a className="sug-title" href="#" title>18teen Guys</a>
                                                                                    <button className="sug-like"><i className="icofont-like" /><i className="icofont-check-alt" /></button>
                                                                                </li>
                                                                            </ul>
                                                                        </div>{/* Suggested groups */}
                                                                    </aside>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Albums arrActivity={getUserId?.activity} />
                                                        <div className="tab-pane fade" id="about">
                                                            <div className="row merged20">
                                                                <div className="col-lg-12">
                                                                    <PersonalDetail
                                                                        arrActivity={getUserId}
                                                                        setReloadPage={setReloadPage}
                                                                        reloadPage={reloadPage}
                                                                    />
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="pictures">
                                                            <h5 className="tab-title">Pictures <span>87</span></h5>
                                                            <ul className="pix-filter">
                                                                <li><a className="active" href="#" title>All Photos</a></li>
                                                                <li><a href="#" title>Profile Pictures</a></li>
                                                                <li><a href="#" title>Albums</a></li>
                                                                <li><a href="#" title>from Mobile</a></li>
                                                            </ul>
                                                            <div className="row merged-10">
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="uzr-pictures">
                                                                        <a href="#" data-target="#img-comt" data-toggle="modal">
                                                                            <img alt src="images/resources/user-pic1.jpg" />
                                                                        </a>
                                                                        <ul className="hover-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="uzr-pictures">
                                                                        <a href="#" data-target="#img-comt" data-toggle="modal">
                                                                            <img alt src="images/resources/user-pic2.jpg" />
                                                                        </a>
                                                                        <ul className="hover-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="uzr-pictures">
                                                                        <a href="#" data-target="#img-comt" data-toggle="modal">
                                                                            <img alt src="images/resources/user-pic3.jpg" />
                                                                        </a>
                                                                        <ul className="hover-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="uzr-pictures">
                                                                        <a href="#" data-target="#img-comt" data-toggle="modal">
                                                                            <img alt src="images/resources/user-pic4.jpg" />
                                                                        </a>
                                                                        <ul className="hover-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="uzr-pictures">
                                                                        <a href="#" data-target="#img-comt" data-toggle="modal">
                                                                            <img alt src="images/resources/user-pic5.jpg" />
                                                                        </a>
                                                                        <ul className="hover-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="uzr-pictures">
                                                                        <a href="#" data-target="#img-comt" data-toggle="modal">
                                                                            <img alt src="images/resources/user-pic6.jpg" />
                                                                        </a>
                                                                        <ul className="hover-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="uzr-pictures">
                                                                        <a href="#" data-target="#img-comt" data-toggle="modal">
                                                                            <img alt src="images/resources/user-pic7.jpg" />
                                                                        </a>
                                                                        <ul className="hover-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="uzr-pictures">
                                                                        <a href="#" data-target="#img-comt" data-toggle="modal">
                                                                            <img alt src="images/resources/user-pic8.jpg" />
                                                                        </a>
                                                                        <ul className="hover-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="uzr-pictures">
                                                                        <a href="#" data-target="#img-comt" data-toggle="modal">
                                                                            <img alt src="images/resources/user-pic9.jpg" />
                                                                        </a>
                                                                        <ul className="hover-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="uzr-pictures">
                                                                        <a href="#" data-target="#img-comt" data-toggle="modal">
                                                                            <img alt src="images/resources/user-pic10.jpg" />
                                                                        </a>
                                                                        <ul className="hover-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="uzr-pictures">
                                                                        <a href="#" data-target="#img-comt" data-toggle="modal">
                                                                            <img alt src="images/resources/user-pic11.jpg" />
                                                                        </a>
                                                                        <ul className="hover-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="uzr-pictures">
                                                                        <a href="#" data-target="#img-comt" data-toggle="modal">
                                                                            <img alt src="images/resources/user-pic12.jpg" />
                                                                        </a>
                                                                        <ul className="hover-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="uzr-pictures">
                                                                        <a href="#" data-target="#img-comt" data-toggle="modal">
                                                                            <img alt src="images/resources/user-pic13.jpg" />
                                                                        </a>
                                                                        <ul className="hover-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="uzr-pictures">
                                                                        <a href="#" data-target="#img-comt" data-toggle="modal">
                                                                            <img alt src="images/resources/user-pic14.jpg" />
                                                                        </a>
                                                                        <ul className="hover-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="uzr-pictures">
                                                                        <a href="#" data-target="#img-comt" data-toggle="modal">
                                                                            <img alt src="images/resources/user-pic15.jpg" />
                                                                        </a>
                                                                        <ul className="hover-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="uzr-pictures">
                                                                        <a href="#" data-target="#img-comt" data-toggle="modal">
                                                                            <img alt src="images/resources/user-pic5.jpg" />
                                                                        </a>
                                                                        <ul className="hover-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="uzr-pictures">
                                                                        <a href="#" data-target="#img-comt" data-toggle="modal">
                                                                            <img alt src="images/resources/user-pic12.jpg" />
                                                                        </a>
                                                                        <ul className="hover-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="uzr-pictures">
                                                                        <a href="#" data-target="#img-comt" data-toggle="modal">
                                                                            <img alt src="images/resources/user-pic4.jpg" />
                                                                        </a>
                                                                        <ul className="hover-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="uzr-pictures">
                                                                        <a href="#" data-target="#img-comt" data-toggle="modal">
                                                                            <img alt src="images/resources/user-pic6.jpg" />
                                                                        </a>
                                                                        <ul className="hover-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="uzr-pictures">
                                                                        <a href="#" data-target="#img-comt" data-toggle="modal">
                                                                            <img alt src="images/resources/user-pic7.jpg" />
                                                                        </a>
                                                                        <ul className="hover-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12 mt-3">
                                                                    <div className="sp sp-bars" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="videos">
                                                            <h5 className="tab-title">Videos <span>55</span></h5>
                                                            <ul className="pix-filter">
                                                                <li><a title href="#" className="active">All Videos</a></li>
                                                                <li><a title href="#">Most views</a></li>
                                                                <li><a title href="#">Newest</a></li>
                                                                <li><a title href="#">Mobile videos</a></li>
                                                            </ul>
                                                            <div className="row merged-10">
                                                                <div className="col-lg-4 col-md-4 col-sm-6">
                                                                    <div className="user-video">
                                                                        <figure>
                                                                            <img alt src="images/resources/user-video1.jpg" />
                                                                            <a href="https://www.youtube.com/embed/vP-l9L3Ku5Y" data-fancybox className="play-btn"><i className="icofont-play" /></a>
                                                                        </figure>
                                                                        <span>Miami Beach Party</span>
                                                                        <ul className="vid-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-6">
                                                                    <div className="user-video">
                                                                        <figure>
                                                                            <img alt src="images/resources/user-video2.jpg" />
                                                                            <a href="https://www.youtube.com/embed/vP-l9L3Ku5Y" data-fancybox className="play-btn"><i className="icofont-play" /></a>
                                                                        </figure>
                                                                        <span>Spring Break Party</span>
                                                                        <ul className="vid-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-6">
                                                                    <div className="user-video">
                                                                        <figure>
                                                                            <img alt src="images/resources/user-video3.jpg" />
                                                                            <a href="https://www.youtube.com/embed/vP-l9L3Ku5Y" data-fancybox className="play-btn"><i className="icofont-play" /></a>
                                                                        </figure>
                                                                        <span>Pool Party 2020</span>
                                                                        <ul className="vid-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-6">
                                                                    <div className="user-video">
                                                                        <figure>
                                                                            <img alt src="images/resources/user-video4.jpg" />
                                                                            <a href="https://www.youtube.com/embed/vP-l9L3Ku5Y" data-fancybox className="play-btn"><i className="icofont-play" /></a>
                                                                        </figure>
                                                                        <span>baby girls Entry at beach</span>
                                                                        <ul className="vid-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-6">
                                                                    <div className="user-video">
                                                                        <figure>
                                                                            <img alt src="images/resources/user-video5.jpg" />
                                                                            <a href="https://www.youtube.com/embed/vP-l9L3Ku5Y" data-fancybox className="play-btn"><i className="icofont-play" /></a>
                                                                        </figure>
                                                                        <span>Spring Party 2021</span>
                                                                        <ul className="vid-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-6">
                                                                    <div className="user-video">
                                                                        <figure>
                                                                            <img alt src="images/resources/user-video6.jpg" />
                                                                            <a href="https://www.youtube.com/embed/vP-l9L3Ku5Y" data-fancybox className="play-btn"><i className="icofont-play" /></a>
                                                                        </figure>
                                                                        <span>Biggest Part of the Pool Party</span>
                                                                        <ul className="vid-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-6">
                                                                    <div className="user-video">
                                                                        <figure>
                                                                            <img alt src="images/resources/user-video7.jpg" />
                                                                            <a href="https://www.youtube.com/embed/vP-l9L3Ku5Y" data-fancybox className="play-btn"><i className="icofont-play" /></a>
                                                                        </figure>
                                                                        <span>Party games in the water</span>
                                                                        <ul className="vid-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-6">
                                                                    <div className="user-video">
                                                                        <figure>
                                                                            <img alt src="images/resources/user-video8.jpg" />
                                                                            <a href="https://www.youtube.com/embed/vP-l9L3Ku5Y" data-fancybox className="play-btn"><i className="icofont-play" /></a>
                                                                        </figure>
                                                                        <span>Water party with GF</span>
                                                                        <ul className="vid-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-6">
                                                                    <div className="user-video">
                                                                        <figure>
                                                                            <img alt src="images/resources/user-video9.jpg" />
                                                                            <a href="https://www.youtube.com/embed/vP-l9L3Ku5Y" data-fancybox className="play-btn"><i className="icofont-play" /></a>
                                                                        </figure>
                                                                        <span>Super hot party in summer</span>
                                                                        <ul className="vid-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-6">
                                                                    <div className="user-video">
                                                                        <figure>
                                                                            <img alt src="images/resources/user-video10.jpg" />
                                                                            <a href="https://www.youtube.com/embed/vP-l9L3Ku5Y" data-fancybox className="play-btn"><i className="icofont-play" /></a>
                                                                        </figure>
                                                                        <span>Summer Party in Bikini</span>
                                                                        <ul className="vid-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-6">
                                                                    <div className="user-video">
                                                                        <figure>
                                                                            <img alt src="images/resources/user-video11.jpg" />
                                                                            <a href="https://www.youtube.com/embed/vP-l9L3Ku5Y" data-fancybox className="play-btn"><i className="icofont-play" /></a>
                                                                        </figure>
                                                                        <span>Miami Bikini English</span>
                                                                        <ul className="vid-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-6">
                                                                    <div className="user-video">
                                                                        <figure>
                                                                            <img alt src="images/resources/user-video12.jpg" />
                                                                            <a href="https://www.youtube.com/embed/vP-l9L3Ku5Y" data-fancybox className="play-btn"><i className="icofont-play" /></a>
                                                                        </figure>
                                                                        <span>Super Summer 2021</span>
                                                                        <ul className="vid-action">
                                                                            <li><a href="#" title><i className="icofont-like" /> 3</a></li>
                                                                            <li><a href="#" title><i className="icofont-chat" /> 5</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <div className="sp sp-bars" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="friends">
                                                            <h5 className="tab-title">Friends <span>102</span></h5>
                                                            <ul className="pix-filter">
                                                                <li><a title href="#" className="active">All Friends</a></li>
                                                                <li><a title href="#">Family Friends</a></li>
                                                                <li><a title href="#">Close Friends</a></li>
                                                                <li><a title href="#">Mutual Friends</a></li>
                                                            </ul>
                                                            <div className="row merged-10 col-xs-6">
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="friendz">
                                                                        <figure><img src="images/resources/speak-10.jpg" alt /></figure>
                                                                        <span><a href="#" title>Amy Watson</a></span>
                                                                        <ins>Bz University, Pakistan</ins>
                                                                        <a href="#" title data-ripple><i className="icofont-star" />Unfollow</a>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="friendz">
                                                                        <figure><img src="images/resources/speak-11.jpg" alt /></figure>
                                                                        <span><a href="#" title>Muhammad Khan</a></span>
                                                                        <ins>Oxford University, UK</ins>
                                                                        <a href="#" title data-ripple><i className="icofont-star" /> Unfollow</a>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="friendz">
                                                                        <figure><img src="images/resources/speak-12.jpg" alt /></figure>
                                                                        <span><a href="#" title>Sadia Gill</a></span>
                                                                        <ins>WB University, USA</ins>
                                                                        <a href="#" title data-ripple><i className="icofont-star" /> Unfollow</a>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="friendz">
                                                                        <figure><img src="images/resources/speak-4.jpg" alt /></figure>
                                                                        <span><a href="#" title>Rjapal</a></span>
                                                                        <ins>Km University, India</ins>
                                                                        <a href="#" title data-ripple><i className="icofont-star" /> Unfollow</a>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="friendz">
                                                                        <figure><img src="images/resources/speak-1.jpg" alt /></figure>
                                                                        <span><a href="#" title>Amy watson</a></span>
                                                                        <ins>Oxford University, UK</ins>
                                                                        <a href="#" title data-ripple><i className="icofont-star" /> Unfollow</a>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="friendz">
                                                                        <figure><img src="images/resources/speak-2.jpg" alt /></figure>
                                                                        <span><a href="#" title>Bob Frank</a></span>
                                                                        <ins>WB University, Canada</ins>
                                                                        <a href="#" title data-ripple><i className="icofont-star" /> Unfollow</a>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="friendz">
                                                                        <figure><img src="images/resources/speak-5.jpg" alt /></figure>
                                                                        <span><a href="#" title>Amy Watson</a></span>
                                                                        <ins>Bz University, Pakistan</ins>
                                                                        <a href="#" title data-ripple><i className="icofont-star" /> Unfollow</a>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="friendz">
                                                                        <figure><img src="images/resources/speak-7.jpg" alt /></figure>
                                                                        <span><a href="#" title>Muhammad Khan</a></span>
                                                                        <ins>Oxford University, UK</ins>
                                                                        <a href="#" title data-ripple><i className="icofont-star" /> Unfollow</a>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="friendz">
                                                                        <figure><img src="images/resources/speak-10.jpg" alt /></figure>
                                                                        <span><a href="#" title>Sadia Gill</a></span>
                                                                        <ins>WB University, USA</ins>
                                                                        <a href="#" title data-ripple><i className="icofont-star" /> Unfollow</a>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="friendz">
                                                                        <figure><img src="images/resources/speak-2.jpg" alt /></figure>
                                                                        <span><a href="#" title>Bob Frank</a></span>
                                                                        <ins>WB University, Canada</ins>
                                                                        <a href="#" title data-ripple><i className="icofont-star" /> Unfollow</a>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="friendz">
                                                                        <figure><img src="images/resources/speak-11.jpg" alt /></figure>
                                                                        <span><a href="#" title>Muhammad Khan</a></span>
                                                                        <ins>Oxford University, UK</ins>
                                                                        <a href="#" title data-ripple><i className="icofont-star" /> Unfollow</a>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <div className="sp sp-bars" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="about">
                                                            <div className="row merged20">
                                                                <div className="col-lg-8">
                                                                    <div className="main-wraper">
                                                                        <h5 className="main-title">Personal</h5>
                                                                        <div className="info-block-list">
                                                                            <ul>
                                                                                <li>Date of Birth: <span>Dec, 17 1980</span></li>
                                                                                <li>Location: <span>Los Angeles, California</span></li>
                                                                                <li>Web: <span>www.sample.com</span></li>
                                                                                <li>Email: <span>sample123@yourmail.com</span></li>
                                                                                <li>Location: <span>Los Angeles, California</span></li>
                                                                                <li>Occupation: <span>Doctor</span></li>
                                                                                <li>Location: <span>Los Angeles, California</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="main-wraper">
                                                                        <h5 className="main-title">Interests</h5>
                                                                        <div className="info-block-list">
                                                                            <div className="info-block">
                                                                                <h6>Favourite TV Shows</h6>
                                                                                <p>Breaking Good, RedDevil, People of Interest, The Running Dead, Found,  American Guy, The Last Windbender, Game of Wars.</p>
                                                                            </div>
                                                                            <div className="info-block">
                                                                                <h6>Favourite Music Bands / Artists</h6>
                                                                                <p>Iron Maid, DC/AC, Megablow, Kung Fighters, System of a Revenge, Rammstown.</p>
                                                                            </div>
                                                                            <div className="info-block">
                                                                                <h6>Favourite Movies</h6>
                                                                                <p>The Revengers Saga, The Scarred Wizard and the Fire Crown, Crime Squad, Metal Man, The Dark Rider, Watchers, The Impossible Heist.</p>
                                                                            </div>
                                                                            <div className="info-block">
                                                                                <h6>Favourite Books</h6>
                                                                                <p>The Crime of the Century, Egiptian Mythology 101, The Scarred Wizard, Lord of the Wings, Amongst Gods, The Oracle, A Tale of Air and Water.</p>
                                                                            </div>
                                                                            <div className="info-block">
                                                                                <h6>Favourite Games</h6>
                                                                                <p>The First of Us, Assassin’s Squad, Dark Assylum, NMAK16, Last Cause 4, Grand Snatch Auto.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <aside className="sidebar">
                                                                        <div className="widget">
                                                                            <h4 className="widget-title">Complete Your Profile</h4>
                                                                            <span>Complete your profile by filling profile info fields, completing quests &amp; unlocking badges</span>
                                                                            <div data-progress="tip" className="progress__outer" data-value="0.67">
                                                                                <div className="progress__inner">82%</div>
                                                                            </div>
                                                                            <ul className="prof-complete">
                                                                                <li><i className="icofont-plus-square" /> <a href="#" title>Upload Your Picture</a><em>10%</em></li>
                                                                                <li><i className="icofont-plus-square" /> <a href="#" title>Your University?</a><em>20%</em></li>
                                                                                <li><i className="icofont-plus-square" /> <a href="#" title>Invite to 10+ members</a><em>20%</em></li>
                                                                            </ul>
                                                                        </div>{/* complete profile widget */}
                                                                        <div className="widget">
                                                                            <h4 className="widget-title">User stats</h4>
                                                                            <ul className="user-stat">
                                                                                <li><i className="icofont-lollipop" /><span>Last Post <em>2 hours ago</em></span></li>
                                                                                <li><i className="icofont-spotify" /><span>Last comment <em>6 hours ago</em></span></li>
                                                                                <li><i className="icofont-like" /><span>Most Liked Post<em>540 Likes</em></span></li>
                                                                                <li><i className="icofont-user-alt-4" /><span>Last Friend Added <em>2 days ago</em></span></li>
                                                                            </ul>
                                                                        </div>{/* complete profile widget */}
                                                                    </aside>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <figure className="bottom-mockup"><img alt src="images/footer.png" /></figure>
            {/* bottombar */}
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
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg></i> Invite Colleagues</h5>
                        </div>
                        <div className="invitation-meta">
                            <p>
                                Enter an email address to invite a colleague or co-author to join you on socimo. They will receive an email and, in some cases, up to two reminders.
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
                                <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i> Send Message</h5>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1={12} y1={5} x2={12} y2={19} /><line x1={5} y1={12} x2={19} y2={12} /></svg></i>Create New Post</h5>
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
                                            <p className="select-box__input-text"><i className="icofont-user" /> Specific Friend</p>
                                        </div>
                                        <div className="select-box__value"><input className="select-box__input" type="radio" id={3} defaultValue={4} name="Ben" defaultChecked="checked" />
                                            <p className="select-box__input-text"><i className="icofont-star" /> Only Friends</p>
                                        </div>
                                        <div className="select-box__value"><input className="select-box__input" type="radio" id={4} defaultValue={5} name="Ben" defaultChecked="checked" />
                                            <p className="select-box__input-text"><i className="icofont-users-alt-3" /> Joined Groups</p>
                                        </div>
                                        <img className="select-box__icon" src="images/arrow-down.svg" alt="Arrow Icon" aria-hidden="true" />
                                    </div>
                                    <ul className="select-box__list">
                                        <li><label className="select-box__option" htmlFor={0}><i className="icofont-globe-alt" /> Public</label></li>
                                        <li><label className="select-box__option" htmlFor={1}><i className="icofont-lock" /> Private</label></li>
                                        <li><label className="select-box__option" htmlFor={2}><i className="icofont-user" /> Specific Friend</label></li>
                                        <li><label className="select-box__option" htmlFor={3}><i className="icofont-star" /> Only Friends</label></li>
                                        <li><label className="select-box__option" htmlFor={4}><i className="icofont-users-alt-3" /> Joined Groups</label></li>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle"><circle cx={12} cy={12} r={10} /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1={12} y1={17} x2="12.01" y2={17} /></svg></i> Ask Question</h5>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1={12} y1={2} x2={12} y2={15} /></svg></i>Share To!</h5>
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx={12} cy={12} r={1} /><circle cx={19} cy={12} r={1} /><circle cx={5} cy={12} r={1} /></svg></i>
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
                                        <time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time>
                                        <i><img src="images/d-tick.png" alt /></i>
                                    </span>
                                </div>
                            </li>
                            <li className="me">
                                <div className="chat-thumb"><img src="images/resources/chatlist1.jpg" alt /></div>
                                <div className="notification-event">
                                    <span className="chat-message-item">
                                        Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
                                    </span>
                                    <span className="notification-date">
                                        <time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time>
                                        <i><img src="images/d-tick.png" alt /></i>
                                    </span>
                                </div>
                            </li>
                            <li className="you">
                                <div className="chat-thumb"><img src="images/resources/chatlist2.jpg" alt /></div>
                                <div className="notification-event">
                                    <span className="chat-message-item">
                                        Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
                                    </span>
                                    <span className="notification-date">
                                        <time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time>
                                        <i><img src="images/d-tick.png" alt /></i>
                                    </span>
                                </div>
                            </li>
                            <li className="me">
                                <div className="chat-thumb"><img src="images/resources/chatlist1.jpg" alt /></div>
                                <div className="notification-event">
                                    <span className="chat-message-item">
                                        Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
                                    </span>
                                    <span className="notification-date">
                                        <time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time>
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
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-tag"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1={7} y1={7} x2="7.01" y2={7} /></svg>
                                                </a>
                                                <a className="action-button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx={12} cy={10} r={3} /></svg>
                                                </a>
                                                <a className="action-button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down"><line x1={12} y1={5} x2={12} y2={19} /><polyline points="19 12 12 19 5 12" /></svg>
                                                </a>
                                                <a className="action-button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx={12} cy={12} r={1} /><circle cx={12} cy={5} r={1} /><circle cx={12} cy={19} r={1} /></svg>
                                                </a>
                                            </div>
                                            <figure><img src="images/resources/blog-detail.jpg" alt /></figure>
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
                                                <a title href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
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
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg></i>
                                                        <ins>52</ins>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span title="Comments" className="comment">
                                                        <i>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i>
                                                        <ins>52</ins>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <a title="Share" href="#" className>
                                                            <i>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2"><circle cx={18} cy={5} r={3} /><circle cx={6} cy={12} r={3} /><circle cx={18} cy={19} r={3} /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg></i>
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
                                                <span><strong>You</strong>, <b>Sarah</b> and <a title href="#">24+ more</a> liked</span>
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
                                                                i think that some how, we learn who we really are and then live with that decision, great post!
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
                                                                i think that some how, we learn who we really are and then live with that decision, great post!
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
                                                                i think that some how, we learn who we really are and then live with that decision, great post!
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
                                                                i think that some how, we learn who we really are and then live with that decision, great post!
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
        </div></div>
    )
}