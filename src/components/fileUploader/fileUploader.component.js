import React, { useState } from "react";
import BG_IMAGE from "../../App/assets/icons/jk-placeholder-image.jpg";

export const FileUploader = () => {
  const [userFiles, setUserFiles] = useState([]);

  const getFiles = (e) => {
    e.preventDefault();
    console.log("getting files", e);
    let uploadedFiles = Array.prototype.slice.call(e.target.files);
    setUserFiles((prev) => [...prev, ...uploadedFiles]);
  };

  const removeFile = (index) => {
    let files = [...userFiles];
    files.splice(index, 1);
    setUserFiles(files);
  };
  return (
    <div style={{ width: 800 }}>
      <div className="file-uploader-wrapper">
        <div className="file-uploader-wrapper-container">
          <div className="file-uploader-wrapper-container-header">
            Upload Files
          </div>
          <div className="image-dropzone-section">
            <div className="dropzone-default-image">
              <img src={BG_IMAGE} alt="upload_image_placeholder" />
            </div>
          </div>
          <div className="file-viewer">
            {userFiles.length > 0 &&
              userFiles.map((item, index) => {
                return (
                  <div className="uploaded-file-item" key={index}>
                    <img src={URL.createObjectURL(item)} alt="files upload" />
                    <div className="uploaded-item-name">{item.name} </div>
                    <div
                      className="uploaded-item-remove"
                      onClick={() => {
                        removeFile(index);
                      }}
                    >
                      {" "}
                      X{" "}
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="file-uploader-upload">
            <input
              type="file"
              onChange={(file) => {
                getFiles(file);
              }}
              multiple={true}
              id="file-uploader-input"
            />
            <label
              className="abstract-file-upload-button"
              htmlFor="file-uploader-input"
            >
              Choose file
            </label>
            <button>upload file</button>
          </div>
        </div>
      </div>
    </div>
  );
};
