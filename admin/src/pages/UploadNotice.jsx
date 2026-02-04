import { useState, useEffect } from "react";
import "../styles/notice.css";
import { toast } from "react-toastify";

const API = "https://mindmine-backend.onrender.com";

export default function UploadNotice() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notices, setNotices] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const token = localStorage.getItem("adminToken");

  // ---------------------
  // Fetch notices
  // ---------------------
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await fetch(`${API}/api/notice/all`, {
          headers: { Authorization: "Bearer " + token },
        });
        const data = await res.json();
        if (data.success) setNotices(data.notices);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load notices");
      }
    };
    fetchNotices();
  }, [token]);

  // ---------------------
  // Upload or edit notice
  // ---------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      toast.warning("Please enter title and description");
      return;
    }

    const payload = { title, description };
    const url = editingId
      ? `${API}/api/notice/update/${editingId}`
      : `${API}/api/notice/add`;

    try {
      const res = await fetch(url, {
        method: editingId ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(`Notice ${editingId ? "updated" : "uploaded"} successfully`);
        setTitle("");
        setDescription("");
        setEditingId(null);

        const refreshed = await fetch(`${API}/api/notice/all`, {
          headers: { Authorization: "Bearer " + token },
        });
        const refreshedData = await refreshed.json();
        if (refreshedData.success) setNotices(refreshedData.notices);
      } else {
        toast.error(data.message || "Failed to save notice");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error while saving notice");
    }
  };

  // ---------------------
  // Delete notice
  // ---------------------
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this notice?")) return;

    try {
      const res = await fetch(`${API}/api/notice/delete/${id}`, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token },
      });

      const data = await res.json();

      if (data.success) {
        setNotices(notices.filter((n) => n._id !== id));
        toast.success("Notice deleted");
      } else {
        toast.error("Failed to delete notice");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error while deleting notice");
    }
  };

  // ---------------------
  // Edit notice
  // ---------------------
  const handleEdit = (notice) => {
    setTitle(notice.title);
    setDescription(notice.description);
    setEditingId(notice._id);
  };

  return (
    <div className="upload-container">
      <form className="upload-card" onSubmit={handleSubmit}>
        <h2>{editingId ? "Edit Notice" : "Upload Notice"}</h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
        />

        <button type="submit">
          {editingId ? "Update" : "Upload"}
        </button>
      </form>

      <div className="previous-notices">
        <h2>Previous Notices</h2>

        {notices.length === 0 && <p>No notices yet.</p>}

        <div className="notices-list">
          {notices.map((notice) => (
            <div key={notice._id} className="notice-card">
              <div className="notice-info">
                <h3>{notice.title}</h3>
                <p>{notice.description}</p>
                <span>
                  {new Date(notice.createdAt).toLocaleDateString()}
                </span>

                <div className="notice-actions">
                  <button onClick={() => handleEdit(notice)}>Edit</button>
                  <button onClick={() => handleDelete(notice._id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
