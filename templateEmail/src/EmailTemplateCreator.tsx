import React, { useState, ChangeEvent } from "react";
import qrPlaceholder from "./assets/attachment_preview.png"; // Assuming the image is in src/assets/

// Define the type for the template data
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
}

// Define the type for visibility toggles
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

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTemplateData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleVisibility = (field: keyof VisibilityState) => {
    setVisibility((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div style={styles.container}>
      {/* Left Panel: Editor */}
      <div style={styles.editorPanel}>
        <h2 style={styles.panelTitle}>Create Your Email Template</h2>
        <p style={styles.panelSubtitle}>Customize your invitation below.</p>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Logo URL</label>
          <div style={styles.inputWithButton}>
            <input
              type="text"
              name="logoUrl"
              value={templateData.logoUrl}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="Enter logo URL"
            />
            <button
              onClick={() => toggleVisibility("logoUrl")}
              style={visibility.logoUrl ? styles.hideButton : styles.showButton}
            >
              {visibility.logoUrl ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Header</label>
          <div style={styles.inputWithButton}>
            <input
              type="text"
              name="header"
              value={templateData.header}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="Enter header"
            />
            <button
              onClick={() => toggleVisibility("header")}
              style={visibility.header ? styles.hideButton : styles.showButton}
            >
              {visibility.header ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Contact Name</label>
          <div style={styles.inputWithButton}>
            <input
              type="text"
              name="contactName"
              value={templateData.contactName}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="Enter contact name"
            />
            <button
              onClick={() => toggleVisibility("contactName")}
              style={
                visibility.contactName ? styles.hideButton : styles.showButton
              }
            >
              {visibility.contactName ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Contact Email</label>
          <div style={styles.inputWithButton}>
            <input
              type="email"
              name="contactEmail"
              value={templateData.contactEmail}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="Enter contact email"
            />
            <button
              onClick={() => toggleVisibility("contactEmail")}
              style={
                visibility.contactEmail ? styles.hideButton : styles.showButton
              }
            >
              {visibility.contactEmail ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Contact Phone</label>
          <div style={styles.inputWithButton}>
            <input
              type="text"
              name="contactPhone"
              value={templateData.contactPhone}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="Enter contact phone"
            />
            <button
              onClick={() => toggleVisibility("contactPhone")}
              style={
                visibility.contactPhone ? styles.hideButton : styles.showButton
              }
            >
              {visibility.contactPhone ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>QR Instruction</label>
          <div style={styles.inputWithButton}>
            <input
              type="text"
              name="qrInstruction"
              value={templateData.qrInstruction}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="Enter QR instruction"
            />
            <button
              onClick={() => toggleVisibility("qrInstruction")}
              style={
                visibility.qrInstruction ? styles.hideButton : styles.showButton
              }
            >
              {visibility.qrInstruction ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Event Name</label>
          <div style={styles.inputWithButton}>
            <input
              type="text"
              name="eventName"
              value={templateData.eventName}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="Enter event name"
            />
            <button
              onClick={() => toggleVisibility("eventName")}
              style={
                visibility.eventName ? styles.hideButton : styles.showButton
              }
            >
              {visibility.eventName ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Event Date</label>
          <div style={styles.inputWithButton}>
            <input
              type="text"
              name="eventDate"
              value={templateData.eventDate}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="Enter event date"
            />
            <button
              onClick={() => toggleVisibility("eventDate")}
              style={
                visibility.eventDate ? styles.hideButton : styles.showButton
              }
            >
              {visibility.eventDate ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Event Location</label>
          <div style={styles.inputWithButton}>
            <input
              type="text"
              name="eventLocation"
              value={templateData.eventLocation}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="Enter event location"
            />
            <button
              onClick={() => toggleVisibility("eventLocation")}
              style={
                visibility.eventLocation ? styles.hideButton : styles.showButton
              }
            >
              {visibility.eventLocation ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Event Description</label>
          <div style={styles.inputWithButton}>
            <textarea
              name="eventDescription"
              value={templateData.eventDescription}
              onChange={handleInputChange}
              style={styles.textarea}
              placeholder="Enter event description"
            />
            <button
              onClick={() => toggleVisibility("eventDescription")}
              style={
                visibility.eventDescription
                  ? styles.hideButton
                  : styles.showButton
              }
            >
              {visibility.eventDescription ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Footer Line 1</label>
          <div style={styles.inputWithButton}>
            <input
              type="text"
              name="footerText1"
              value={templateData.footerText1}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="Enter footer text 1"
            />
            <button
              onClick={() => toggleVisibility("footerText1")}
              style={
                visibility.footerText1 ? styles.hideButton : styles.showButton
              }
            >
              {visibility.footerText1 ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Footer Line 2</label>
          <div style={styles.inputWithButton}>
            <input
              type="text"
              name="footerText2"
              value={templateData.footerText2}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="Enter footer text 2"
            />
            <button
              onClick={() => toggleVisibility("footerText2")}
              style={
                visibility.footerText2 ? styles.hideButton : styles.showButton
              }
            >
              {visibility.footerText2 ? "Hide" : "Show"}
            </button>
          </div>
        </div>
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
            </div>
          )}

          {visibility.qrInstruction && (
            <div style={styles.qrCode}>
              <img
                src={qrPlaceholder}
                alt="QR Code Invitation"
                style={styles.qrImg}
              />
              {visibility.qrInstruction && <p>{templateData.qrInstruction}</p>}
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
            </div>
          )}

          {(visibility.footerText1 || visibility.footerText2) && (
            <div style={styles.footer}>
              {visibility.footerText1 && <p>{templateData.footerText1}</p>}
              {visibility.footerText2 && <p>{templateData.footerText2}</p>}
            </div>
          )}
        </div>
        <button style={styles.saveButton}>Save Template</button>
      </div>
    </div>
  );
};

// Inline styles typed as React.CSSProperties
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
    marginBottom: "20px",
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
    width: "70%", // Adjusted to make room for the button
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    outline: "none",
    transition: "border-color 0.2s",
  },
  textarea: {
    width: "70%", // Adjusted to make room for the button
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
    gap: "10px",
  },
  hideButton: {
    padding: "8px 12px",
    fontSize: "14px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  showButton: {
    padding: "8px 12px",
    fontSize: "14px",
    backgroundColor: "#2ecc71",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.2s",
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
