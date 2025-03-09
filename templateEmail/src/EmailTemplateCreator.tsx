import React, { useState, ChangeEvent } from "react";

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

  // Typed event handler for input changes
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTemplateData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div style={styles.container}>
      {/* Left Panel: Editor */}
      <div style={styles.editorPanel}>
        <h2 style={styles.panelTitle}>Create Your Email Template</h2>
        <p style={styles.panelSubtitle}>Customize your invitation below.</p>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Logo URL</label>
          <input
            type="text"
            name="logoUrl"
            value={templateData.logoUrl}
            onChange={handleInputChange}
            style={styles.input}
            placeholder="Enter logo URL"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Header</label>
          <input
            type="text"
            name="header"
            value={templateData.header}
            onChange={handleInputChange}
            style={styles.input}
            placeholder="Enter header"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Contact Name</label>
          <input
            type="text"
            name="contactName"
            value={templateData.contactName}
            onChange={handleInputChange}
            style={styles.input}
            placeholder="Enter contact name"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Contact Email</label>
          <input
            type="email"
            name="contactEmail"
            value={templateData.contactEmail}
            onChange={handleInputChange}
            style={styles.input}
            placeholder="Enter contact email"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Contact Phone</label>
          <input
            type="text"
            name="contactPhone"
            value={templateData.contactPhone}
            onChange={handleInputChange}
            style={styles.input}
            placeholder="Enter contact phone"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>QR Instruction</label>
          <input
            type="text"
            name="qrInstruction"
            value={templateData.qrInstruction}
            onChange={handleInputChange}
            style={styles.input}
            placeholder="Enter QR instruction"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Event Name</label>
          <input
            type="text"
            name="eventName"
            value={templateData.eventName}
            onChange={handleInputChange}
            style={styles.input}
            placeholder="Enter event name"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Event Date</label>
          <input
            type="text"
            name="eventDate"
            value={templateData.eventDate}
            onChange={handleInputChange}
            style={styles.input}
            placeholder="Enter event date"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Event Location</label>
          <input
            type="text"
            name="eventLocation"
            value={templateData.eventLocation}
            onChange={handleInputChange}
            style={styles.input}
            placeholder="Enter event location"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Event Description</label>
          <textarea
            name="eventDescription"
            value={templateData.eventDescription}
            onChange={handleInputChange}
            style={styles.textarea}
            placeholder="Enter event description"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Footer Line 1</label>
          <input
            type="text"
            name="footerText1"
            value={templateData.footerText1}
            onChange={handleInputChange}
            style={styles.input}
            placeholder="Enter footer text 1"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Footer Line 2</label>
          <input
            type="text"
            name="footerText2"
            value={templateData.footerText2}
            onChange={handleInputChange}
            style={styles.input}
            placeholder="Enter footer text 2"
          />
        </div>
      </div>

      {/* Right Panel: Preview */}
      <div style={styles.previewPanel}>
        <h2 style={styles.panelTitle}>Live Preview</h2>
        <div style={styles.emailPreview}>
          <div style={styles.header}>
            <img
              src={templateData.logoUrl}
              alt="Company Logo"
              style={styles.headerImg}
            />
            <h1 style={styles.headerText}>{templateData.header}</h1>
          </div>

          <div style={styles.contactDetails}>
            <h2 style={styles.sectionTitle}>Contact Information</h2>
            <p>
              <strong>Name:</strong> <span>{templateData.contactName}</span>
            </p>
            <p>
              <strong>Email:</strong> <span>{templateData.contactEmail}</span>
            </p>
            <p>
              <strong>Phone:</strong> <span>{templateData.contactPhone}</span>
            </p>
          </div>

          <div style={styles.qrCode}>
            <img
              src="/assets/attachment_preview.png"
              alt="QR Code Invitation"
              style={styles.qrImg}
            />
            <p>{templateData.qrInstruction}</p>
          </div>

          <div style={styles.eventDetails}>
            <h2 style={styles.sectionTitle}>Event Details</h2>
            <p>
              <strong>Event:</strong> <span>{templateData.eventName}</span>
            </p>
            <p>
              <strong>Date:</strong> <span>{templateData.eventDate}</span>
            </p>
            <p>
              <strong>Location:</strong>{" "}
              <span>{templateData.eventLocation}</span>
            </p>
            <p>
              <strong>Description:</strong>{" "}
              <span>{templateData.eventDescription}</span>
            </p>
          </div>

          <div style={styles.footer}>
            <p>{templateData.footerText1}</p>
            <p>{templateData.footerText2}</p>
          </div>
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
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    outline: "none",
    transition: "border-color 0.2s",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    minHeight: "100px",
    resize: "vertical",
    outline: "none",
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
