import React, { useRef } from 'react';

const FileUploader = () => {
    const fileInput = useRef(null)
    const handleFileInput = (e) => {
        const file = e.target.files[0];
        return file;
    }

    return (
        <div className="file-uploader">
            <input type="file" onChange={handleFileInput} />
            <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary">sd</button>
        </div>
    );
}

export default FileUploader;
