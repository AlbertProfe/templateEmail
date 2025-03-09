import React, { useState, ChangeEvent } from "react";

interface AddFieldModalProps {
  onAdd: (name: string, placeholder: string, position: string) => void;
  onClose: () => void;
  existingFields: string[];
}

const AddFieldModal: React.FC<AddFieldModalProps> = ({
  onAdd,
  onClose,
  existingFields,
}) => {
  const [name, setName] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [position, setPosition] = useState(existingFields[0]); // Default to first field

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && placeholder) {
      onAdd(name, placeholder, position);
      setName(""); // Reset form
      setPlaceholder("");
      setPosition(existingFields[0]);
    }
  };

  return (
    <div style={modalStyles.container}>
      <form onSubmit={handleSubmit}>
        <div style={modalStyles.inputGroup}>
          <label style={modalStyles.label}>Field Name</label>
          <input
            type="text"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            style={modalStyles.input}
            placeholder="e.g., Special Note"
          />
        </div>
        <div style={modalStyles.inputGroup}>
          <label style={modalStyles.label}>Placeholder</label>
          <input
            type="text"
            value={placeholder}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPlaceholder(e.target.value)
            }
            style={modalStyles.input}
            placeholder="e.g., Enter special note"
          />
        </div>
        <div style={modalStyles.inputGroup}>
          <label style={modalStyles.label}>Position (Insert Before)</label>
          <select
            value={position}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setPosition(e.target.value)
            }
            style={modalStyles.input}
          >
            {existingFields.map((field) => (
              <option key={field} value={field}>
                {field.replace(/([A-Z])/g, " $1").trim()}
              </option>
            ))}
          </select>
        </div>
        <div style={modalStyles.buttonGroup}>
          <button type="submit" style={modalStyles.addButton}>
            Add
          </button>
          <button
            type="button"
            onClick={onClose}
            style={modalStyles.cancelButton}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

const modalStyles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: "#f9f9f9",
    padding: "15px",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    fontSize: "14px",
    fontWeight: 500,
    color: "#444",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "8px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    outline: "none",
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
    justifyContent: "flex-end",
  },
  addButton: {
    padding: "8px 15px",
    fontSize: "14px",
    backgroundColor: "#2ecc71",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  cancelButton: {
    padding: "8px 15px",
    fontSize: "14px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default AddFieldModal;
