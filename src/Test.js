import React, { useState } from 'react';

function CopyTextExample() {
  const [textToCopy, setTextToCopy] = useState("Dòng văn bản bạn muốn sao chép");

  const copyTextToClipboard = () => {
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Đã sao chép: " + textToCopy);
  };

  return (
    <div>
      <div id="textToCopy">{textToCopy}</div>
      <button onClick={copyTextToClipboard}>Sao chép</button>
    </div>
  );
}

export default CopyTextExample;