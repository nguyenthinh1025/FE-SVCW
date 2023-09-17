import React, { useState } from 'react';

const DonationList = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 4; // Số lượng phần tử hiển thị mỗi trang

  const arrDonationDone = [
    { name: 'Item 1', amount: 10000 },
    { name: 'Item 2', amount: 20000 },
    { name: 'Item 3', amount: 30000 },
    { name: 'Item 4', amount: 40000 },
    { name: 'Item 5', amount: 50000 },
    { name: 'Item 6', amount: 60000 },
    { name: 'Item 7', amount: 70000 },
    { name: 'Item 8', amount: 80000 },
  ];

  const maxPage = Math.ceil(arrDonationDone.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const visibleItems = arrDonationDone.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    setPage(Math.max(page - 1, 1)); // Đảm bảo không điều hướng vượt ra ngoài phạm vi
  };

  const handleNextPage = () => {
    setPage(Math.min(page + 1, maxPage)); // Đảm bảo không điều hướng vượt ra ngoài phạm vi
  };

  return (
    <div>
      <ul>
        {visibleItems.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <em>{(item.amount).toLocaleString()} vnđ</em>
          </li>
        ))}
      </ul>
      <div>
        <button  style={{    border: "transparent",
    fontSize: "12px",
    color:page ===1 ?'black' :'blue',
    background: "none"}} onClick={handlePrevPage} disabled={page === 1}>Trang trước</button>
        <span>Trang {page} / {maxPage}</span>
        <button style={{border: "transparent",
    fontSize: "12px",
    color:page ===maxPage ?'black' :'#088dcd',
    background: "none"}} onClick={handleNextPage} disabled={page === maxPage}>Trang sau</button>
      </div>
    </div>
  );
};

export default DonationList;