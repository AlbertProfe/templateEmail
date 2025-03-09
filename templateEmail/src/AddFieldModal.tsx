import React, { useState, ChangeEvent } from "react";
import "./styles.css";

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
  const [position, setPosition] = useState(existingFields[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && placeholder) {
      onAdd(name, placeholder, position);
      setName("");
      setPlaceholder("");
      setPosition(existingFields[0]);
    }
  };

  return (
    <div className="add-field-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          className="add-field-input"
          placeholder="e.g., Special Note"
        />
        <input
          type="text"
          value={placeholder}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPlaceholder(e.target.value)
          }
          className="add-field-input"
          placeholder="e.g., Enter special note"
        />
        <select
          value={position}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setPosition(e.target.value)
          }
          className="add-field-input"
        >
          {existingFields.map((field) => (
            <option key={field} value={field}>
              {field.replace(/([A-Z])/g, " $1").trim()}
            </option>
          ))}
        </select>
        <div className="add-field-button-group">
          <button type="submit" className="add-field-button">
            Add
          </button>
          <button
            type="button"
            onClick={onClose}
            className="add-field-cancel-button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFieldModal;
