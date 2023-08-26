import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { CreateReportAction } from '../redux/actions/ReportAction';
import Swal from 'sweetalert2';

export default function ReportActivity (props) {
    const { report, handleClick, popupStyle3, reportid, arrReportType } = props;
    const dispatch = useDispatch()
    const formik6 = useFormik({
        initialValues: {
            reportId: 'string',
            title: 'string',
            reason: '',
            reportTypeId: 'string',
            description: 'string',
            status: true,
            userId: localStorage.getItem('userID'),
            activityId: reportid,
        },
        onSubmit: async (value) => {
            const value1 = {...value,activityId: reportid}
            const action = await CreateReportAction(value1);
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
                title: `Báo cáo chiến dịch thành công `,
            });
            handleClick()
        },
    });
    const onInputDropdown = (e, field) => {
        // console.log(e.target.value)
        formik6.setFieldValue('reportTypeId', e.target.value);
    };
    return (
        <div>
            {report ? (
                <div className="post-new-popup1" style={popupStyle3}>
                    <div
                        className="popup"
                        style={{
                            width: 600,
                            zIndex: 80,
                            height: 450,
                            // overflowY: "scroll",
                            padding: '10px',
                            marginTop: '-100px',
                        }}
                    >
                        <span className="popup-closed" onClick={handleClick}>
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
                                    Báo cáo bài viết
                                </h5>
                            </div>
                        </div>
                        <div>
                            <form onSubmit={formik6.handleSubmit}>
                                <div className="form row mt-3">
                                    <div className="form-group">
                                        <label>Loại báo cáo</label>
                                        <select
                                            value="" // Bind the select value to the formData value
                                            onChange={(e) => onInputDropdown(e)} // Pass the formIndex to handleSelectChange
                                            className="form-control"
                                            placeholder="Chọn loại báo cáo"
                                        >
                                            <option value="">Chọn loại báo cáo</option>
                                            {arrReportType.map((item, index) => {
                                                return (
                                                    <option value={item.value} key={index}>
                                                        {item.label}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Lý do</label>
                                        <textarea
                                            id="message"
                                            className="form-control"
                                            rows="2"
                                            cols="50"
                                            name="reason"
                                            onChange={formik6.handleChange}
                                        ></textarea>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-block"
                                            >
                                                Báo cáo
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    )
}
