# Template email

## Basic Create/Preview

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



## Custom Field child

To add a feature allowing users to create custom fields in the EmailTemplateCreator, we’ll:

1. Add a minimalist "Add Field" button above the editor inputs.

2. Create a child component (AddFieldModal) to handle the input for the new field’s details (name, placeholder, and position).

3. Use a modal-like approach for simplicity (though it could be a dropdown or inline form in a more polished UI).

4. Update the state to dynamically manage custom fields and their positions in the editor and preview.

Here’s the updated implementation with a child component:

Updated EmailTemplateCreator.tsx



```tsx
import React, { useState, ChangeEvent } from 'react';
import qrPlaceholder from './assets/attachment_preview.png';
import AddFieldModal from './AddFieldModal'; // New child component

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
    logoUrl: 'https://www.tailorbrands.com/wp-content/uploads/2021/05/nike-300x300.png',
    header: "You're Invited!",
    contactName: 'John Doe',
    contactEmail: 'john.doe@example.com',
    contactPhone: '+1 555-123-4567',
    qrInstruction: 'Scan this QR code upon arrival.',
    eventName: 'Primavera Sound 2025',
    eventDate: 'May 30, 2025 00:00',
    eventLocation: 'Parc del Fòrum, Barcelona',
    eventDescription:
      "One of Europe's biggest music festivals, featuring a diverse lineup of international artists.",
    footerText1: 'This invitation is non-transferable.',
    footerText2: '© 2025 Invite2Me. All rights reserved.',
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
  const [showAddFieldModal, setShowAddFieldModal] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTemplateData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleVisibility = (field: string) => {
    setVisibility((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const addCustomField = (name: string, placeholder: string, position: string) => {
    const newField = { name, placeholder, position };
    setCustomFields((prev) => [...prev, newField]);
    setTemplateData((prev) => ({ ...prev, [name]: '' })); // Add to template data with empty value
    setVisibility((prev) => ({ ...prev, [name]: true })); // Default to visible
    setShowAddFieldModal(false);
  };

  // Define the order of default fields for positioning
  const defaultFields = [
    'logoUrl',
    'header',
    'contactName',
    'contactEmail',
    'contactPhone',
    'qrInstruction',
    'eventName',
    'eventDate',
    'eventLocation',
    'eventDescription',
    'footerText1',
    'footerText2',
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

  return (
    <div style={styles.container}>
      {/* Left Panel: Editor */}
      <div style={styles.editorPanel}>
        <h2 style={styles.panelTitle}>Create Your Email Template</h2>
        <p style={styles.panelSubtitle}>Customize your invitation below.</p>
        <button
          style={styles.addFieldButton}
          onClick={() => setShowAddFieldModal(true)}
          title="Add Custom Field"
        >
          +
        </button>
        {showAddFieldModal && (
          <AddFieldModal
            onAdd={addCustomField}
            onClose={() => setShowAddFieldModal(false)}
            existingFields={defaultFields}
          />
        )}

        {allFields.map((fieldName) => {
          const customField = customFields.find((cf) => cf.name === fieldName);
          const isTextArea = fieldName === 'eventDescription';
          return (
            <div key={fieldName} style={styles.inputGroup}>
              <label style={styles.label}>
                {customField ? customField.name : fieldName.replace(/([A-Z])/g, ' $1').trim()}
              </label>
              <div style={styles.inputWithButton}>
                {isTextArea ? (
                  <textarea
                    name={fieldName}
                    value={templateData[fieldName]}
                    onChange={handleInputChange}
                    style={styles.textarea}
                    placeholder={customField ? customField.placeholder : `Enter ${fieldName}`}
                  />
                ) : (
                  <input
                    type="text"
                    name={fieldName}
                    value={templateData[fieldName]}
                    onChange={handleInputChange}
                    style={styles.input}
                    placeholder={customField ? customField.placeholder : `Enter ${fieldName}`}
                  />
                )}
                <button
                  onClick={() => toggleVisibility(fieldName)}
                  style={styles.toggleButton}
                  title={visibility[fieldName] ? 'Hide' : 'Show'}
                >
                  {visibility[fieldName] ? '👁️' : '👁️‍🗨️'}
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
              <img src={templateData.logoUrl} alt="Company Logo" style={styles.headerImg} />
            )}
            {visibility.header && <h1 style={styles.headerText}>{templateData.header}</h1>}
          </div>

          {(visibility.contactName || visibility.contactEmail || visibility.contactPhone) && (
            <div style={styles.contactDetails}>
              <h2 style={styles.sectionTitle}>Contact Information</h2>
              {visibility.contactName && (
                <p>
                  <strong>Name:</strong> <span>{templateData.contactName}</span>
                </p>
              )}
              {visibility.contactEmail && (
                <p>
                  <strong>Email:</strong> <span>{templateData.contactEmail}</span>
                </p>
              )}
              {visibility.contactPhone && (
                <p>
                  <strong>Phone:</strong> <span>{templateData.contactPhone}</span>
                </p>
              )}
            </div>
          )}

          {visibility.qrInstruction && (
            <div style={styles.qrCode}>
              <img src={qrPlaceholder} alt="QR Code Invitation" style={styles.qrImg} />
              <p>{templateData.qrInstruction}</p>
            </div>
          )}

          {(visibility.eventName || visibility.eventDate || visibility.eventLocation || visibility.eventDescription) && (
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
                  <strong>Location:</strong> <span>{templateData.eventLocation}</span>
                </p>
              )}
              {visibility.eventDescription && (
                <p>
                  <strong>Description:</strong> <span>{templateData.eventDescription}</span>
                </p>
              )}
            </div>
          )}

          {(visibility.footerText1 || visibility.footerText2 || customFields.length > 0) && (
            <div style={styles.footer}>
              {visibility.footerText1 && <p>{templateData.footerText1}</p>}
              {visibility.footerText2 && <p>{templateData.footerText2}</p>}
              {customFields.map((field) =>
                visibility[field.name] ? (
                  <p key={field.name}>
                    <strong>{field.name}:</strong> <span>{templateData[field.name]}</span>
                  </p>
                ) : null
              )}
            </div>
          )}
        </div>
        <button style={styles.saveButton}>Save Template</button>
      </div>
    </div>
  );
};

// Inline styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    gap: '20px',
    flexWrap: 'wrap',
  },
  editorPanel: {
    flex: 1,
    minWidth: '300px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    overflowY: 'auto',
  },
  previewPanel: {
    flex: 1,
    minWidth: '300px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  panelTitle: {
    fontSize: '24px',
    fontWeight: 600,
    marginBottom: '10px',
    color: '#333',
  },
  panelSubtitle: {
    fontSize: '14px',
    color: '#777',
    marginBottom: '10px',
  },
  addFieldButton: {
    padding: '5px 10px',
    fontSize: '16px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '15px',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: 500,
    color: '#444',
    marginBottom: '6px',
  },
  input: {
    width: '85%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  textarea: {
    width: '85%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    minHeight: '100px',
    resize: 'vertical',
    outline: 'none',
  },
  inputWithButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  toggleButton: {
    padding: '6px',
    fontSize: '16px',
    backgroundColor: 'transparent',
    color: '#555',
    border: 'none',
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
  emailPreview: {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    color: '#333',
  },
  header: {
    textAlign: 'center',
    paddingBottom: '20px',
    borderBottom: '2px solid #eee',
  },
  headerImg: {
    maxWidth: '200px',
    height: 'auto',
  },
  headerText: {
    fontSize: '24px',
    margin: '10px 0 0',
  },
  contactDetails: {
    marginTop: '20px',
  },
  sectionTitle: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '10px',
  },
  qrCode: {
    textAlign: 'center',
    margin: '30px 0',
  },
  qrImg: {
    maxWidth: '200px',
    height: 'auto',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  eventDetails: {
    marginTop: '20px',
    paddingTop: '20px',
    borderTop: '1px solid #eee',
  },
  footer: {
    marginTop: '30px',
    textAlign: 'center',
    color: '#777',
    fontSize: '0.8em',
  },
  saveButton: {
    padding: '12px 30px',
    fontSize: '16px',
    backgroundColor: '#2ecc71',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    marginTop: '20px',
  },
};

export default EmailTemplateCreator;
```

