import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage_bucket } from "./firebase";

// ... Firebase configuration and initialization ...

const process = [
  { id: "1", value: "phu" },
  { id: "2", value: "thinh" },
  { id: "3", value: "dung" },
  { id: "4", value: "teo" },
  { id: "5", value: "mbs" },
];
function DynamicForm () {
  const [inputFields, setInputFields] = useState([
    {
      processTitle: "",
      description: "",
      startDate: "",
      endDate: "",
      activityId: "activityProcess",
      processTypeId: "",
      isKeyProcess: true,
      processNo: 0,
      images: [],
      meida: [],
    },
  ]);
  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        processTitle: "",
        description: "",
        startDate: "",
        endDate: "",
        activityId: "activityProcess",
        processTypeId: "",
        isKeyProcess: true,
        processNo: 0,
        images: [],
        meida: [],
      },
    ]);
  };

  const [imageUrls1, setImageUrls1] = useState([]);
  const handleImageChange = async (index, event) => {
    const updatedInputFields = [...inputFields];
    updatedInputFields[index].images = event.target.files;
    setInputFields(updatedInputFields); // Update the inputFields with selected images

    const uploadedImageUrls = [];

    for (const image of updatedInputFields[index].images) {
      const fileRef = ref(storage_bucket, image.name);
      const uploadTask = uploadBytesResumable(fileRef, image);

      await uploadTask;

      const downloadURL = await getDownloadURL(fileRef);
      uploadedImageUrls.push(downloadURL);
    }

    updatedInputFields[index].meida = uploadedImageUrls;
    setInputFields(updatedInputFields); // Update the inputFields with image URLs
    await setImageUrls1((prevImageUrls) => {
      const newImageUrls = [...prevImageUrls];
      newImageUrls[index] = uploadedImageUrls;
      return newImageUrls;
    });
  };
  const removeInputField = (index) => {
    const updatedInputFields = [...inputFields];
    updatedInputFields.splice(index, 1);
    setInputFields(updatedInputFields);
  };

  const handleInputChange = (index, field, value) => {
    const updatedInputFields = [...inputFields];
    updatedInputFields[index][field] = value;
    setInputFields(updatedInputFields);
  };




  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {inputFields.map((data, index) => (
          <div className="row my-3" key={index}>
            <div className="col">
              <div className="form-group">
                <input
                  type="text"
                  value={data.processTitle}
                  onChange={(event) =>
                    handleInputChange(index, "processTitle", event.target.value)
                  }
                  className="form-control"
                  placeholder="Process Title"
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <input
                  type="text"
                  value={data.description}
                  onChange={(event) =>
                    handleInputChange(index, "description", event.target.value)
                  }
                  className="form-control"
                  placeholder="Description"
                />
              </div>
            </div>
            {/* ... Other input fields ... */}
            <div className="col">
              <div className="form-group">
                <input
                  type="file"
                  onChange={(event) => handleImageChange(index, event)}
                  multiple
                />
                <div>
                  {data.meida.map((imageUrl, imgIndex) => (
                    <div key={imgIndex} className="image-preview">
                      <img
                        src={imageUrl}
                        alt={`Image ${imgIndex}`}
                        className="image"
                        style={{ display: "none" }}
                        onLoad={(e) => (e.target.style.display = "block")} // Show the image when it's loaded
                      />
                      <div className="spinner" style={{ display: "block" }}>
                        Loading...
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col">
              <select
                onChange={(e) =>
                  handleInputChange(index, "processTypeId", e.target.value)
                }
                onClick={(e) => {
                }}
              >
                <option value="">Chọn loại</option>
                {process.map((item) => (

                  <option key={item.id} value={item.id}>
                    {item.value}
                  </option>
                ))}
              </select>
            </div>
            <div className="col">
              {data.processTypeId === "1" ? (
                <div>
                  Chon so nguoi:
                  <input type="text" />
                </div>
              ) : data.processTypeId === "2" ? (
                <div>
                  Chon so tiền:
                  <input type="text" />
                </div>
              ) : null}
            </div>
            <div className="col">
              {inputFields.length !== 1 && (
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => removeInputField(index)}
                >
                  x
                </button>
              )}
            </div>
          </div>
        ))}

        <div className="row">
          <div className="col-sm-12">
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={addInputField}
            >
              Add New
            </button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default DynamicForm;
