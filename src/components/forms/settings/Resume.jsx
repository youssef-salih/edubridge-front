import { Upload } from "lucide-react";
import React from "react";
import { useDropzone } from "react-dropzone";

const Resume = ({ formik }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
  });
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} -{" "}
      {file.size / 1024 / 1024 > 1024
        ? (file.size / 1024 / 1024).toFixed(2) + " Mo"
        : (file.size / 1024).toFixed(0) + " Ko"}{" "}
    </li>
  ));
  return (
    <section className="container">
      <div
        {...getRootProps({ className: "dropzone" })}
        className="bg-white p-8 border border-dotted border-primary rounded-xl flex items-center justify-center flex-col"
      >
        <input {...getInputProps()} />
        <Upload className="text-gray-400" size={20} />
        <p className="text-xs text-gray-400">
          Click to upload or drag and drop
        </p>
        <p className="text-xs text-gray-400">PDF, DOC, DOCX (max. 5MB)</p>
      </div>
      {files && (
        <div className="mt-5">
          <ul>{files}</ul>
        </div>
      )}
    </section>
  );
};

export default Resume;