New Child Component: AddFieldModal.tsx



```tsx
import React, { useState, ChangeEvent } from 'react';

interface AddFieldModalProps {
  onAdd: (name: string, placeholder: string, position: string) => void;
  onClose: () => void;
  existingFields: string[];
}

const AddFieldModal: React.FC<AddFieldModalProps> = ({ onAdd, onClose, existingFields }) => {
  const [name, setName] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [position, setPosition] = useState(existingFields[0]); // Default to first field

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && placeholder) {
      onAdd(name, placeholder, position);
    }
  };

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.modal}>
        <h3 style={modalStyles.title}>Add New Field</h3>
        <form onSubmit={handleSubmit}>
          <div style={modalStyles.inputGroup}>
            <label style={modalStyles.label}>Field Name</label>
            <input
              type="text"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              style={modalStyles.input}
              placeholder="e.g., Special Note"
            />
          </div>
          <div style={modalStyles.inputGroup}>
            <label style={modalStyles.label}>Placeholder</label>
            <input
              type="text"
              value={placeholder}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPlaceholder(e.target.value)}
              style={modalStyles.input}
              placeholder="e.g., Enter special note"
            />
          </div>
          <div style={modalStyles.inputGroup}>
            <label style={modalStyles.label}>Position (Insert Before)</label>
            <select
              value={position}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setPosition(e.target.value)}
              style={modalStyles.input}
            >
              {existingFields.map((field) => (
                <option key={field} value={field}>
                  {field.replace(/([A-Z])/g, ' $1').trim()}
                </option>
              ))}
            </select>
          </div>
          <div style={modalStyles.buttonGroup}>
            <button type="submit" style={modalStyles.addButton}>
              Add
            </button>
            <button type="button" onClick={onClose} style={modalStyles.cancelButton}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const modalStyles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    width: '300px',
  },
  title: {
    fontSize: '18px',
    marginBottom: '15px',
    color: '#333',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: 500,
    color: '#444',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '14px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    outline: 'none',
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'flex-end',
  },
  addButton: {
    padding: '8px 15px',
    fontSize: '14px',
    backgroundColor: '#2ecc71',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  cancelButton: {
    padding: '8px 15px',
    fontSize: '14px',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default AddFieldModal;
```

