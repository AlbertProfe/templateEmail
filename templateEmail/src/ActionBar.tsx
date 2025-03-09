import React, { ChangeEvent } from "react";
import AddFieldModal from "./AddFieldModal";
import "./styles.css";

interface ActionBarProps {
  templateName: string;
  createdAt: string;
  showAddFieldForm: boolean;
  showActionBar: boolean;
  defaultFields: string[];
  language: string; // Add language prop
  onAddCustomField: (
    name: string,
    placeholder: string,
    position: string
  ) => void;
  onToggleAddFieldForm: () => void;
  onSetTemplateName: (name: string) => void;
  onSave: () => void;
  onReset: () => void;
  onDownloadJson: () => void;
  onSetLanguage: (language: string) => void; // New callback
}

const ActionBar: React.FC<ActionBarProps> = ({
  templateName,
  createdAt,
  showAddFieldForm,
  showActionBar,
  defaultFields,
  language,
  onAddCustomField,
  onToggleAddFieldForm,
  onSetTemplateName,
  onSave,
  onReset,
  onDownloadJson,
  onSetLanguage,
}) => {
  return (
    <div className={`action-bar ${showActionBar ? "open" : ""}`}>
      <div>
        <h6>Create Email Template</h6>
        <input
          type="text"
          value={templateName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onSetTemplateName(e.target.value)
          }
          className="action-input"
          placeholder="Template Name"
        />
        <select
          value={language}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            onSetLanguage(e.target.value)
          }
          className="action-input" // Reuse styling
        >
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="catalan">Catalan</option>
        </select>
        <div className="timestamp">
          Created: {new Date(createdAt).toLocaleString()}
        </div>
        <button className="action-button" onClick={onToggleAddFieldForm}>
          Add Custom Field
        </button>
        {showAddFieldForm && (
          <AddFieldModal
            onAdd={onAddCustomField}
            onClose={onToggleAddFieldForm}
            existingFields={defaultFields}
          />
        )}
        <button className="action-button" onClick={onDownloadJson}>
          Download JSON
        </button>
      </div>
      <div className="bottom-buttons">
        <button className="action-button" onClick={onSave}>
          Save
        </button>
        <button className="action-button" onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default ActionBar;
