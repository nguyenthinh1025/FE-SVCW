import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { GetActivityByIDAction } from "../../redux/actions/ActivityAction";
import { useDispatch, useSelector } from "react-redux";
import ListFollowJoin from "../../components/ListFollowJoin";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import moment from "moment";
import { InputText } from "primereact/inputtext";

export default function ResultActivity(props) {
  const dispatch = useDispatch();
  const { popupStyle1, handleClick1, isOpen1, idActivity } = props;
  const { activityId } = useSelector((root) => root.ActivityReducer);
  const { arrEndActivityID } = useSelector((root) => root.EndActivityReducer);

  // useEffect(() => {
  //   const action = GetActivityByIDAction(idActivity);
  //   dispatch(action);
  // }, [idActivity]);
  const [isFolowJoin, setIsFolowJoin] = useState(false);
  const [listFolowJoin, setFolowJoin] = useState([]);
  const [listJoinFollow, setJoinFollow] = useState([]);

  const handleClickFolowJoin = () => {
    setIsFolowJoin((prevIsOpen) => !prevIsOpen);
  };

  const [isDonate, setIsDonate] = useState(false);
  const [listDonate, setIsListDonate] = useState([]);
  const handleClickDonate = () => {
    setIsDonate((prevIsOpen) => !prevIsOpen);
  };
  const popupStyleDonate = {
    opacity: isDonate ? 1 : 0,
    visibility: isDonate ? "visible" : "hidden",
    overflow: isDonate ? "auto" : "hidden",
  };

  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const dt = useRef(null);
  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const rightToolbarTemplate = () => {
    return (
      <Button
        label="Tải xuống"
        icon="pi pi-upload"
        style={{ marginRight: "50px" ,background:'#088dcd', border:'none'}}
        className="p-button-help"
        onClick={exportCSV}
      />
    );
  };
  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      {/* <h4 className="m-0 mb-3">Quản lý huy hiệu</h4> */}
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Tìm kiếm..."
        />
      </span>
    </div>
  );

  useEffect(() => {
    setProducts(listJoinFollow);
  }, [listJoinFollow]);
  return (
    <div>
      {isOpen1 === true ? (
        <div className="post-new-popup" style={popupStyle1}>
          <div
            className="popup"
            style={{ width: 1000, height: 800, zIndex: 80, marginTop: "-100px" }}
          >
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
                      padding: "10px 0",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "22px",
                        fontWeight: "bold",
                        textAlign: "center",
                        paddingTop: "30px",
                      }}
                    >
                      <span style={{ textAlign: "center" }}>
                        Chưa cập nhật kết quả{" "}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div>
                    <ul
                      className="nav nav-tabs about-btn"
                      style={{ margin: "20px 0" }}
                    >
                      <li className="nav-item">
                        <a className="active" href="#posts" data-toggle="tab">
                          Kết quả chiến dịch
                        </a>
                      </li>
                      <li className="nav-item" style={{ margin: "0 10px" }}>
                        <a className href="#pictures" data-toggle="tab">
                          Người ủng hộ
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className
                          href="#about"
                          data-toggle="tab"
                          onClick={() => {
                            handleClickFolowJoin();
                            setFolowJoin(
                              arrEndActivityID?.activity?.followJoinAvtivity?.filter(
                                (item) => item.isFollow === true
                              )
                            );
                            setJoinFollow(
                              arrEndActivityID?.activity?.followJoinAvtivity?.filter(
                                (item) => item.isJoin === "Join"
                              )
                            );
                          }}
                        >
                          Người tham gia
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="tab-content">
                        <div className=" tab-pane active fade show " id="posts">
                          <div className="row merged20">
                            <div className="col-lg-8">
                              <div className="">post</div>
                            </div>
                          </div>
                        </div>

                        <div className="tab-pane fade" id="pictures">
                          <div className="row merged20">
                            <div className="col-lg-12">picture</div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="about">
                          <div className="row merged20">
                            <div className="col-lg-12">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="tab-content">
                                    <div
                                      className="card tab-pane active fade show "
                                      id="follow"
                                    >
                                      <Toolbar
                                        className="mb-4"
                                        right={rightToolbarTemplate}
                                      ></Toolbar>

                                      <DataTable
                                        ref={dt}
                                        value={products}
                                        selection={selectedProducts}
                                        onSelectionChange={(e) =>
                                          setSelectedProducts(e.value)
                                        }
                                        dataKey="id"
                                        paginator
                                        rows={10}
                                        rowsPerPageOptions={[5, 10, 25]}
                                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                                        currentPageReportTemplate="Đang hiển thị {first} đến {last} trong tổng số {totalRecords} sản phẩm"
                                        globalFilter={globalFilter}
                                        header={header}
                                      >
                                        <Column
                                          field="user.email"
                                          header="Email"
                                          sortable
                                          style={{ minWidth: "11rem" }}
                                        ></Column>

                                        <Column
                                          field="user.fullName"
                                          header="Họ tên"
                                          sortable
                                          style={{ minWidth: "12rem" }}
                                        ></Column>

                                        <Column
                                          field={(datetime) =>
                                            moment(datetime.datetime).format(
                                              "DD-MM-YYYY hh:mm A"
                                            )
                                          }
                                          header="Thời gian theo dõi"
                                          sortable
                                          style={{ minWidth: "12rem" }}
                                        ></Column>
                                      </DataTable>
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
