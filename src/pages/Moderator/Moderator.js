import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import { Rating } from "primereact/rating";
import { Toolbar } from "primereact/toolbar";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { Dialog } from "primereact/dialog";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import {
  CreateAchivementAction,
  DeleteAchivementAction,
  GetListAchivementAction,
  UpdateAchivementAction,
} from "./../../redux/actions/AchivementAction";
import { useDispatch, useSelector } from "react-redux";
import { storage_bucket } from "./../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
  CreateModeratorAction,
  DeleteModeratorAction,
  GetListModeratorAction,
} from "../../redux/actions/ModeratorAction";

export default function Moderator () {
  const dispatch = useDispatch();
  const { arrModerator, msg } = useSelector((root) => root.ModeratorReducer);
console.log(arrModerator)
  const [showInput, setShowInput] = useState(true);
  const [id, setID] = useState("abc");
  let counter = 0;

  let emptyProduct = {
    username: "",
    password: "",
    image: "string",
    gender: true,
    phone: "",
    fullName: "",
    email: "",
    coverImage: "string",
    dateOfBirth: moment().format("DD/MM/YYYY"),
  };
  const options1 = [
    { label: "Nam", value: 1 },
    { label: "Nữ", value: 0 },
  ];

  const uploadFile = (e) => {
    let file = e.target.files[0];
    let fileRef = ref(storage_bucket, file.name);

    const uploadTask = uploadBytesResumable(fileRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setShowInput(false);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          const updatedProduct = { ...product, image: url }; // Update achivementLogo property in product object
          setProduct(updatedProduct);
        });
      }
    );
  };

  const [text, setText] = useState("Thêm mới người kiểm duyệt");
  const [products, setProducts] = useState([]);
  const [productDialog, setProductDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
  const [product, setProduct] = useState(emptyProduct);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);

  useEffect(() => {
    const action = GetListModeratorAction();
    dispatch(action);
  }, []);
  useEffect(() => {
    const arrModerator1 = arrModerator.filter(
      (item) => item.status === "Active"
    );
    setProducts(arrModerator1);
  }, [arrModerator]);



  const openNew = () => {
    setProduct(emptyProduct);
    setSubmitted(false);
    setProductDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const hideDeleteProductsDialog = () => {
    setDeleteProductsDialog(false);
  };


  const saveProduct = async () => {
    let check = true;
    setSubmitted(true);
    const action = await CreateModeratorAction(product);
    await dispatch(action);

    if (localStorage.getItem("createmoderator") === "") {
      counter++;
      toast.current.show({
        severity: "success",
        summary: "Thành công",
        detail: "Tạo mới người kiểm duyệt thành công",
        life: 3000,
      });
      setProductDialog(false);
      setProduct(emptyProduct);
      // localStorage.setItem("createmoderator", '')
    } else {
      setProductDialog(true);
    }
  };

  const editProduct = (product) => {
    setText("Chỉnh sửa thông tin người kiểm duyệt");
    setProduct({ ...product });
    setProductDialog(true);
  };

  const confirmDeleteProduct = (product) => {
    setProduct(product);
    setDeleteProductDialog(true);
  };

  const deleteProduct = async () => {
    const action = await DeleteModeratorAction(product.userId);
    await dispatch(action);
    setDeleteProductDialog(false);
    setProduct(emptyProduct);
    toast.current.show({
      severity: "error",
      summary: "Thành công",
      detail: `Xóa người kiểm duyệt ${product.fullName} Thành công`,
      life: 3000,
      options: {
        style: {
          zIndex: 100,
        },
      },
    });
  };

  const findIndexById = (id) => {
    let index = -1;

    for (let i = 0;i < products.length;i++) {
      if (products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  };

  // const createId = () => {
  //     let id = '';
  //     let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  //     for (let i = 0;i < 5;i++) {
  //         id += chars.charAt(Math.floor(Math.random() * chars.length));
  //     }

  //     return id;
  // };

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const confirmDeleteSelected = () => {
    setDeleteProductsDialog(true);
  };

  const deleteSelectedProducts = () => {
    let _products = products.filter((val) => !selectedProducts.includes(val));

    setProducts(_products);
    setDeleteProductsDialog(false);
    setSelectedProducts(null);
    toast.current.show({
      severity: "success",
      summary: "Thành công",
      detail: "Xóa thành công ",
      life: 3000,
    });
  };

  // const onCategoryChange = (e) => {
  //     let _product = { ...product };

  //     _product['category'] = e.value;
  //     setProduct(_product);
  // };

  const onInputChange = (e, name) => {
    if (name === "image") {
      uploadFile(e); // Call uploadFile function when achivementLogo value changes
    }

    const val = (e.target && e.target.value) || "";
    let _product = { ...product };

    _product[`${name}`] = val;

    setProduct(_product);
  };
  const onInputNumberChange = (e, name) => {
    const val = e.value || 0;
    if (val < 0) {
      // Giá trị nhập vào nhỏ hơn 0
      return; // Hoặc bạn có thể xử lý theo ý muốn khác ở đây
    }
    let _product = { ...product };

    _product[`${name}`] = val;

    setProduct(_product);
  };

  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          label="Thêm mới"
          icon="pi pi-plus"
          severity="success"
          onClick={openNew}
        />
        {/* <Button label="Delete" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} /> */}
      </div>
    );
  };

  const rightToolbarTemplate = () => {
    return (
      <Button
        label="Tải xuống"
        icon="pi pi-upload"
        style={{ marginRight: "50px" }}
        className="p-button-help"
        onClick={exportCSV}
      />
    );
  };

  const imageBodyTemplate = (rowData) => {
    return (
      <img
        src={`${rowData.image}`}
        alt={rowData.image}
        className="shadow-2 border-round"
        style={{ width: "64px" }}
      />
    );
  };

  const priceBodyTemplate = (rowData) => {
    return;
    // return formatCurrency(rowData.price);
  };

  // const ratingBodyTemplate = (rowData) => {
  //     return <Rating value={rowData.rating} readOnly cancel={false} />;
  // };

  // const statusBodyTemplate = (rowData) => {
  //     return <Tag value={rowData.inventoryStatus} severity={getSeverity(rowData)}></Tag>;
  // };

  const onInputDropdown = (e, field) => {
    const updatedProduct = {
      ...product,
      [field]: e.target.value === 1 ? true : false,
    };
    setProduct(updatedProduct);
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        {/* <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editProduct(rowData)} /> */}
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          onClick={() => confirmDeleteProduct(rowData)}
        />
      </React.Fragment>
    );
  };

  // const getSeverity = (product) => {
  //     switch (product.inventoryStatus) {
  //         case 'INSTOCK':
  //             return 'success';

  //         case 'LOWSTOCK':
  //             return 'warning';

  //         case 'OUTOFSTOCK':
  //             return 'danger';

  //         default:
  //             return null;
  //     }
  // };

  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h4 className="m-0 mb-3">Người kiểm duyệt</h4>
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
  const productDialogFooter = (
    <React.Fragment>
      <Button label="Hủy bỏ" icon="pi pi-times" outlined onClick={hideDialog} />
      <Button label="Hoàn thành" icon="pi pi-check" onClick={saveProduct} />
    </React.Fragment>
  );
  const deleteProductDialogFooter = (
    <React.Fragment>
      <Button
        label="Hủy bỏ"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteProductDialog}
      />
      <Button
        label="Đồng ý"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteProduct}
      />
    </React.Fragment>
  );
  const deleteProductsDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteProductsDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteSelectedProducts}
      />
    </React.Fragment>
  );

  return (
    <div className="app-main__outer" style={{ margin: "20px 30px" }}>
      <div>
        <Toast ref={toast} />
        <div className="card">
          <Toolbar
            className="mb-4"
            left={leftToolbarTemplate}
            right={rightToolbarTemplate}
          ></Toolbar>

          <DataTable
            ref={dt}
            value={products}
            selection={selectedProducts}
            onSelectionChange={(e) => setSelectedProducts(e.value)}
            dataKey="id"
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Đang hiển thị {first} đến {last} trong tổng số {totalRecords} người kiểm duyệt"
            globalFilter={globalFilter}
            header={header}
          >
            {/* <Column selectionMode="multiple" exportable={false}></Column> */}
            <Column
              field="userId"
              header="Mã"
              sortable
              style={{ minWidth: "11rem" }}
            ></Column>
            <Column
              field="fullName"
              header="Họ tên"
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            {/* <Column field="email" header="Email" sortable style={{ minWidth: '11rem' }}></Column> */}
            <Column
              field="email"
              header="Email"
              sortable
              style={{ minWidth: "12rem" }}
              body={(rowData) => {
                const maxLength = 20;
                const email = rowData.email;
                if (email.length > maxLength) {
                  return (
                    <span title={email}>
                      {email.substring(0, maxLength)}...
                    </span>
                  );
                }

                return email;
              }}
            ></Column>
            <Column
              field="phone"
              header="Số điện thoại"
              sortable
              style={{ minWidth: "11rem" }}
            ></Column>

            <Column
              field={(createAt) =>
                moment(createAt.createAt).format("DD/MM/YYYY")
              }
              header="Ngày tạo"
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            {/* <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ minWidth: '8rem' }}></Column>
                        <Column field="category" header="Category" sortable style={{ minWidth: '10rem' }}></Column>
                        <Column field="rating" header="Reviews" body={ratingBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                        <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column> */}
            <Column
              body={actionBodyTemplate}
              exportable={false}
              style={{ minWidth: "12rem", marginRight: "100px" }}
            ></Column>
          </DataTable>
        </div>

        <Dialog
          visible={productDialog}
          style={{ width: "32rem" }}
          breakpoints={{ "960px": "75vw", "641px": "90vw" }}
          onClick={() => {
            setText("Thêm tài khoản mới");
          }}
          header={text}
          modal
          className="p-fluid"
          footer={productDialogFooter}
          onHide={hideDialog}
        >
          <div className="field">
            <label
              htmlFor="description"
              className="font-bold"
              style={{ fontWeight: "bold" }}
            >
              Tên đăng nhập
            </label>
            <InputText
              id="username"
              value={product.username}
              onChange={(e) => onInputChange(e, "username")}
              required
            />
            {/* {submitted && !product.description && <small className="p-error">Miêu tả huy hiệu không được để trống.</small>} */}
          </div>
          <div className="field" style={{ marginTop: "20px" }}>
            <label
              htmlFor="description"
              className="font-bold"
              style={{ fontWeight: "bold" }}
            >
              Mật khẩu
            </label>
            <InputText
              id="password"
              value={product.password}
              onChange={(e) => onInputChange(e, "password")}
              required
            />
            {/* {submitted && !product.description && <small className="p-error">Miêu tả huy hiệu không được để trống.</small>} */}
          </div>
          <div className="field" style={{ marginTop: "20px" }}>
            <label
              htmlFor="description"
              className="font-bold"
              style={{ fontWeight: "bold" }}
            >
              Giới tính
            </label>

            <Dropdown
              options={options1}
              id="gender"
              value={product.gender}
              onChange={(e) => onInputDropdown(e, "gender")}
              placeholder={product.gender ? "Nam" : "Nữ"}

            />
            {/* {submitted && !product.description && <small className="p-error">Miêu tả huy hiệu không được để trống.</small>} */}
          </div>
          <div className="field" style={{ marginTop: "20px" }}>
            <label
              htmlFor="description"
              className="font-bold"
              style={{ fontWeight: "bold" }}
            >
              Họ Tên
            </label>
            <InputText
              id="fullName"
              value={product.fullName}
              onChange={(e) => onInputChange(e, "fullName")}
              required
            />
            {/* {submitted && !product.description && <small className="p-error">Miêu tả huy hiệu không được để trống.</small>} */}
          </div>
          <div className="field" style={{ marginTop: "20px" }}>
            <label
              htmlFor="description"
              className="font-bold"
              style={{ fontWeight: "bold" }}
            >
              Email
            </label>
            <InputText
              type="email"
              id="email"
              value={product.email}
              onChange={(e) => onInputChange(e, "email")}
              required
            />
            {/* {submitted && !product.description && <small className="p-error">Miêu tả huy hiệu không được để trống.</small>} */}
          </div>
          <div className="field" style={{ marginTop: "20px" }}>
            <label
              htmlFor="description"
              className="font-bold"
              style={{ fontWeight: "bold" }}
            >
              Số điện thoại
            </label>
            <InputText
              type="number"
              id="phone"
              value={product.phone}
              onChange={(e) => onInputChange(e, "phone")}
              required
            />
            {/* {submitted && !product.description && <small className="p-error">Miêu tả huy hiệu không được để trống.</small>} */}
          </div>
          <div className="field" style={{ marginTop: "20px" }}>
            <label
              htmlFor="description"
              className="font-bold"
              style={{ fontWeight: "bold" }}
            >
              Ngày sinh nhật
            </label>
            <InputText
              type="date"
              id="dateOfBirth"
              value={product.dateOfBirth}
              onChange={(e) => onInputChange(e, "dateOfBirth")}
              required
            />
            {/* {submitted && !product.description && <small className="p-error">Miêu tả huy hiệu không được để trống.</small>} */}
          </div>

          <h4 style={{ color: "red" }}>
            {localStorage.getItem("createmoderator")}
          </h4>
        </Dialog>

        <Dialog
          visible={deleteProductDialog}
          style={{ width: "32rem" }}
          breakpoints={{ "960px": "75vw", "641px": "90vw" }}
          header="Thông Báo"
          modal
          footer={deleteProductDialogFooter}
          onHide={hideDeleteProductDialog}
        >
          <div className="confirmation-content">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem" }}
            />
            {product && (
              <span>
                Bạn có chắc chắn muốn xóa người kiểm duyệt{" "}
                <b>{product.fullName}</b>?
              </span>
            )}
          </div>
        </Dialog>

        <Dialog
          visible={deleteProductsDialog}
          style={{ width: "32rem" }}
          breakpoints={{ "960px": "75vw", "641px": "90vw" }}
          header="Confirm"
          modal
          footer={deleteProductsDialogFooter}
          onHide={hideDeleteProductsDialog}
        >
          <div className="confirmation-content">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem" }}
            />
            {product && (
              <span>
                Are you sure you want to delete the selected products?
              </span>
            )}
          </div>
        </Dialog>
      </div>
    </div>
  );
}
