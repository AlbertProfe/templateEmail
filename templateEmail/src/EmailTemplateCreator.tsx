import React, { useState, useEffect, ChangeEvent } from "react";
import qrPlaceholder from "./assets/attachment_preview.png";
import AddFieldModal from "./AddFieldModal";

// Define types for template data and custom fields
interface TemplateData {
  logoUrl: string;
  header: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  qrInstruction: string;
  eventName: string;
  eventDate: string;
  eventLocation: string;
  eventDescription: string;
  footerText1: string;
  footerText2: string;
  [key: string]: string; // Allow dynamic custom fields
}

interface VisibilityState {
  logoUrl: boolean;
  header: boolean;
  contactName: boolean;
  contactEmail: boolean;
  contactPhone: boolean;
  qrInstruction: boolean;
  eventName: boolean;
  eventDate: boolean;
  eventLocation: boolean;
  eventDescription: boolean;
  footerText1: boolean;
  footerText2: boolean;
  [key: string]: boolean; // Allow dynamic custom fields
}

interface CustomField {
  name: string;
  placeholder: string;
  position: string; // Reference to the field it should appear before
}

const EmailTemplateCreator: React.FC = () => {
  const [templateData, setTemplateData] = useState<TemplateData>({
    logoUrl:
      "https://www.tailorbrands.com/wp-content/uploads/2021/05/nike-300x300.png",
    header: "You're Invited!",
    contactName: "John Doe",
    contactEmail: "john.doe@example.com",
    contactPhone: "+1 555-123-4567",
    qrInstruction: "Scan this QR code upon arrival.",
    eventName: "Primavera Sound 2025",
    eventDate: "May 30, 2025 00:00",
    eventLocation: "Parc del Fòrum, Barcelona",
    eventDescription:
      "One of Europe's biggest music festivals, featuring a diverse lineup of international artists.",
    footerText1: "This invitation is non-transferable.",
    footerText2: "© 2025 Invite2Me. All rights reserved.",
  });

  const [visibility, setVisibility] = useState<VisibilityState>({
    logoUrl: true,
    header: true,
    contactName: true,
    contactEmail: true,
    contactPhone: true,
    qrInstruction: true,
    eventName: true,
    eventDate: true,
    eventLocation: true,
    eventDescription: true,
    footerText1: true,
    footerText2: true,
  });

  const [customFields, setCustomFields] = useState<CustomField[]>([]);
  const [showAddFieldForm, setShowAddFieldForm] = useState(false); // Renamed for clarity

  // Hook to log or persist customFields whenever it changes
  useEffect(() => {
    console.log("Custom Fields Updated:", customFields);
    // Example: Save to localStorage (uncomment to use)
    // localStorage.setItem('customFields', JSON.stringify(customFields));
  }, [customFields]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTemplateData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleVisibility = (field: string) => {
    setVisibility((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const addCustomField = (
    name: string,
    placeholder: string,
    position: string
  ) => {
    const newField = { name, placeholder, position };
    setCustomFields((prev) => [...prev, newField]);
    setTemplateData((prev) => ({ ...prev, [name]: "" }));
    setVisibility((prev) => ({ ...prev, [name]: true }));
    setShowAddFieldForm(false);
  };

  // Define the order of default fields for positioning
  const defaultFields = [
    "logoUrl",
    "header",
    "contactName",
    "contactEmail",
    "contactPhone",
    "qrInstruction",
    "eventName",
    "eventDate",
    "eventLocation",
    "eventDescription",
    "footerText1",
    "footerText2",
  ];

  // Combine default and custom fields with positioning
  const allFields = [...defaultFields];
  customFields.forEach((field) => {
    const index = allFields.indexOf(field.position);
    if (index !== -1) {
      allFields.splice(index, 0, field.name);
    } else {
      allFields.push(field.name); // Fallback: append if position not found
    }
  });

  // Helper to render custom fields in the preview
  const renderCustomFieldsInSection = (sectionFields: string[]) => {
    return customFields
      .filter((cf) => sectionFields.includes(cf.position))
      .map((field) =>
        visibility[field.name] ? (
          <p key={field.name}>
            <strong>{field.name}:</strong>{" "}
            <span>{templateData[field.name]}</span>
          </p>
        ) : null
      );
  };

  return (
    <div style={styles.container}>
      {/* Left Panel: Editor */}
      <div style={styles.editorPanel}>
        <h2 style={styles.panelTitle}>Create Your Email Template</h2>
        <p style={styles.panelSubtitle}>Customize your invitation below.</p>
        <button
          style={styles.addFieldButton}
          onClick={() => setShowAddFieldForm(!showAddFieldForm)} // Toggle visibility
          title="Add Custom Field"
        >
          +
        </button>
        {showAddFieldForm && (
          <AddFieldModal
            onAdd={addCustomField}
            onClose={() => setShowAddFieldForm(false)}
            existingFields={defaultFields}
          />
        )}

        {allFields.map((fieldName) => {
          const customField = customFields.find((cf) => cf.name === fieldName);
          const isTextArea = fieldName === "eventDescription";
          return (
            <div key={fieldName} style={styles.inputGroup}>
              <label style={styles.label}>
                {customField
                  ? customField.name
                  : fieldName.replace(/([A-Z])/g, " $1").trim()}
              </label>
              <div style={styles.inputWithButton}>
                {isTextArea ? (
                  <textarea
                    name={fieldName}
                    value={templateData[fieldName]}
                    onChange={handleInputChange}
                    style={styles.textarea}
                    placeholder={
                      customField
                        ? customField.placeholder
                        : `Enter ${fieldName}`
                    }
                  />
                ) : (
                  <input
                    type="text"
                    name={fieldName}
                    value={templateData[fieldName]}
                    onChange={handleInputChange}
                    style={styles.input}
                    placeholder={
                      customField
                        ? customField.placeholder
                        : `Enter ${fieldName}`
                    }
                  />
                )}
                <button
                  onClick={() => toggleVisibility(fieldName)}
                  style={styles.toggleButton}
                  title={visibility[fieldName] ? "Hide" : "Show"}
                >
                  {visibility[fieldName] ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Panel: Preview */}
      <div style={styles.previewPanel}>
        <h2 style={styles.panelTitle}>Live Preview</h2>
        <div style={styles.emailPreview}>
          <div style={styles.header}>
            {visibility.logoUrl && (
              <img
                src={templateData.logoUrl}
                alt="Company Logo"
                style={styles.headerImg}
              />
            )}
            {visibility.header && (
              <h1 style={styles.headerText}>{templateData.header}</h1>
            )}
            {renderCustomFieldsInSection(["logoUrl", "header"])}
          </div>

          {(visibility.contactName ||
            visibility.contactEmail ||
            visibility.contactPhone) && (
            <div style={styles.contactDetails}>
              <h2 style={styles.sectionTitle}>Contact Information</h2>
              {visibility.contactName && (
                <p>
                  <strong>Name:</strong> <span>{templateData.contactName}</span>
                </p>
              )}
              {visibility.contactEmail && (
                <p>
                  <strong>Email:</strong>{" "}
                  <span>{templateData.contactEmail}</span>
                </p>
              )}
              {visibility.contactPhone && (
                <p>
                  <strong>Phone:</strong>{" "}
                  <span>{templateData.contactPhone}</span>
                </p>
              )}
              {renderCustomFieldsInSection([
                "contactName",
                "contactEmail",
                "contactPhone",
              ])}
            </div>
          )}

          {visibility.qrInstruction && (
            <div style={styles.qrCode}>
              <img
                src={qrPlaceholder}
                alt="QR Code Invitation"
                style={styles.qrImg}
              />
              <p>{templateData.qrInstruction}</p>
              {renderCustomFieldsInSection(["qrInstruction"])}
            </div>
          )}

          {(visibility.eventName ||
            visibility.eventDate ||
            visibility.eventLocation ||
            visibility.eventDescription) && (
            <div style={styles.eventDetails}>
              <h2 style={styles.sectionTitle}>Event Details</h2>
              {visibility.eventName && (
                <p>
                  <strong>Event:</strong> <span>{templateData.eventName}</span>
                </p>
              )}
              {visibility.eventDate && (
                <p>
                  <strong>Date:</strong> <span>{templateData.eventDate}</span>
                </p>
              )}
              {visibility.eventLocation && (
                <p>
                  <strong>Location:</strong>{" "}
                  <span>{templateData.eventLocation}</span>
                </p>
              )}
              {visibility.eventDescription && (
                <p>
                  <strong>Description:</strong>{" "}
                  <span>{templateData.eventDescription}</span>
                </p>
              )}
              {renderCustomFieldsInSection([
                "eventName",
                "eventDate",
                "eventLocation",
                "eventDescription",
              ])}
            </div>
          )}

          {(visibility.footerText1 ||
            visibility.footerText2 ||
            customFields.length > 0) && (
            <div style={styles.footer}>
              {visibility.footerText1 && <p>{templateData.footerText1}</p>}
              {visibility.footerText2 && <p>{templateData.footerText2}</p>}
              {renderCustomFieldsInSection(["footerText1", "footerText2"])}
            </div>
          )}
        </div>
        <button style={styles.saveButton}>Save Template</button>
      </div>
    </div>
  );
};

// Inline styles (unchanged)
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
    padding: "20px",
    gap: "20px",
    flexWrap: "wrap",
  },
  editorPanel: {
    flex: 1,
    minWidth: "300px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    overflowY: "auto",
  },
  previewPanel: {
    flex: 1,
    minWidth: "300px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  panelTitle: {
    fontSize: "24px",
    fontWeight: 600,
    marginBottom: "10px",
    color: "#333",
  },
  panelSubtitle: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "10px",
  },
  addFieldButton: {
    padding: "5px 10px",
    fontSize: "16px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "15px",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    fontSize: "14px",
    fontWeight: 500,
    color: "#444",
    marginBottom: "6px",
  },
  input: {
    width: "85%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    outline: "none",
    transition: "border-color 0.2s",
  },
  textarea: {
    width: "85%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    minHeight: "100px",
    resize: "vertical",
    outline: "none",
  },
  inputWithButton: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  toggleButton: {
    padding: "6px",
    fontSize: "16px",
    backgroundColor: "transparent",
    color: "#555",
    border: "none",
    cursor: "pointer",
    transition: "color 0.2s",
  },
  emailPreview: {
    width: "100%",
    maxWidth: "600px",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    color: "#333",
  },
  header: {
    textAlign: "center",
    paddingBottom: "20px",
    borderBottom: "2px solid #eee",
  },
  headerImg: {
    maxWidth: "200px",
    height: "auto",
  },
  headerText: {
    fontSize: "24px",
    margin: "10px 0 0",
  },
  contactDetails: {
    marginTop: "20px",
  },
  sectionTitle: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "10px",
  },
  qrCode: {
    textAlign: "center",
    margin: "30px 0",
  },
  qrImg: {
    maxWidth: "200px",
    height: "auto",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  eventDetails: {
    marginTop: "20px",
    paddingTop: "20px",
    borderTop: "1px solid #eee",
  },
  footer: {
    marginTop: "30px",
    textAlign: "center",
    color: "#777",
    fontSize: "0.8em",
  },
  saveButton: {
    padding: "12px 30px",
    fontSize: "16px",
    backgroundColor: "#2ecc71",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.2s",
    marginTop: "20px",
  },
};

export default EmailTemplateCreator;
