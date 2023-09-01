import { useFormik } from "formik";
import React from "react";
import { ResultActivityAction } from "../../redux/actions/ActivityAction";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Swal from "sweetalert2";

export default function CreateResultActivity(props) {
  const dispatch = useDispatch();
  const { popupStyleCreate, handleClickCreate, idActivity, isOpen } = props;
  const formik8 = useFormik({
    initialValues: {
      title: "",
      desciption: "",
      activityId: "",
    },
    onSubmit:async (value) => {
      console.log(value);
      const action =await ResultActivityAction(value);
      dispatch(action);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: `Thêm kết quả của chiến dịch thành công`,
      });
      handleClickCreate()
    },
  });
  useEffect(() => {
    if (idActivity) {
      formik8.setFieldValue("activityId", idActivity);
    }
  }, [idActivity]);
  return (
    <div>
      {isOpen === true ? (
        <div className="post-new-popup" style={popupStyleCreate}>
          <div className="popup" style={{ width: 600, zIndex: 80 }}>
            <span className="popup-closed" onClick={handleClickCreate}>
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
                  Cập nhật kết quả
                </h5>
              </div>
            </div>

            <div>
              <form onSubmit={formik8.handleSubmit}>
                <div className="form row mt-3">
                  <div className="form-group">
                    <label>Tiêu đề</label>
                    <input
                      className="form-control"
                      name="title"
                      onChange={formik8.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Chi tiết</label>
                    <textarea
                      id="message"
                      className="form-control"
                      rows="2"
                      cols="50"
                      name="desciption"
                      onChange={formik8.handleChange}
                    ></textarea>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Cập nhật
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
  );
}
