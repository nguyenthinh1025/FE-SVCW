import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DonationAction } from "../redux/actions/DonationAction";
import { NumericFormat } from "react-number-format";
export default function Donate(props) {
  const { isPopupOpen, openPopup, donate } = props;
  const [error, setError] = useState("1");
  const { message } = useSelector((root) => root.DonationReducer);
  console.log(message);
  const dispatch = useDispatch();
  const formik1 = useFormik({
    initialValues: {
      title: "",
      amount: 0,
      email: localStorage.getItem("emailuser"),
      phone: "",
      name: localStorage.getItem("username"),
      isAnonymous: true,
      activityId: donate,
    },
    enableReinitialize: true,
    onSubmit: async (value) => {
      const action = await DonationAction(value, openPopup);
      await dispatch(action);
    },
  });

  return (
    <div>
      {isPopupOpen && (
        <div className="popup-overlay">
          {/* <div className="popup-container"> */}
          {/* <h2>Popup Form</h2> */}

          <div className="container">
            <header className="header">
              {/* <h1 id="title" className="text-center">Survey Form</h1>
                                <p id="description" className="text-center">
                                    Thank you for taking the time to help us improve the platform
                                </p>
                                <button className="close-button" onClick={closePopup}>&times;</button> */}
            </header>
            <div className="form-wrap">
              <form
                id="survey-form"
                onSubmit={formik1.handleSubmit}
                method="post"
              >
                <h1 id="title" className="text-center">
                  Vui lòng điền thông tin của bạn
                </h1>
                <button className="close-button" onClick={openPopup}>
                  &times;
                </button>
                <div className="row ">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label id="name-label" htmlFor="name">
                        Nội dung:
                      </label>
                      <input
                        type="text"
                        name="title"
                        onChange={formik1.handleChange}
                        id="name"
                        placeholder="Nhập nội dung"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label id="email-label" htmlFor="email">
                        Số tiền:
                      </label>

                      <NumericFormat
                        placeholder="Nhập số tiền"
                        className="form-control"
                        name="amount"
                        onChange={formik1.handleChange}
                        value=""
                        allowLeadingZeros
                        thousandSeparator=","
                      />
                      <div style={{ color: "red" }}>{message}</div>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label id="name-label" htmlFor="name">
                        Email:
                      </label>
                      <input
                        disabled
                        type="email"
                        value={formik1.values.email}
                        name="email"
                        onChange={formik1.handleChange}
                        id="validationDefault01"
                        placeholder="Nhập email"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label id="email-label" htmlFor="email">
                        Số điện thoại:
                      </label>
                      <input
                        type="text"
                        name="phone"
                        onChange={formik1.handleChange}
                        id="email"
                        placeholder="Nhập số điện thoại"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label id="name-label" htmlFor="name">
                        Họ tên:
                      </label>
                      <input
                        // disable: không cho chỉnh sửa
                        disabled
                        type="text"
                        name="name"
                        value={formik1.values.name}
                        onChange={formik1.handleChange}
                        id="name"
                        placeholder="Họ và tên"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <button
                      type="submit"
                      id="submit"
                      className="btn btn-primary btn-block"
                    >
                      Hoàn thành
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* </div> */}
        </div>
      )}
    </div>
  );
}
