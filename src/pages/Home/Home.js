
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
import { GetActivityTitleAction, GetListActivityAction, GetListEndActivityAction, GetRecommentActivityAction } from '../../redux/actions/ActivityAction';
import ItemEndActivity from '../../components/ItemEndActivity';
import ListEndActivity from '../../components/ListEndActivity';
import YourFanpage from '../../components/YourFanpage';
import { GetListReportAction, GetListReportByTypeAction } from '../../redux/actions/ReportAction';
import EndActivity from '../Profile/EndActivity';
import RecommentActivity from '../../components/RecommentActivity';
export default function Home (props) {
    const dispatch = useDispatch()
    const { userID } = useSelector((root) => root.LoginReducer);
    const { arrFanpage } = useSelector((root) => root.FanpageReducer);
    const { arrActivity, activityId, arrActivityRecomment } = useSelector((root) => root.ActivityReducer);
    const { arrEndActivity } = useSelector((root) => root.EndActivityReducer);
    useEffect(() => {
        // const user = localStorage.getItem('userID');
        // if (user) {
        //     console.log('có user');
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
            const action9 = GetRecommentActivityAction(userID);
            dispatch(action9);

        // } else {
        //     alert('Vui lòng đăng nhập để trải nghiệm tốt hơn');
        //     props.history.push('/');
        // }
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
                                    <div className='col-lg-3'>                                       
                                    <YourFanpage />
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
                            {/* <span className>WSCV</span> */}
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

