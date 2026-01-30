import { useState } from "react";
import "../styles/notice.css";

const API = "http://localhost:5000";

export default function UploadNotice() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const token = localStorage.getItem("adminToken");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      setFile(null);
      setPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select an image");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    try {
      const res = await fetch(`${API}/api/notice`, {
        method: "POST",
        headers: { Authorization: "Bearer " + token },
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        alert("Notice uploaded successfully");
        setTitle("");
        setFile(null);
        setPreview(null);
      } else {
        alert("Failed to upload notice");
      }
    } catch (err) {
      console.error(err);
      alert("Error uploading notice");
    }
  };

  return (
    <div className="upload-container">
      <form className="upload-card" onSubmit={handleSubmit}>
        <h2>Upload Notice</h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input type="file" accept="image/*" onChange={handleFileChange} required />

        {preview && (
          <div className="preview-container">
            <p>Preview:</p>
            <img src={preview} alt="Preview" />
          </div>
        )}

        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
