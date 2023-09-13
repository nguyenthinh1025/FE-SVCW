import React, { useEffect, useState } from "react";
import { ListHistoryDonationAction } from "../redux/actions/DonationAction";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

export default function ListDonateDone() {
  const dispatch = useDispatch();
  const { arrDonationDone } = useSelector((root) => root.DonationReducer);
  console.log(arrDonationDone);
  useEffect(() => {
    const action = ListHistoryDonationAction();
    dispatch(action);
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % arrDonationDone.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [arrDonationDone.length]);
  return (
    <div>
      <div className="widget">
        <h4 className="widget-title">Danh sách ủng hộ</h4>
        <span>Dánh sách ủng hộ trên WSCV</span>
        <ul className="prof-complete prof-complete-1">
      {arrDonationDone.map((item, index) => {
        return (
          <li
            key={index}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          >
            <span>{item.name}</span>
            <em>{(item.amount).toLocaleString()} vnđ</em>
          </li>
        );
      })}
    </ul>
      </div>
    </div>
  );
}
