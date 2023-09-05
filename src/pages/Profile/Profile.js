import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Clock from "../../components/Clock";
import { useDispatch, useSelector } from "react-redux";
import { GetProfileByIdAction } from "../../redux/actions/ProfileAction";
import moment from "moment";
import CreateActivity from "../../components/CreateActivity";
import ListActivity from "../../components/ListActivity";
import Albums from "./Albums";
import PersonalDetail from "./PersonalDetail";
import EndActivity from "./EndActivity";
import {
  GetListEndActivityAction,
  GetListEndActivityByUserIDAction,
} from "../../redux/actions/ActivityAction";
import CompleteInfo from "../../components/CompleteInfo";
import SuggestedGroup from "../../components/SuggestedGroup";
import Other from "../../components/Other";
import {
  GetListReportAction,
  GetListReportByTypeAction,
} from "../../redux/actions/ReportAction";
import { GetListReportTypeAction } from "../../redux/actions/ReportTypeAction";
import YourFanpage from "../../components/YourFanpage";

export default function Profile (props) {
  const { id } = props.match.params;
  const dispatch = useDispatch();
  const [reloadPage, setReloadPage] = useState(false);
  const { userID } = useSelector((root) => root.LoginReducer);
  const { getUserId } = useSelector((root) => root.ProfileReducer);
  const { arrEndActivityByUserID } = useSelector(
    (root) => root.EndActivityReducer
  );
  useEffect(() => {
    const action = GetProfileByIdAction(id);
    dispatch(action);
    const action1 = GetListEndActivityByUserIDAction(id);
    dispatch(action1);
    const action4 = GetListReportTypeAction();
    dispatch(action4);
  }, []);
  return (
    <div>
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
                    <div className="col-lg-9">
                      <div className="group-feed">
                        <div className="group-avatar">
                          {getUserId?.coverImage === "none" ? (
                            <img src="https://img4.thuthuatphanmem.vn/uploads/2020/05/12/hinh-anh-mau-xam-chi_103623490.jpg" />
                          ) : (
                            <img
                              src={getUserId?.coverImage}
                              style={{ objectFit: "cover" }}
                              alt
                            />
                          )}
                          {getUserId?.userId === userID ? (
                            <div></div>
                          ) : (
                            <div className="follow">
                              <i className="icofont-check-circled" />
                              Thích
                            </div>
                          )}
                          <figure className="group-dp">
                            {" "}
                            {getUserId?.image === "none" ? (
                              <img src="https://nhanvietluanvan.com/wp-content/uploads/2023/05/c6e56503cfdd87da299f72dc416023d4-736x620.jpg" />
                            ) : (
                              <img src={getUserId?.image} alt />
                            )}
                          </figure>
                        </div>
                        <div className="grp-info about">
                          <h4>
                            {getUserId?.username}{" "}
                            <span>
                              {getUserId?.fullName !== "none"
                                ? `@${getUserId?.fullName}`
                                : ""}
                            </span>
                          </h4>
                          <ul className="joined-info">
                            <li>
                              <span>Ngày tạo tài khoản:</span>{" "}
                              {moment(getUserId?.createAt).format("DD-MM-YYYY")}
                            </li>
                            <li>
                              <span>Số nhóm đã theo dõi:</span>{" "}
                              {getUserId?.followFanpage?.length}
                            </li>
                            <li>
                              <span>Số bài viết:</span>{" "}
                              {getUserId?.activity?.length}
                            </li>
                            <li>
                              <span>Số người thích:</span>{" "}
                            </li>
                          </ul>

                          <ul
                            className="nav nav-tabs about-btn"
                            style={{ margin: "20px 0" }}
                          >
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
                                className
                                href="#endactivity"
                                data-toggle="tab"
                              >
                                Danh sách kết thúc chiến dịch
                              </a>
                            </li>
                          </ul>
                        </div>
                        {getUserId?.achivementUser?.length !== 0 ? (
                          <div className="main-wraper">
                            <div className="grp-about">
                              <div className="row">
                                <div className="col-lg-8 col-md-6">
                                  <h4>Danh hiệu</h4>
                                  <ul className="badges">
                                    {getUserId?.achivementUser?.map(
                                      (item, index) => {
                                        return (
                                          <li key={index}>
                                            <img
                                              src="../images/badges/badge2.png"
                                              alt={`${item?.achivement?.description}`}
                                              title={`${item?.achivement?.description}`}
                                            />
                                          </li>
                                        );
                                      }
                                    )}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div></div>
                        )}

                        <div className="row">
                          <div className="col-lg-12">
                            <div className="tab-content">
                              <div
                                className=" tab-pane active fade show "
                                id="posts"
                              >
                                <div className="row merged20">
                                  <div className="col-lg-8">
                                    <CreateActivity />
                                    {/* create new post */}
                                    <div className="">
                                      <ListActivity
                                        arrActivity={getUserId?.activity}
                                        getUserId={getUserId}
                                      />
                                    </div>

                                    <div className="sp sp-bars" />
                                  </div>
                                  <Other />
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
                              <EndActivity
                                arrEndActivityByUserID={arrEndActivityByUserID}
                                getUserId={getUserId}
                              />
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
        <figure className="bottom-mockup">
          <img alt src="../images/footer.png" />
        </figure>
        {/* bottombar */}
        <div className="bottombar">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <span className>
                  © copyright All rights reserved by socimo 2020
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
