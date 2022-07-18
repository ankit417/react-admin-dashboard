import React, { useState } from "react";

const toast = ["toast1", "toast2", "toast3"];

export const Toast = () => {
  const [toastList, setToastList] = useState(toast);

  const addToast = () => {
    setToastList((prev) => ["hello", ...prev]);
  };

  const removeToast = (index: number) => {
    let toastArray = toastList;
    toastArray.splice(index, 1);
    return setToastList([...toastArray]);
  };
  return (
    <div className="toast-container">
      {toastList.map((item, index) => {
        return (
          <div key={index} className="toast-item">
            <div
              className="item"
              onClick={() => {
                addToast();
              }}
            >
              {item}
            </div>
            <div
              className="item-remove"
              onClick={() => {
                removeToast(index);
              }}
            >
              x
            </div>
          </div>
        );
      })}
    </div>
  );
};
