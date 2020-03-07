import React from "react";
import { useDropzone } from "react-dropzone";

export default function Dropzone({ onDrop, accept }) {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept
    });

    const getClassName = (className, isActive) => {
        return isActive ? `${className} ${className}-active` : className;
    };

    return (
        <div
            className={getClassName("dropzone", isDragActive)}
            {...getRootProps()}
        >
            <input className="dropzone-input" {...getInputProps()} />
            <div className="text-center">
                {isDragActive ? (
                    <p className="dropzone-content">
                        Release to drop the files here
                    </p>
                ) : (
                    <p className="dropzone-content">
                        Drag and drop some files here, or click to select files
                    </p>
                )}
            </div>
        </div>
    );
}
