// import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import axios from "axios";

// const FileUpload = () => {
//   const [file, setFile] = useState("");
//   const [fileName, setFileName] = useState("Choisir fichier...");
//   const [uploadedFile, setUploadedFile] = useState({});

//   const onChange = (e) => {
//     setFile(e.target.files[0]);
//     setFileName(e.target.files[0].name);
//   };

//   const onSubmit = async (e) => {
//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const res = await axios.post("/upload", formData);

//       const { fileName, filePath } = res.data;
//       setUploadedFile({ fileName, filePath });
//     } catch (err) {
//       if (err.response.status === 500) {
//         console.log("there was a problem with server");
//       } else {
//         console.log(err.response.data.msg);
//       }
//     }
//   };

//   return (
//     <div>
//       <Form.Group controlId="formFileSm" className="mb-3">
//         <Form.Label>{fileName}</Form.Label>
//         <Form.Control type="file" size="sm" />
//         <Button variant="info" onClick={() => onSubmit()}>
//           Upload
//         </Button>
//       </Form.Group>
//       {uploadedFile ? (
//         <div>
//           <h3> image {uploadedFile.fileName} is uploaded</h3>
//           <img style={{ width: "50%" }} src={uploadedFile.filePath} alt="img" />
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default FileUpload;
