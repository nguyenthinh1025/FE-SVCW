import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { GetStatisticalAction } from "../../redux/actions/StatisticalAction";

const StatisticalUser = (props) => {
  const [selectedValue, setSelectedValue] = useState(true);

  const handleOptionClick = (value) => {
    setSelectedValue(value);
  };

  const dispatch = useDispatch();
  const { arrStatical } = useSelector((root) => root.StatisticalReducer);
  console.log(arrStatical);
  useEffect(() => {
    const action = GetStatisticalAction(localStorage.getItem("userID"), year);
    dispatch(action);
  }, []);
  const [year, setYear] = useState("2023");
  console.log(year);
  const arr = arrStatical?.map((item, index) => {
    return selectedValue ? item.donated : item.totalDonate;
  });
  const arr1 = arrStatical?.map((item, index) => {
    return selectedValue
      ? item.totalNumberActivityCreate
      : item.totalNumberActivityCreate;
  });

  const series = [
    {
      name: "Tổng tiền",
      data: arr,
    },
  ];
  const series1 = [
    {
      name: "Tổng chiến dịch",
      data: arr1,
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: selectedValue
        ? "Thống kê số chiến dịch đã tạo"
        : "Thống kê số tiền đã ủng hộ",
      align: "left",
      style: {
        color: selectedValue ? "#0077b6" : "#0077b6", // Đổi màu tùy theo selectedValue
        fontSize: selectedValue ? "30px" : "30px",
      },
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Tháng 1",
        "Tháng 2",
        "Tháng 3",
        "Tháng 4",
        "Tháng 5",
        "Tháng 6",
        "Tháng 7",
        "Tháng 8",
        "Tháng 9",
        "Tháng 10",
        "Tháng 11",
        "Tháng 12",
      ],
    },
  };

  return (
    <div className="" style={{ marginTop: "100px" }}>
      <div className="theme-layout">
        <section>
          <div className="top-area bluesh high-opacity">
            <div
              className="bg-image"
              style={{ backgroundImage: "url(images/resources/top-bg.jpg)" }}
            />
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="post-subject">
                    <div className="university-tag">
                      <div className="Search-result">
                        <h4>
                          {" "}
                          <strong>Thống kê</strong>
                        </h4>
                      </div>
                    </div>
                    <ul className="nav nav-tabs post-detail-btn">
                      <li
                        className="nav-item"
                        onClick={() => handleOptionClick(true)}
                      >
                        <a
                          className="active"
                          href="#allposts"
                          data-toggle="tab"
                        >
                          Thống kê chiến dịch đã tạo
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => handleOptionClick(false)}
                      >
                        <a className href="#members" data-toggle="tab">
                          Thống kê số tiền đã ủng hộ
                        </a>
                      </li>
                      {/* <li className="nav-item"><a className href="#photos" data-toggle="tab">Photos</a></li>
                            <li className="nav-item"><a className href="#videos" data-toggle="tab">Videos</a></li>
                            <li className="nav-item"><a className href="#groups" data-toggle="tab">Groups</a></li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div id="page-contents" className="row merged20">
                    <div className="col-lg-12">
                      <div className="tab-content">
                        <div
                          className="tab-pane fade active show"
                          id="allposts"
                        >
                          <div className="main-wraper">
                            <div style={{ display: "flex" }}>
                              <div className="main-title">
                                Thống kê số chiến dịch đã tạo năm {year}
                              </div>
                              <select
                                style={{
                                  width: "80px",
                                  height: "20px",
                                  border: "transparent",
                                }}
                                onClick={(e) => {
                                  setYear(e.target.value);
                                  const action = GetStatisticalAction(
                                    localStorage.getItem("userID"),
                                    e.target.value
                                  );
                                  dispatch(action);
                                }}
                              >
                                <option value="2022">2022</option>
                                <option value="2023" selected>
                                  2023
                                </option>
                                <option value="2024">2024</option>
                              </select>
                            </div>
                            <ReactApexChart
                              options={options}
                              series={series1}
                              type="line"
                              height={350}
                            />
                          </div>
                        </div>
                        <div className="tab-pane fade" id="members">
                          <div className="main-wraper">
                            <div style={{ display: "flex" }}>
                              <div className="main-title">
                                Thống kê số tiền đã ủng hộ {year}
                              </div>
                              <select
                                style={{
                                  width: "80px",
                                  height: "20px",
                                  border: "transparent",
                                }}
                                onClick={(e) => {
                                  setYear(e.target.value);
                                  const action = GetStatisticalAction(
                                    localStorage.getItem("userID"),
                                    e.target.value
                                  );
                                  dispatch(action);
                                }}
                              >
                                <option value="2022">2022</option>
                                <option value="2023" selected>
                                  2023
                                </option>
                                <option value="2024">2024</option>
                              </select>
                            </div>
                            <ReactApexChart
                              options={options}
                              series={series}
                              type="line"
                              height={350}
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
        </section>
      </div>
      {/* <div>
                <button
                    onClick={() => handleOptionClick(true)}
                    style={{
                        backgroundColor: ' #0077b6', // Màu nền
                        color: 'white', // Màu chữ
                        border: 'none', // Loại bỏ đường viền
                        padding: '10px 20px', // Kích thước lề nội dung
                        borderRadius: '5px', // Bo tròn viền
                        cursor: 'pointer', // Biểu tượng con trỏ khi rê chuột
                        fontSize: '16px', // Cỡ chữ
                    }}
                >
                    Biểu đồ theo số tiền đã ủng hộ
                </button>
                <button
                    onClick={() => handleOptionClick(false)}
                    style={{
                        backgroundColor: 'white', // Màu nền
                        color: ' #0077b6', // Màu chữ
                        border: 'none', // Loại bỏ đường viền
                        padding: '10px 20px', // Kích thước lề nội dung
                        borderRadius: '5px', // Bo tròn viền
                        cursor: 'pointer', // Biểu tượng con trỏ khi rê chuột
                        fontSize: '16px', // Cỡ chữ
                    }}

                >Biểu đồ theo số hoạt động đã tạo</button>

         </div>

            <div className='row' style={{ marginTop: '100px' }}>
                <div className="">
                    <ReactApexChart options={options} series={series} type="line" height={350} />
                </div>

            </div> */}
    </div>
  );
};

export default StatisticalUser;
