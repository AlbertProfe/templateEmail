import React, { ChangeEvent } from "react";
import "./styles.css";

interface EditorPanelProps {
  fields: { [key: string]: string };
  visibility: { [key: string]: boolean };
  customFields: { name: string; placeholder: string; position: string }[];
  defaultFields: string[];
  onInputChange: (field: string, value: string) => void;
  onToggleVisibility: (field: string) => void;
}

const EditorPanel: React.FC<EditorPanelProps> = ({
  fields,
  visibility,
  customFields,
  defaultFields,
  onInputChange,
  onToggleVisibility,
}) => {
  const allFields = [...defaultFields];
  customFields.forEach((field) => {
    const index = allFields.indexOf(field.position);
    if (index !== -1) allFields.splice(index, 0, field.name);
    else allFields.push(field.name);
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onInputChange(e.target.name, e.target.value);
  };

  return (
    <div className="editor-panel">
      <p className="panel-subtitle">Customize your invitation below.</p>
      {allFields.map((fieldName) => {
        const customField = customFields.find((cf) => cf.name === fieldName);
        const isTextArea = fieldName === "eventDescription";
        return (
          <div key={fieldName} className="input-group">
            <label className="label">
              {customField
                ? customField.name
                : fieldName.replace(/([A-Z])/g, " $1").trim()}
            </label>
            <div className="input-with-button">
              {isTextArea ? (
                <textarea
                  name={fieldName}
                  value={fields[fieldName]}
                  onChange={handleInputChange}
                  className="textarea"
                  placeholder={
                    customField ? customField.placeholder : `Enter ${fieldName}`
                  }
                />
              ) : (
                <input
                  type="text"
                  name={fieldName}
                  value={fields[fieldName]}
                  onChange={handleInputChange}
                  className="input"
                  placeholder={
                    customField ? customField.placeholder : `Enter ${fieldName}`
                  }
                />
              )}
              <button
                onClick={() => onToggleVisibility(fieldName)}
                className="toggle-button"
                title={visibility[fieldName] ? "Hide" : "Show"}
              >
                {visibility[fieldName] ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EditorPanel;
