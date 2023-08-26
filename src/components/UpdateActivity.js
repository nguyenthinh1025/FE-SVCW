import { useFormik } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UpdateActivityAction } from '../redux/actions/ActivityAction';
import Swal from 'sweetalert2';

export default function UpdateActivity (props) {
    const dispatch = useDispatch()
    const { openpro1, popupStyle4, handleClick6 } = props;
    const { arrActivity, activityId, arrActivityRecomment } = useSelector(
        (root) => root.ActivityReducer
    );
    const formik9 = useFormik({
        initialValues: {
            activityId: activityId.activityId,
            title: activityId.title,
            description: activityId.description,
            startDate: activityId.startDate,
            endDate: activityId.endDate,
            location: activityId.location,
            targetDonation: activityId.targetDonation,
        },
        // enableReinitialize: true,
        enableReinitialize: true,
        onSubmit: async (value) => {
            console.log(value);
            const action = await UpdateActivityAction(value);
            await dispatch(action);
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                },
            });

            Toast.fire({
                icon: 'success',
                title: `Cập nhật chiến dịch ${value.title} thành công `,
            });
            // formik.setFieldValue("title", "");
            // formik.setFieldValue("description", "");
            // formik.setFieldValue("location", "");
            // formik.setFieldValue("targetDonation", 0);
            // formik.setFieldValue("startDate", '');
            // formik.setFieldValue("endactivity", '');
            // formik.setFieldValue("isFanpageAvtivity", false);
            // formik.setFieldValue("media", []);
            handleClick6()
            // setIsDisplay(false);
        },
    });
    return (
        <div>
            {openpro1 === true ? (
                <div className="post-new-popup" style={popupStyle4}>
                    <div
                        className="popup"
                        style={{ width: 800, marginTop: '0px', zIndex: 80 }}
                    >
                        <span className="popup-closed" onClick={handleClick6}>
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
                                    Chỉnh sửa chiến dịch
                                </h5>
                            </div>
                        </div>

                        <div className="">
                            <header className="header"></header>
                            <div className="form-wrap">
                                <form
                                    id="survey-form"
                                    method="post"
                                    onSubmit={formik9.handleSubmit}
                                >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label id="name-label" htmlFor="name">
                                                    Tên chiến dịch
                                                </label>
                                                <input
                                                    type="text"
                                                    name="title"
                                                    onChange={formik9.handleChange}
                                                    value={formik9.values.title}
                                                    id="name"
                                                    placeholder="Nhập tên chiến dịch"
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label id="email-label" htmlFor="email">
                                                    Mô tả chiến dịch
                                                </label>
                                                <input
                                                    type="text"
                                                    name="description"
                                                    onChange={formik9.handleChange}
                                                    value={formik9.values.description}
                                                    id="email"
                                                    placeholder="Nhập mô tả"
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label id="name-label" htmlFor="name">
                                                    Ngày bắt đầu
                                                </label>
                                                <input
                                                    type="date"
                                                    name="startDate"
                                                    onChange={formik9.handleChange}
                                                    value={formik9.values.startDate}
                                                    id="name"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label id="name-label" htmlFor="name">
                                                    Ngày kết thúc
                                                </label>
                                                <input
                                                    type="date"
                                                    name="endDate"
                                                    onChange={formik9.handleChange}
                                                    value={formik9.values.endDate}
                                                    id="name"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label id="name-label" htmlFor="name">
                                                    Nơi diễn ra
                                                </label>
                                                <input
                                                    type="text"
                                                    name="location"
                                                    onChange={formik9.handleChange}
                                                    value={formik9.values.location}
                                                    id="name"
                                                    placeholder="Nhập nơi diễn ra"
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        {/* <div className="col-md-6">
                      <div className="form-group">
                        {configActivity === "true" ? (
                          <div>
                            <div
                              className="form-group"
                              style={{ display: "flex" }}
                            >
                              <label
                                id="name-label"
                                style={{ marginRight: "20px" }}
                                htmlFor="name"
                              >
                                Nhận ủng hộ
                              </label>
                              <input
                                type="checkbox"
                                onChange={toggleTextInput}
                              />
                            </div>
                            {isTextInputVisible === true && (

                                <div className="form-group">

                                  <input
                                    type="number"
                                    name="targetDonation"
                                    onChange={formik9.handleChange}
                                    value={formik9.values.targetDonation}
                                    id="name"
                                    placeholder="Nhập số tiền cần nhận"
                                    className="form-control"
                                    style={{ marginTop: '-2rem' }}
                                    required
                                  />
                                </div>

                            )}
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    </div>*/}
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <button
                                                type="submit"
                                                id="submit"
                                                className="btn btn-primary btn-block"
                                            >
                                                Cập nhật
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    )
}
