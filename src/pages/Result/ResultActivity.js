import React from "react";
import { useEffect } from "react";
import { GetActivityByIDAction } from "../../redux/actions/ActivityAction";
import { useDispatch, useSelector } from "react-redux";

export default function ResultActivity(props) {
  const dispatch = useDispatch();
  const { popupStyle1, handleClick1, isOpen1, idActivity } = props;
  const { activityId } = useSelector((root) => root.ActivityReducer);
//   useEffect(() => {
//     const action = GetActivityByIDAction(idActivity);
//     dispatch(action);
//   }, [idActivity]);
  return (
    <div>
      {isOpen1 === true ? (
        <div className="post-new-popup" style={popupStyle1}>
          <div className="popup" style={{ width: 600, zIndex: 80 }}>
            <span className="popup-closed" onClick={handleClick1}>
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
                  Kết quả chiến dịch
                </h5>
              </div>
            </div>

            <div>
              {activityId?.activityResult?.length === 0 ? (
                <div>
                  <div
                        style={{
                          padding: "10px 0"
                        }}
                       
                      >
                        <div
                          style={{
                            fontSize: "22px",
                            fontWeight:'bold',
                            textAlign:'center',
                            paddingTop:'30px'
                          }}
                        >
                          <span style={{ textAlign:'center' }}>Chưa cập nhật kết quả </span>
                          
                        </div>
                       
                      </div>
                </div>
              ) : (
                <div>
                  {activityId?.activityResult?.map((item, index) => {
                    return (
                      <div
                        style={{
                          borderBottom: "1px solid black",
                          padding: "10px 0",
                          margin: "20px 0",
                        }}
                        key={index}
                      >
                        <div
                          style={{
                            display: "flex",
                            fontSize: "16px",
                            alignContent: "center",
                          }}
                        >
                          <span style={{ paddingRight: "5px" }}>Tiêu đề: </span>{" "}
                          <h4 style={{ color: "#1572b8", paddingTop: "1px" }}>
                            {" "}
                            {item?.title}
                          </h4>
                        </div>
                        <span style={{ fontSize: "16px" }}>
                          Chi tiết: {item?.desciption}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
