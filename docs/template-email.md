# Template email

Let’s design a clean, intuitive, and user-friendly React view for creating an email template with a QR code invitation. The focus will be on a modern UI/UX that guides the user effortlessly through the template creation process. Below is a detailed React component with inline CSS (for simplicity), but you could easily adapt this to Tailwind CSS, Material-UI, or any CSS-in-JS solution.

Key UI/UX Goals:

1. Simplicity: Clear sections, minimal clutter, and a step-by-step feel without overwhelming the user.

2. Visual Feedback: Real-time preview of the template as the user builds it.

3. Accessibility: Readable fonts, high contrast, and logical tab order.

4. Responsiveness: Works well on desktop and mobile.

5. Delight: Subtle animations and a polished look to make it enjoyable.

<mark>React Component: EmailTemplateCreator</mark>

```jsx
import React, { useState } from 'react';

const EmailTemplateCreator = () => {
  const [templateData, setTemplateData] = useState({
    header: 'Join Us for an Exclusive Event!',
    subheader: 'We can’t wait to see you there.',
    body: 'You’re invited to our special event. Scan the QR code below to RSVP!',
    buttonText: 'RSVP Now',
    footer: 'Event Date: March 20, 2025 | Location: xAI Headquarters',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTemplateData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div style={styles.container}>
      {/* Left Panel: Input Form */}
      <div style={styles.editorPanel}>
        <h2 style={styles.panelTitle}>Create Your Email Template</h2>
        <p style={styles.panelSubtitle}>Customize your invitation below.</p>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Header</label>
          <input
            type="text"
            name="header"
            value={templateData.header}
            onChange={handleInputChange}
            style={styles.input}
            placeholder="Enter your header"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Subheader</label>
          <input
            type="text"
            name="subheader"
            value={templateData.subheader}
            onChange={handleInputChange}
            style={styles.input}
            placeholder="Enter your subheader"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Body Text</label>
          <textarea
            name="body"
            value={templateData.body}
            onChange={handleInputChange}
            style={styles.textarea}
            placeholder="Enter the main message"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Button Text</label>
          <input
            type="text"
            name="buttonText"
            value={templateData.buttonText}
            onChange={handleInputChange}
            style={styles.input}
            placeholder="Enter button text"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Footer</label>
          <input
            type="text"
            name="footer"
            value={templateData.footer}
            onChange={handleInputChange}
            style={styles.input}
            placeholder="Enter footer details"
          />
        </div>
      </div>

      {/* Right Panel: Live Preview */}
      <div style={styles.previewPanel}>
        <h2 style={styles.panelTitle}>Live Preview</h2>
        <div style={styles.emailPreview}>
          <div style={styles.emailHeader}>{templateData.header}</div>
          <div style={styles.emailSubheader}>{templateData.subheader}</div>
          <div style={styles.emailBody}>{templateData.body}</div>
          <div style={styles.qrPlaceholder}>[QR Code Placeholder]</div>
          <button style={styles.emailButton}>{templateData.buttonText}</button>
          <div style={styles.emailFooter}>{templateData.footer}</div>
        </div>
        <button style={styles.saveButton}>Save Template</button>
      </div>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    fontFamily: "'Arial', sans-serif",
    backgroundColor: '#f5f7fa',
    padding: '20px',
    gap: '20px',
    flexWrap: 'wrap', // Responsive for smaller screens
  },
  editorPanel: {
    flex: 1,
    minWidth: '300px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    overflowY: 'auto',
  },
  previewPanel: {
    flex: 1,
    minWidth: '300px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  panelTitle: {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#333',
  },
  panelSubtitle: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '20px',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#444',
    marginBottom: '6px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    minHeight: '100px',
    resize: 'vertical',
    outline: 'none',
  },
  emailPreview: {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#fafafa',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    textAlign: 'center',
    marginBottom: '20px',
  },
  emailHeader: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '10px',
  },
  emailSubheader: {
    fontSize: '16px',
    color: '#7f8c8d',
    marginBottom: '15px',
  },
  emailBody: {
    fontSize: '16px',
    color: '#34495e',
    marginBottom: '20px',
  },
  qrPlaceholder: {
    width: '100px',
    height: '100px',
    backgroundColor: '#ddd',
    margin: '0 auto 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    color: '#777',
    borderRadius: '8px',
  },
  emailButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  emailFooter: {
    fontSize: '12px',
    color: '#95a5a6',
    marginTop: '20px',
  },
  saveButton: {
    padding: '12px 30px',
    fontSize: '16px',
    backgroundColor: '#2ecc71',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
};

// Hover effects (add these via CSS if not using inline styles)
const hoverStyles = `
  input:focus, textarea:focus {
    border-color: #3498db;
  }
  button:hover {
    opacity: 0.9;
  }
`;

export default EmailTemplateCreator;
```

Explanation of the Design:

1. Layout:
   
   - A two-column layout: the left side for editing, the right side for a live preview.
   
   - Responsive with flexWrap: 'wrap' so it stacks on mobile.

2. Editor Panel:
   
   - Clean input fields with labels for each section of the email (header, subheader, body, button, footer).
   
   - Textarea for the body to allow more text input.
   
   - Subtle shadows and rounded corners for a modern look.

3. Preview Panel:
   
   - Mimics an email layout with a centered, card-like design.
   
   - Placeholder for the QR code (since we’re not generating it here).
   
   - Real-time updates as the user types, providing instant feedback.

4. Styling:
   
   - Neutral, professional color palette (#f5f7fa, #3498db, #2ecc71) with good contrast.
   
   - Smooth transitions for interactive elements (inputs, buttons).
   
   - Consistent spacing and typography for readability.

5. UX Enhancements:
   
   - Labels above inputs for clarity.
   
   - A prominent “Save Template” button to signal completion.
   
   - Placeholder text to guide users on what to enter.

How to Use:

- Drop this component into your React app (e.g., in App.js).

- Run it with npm start if using Create React App.

- Customize the styles further with a CSS framework or your design system.