Explanation of Changes

1. New State:
   
   - customFields: Tracks custom fields with name, placeholder, and position.
   
   - showAddFieldModal: Controls the visibility of the modal.

2. Add Field Button:
   
   - Added a minimalist + button above the inputs with addFieldButton style.
   
   - Clicking it opens the AddFieldModal.

3. Dynamic Fields:
   
   - allFields combines default fields and custom fields, inserting custom fields before their specified position.
   
   - The editor maps over allFields to render inputs dynamically.

4. Child Component (AddFieldModal):
   
   - A simple modal with inputs for name, placeholder, and a select for position.
   
   - The position dropdown lists all default fields for the user to choose where to insert the new field.
   
   - Submits the new field details to the parent via onAdd.

5. Preview Adjustments:
   
   - Custom fields are appended to the footer section for simplicity. In a more refined UI, you could group them based on position.

How It Works

- Click the + button above "Logo URL".

- A modal appears asking for:
  
  - Field Name: e.g., "Special Note".
  
  - Placeholder: e.g., "Enter special note".
  
  - Position: A dropdown to choose which field it appears before (e.g., "Contact Name").

- After submitting, the new field appears in the editor at the chosen position and in the preview (footer section).

Notes

- Position Logic: Custom fields are inserted before the selected field in the editor. In the preview, they’re added to the footer for simplicity—let me know if you want them positioned elsewhere (e.g., near their reference field).

