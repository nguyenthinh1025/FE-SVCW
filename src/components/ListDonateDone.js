import React, { useEffect, useState } from "react";
import { ListHistoryDonationAction } from "../redux/actions/DonationAction";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

export default function ListDonateDone() {
  const dispatch = useDispatch();
  const { arrDonationDone } = useSelector((root) => root.DonationReducer);
  useEffect(() => {
    const action = ListHistoryDonationAction();
    dispatch(action);
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % arrDonationDone.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [arrDonationDone.length]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;
  const maxPage = Math.ceil(arrDonationDone.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const visibleItems = arrDonationDone.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePrevPage = () => {
    setPage(Math.max(page - 1, 1)); // Đảm bảo không điều hướng vượt ra ngoài phạm vi
  };

  const handleNextPage = () => {
    setPage(Math.min(page + 1, maxPage)); // Đảm bảo không điều hướng vượt ra ngoài phạm vi
  };
  return (
    <div>
      <div className="widget">
        <h4 className="widget-title">Danh sách ủng hộ</h4>
        <span>Dánh sách ủng hộ trên WSCV</span>
        <ul className="prof-complete ">
          {visibleItems.map((item, index) => (
            <li key={index}>
              <span style={{color:'#088dcd'}}>{item.name}</span>
              <em style={{color:'#088dcd'}}>{item.amount.toLocaleString()} vnđ</em>
            </li>
          ))}
        </ul>
        <div
          style={{
            display: "flex",
            marginTop: "30px",
            justifyContent: "space-between",
          }}
        >
          <button
            style={{
              border: "transparent",
              fontSize: "12px",
              color: page === 1 ? "rgba(0,0,0,0.2)" : "#088dcd",
              background: "none",
            }}
            onClick={handlePrevPage}
            disabled={page === 1}
          >
            Trang trước
          </button>
          <span style={{ fontSize: "12px", paddingTop: "2px" }}>
            Trang {page} / {maxPage}
          </span>
          <button
            style={{
              border: "transparent",
              fontSize: "12px",
              color: page === maxPage ?  "rgba(0,0,0,0.2)" : "#088dcd",
              background: "none",
            }}
            onClick={handleNextPage}
            disabled={page === maxPage}
          >
            Trang sau
          </button>
        </div>
      </div>
    </div>
  );
}