- Styling: The + button is minimalist; you could replace it with an icon (e.g., ![➕](https://abs-0.twimg.com/emoji/v2/svg/2795.svg "Heavy plus sign")) or an SVG.

- Validation: Basic check for non-empty name and placeholder. Add more validation if needed.

## Removing modal

Let’s improve the EmailTemplateCreator by updating the AddFieldModal to appear directly under the "Add Field" button instead of as a centered overlay. The modal will only be visible when the user clicks the button and will be hidden otherwise. This creates a more seamless, inline experience.

Updated EmailTemplateCreator.tsx

tsx

```tsx
import React, { useState, useEffect, ChangeEvent } from 'react';
import qrPlaceholder from './assets/attachment_preview.png';
import AddFieldModal from './AddFieldModal';

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
    logoUrl: 'https://www.tailorbrands.com/wp-content/uploads/2021/05/nike-300x300.png',
    header: "You're Invited!",
    contactName: 'John Doe',
    contactEmail: 'john.doe@example.com',
    contactPhone: '+1 555-123-4567',
    qrInstruction: 'Scan this QR code upon arrival.',
    eventName: 'Primavera Sound 2025',
    eventDate: 'May 30, 2025 00:00',
    eventLocation: 'Parc del Fòrum, Barcelona',
    eventDescription:
      "One of Europe's biggest music festivals, featuring a diverse lineup of international artists.",
    footerText1: 'This invitation is non-transferable.',
    footerText2: '© 2025 Invite2Me. All rights reserved.',
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
    console.log('Custom Fields Updated:', customFields);
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

  const addCustomField = (name: string, placeholder: string, position: string) => {
    const newField = { name, placeholder, position };
    setCustomFields((prev) => [...prev, newField]);
    setTemplateData((prev) => ({ ...prev, [name]: '' }));
    setVisibility((prev) => ({ ...prev, [name]: true }));
    setShowAddFieldForm(false);
  };

  // Define the order of default fields for positioning
  const defaultFields = [
    'logoUrl',
    'header',
    'contactName',
    'contactEmail',
    'contactPhone',
    'qrInstruction',
    'eventName',
    'eventDate',
    'eventLocation',
    'eventDescription',
    'footerText1',
    'footerText2',
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
            <strong>{field.name}:</strong> <span>{templateData[field.name]}</span>
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
          const isTextArea = fieldName === 'eventDescription';
          return (
            <div key={fieldName} style={styles.inputGroup}>
              <label style={styles.label}>
                {customField ? customField.name : fieldName.replace(/([A-Z])/g, ' $1').trim()}
              </label>
              <div style={styles.inputWithButton}>
                {isTextArea ? (
                  <textarea
                    name={fieldName}
                    value={templateData[fieldName]}
                    onChange={handleInputChange}
                    style={styles.textarea}
                    placeholder={customField ? customField.placeholder : `Enter ${fieldName}`}
                  />
                ) : (
                  <input
                    type="text"
                    name={fieldName}
                    value={templateData[fieldName]}
                    onChange={handleInputChange}
                    style={styles.input}
                    placeholder={customField ? customField.placeholder : `Enter ${fieldName}`}
                  />
                )}
                <button
                  onClick={() => toggleVisibility(fieldName)}
                  style={styles.toggleButton}
                  title={visibility[fieldName] ? 'Hide' : 'Show'}
                >
                  {visibility[fieldName] ? '👁️' : '👁️‍🗨️'}
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
              <img src={templateData.logoUrl} alt="Company Logo" style={styles.headerImg} />
            )}
            {visibility.header && <h1 style={styles.headerText}>{templateData.header}</h1>}
            {renderCustomFieldsInSection(['logoUrl', 'header'])}
          </div>

          {(visibility.contactName || visibility.contactEmail || visibility.contactPhone) && (
            <div style={styles.contactDetails}>
              <h2 style={styles.sectionTitle}>Contact Information</h2>
              {visibility.contactName && (
                <p>
                  <strong>Name:</strong> <span>{templateData.contactName}</span>
                </p>
              )}
              {visibility.contactEmail && (
                <p>
                  <strong>Email:</strong> <span>{templateData.contactEmail}</span>
                </p>
              )}
              {visibility.contactPhone && (
                <p>
                  <strong>Phone:</strong> <span>{templateData.contactPhone}</span>
                </p>
              )}
              {renderCustomFieldsInSection(['contactName', 'contactEmail', 'contactPhone'])}
            </div>
          )}

          {visibility.qrInstruction && (
            <div style={styles.qrCode}>
              <img src={qrPlaceholder} alt="QR Code Invitation" style={styles.qrImg} />
              <p>{templateData.qrInstruction}</p>
              {renderCustomFieldsInSection(['qrInstruction'])}
            </div>
          )}

          {(visibility.eventName || visibility.eventDate || visibility.eventLocation || visibility.eventDescription) && (
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
                  <strong>Location:</strong> <span>{templateData.eventLocation}</span>
                </p>
              )}
              {visibility.eventDescription && (
                <p>
                  <strong>Description:</strong> <span>{templateData.eventDescription}</span>
                </p>
              )}
              {renderCustomFieldsInSection(['eventName', 'eventDate', 'eventLocation', 'eventDescription'])}
            </div>
          )}

          {(visibility.footerText1 || visibility.footerText2 || customFields.length > 0) && (
            <div style={styles.footer}>
              {visibility.footerText1 && <p>{templateData.footerText1}</p>}
              {visibility.footerText2 && <p>{templateData.footerText2}</p>}
              {renderCustomFieldsInSection(['footerText1', 'footerText2'])}
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
    display: 'flex',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    gap: '20px',
    flexWrap: 'wrap',
  },
  editorPanel: {
    flex: 1,
    minWidth: '300px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    overflowY: 'auto',
  },
  previewPanel: {
    flex: 1,
    minWidth: '300px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  panelTitle: {
    fontSize: '24px',
    fontWeight: 600,
    marginBottom: '10px',
    color: '#333',
  },
  panelSubtitle: {
    fontSize: '14px',
    color: '#777',
    marginBottom: '10px',
  },
  addFieldButton: {
    padding: '5px 10px',
    fontSize: '16px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '15px',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: 500,
    color: '#444',
    marginBottom: '6px',
  },
  input: {
    width: '85%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  textarea: {
    width: '85%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    minHeight: '100px',
    resize: 'vertical',
    outline: 'none',
  },
  inputWithButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  toggleButton: {
    padding: '6px',
    fontSize: '16px',
    backgroundColor: 'transparent',
    color: '#555',
    border: 'none',
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
  emailPreview: {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    color: '#333',
  },
  header: {
    textAlign: 'center',
    paddingBottom: '20px',
    borderBottom: '2px solid #eee',
  },
  headerImg: {
    maxWidth: '200px',
    height: 'auto',
  },
  headerText: {
    fontSize: '24px',
    margin: '10px 0 0',
  },
  contactDetails: {
    marginTop: '20px',
  },
  sectionTitle: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '10px',
  },
  qrCode: {
    textAlign: 'center',
    margin: '30px 0',
  },
  qrImg: {
    maxWidth: '200px',
    height: 'auto',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  eventDetails: {
    marginTop: '20px',
    paddingTop: '20px',
    borderTop: '1px solid #eee',
  },
  footer: {
    marginTop: '30px',
    textAlign: 'center',
    color: '#777',
    fontSize: '0.8em',
  },
  saveButton: {
    padding: '12px 30px',
    fontSize: '16px',
    backgroundColor: '#2ecc71',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    marginTop: '20px',
  },
};

export default EmailTemplateCreator;
```

Updated AddFieldModal.tsx

tsx

```tsx
import React, { useState, ChangeEvent } from 'react';

interface AddFieldModalProps {
  onAdd: (name: string, placeholder: string, position: string) => void;
  onClose: () => void;
  existingFields: string[];
}

const AddFieldModal: React.FC<AddFieldModalProps> = ({ onAdd, onClose, existingFields }) => {
  const [name, setName] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [position, setPosition] = useState(existingFields[0]); // Default to first field

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && placeholder) {
      onAdd(name, placeholder, position);
      setName(''); // Reset form
      setPlaceholder('');
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
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            style={modalStyles.input}
            placeholder="e.g., Special Note"
          />
        </div>
        <div style={modalStyles.inputGroup}>
          <label style={modalStyles.label}>Placeholder</label>
          <input
            type="text"
            value={placeholder}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPlaceholder(e.target.value)}
            style={modalStyles.input}
            placeholder="e.g., Enter special note"
          />
        </div>
        <div style={modalStyles.inputGroup}>
          <label style={modalStyles.label}>Position (Insert Before)</label>
          <select
            value={position}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setPosition(e.target.value)}
            style={modalStyles.input}
          >
            {existingFields.map((field) => (
              <option key={field} value={field}>
                {field.replace(/([A-Z])/g, ' $1').trim()}
              </option>
            ))}
          </select>
        </div>
        <div style={modalStyles.buttonGroup}>
          <button type="submit" style={modalStyles.addButton}>
            Add
          </button>
          <button type="button" onClick={onClose} style={modalStyles.cancelButton}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

const modalStyles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: '#f9f9f9',
    padding: '15px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: 500,
    color: '#444',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '14px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    outline: 'none',
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'flex-end',
  },
  addButton: {
    padding: '8px 15px',
    fontSize: '14px',
    backgroundColor: '#2ecc71',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  cancelButton: {
    padding: '8px 15px',
    fontSize: '14px',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default AddFieldModal;
```

Explanation of Changes

1. State Rename:
   
   - Renamed showAddFieldModal to showAddFieldForm for clarity, since it’s no longer a centered modal but an inline form.

2. Button Behavior:
   
   - The "Add Field" button now toggles showAddFieldForm with setShowAddFieldForm(!showAddFieldForm), allowing the user to show/hide the form with a single click.
   
   - When the form is hidden (false), nothing appears below the button.

3. Modal Positioning:
   
   - Removed the overlay and centered positioning from AddFieldModal.
   
   - Updated modalStyles.container to be an inline container with a light background (#f9f9f9), padding, and a subtle shadow, fitting naturally under the button.

4. Form Reset:
   
   - After adding a field, the form inputs reset to empty values, keeping it ready for the next addition.

5. Preview and Editor:
   
   - No changes needed here, as the custom fields are already handled dynamically via customFields and rendered appropriately.

How It Works

- Initial State: The "Add Field" button (+) is visible, but the form is hidden.

- Click the Button: The form appears directly below the button, with fields for "Field Name", "Placeholder", and "Position".

- Add a Field: Submit the form, and it adds the custom field, hides the form, and updates the editor/preview.

- Click Again: The form reappears if you want to add another field.

Example Flow

1. Click + → Form appears below the button.

2. Enter "VIP Code", "Enter VIP code", "contactName" → Click "Add".

3. Form hides, "VIP Code" appears in the editor before "Contact Name" and in the preview under "Contact Information".

4. Click + again to add more fields.

Notes

- Styling: The form now blends into the editor panel with a light background. Adjust modalStyles.container if you want a different look (e.g., border, more padding).

- Toggle Behavior: The button toggles the form’s visibility. If you prefer it to only show (and hide on "Add" or "Cancel" without toggling), change it to setShowAddFieldForm(true) and rely on onClose/onAdd to hide it.

- Persistence: The useEffect still logs customFields. Replace with your persistence logic if needed.
