# Template email

## Basic Create/Preview

> Let’s design a clean, intuitive, and user-friendly React view for creating an email template with a QR code invitation. The focus will be on a modern UI/UX that guides the user effortlessly through the template creation process. Below is a detailed React component with inline CSS (for simplicity), but you could easily adapt this to Tailwind CSS, Material-UI, or any CSS-in-JS solution.

Key UI/UX Goals:

1. Simplicity: Clear sections, minimal clutter, and a step-by-step feel without overwhelming the user.

2. Visual Feedback: Real-time preview of the template as the user builds it.

3. Accessibility: Readable fonts, high contrast, and logical tab order.

4. Responsiveness: Works well on desktop and mobile.

5. Delight: Subtle animations and a polished look to make it enjoyable.

##### React Component: `EmailTemplateCreator.tsx`

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

##### Updated `EmailTemplateCreator.tsx`

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

##### New Child Component: `AddFieldModal.tsx`

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

</details>

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

- Styling: The + button is minimalist; you could replace it with an icon or an SVG.

- Validation: Basic check for non-empty name and placeholder. Add more validation if needed.

## Removing modal

Let’s improve the EmailTemplateCreator by updating the AddFieldModal to appear directly under the "Add Field" button instead of as a centered overlay. The modal will only be visible when the user clicks the button and will be hidden otherwise. This creates a more seamless, inline experience.

##### Updated `EmailTemplateCreator.tsx`

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

##### Updated `AddFieldModal.tsx`

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

## Adding Action Bar

> Let’s implement the new feature set for EmailTemplateCreator with a right sidebar (Action Bar) using a hamburger menu to toggle visibility, moving the "Add Custom Field" and "Save" buttons there, adding a "Reset" button, including a templateName input, and a timestamp for creation time. We’ll manage state with useReducer, move CSS to an external file, and keep everything vanilla React and CSS without external libraries.

##### Project Structure

```text
src/
├── EmailTemplateCreator.tsx
├── AddFieldModal.tsx
├── styles.css
├── App.tsx
└── main.tsx
```

Step 1: styles.css

##### Create src/styles.css for all styles:

```css
/* General Container */
.container {
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  padding: 20px;
  gap: 20px;
  flex-wrap: wrap;
}

/* Editor Panel */
.editor-panel {
  flex: 1;
  min-width: 300px;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}

/* Preview Panel */
.preview-panel {
  flex: 1;
  min-width: 300px;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Action Bar (Sidebar) */
.action-bar {
  position: fixed;
  top: 0;
  right: -300px; /* Hidden by default */
  width: 300px;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: right 0.3s ease;
  z-index: 1000;
}

.action-bar.open {
  right: 0; /* Visible when open */
}

.hamburger {
  position: fixed;
  top: 20px;
  right: 20px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
}

/* Common Styles */
.panel-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
}

.panel-subtitle {
  font-size: 14px;
  color: #777;
  margin-bottom: 10px;
}

.input-group {
  margin-bottom: 20px;
}

.label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #444;
  margin-bottom: 6px;
}

.input {
  width: 85%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
  outline: none;
  transition: border-color 0.2s;
}

.textarea {
  width: 85%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
  min-height: 100px;
  resize: vertical;
  outline: none;
}

.input-with-button {
  display: flex;
  align-items: center;
  gap: 8px;
}

.toggle-button {
  padding: 6px;
  font-size: 16px;
  background-color: transparent;
  color: #555;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
}

/* Action Bar Buttons */
.action-button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: 2px solid #333;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 15px;
  transition: background-color 0.2s, color 0.2s;
}

.action-button:hover {
  background-color: #333;
  color: #fff;
}

.action-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-bottom: 15px;
  outline: none;
}

.timestamp {
  font-size: 12px;
  color: #777;
  margin-bottom: 15px;
}

/* Preview Styles */
.email-preview {
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #333;
}

.header {
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #eee;
}

.header-img {
  max-width: 200px;
  height: auto;
}

.header-text {
  font-size: 24px;
  margin: 10px 0 0;
}

.contact-details {
  margin-top: 20px;
}

.section-title {
  font-size: 18px;
  color: #555;
  margin-bottom: 10px;
}

.qr-code {
  text-align: center;
  margin: 30px 0;
}

.qr-img {
  max-width: 200px;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.event-details {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.footer {
  margin-top: 30px;
  text-align: center;
  color: #777;
  font-size: 0.8em;
}

/* AddFieldModal Styles */
.add-field-form {
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.add-field-input {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ddd;
  outline: none;
  margin-bottom: 10px;
}

.add-field-button-group {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

.add-field-button {
  padding: 8px 15px;
  font-size: 14px;
  background-color: #2ecc71;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-field-cancel-button {
  padding: 8px 15px;
  font-size: 14px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
```

##### Step 2: `EmailTemplateCreator.tsx` with useReducer

```tsx
import React, { useReducer, ChangeEvent } from 'react';
import qrPlaceholder from './assets/attachment_preview.png';
import AddFieldModal from './AddFieldModal';
import './styles.css';

// Define types
interface CustomField {
  name: string;
  placeholder: string;
  position: string;
}

interface TemplateState {
  templateName: string;
  createdAt: string;
  fields: { [key: string]: string };
  visibility: { [key: string]: boolean };
  customFields: CustomField[];
  showAddFieldForm: boolean;
  showActionBar: boolean;
}

type Action =
  | { type: 'UPDATE_FIELD'; field: string; value: string }
  | { type: 'TOGGLE_VISIBILITY'; field: string }
  | { type: 'ADD_CUSTOM_FIELD'; name: string; placeholder: string; position: string }
  | { type: 'TOGGLE_ADD_FIELD_FORM' }
  | { type: 'TOGGLE_ACTION_BAR' }
  | { type: 'SET_TEMPLATE_NAME'; name: string }
  | { type: 'RESET' };

// Initial state
const initialState: TemplateState = {
  templateName: 'Untitled Template',
  createdAt: new Date().toISOString(),
  fields: {
    logoUrl: 'https://www.tailorbrands.com/wp-content/uploads/2021/05/nike-300x300.png',
    header: "You're Invited!",
    contactName: 'John Doe',
    contactEmail: 'john.doe@example.com',
    contactPhone: '+1 555-123-4567',
    qrInstruction: 'Scan this QR code upon arrival.',
    eventName: 'Primavera Sound 2025',
    eventDate: 'May 30, 2025 00:00',
    eventLocation: 'Parc del Fòrum, Barcelona',
    eventDescription: "One of Europe's biggest music festivals...",
    footerText1: 'This invitation is non-transferable.',
    footerText2: '© 2025 Invite2Me. All rights reserved.',
  },
  visibility: {
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
  },
  customFields: [],
  showAddFieldForm: false,
  showActionBar: false,
};

// Reducer
const reducer = (state: TemplateState, action: Action): TemplateState => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        fields: { ...state.fields, [action.field]: action.value },
      };
    case 'TOGGLE_VISIBILITY':
      return {
        ...state,
        visibility: { ...state.visibility, [action.field]: !state.visibility[action.field] },
      };
    case 'ADD_CUSTOM_FIELD':
      const newField = { name: action.name, placeholder: action.placeholder, position: action.position };
      return {
        ...state,
        customFields: [...state.customFields, newField],
        fields: { ...state.fields, [action.name]: '' },
        visibility: { ...state.visibility, [action.name]: true },
        showAddFieldForm: false,
      };
    case 'TOGGLE_ADD_FIELD_FORM':
      return { ...state, showAddFieldForm: !state.showAddFieldForm };
    case 'TOGGLE_ACTION_BAR':
      return { ...state, showActionBar: !state.showActionBar };
    case 'SET_TEMPLATE_NAME':
      return { ...state, templateName: action.name };
    case 'RESET':
      return { ...initialState, createdAt: new Date().toISOString() };
    default:
      return state;
  }
};

const EmailTemplateCreator: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({ type: 'UPDATE_FIELD', field: e.target.name, value: e.target.value });
  };

  const toggleVisibility = (field: string) => {
    dispatch({ type: 'TOGGLE_VISIBILITY', field });
  };

  const addCustomField = (name: string, placeholder: string, position: string) => {
    dispatch({ type: 'ADD_CUSTOM_FIELD', name, placeholder, position });
  };

  const defaultFields = [
    'logoUrl', 'header', 'contactName', 'contactEmail', 'contactPhone', 'qrInstruction',
    'eventName', 'eventDate', 'eventLocation', 'eventDescription', 'footerText1', 'footerText2',
  ];

  const allFields = [...defaultFields];
  state.customFields.forEach((field) => {
    const index = allFields.indexOf(field.position);
    if (index !== -1) allFields.splice(index, 0, field.name);
    else allFields.push(field.name);
  });

  const renderCustomFieldsInSection = (sectionFields: string[]) => {
    return state.customFields
      .filter((cf) => sectionFields.includes(cf.position))
      .map((field) =>
        state.visibility[field.name] ? (
          <p key={field.name}>
            <strong>{field.name}:</strong> <span>{state.fields[field.name]}</span>
          </p>
        ) : null
      );
  };

  return (
    <div className="container">
      {/* Hamburger Button */}
      <button
        className="hamburger"
        onClick={() => dispatch({ type: 'TOGGLE_ACTION_BAR' })}
      >
        ☰
      </button>

      {/* Editor Panel */}
      <div className="editor-panel">
        <h2 className="panel-title">Create Your Email Template</h2>
        <p className="panel-subtitle">Customize your invitation below.</p>

        {allFields.map((fieldName) => {
          const customField = state.customFields.find((cf) => cf.name === fieldName);
          const isTextArea = fieldName === 'eventDescription';
          return (
            <div key={fieldName} className="input-group">
              <label className="label">
                {customField ? customField.name : fieldName.replace(/([A-Z])/g, ' $1').trim()}
              </label>
              <div className="input-with-button">
                {isTextArea ? (
                  <textarea
                    name={fieldName}
                    value={state.fields[fieldName]}
                    onChange={handleInputChange}
                    className="textarea"
                    placeholder={customField ? customField.placeholder : `Enter ${fieldName}`}
                  />
                ) : (
                  <input
                    type="text"
                    name={fieldName}
                    value={state.fields[fieldName]}
                    onChange={handleInputChange}
                    className="input"
                    placeholder={customField ? customField.placeholder : `Enter ${fieldName}`}
                  />
                )}
                <button
                  onClick={() => toggleVisibility(fieldName)}
                  className="toggle-button"
                  title={state.visibility[fieldName] ? 'Hide' : 'Show'}
                >
                  {state.visibility[fieldName] ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Preview Panel */}
      <div className="preview-panel">
        <h2 className="panel-title">Live Preview</h2>
        <div className="email-preview">
          <div className="header">
            {state.visibility.logoUrl && (
              <img src={state.fields.logoUrl} alt="Company Logo" className="header-img" />
            )}
            {state.visibility.header && <h1 className="header-text">{state.fields.header}</h1>}
            {renderCustomFieldsInSection(['logoUrl', 'header'])}
          </div>

          {(state.visibility.contactName || state.visibility.contactEmail || state.visibility.contactPhone) && (
            <div className="contact-details">
              <h2 className="section-title">Contact Information</h2>
              {state.visibility.contactName && (
                <p><strong>Name:</strong> <span>{state.fields.contactName}</span></p>
              )}
              {state.visibility.contactEmail && (
                <p><strong>Email:</strong> <span>{state.fields.contactEmail}</span></p>
              )}
              {state.visibility.contactPhone && (
                <p><strong>Phone:</strong> <span>{state.fields.contactPhone}</span></p>
              )}
              {renderCustomFieldsInSection(['contactName', 'contactEmail', 'contactPhone'])}
            </div>
          )}

          {state.visibility.qrInstruction && (
            <div className="qr-code">
              <img src={qrPlaceholder} alt="QR Code Invitation" className="qr-img" />
              <p>{state.fields.qrInstruction}</p>
              {renderCustomFieldsInSection(['qrInstruction'])}
            </div>
          )}

          {(state.visibility.eventName || state.visibility.eventDate || state.visibility.eventLocation || state.visibility.eventDescription) && (
            <div className="event-details">
              <h2 className="section-title">Event Details</h2>
              {state.visibility.eventName && (
                <p><strong>Event:</strong> <span>{state.fields.eventName}</span></p>
              )}
              {state.visibility.eventDate && (
                <p><strong>Date:</strong> <span>{state.fields.eventDate}</span></p>
              )}
              {state.visibility.eventLocation && (
                <p><strong>Location:</strong> <span>{state.fields.eventLocation}</span></p>
              )}
              {state.visibility.eventDescription && (
                <p><strong>Description:</strong> <span>{state.fields.eventDescription}</span></p>
              )}
              {renderCustomFieldsInSection(['eventName', 'eventDate', 'eventLocation', 'eventDescription'])}
            </div>
          )}

          {(state.visibility.footerText1 || state.visibility.footerText2 || state.customFields.length > 0) && (
            <div className="footer">
              {state.visibility.footerText1 && <p>{state.fields.footerText1}</p>}
              {state.visibility.footerText2 && <p>{state.fields.footerText2}</p>}
              {renderCustomFieldsInSection(['footerText1', 'footerText2'])}
            </div>
          )}
        </div>
      </div>

      {/* Action Bar */}
      <div className={`action-bar ${state.showActionBar ? 'open' : ''}`}>
        <h3 className="panel-title">Actions</h3>
        <input
          type="text"
          value={state.templateName}
          onChange={(e) => dispatch({ type: 'SET_TEMPLATE_NAME', name: e.target.value })}
          className="action-input"
          placeholder="Template Name"
        />
        <div className="timestamp">Created: {new Date(state.createdAt).toLocaleString()}</div>
        <button
          className="action-button"
          onClick={() => dispatch({ type: 'TOGGLE_ADD_FIELD_FORM' })}
        >
          Add Custom Field
        </button>
        {state.showAddFieldForm && (
          <AddFieldModal
            onAdd={addCustomField}
            onClose={() => dispatch({ type: 'TOGGLE_ADD_FIELD_FORM' })}
            existingFields={defaultFields}
          />
        )}
        <button
          className="action-button"
          onClick={() => console.log('Save:', state)} // Placeholder for save logic
        >
          Save
        </button>
        <button
          className="action-button"
          onClick={() => dispatch({ type: 'RESET' })}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default EmailTemplateCreator;
```

##### Step 3: `AddFieldModal.tsx`

```tsx
import React, { useState, ChangeEvent } from 'react';
import './styles.css';

interface AddFieldModalProps {
  onAdd: (name: string, placeholder: string, position: string) => void;
  onClose: () => void;
  existingFields: string[];
}

const AddFieldModal: React.FC<AddFieldModalProps> = ({ onAdd, onClose, existingFields }) => {
  const [name, setName] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [position, setPosition] = useState(existingFields[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && placeholder) {
      onAdd(name, placeholder, position);
      setName('');
      setPlaceholder('');
      setPosition(existingFields[0]);
    }
  };

  return (
    <div className="add-field-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          className="add-field-input"
          placeholder="e.g., Special Note"
        />
        <input
          type="text"
          value={placeholder}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPlaceholder(e.target.value)}
          className="add-field-input"
          placeholder="e.g., Enter special note"
        />
        <select
          value={position}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setPosition(e.target.value)}
          className="add-field-input"
        >
          {existingFields.map((field) => (
            <option key={field} value={field}>
              {field.replace(/([A-Z])/g, ' $1').trim()}
            </option>
          ))}
        </select>
        <div className="add-field-button-group">
          <button type="submit" className="add-field-button">Add</button>
          <button type="button" onClick={onClose} className="add-field-cancel-button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddFieldModal;
```

##### Step 4: `App.tsx`

```tsx
import React from 'react';
import EmailTemplateCreator from './EmailTemplateCreator';

const App: React.FC = () => {
  return (
    <div>
      <EmailTemplateCreator />
    </div>
  );
};

export default App;
```

Explanation of Changes

1. CSS External File:
   
   - Moved all styles to styles.css with class names instead of inline objects.
   
   - Added .action-bar, .hamburger, and related styles for the sidebar.

2. Action Bar:
   
   - Added a right sidebar with a hamburger toggle (☰).
   
   - Moved "Add Custom Field" and "Save" buttons to the Action Bar, added "Reset", templateName input, and timestamp.
   
   - Buttons are outlined (border: 2px solid #333) with hover effects.

3. useReducer:
   
   - Consolidated state into a single TemplateState object managed by useReducer.
   
   - Actions: UPDATE_FIELD, TOGGLE_VISIBILITY, ADD_CUSTOM_FIELD, TOGGLE_ADD_FIELD_FORM, TOGGLE_ACTION_BAR, SET_TEMPLATE_NAME, RESET.
   
   - State includes templateName, createdAt, fields, visibility, customFields, showAddFieldForm, showActionBar.

4. Sidebar Features:
   
   - Template Name: Input at the top of the Action Bar.
   
   - Timestamp: Displays creation time below the input.
   
   - Buttons: "Add Custom Field" (toggles form), "Save" (logs state for now), "Reset" (resets to initial state with new timestamp).

5. Form Placement:
   
   - AddFieldModal now renders inline under "Add Custom Field" button in the Action Bar when toggled.

How It Works

- Hamburger: Click ☰ to show/hide the Action Bar (slides in from the right).

- Action Bar: Contains templateName input, timestamp, and outlined buttons.

- Add Custom Field: Click toggles the form below it in the sidebar.

- Save: Logs the state (future backend integration point).

- Reset: Resets to initial values, updates createdAt.

Notes

- Future Backend: The state object is ready to be sent to a backend (e.g., via fetch).

- Styling: Adjust .action-bar width or transitions in styles.css as needed.

- Enhancements: Add confirmation for "Reset", validation for templateName, etc.

## Decoupled code

> Let’s decouple EmailTemplateCreator.tsx into three child components: ActionBar, EditorPanel, and PreviewPanel. We’ll keep the unchanged components (AddFieldModal.tsx and styles.css) as they are, and avoid repeating code where possible. The parent EmailTemplateCreator will manage the useReducer state and pass necessary props to the children.

##### Updated Project Structure

```text
src/
├── EmailTemplateCreator.tsx
├── ActionBar.tsx
├── EditorPanel.tsx
├── PreviewPanel.tsx
├── AddFieldModal.tsx
├── styles.css
├── App.tsx
└── main.tsx
```

##### Step 1: EmailTemplateCreator.tsx (Parent Component)

This will hold the useReducer logic and pass state/dispatch functions to children.

```tsx
import React, { useReducer } from 'react';
import EditorPanel from './EditorPanel';
import PreviewPanel from './PreviewPanel';
import ActionBar from './ActionBar';
import './styles.css';

// Define types
interface CustomField {
  name: string;
  placeholder: string;
  position: string;
}

interface TemplateState {
  templateName: string;
  createdAt: string;
  fields: { [key: string]: string };
  visibility: { [key: string]: boolean };
  customFields: CustomField[];
  showAddFieldForm: boolean;
  showActionBar: boolean;
}

type Action =
  | { type: 'UPDATE_FIELD'; field: string; value: string }
  | { type: 'TOGGLE_VISIBILITY'; field: string }
  | { type: 'ADD_CUSTOM_FIELD'; name: string; placeholder: string; position: string }
  | { type: 'TOGGLE_ADD_FIELD_FORM' }
  | { type: 'TOGGLE_ACTION_BAR' }
  | { type: 'SET_TEMPLATE_NAME'; name: string }
  | { type: 'RESET' };

// Initial state
const initialState: TemplateState = {
  templateName: 'Untitled Template',
  createdAt: new Date().toISOString(),
  fields: {
    logoUrl: 'https://www.tailorbrands.com/wp-content/uploads/2021/05/nike-300x300.png',
    header: "You're Invited!",
    contactName: 'John Doe',
    contactEmail: 'john.doe@example.com',
    contactPhone: '+1 555-123-4567',
    qrInstruction: 'Scan this QR code upon arrival.',
    eventName: 'Primavera Sound 2025',
    eventDate: 'May 30, 2025 00:00',
    eventLocation: 'Parc del Fòrum, Barcelona',
    eventDescription: "One of Europe's biggest music festivals...",
    footerText1: 'This invitation is non-transferable.',
    footerText2: '© 2025 Invite2Me. All rights reserved.',
  },
  visibility: {
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
  },
  customFields: [],
  showAddFieldForm: false,
  showActionBar: false,
};

// Reducer
const reducer = (state: TemplateState, action: Action): TemplateState => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, fields: { ...state.fields, [action.field]: action.value } };
    case 'TOGGLE_VISIBILITY':
      return { ...state, visibility: { ...state.visibility, [action.field]: !state.visibility[action.field] } };
    case 'ADD_CUSTOM_FIELD':
      const newField = { name: action.name, placeholder: action.placeholder, position: action.position };
      return {
        ...state,
        customFields: [...state.customFields, newField],
        fields: { ...state.fields, [action.name]: '' },
        visibility: { ...state.visibility, [action.name]: true },
        showAddFieldForm: false,
      };
    case 'TOGGLE_ADD_FIELD_FORM':
      return { ...state, showAddFieldForm: !state.showAddFieldForm };
    case 'TOGGLE_ACTION_BAR':
      return { ...state, showActionBar: !state.showActionBar };
    case 'SET_TEMPLATE_NAME':
      return { ...state, templateName: action.name };
    case 'RESET':
      return { ...initialState, createdAt: new Date().toISOString() };
    default:
      return state;
  }
};

const EmailTemplateCreator: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const defaultFields = [
    'logoUrl', 'header', 'contactName', 'contactEmail', 'contactPhone', 'qrInstruction',
    'eventName', 'eventDate', 'eventLocation', 'eventDescription', 'footerText1', 'footerText2',
  ];

  return (
    <div className="container">
      <button className="hamburger" onClick={() => dispatch({ type: 'TOGGLE_ACTION_BAR' })}>
        ☰
      </button>
      <EditorPanel
        fields={state.fields}
        visibility={state.visibility}
        customFields={state.customFields}
        defaultFields={defaultFields}
        onInputChange={(field, value) => dispatch({ type: 'UPDATE_FIELD', field, value })}
        onToggleVisibility={(field) => dispatch({ type: 'TOGGLE_VISIBILITY', field })}
      />
      <PreviewPanel
        fields={state.fields}
        visibility={state.visibility}
        customFields={state.customFields}
        defaultFields={defaultFields}
      />
      <ActionBar
        templateName={state.templateName}
        createdAt={state.createdAt}
        showAddFieldForm={state.showAddFieldForm}
        showActionBar={state.showActionBar}
        defaultFields={defaultFields}
        onAddCustomField={(name, placeholder, position) =>
          dispatch({ type: 'ADD_CUSTOM_FIELD', name, placeholder, position })
        }
        onToggleAddFieldForm={() => dispatch({ type: 'TOGGLE_ADD_FIELD_FORM' })}
        onSetTemplateName={(name) => dispatch({ type: 'SET_TEMPLATE_NAME', name })}
        onSave={() => console.log('Save:', state)}
        onReset={() => dispatch({ type: 'RESET' })}
        onDownloadJson={() => {
          const json = JSON.stringify(state, null, 2);
          const blob = new Blob([json], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${state.templateName || 'template'}.json`;
          a.click();
          URL.revokeObjectURL(url);
        }}
      />
    </div>
  );
};

export default EmailTemplateCreator;
```

##### Step 2: EditorPanel.tsx (Child Component)

```tsx
import React, { ChangeEvent } from 'react';
import './styles.css';

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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onInputChange(e.target.name, e.target.value);
  };

  return (
    <div className="editor-panel">
      <p className="panel-subtitle">Customize your invitation below.</p>
      {allFields.map((fieldName) => {
        const customField = customFields.find((cf) => cf.name === fieldName);
        const isTextArea = fieldName === 'eventDescription';
        return (
          <div key={fieldName} className="input-group">
            <label className="label">
              {customField ? customField.name : fieldName.replace(/([A-Z])/g, ' $1').trim()}
            </label>
            <div className="input-with-button">
              {isTextArea ? (
                <textarea
                  name={fieldName}
                  value={fields[fieldName]}
                  onChange={handleInputChange}
                  className="textarea"
                  placeholder={customField ? customField.placeholder : `Enter ${fieldName}`}
                />
              ) : (
                <input
                  type="text"
                  name={fieldName}
                  value={fields[fieldName]}
                  onChange={handleInputChange}
                  className="input"
                  placeholder={customField ? customField.placeholder : `Enter ${fieldName}`}
                />
              )}
              <button
                onClick={() => onToggleVisibility(fieldName)}
                className="toggle-button"
                title={visibility[fieldName] ? 'Hide' : 'Show'}
              >
                {visibility[fieldName] ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EditorPanel;
```

#### Step 3: PreviewPanel.tsx (Child Component)

```tsx
import React from 'react';
import qrPlaceholder from './assets/attachment_preview.png';
import './styles.css';

interface PreviewPanelProps {
  fields: { [key: string]: string };
  visibility: { [key: string]: boolean };
  customFields: { name: string; placeholder: string; position: string }[];
  defaultFields: string[];
}

const PreviewPanel: React.FC<PreviewPanelProps> = ({ fields, visibility, customFields, defaultFields }) => {
  const renderCustomFieldsInSection = (sectionFields: string[]) => {
    return customFields
      .filter((cf) => sectionFields.includes(cf.position))
      .map((field) =>
        visibility[field.name] ? (
          <p key={field.name}>
            <strong>{field.name}:</strong> <span>{fields[field.name]}</span>
          </p>
        ) : null
      );
  };

  return (
    <div className="preview-panel">
      <div className="header">
        {visibility.logoUrl && <img src={fields.logoUrl} alt="Company Logo" className="header-img" />}
        {visibility.header && <h1 className="header-text">{fields.header}</h1>}
        {renderCustomFieldsInSection(['logoUrl', 'header'])}
      </div>

      {(visibility.contactName || visibility.contactEmail || visibility.contactPhone) && (
        <div className="contact-details">
          <h2 className="section-title">Contact Information</h2>
          {visibility.contactName && <p><strong>Name:</strong> <span>{fields.contactName}</span></p>}
          {visibility.contactEmail && <p><strong>Email:</strong> <span>{fields.contactEmail}</span></p>}
          {visibility.contactPhone && <p><strong>Phone:</strong> <span>{fields.contactPhone}</span></p>}
          {renderCustomFieldsInSection(['contactName', 'contactEmail', 'contactPhone'])}
        </div>
      )}

      {visibility.qrInstruction && (
        <div className="qr-code">
          <img src={qrPlaceholder} alt="QR Code Invitation" className="qr-img" />
          <p>{fields.qrInstruction}</p>
          {renderCustomFieldsInSection(['qrInstruction'])}
        </div>
      )}

      {(visibility.eventName || visibility.eventDate || visibility.eventLocation || visibility.eventDescription) && (
        <div className="event-details">
          <h2 className="section-title">Event Details</h2>
          {visibility.eventName && <p><strong>Event:</strong> <span>{fields.eventName}</span></p>}
          {visibility.eventDate && <p><strong>Date:</strong> <span>{fields.eventDate}</span></p>}
          {visibility.eventLocation && <p><strong>Location:</strong> <span>{fields.eventLocation}</span></p>}
          {visibility.eventDescription && (
            <p><strong>Description:</strong> <span>{fields.eventDescription}</span></p>
          )}
          {renderCustomFieldsInSection(['eventName', 'eventDate', 'eventLocation', 'eventDescription'])}
        </div>
      )}

      {(visibility.footerText1 || visibility.footerText2 || customFields.length > 0) && (
        <div className="footer">
          {visibility.footerText1 && <p>{fields.footerText1}</p>}
          {visibility.footerText2 && <p>{fields.footerText2}</p>}
          {renderCustomFieldsInSection(['footerText1', 'footerText2'])}
        </div>
      )}
    </div>
  );
};

export default PreviewPanel;
```

##### Step 4: ActionBar.tsx (Child Component)

```tsx
import React, { ChangeEvent } from 'react';
import AddFieldModal from './AddFieldModal';
import './styles.css';

interface ActionBarProps {
  templateName: string;
  createdAt: string;
  showAddFieldForm: boolean;
  showActionBar: boolean;
  defaultFields: string[];
  onAddCustomField: (name: string, placeholder: string, position: string) => void;
  onToggleAddFieldForm: () => void;
  onSetTemplateName: (name: string) => void;
  onSave: () => void;
  onReset: () => void;
  onDownloadJson: () => void;
}

const ActionBar: React.FC<ActionBarProps> = ({
  templateName,
  createdAt,
  showAddFieldForm,
  showActionBar,
  defaultFields,
  onAddCustomField,
  onToggleAddFieldForm,
  onSetTemplateName,
  onSave,
  onReset,
  onDownloadJson,
}) => {
  return (
    <div className={`action-bar ${showActionBar ? 'open' : ''}`}>
      <div>
        <input
          type="text"
          value={templateName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onSetTemplateName(e.target.value)}
          className="action-input"
          placeholder="Template Name"
        />
        <div className="timestamp">Created: {new Date(createdAt).toLocaleString()}</div>
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
```

Explanation of Changes

1. Parent Component (EmailTemplateCreator.tsx):
   
   - Retained useReducer, initialState, and reducer logic.
   
   - Moved editor, preview, and action bar content into separate child components.
   
   - Passed relevant state and callback functions as props to children.
   
   - Kept defaultFields and the hamburger button in the parent.

2. EditorPanel:
   
   - Handles the editor UI, receiving fields, visibility, customFields, and defaultFields.
   
   - Uses callbacks onInputChange and onToggleVisibility to dispatch actions back to the parent.
   
   - Computes allFields locally for rendering inputs.

3. PreviewPanel:
   
   - Handles the preview UI, receiving fields, visibility, customFields, and defaultFields.
   
   - Contains the renderCustomFieldsInSection helper to display custom fields in the correct sections.
   
   - No state changes, just renders based on props.

4. ActionBar:
   
   - Handles the sidebar UI, receiving all necessary state and callbacks.
   
   - Includes the AddFieldModal as a child when showAddFieldForm is true.
   
   - Manages templateName input, timestamp, and action buttons.

5. Unchanged Files:
   
   - AddFieldModal.tsx and styles.css remain as they were, since they don’t need modification for this decoupling.

How It Works

- State Management: EmailTemplateCreator manages the state via useReducer and passes it down.

- EditorPanel: Displays and edits fields, dispatching updates to the parent.

- PreviewPanel: Renders the preview based on the current state.

- ActionBar: Controls template metadata and actions, toggling forms and triggering save/reset/download.

This structure keeps the components modular and reusable while maintaining the same functionality.



## Languages selection

Let’s implement this major upgrade by adding language support for the default fields in the email template. We’ll create a JSON file with translations, add a language selector to the Action Bar, store the selected language in the template state, and update the preview to reflect the chosen language. Here’s how we’ll do it step-by-step with minimal repetition of unchanged code.

Step 1: Create email-default-languages.json

Place this file in src/:

json

```json
{
  "languages": {
    "english": {
      "logoUrl": "Logo URL",
      "header": "Header",
      "contactName": "Name",
      "contactEmail": "Email",
      "contactPhone": "Phone",
      "qrInstruction": "QR Instruction",
      "eventName": "Event",
      "eventDate": "Date",
      "eventLocation": "Location",
      "eventDescription": "Description",
      "footerText1": "Footer Text 1",
      "footerText2": "Footer Text 2"
    },
    "spanish": {
      "logoUrl": "URL del Logo",
      "header": "Encabezado",
      "contactName": "Nombre",
      "contactEmail": "Correo Electrónico",
      "contactPhone": "Teléfono",
      "qrInstruction": "Instrucción QR",
      "eventName": "Evento",
      "eventDate": "Fecha",
      "eventLocation": "Ubicación",
      "eventDescription": "Descripción",
      "footerText1": "Texto de Pie 1",
      "footerText2": "Texto de Pie 2"
    },
    "catalan": {
      "logoUrl": "URL del Logotip",
      "header": "Capçalera",
      "contactName": "Nom",
      "contactEmail": "Correu Electrònic",
      "contactPhone": "Telèfon",
      "qrInstruction": "Instrucció QR",
      "eventName": "Esdeveniment",
      "eventDate": "Data",
      "eventLocation": "Ubicació",
      "eventDescription": "Descripció",
      "footerText1": "Text de Peu 1",
      "footerText2": "Text de Peu 2"
    }
  }
}
```

Step 2: Update EmailTemplateCreator.tsx

Add language to the state and pass it to children.

tsx

```tsx
import React, { useReducer } from 'react';
import EditorPanel from './EditorPanel';
import PreviewPanel from './PreviewPanel';
import ActionBar from './ActionBar';
import languages from './email-default-languages.json'; // Import languages
import './styles.css';

// Define types
interface CustomField {
  name: string;
  placeholder: string;
  position: string;
}

interface TemplateState {
  templateName: string;
  createdAt: string;
  fields: { [key: string]: string };
  visibility: { [key: string]: boolean };
  customFields: CustomField[];
  showAddFieldForm: boolean;
  showActionBar: boolean;
  language: string; // Add language to state
}

type Action =
  | { type: 'UPDATE_FIELD'; field: string; value: string }
  | { type: 'TOGGLE_VISIBILITY'; field: string }
  | { type: 'ADD_CUSTOM_FIELD'; name: string; placeholder: string; position: string }
  | { type: 'TOGGLE_ADD_FIELD_FORM' }
  | { type: 'TOGGLE_ACTION_BAR' }
  | { type: 'SET_TEMPLATE_NAME'; name: string }
  | { type: 'RESET' }
  | { type: 'SET_LANGUAGE'; language: string }; // New action for language

// Initial state
const initialState: TemplateState = {
  templateName: 'Untitled Template',
  createdAt: new Date().toISOString(),
  fields: {
    logoUrl: 'https://www.tailorbrands.com/wp-content/uploads/2021/05/nike-300x300.png',
    header: "You're Invited!",
    contactName: 'John Doe',
    contactEmail: 'john.doe@example.com',
    contactPhone: '+1 555-123-4567',
    qrInstruction: 'Scan this QR code upon arrival.',
    eventName: 'Primavera Sound 2025',
    eventDate: 'May 30, 2025 00:00',
    eventLocation: 'Parc del Fòrum, Barcelona',
    eventDescription: "One of Europe's biggest music festivals...",
    footerText1: 'This invitation is non-transferable.',
    footerText2: '© 2025 Invite2Me. All rights reserved.',
  },
  visibility: {
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
  },
  customFields: [],
  showAddFieldForm: false,
  showActionBar: false,
  language: 'english', // Default language
};

// Reducer
const reducer = (state: TemplateState, action: Action): TemplateState => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, fields: { ...state.fields, [action.field]: action.value } };
    case 'TOGGLE_VISIBILITY':
      return { ...state, visibility: { ...state.visibility, [action.field]: !state.visibility[action.field] } };
    case 'ADD_CUSTOM_FIELD':
      const newField = { name: action.name, placeholder: action.placeholder, position: action.position };
      return {
        ...state,
        customFields: [...state.customFields, newField],
        fields: { ...state.fields, [action.name]: '' },
        visibility: { ...state.visibility, [action.name]: true },
        showAddFieldForm: false,
      };
    case 'TOGGLE_ADD_FIELD_FORM':
      return { ...state, showAddFieldForm: !state.showAddFieldForm };
    case 'TOGGLE_ACTION_BAR':
      return { ...state, showActionBar: !state.showActionBar };
    case 'SET_TEMPLATE_NAME':
      return { ...state, templateName: action.name };
    case 'RESET':
      return { ...initialState, createdAt: new Date().toISOString() };
    case 'SET_LANGUAGE':
      return { ...state, language: action.language }; // Update language
    default:
      return state;
  }
};

const EmailTemplateCreator: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const defaultFields = [
    'logoUrl', 'header', 'contactName', 'contactEmail', 'contactPhone', 'qrInstruction',
    'eventName', 'eventDate', 'eventLocation', 'eventDescription', 'footerText1', 'footerText2',
  ];

  return (
    <div className="container">
      <button className="hamburger" onClick={() => dispatch({ type: 'TOGGLE_ACTION_BAR' })}>
        ☰
      </button>
      <EditorPanel
        fields={state.fields}
        visibility={state.visibility}
        customFields={state.customFields}
        defaultFields={defaultFields}
        onInputChange={(field, value) => dispatch({ type: 'UPDATE_FIELD', field, value })}
        onToggleVisibility={(field) => dispatch({ type: 'TOGGLE_VISIBILITY', field })}
      />
      <PreviewPanel
        fields={state.fields}
        visibility={state.visibility}
        customFields={state.customFields}
        defaultFields={defaultFields}
        language={state.language} // Pass language to PreviewPanel
        translations={languages.languages} // Pass translations
      />
      <ActionBar
        templateName={state.templateName}
        createdAt={state.createdAt}
        showAddFieldForm={state.showAddFieldForm}
        showActionBar={state.showActionBar}
        defaultFields={defaultFields}
        language={state.language} // Pass language to ActionBar
        onAddCustomField={(name, placeholder, position) =>
          dispatch({ type: 'ADD_CUSTOM_FIELD', name, placeholder, position })
        }
        onToggleAddFieldForm={() => dispatch({ type: 'TOGGLE_ADD_FIELD_FORM' })}
        onSetTemplateName={(name) => dispatch({ type: 'SET_TEMPLATE_NAME', name })}
        onSave={() => console.log('Save:', state)}
        onReset={() => dispatch({ type: 'RESET' })}
        onDownloadJson={() => {
          const json = JSON.stringify(state, null, 2);
          const blob = new Blob([json], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${state.templateName || 'template'}.json`;
          a.click();
          URL.revokeObjectURL(url);
        }}
        onSetLanguage={(language) => dispatch({ type: 'SET_LANGUAGE', language })} // New callback
      />
    </div>
  );
};

export default EmailTemplateCreator;
```

Step 3: Update PreviewPanel.tsx

Update labels to use the selected language from the JSON.

tsx

```tsx
import React from 'react';
import qrPlaceholder from './assets/attachment_preview.png';
import './styles.css';

interface PreviewPanelProps {
  fields: { [key: string]: string };
  visibility: { [key: string]: boolean };
  customFields: { name: string; placeholder: string; position: string }[];
  defaultFields: string[];
  language: string; // Add language prop
  translations: { [key: string]: { [key: string]: string } }; // Add translations prop
}

const PreviewPanel: React.FC<PreviewPanelProps> = ({
  fields,
  visibility,
  customFields,
  defaultFields,
  language,
  translations,
}) => {
  const renderCustomFieldsInSection = (sectionFields: string[]) => {
    return customFields
      .filter((cf) => sectionFields.includes(cf.position))
      .map((field) =>
        visibility[field.name] ? (
          <p key={field.name}>
            <strong>{field.name}:</strong> <span>{fields[field.name]}</span>
          </p>
        ) : null
      );
  };

  const t = translations[language]; // Shortcut to selected language translations

  return (
    <div className="preview-panel">
      <div className="header">
        {visibility.logoUrl && <img src={fields.logoUrl} alt="Company Logo" className="header-img" />}
        {visibility.header && <h1 className="header-text">{fields.header}</h1>}
        {renderCustomFieldsInSection(['logoUrl', 'header'])}
      </div>

      {(visibility.contactName || visibility.contactEmail || visibility.contactPhone) && (
        <div className="contact-details">
          <h2 className="section-title">{language === 'english' ? 'Contact Information' : language === 'spanish' ? 'Información de Contacto' : 'Informació de Contacte'}</h2>
          {visibility.contactName && <p><strong>{t.contactName}:</strong> <span>{fields.contactName}</span></p>}
          {visibility.contactEmail && <p><strong>{t.contactEmail}:</strong> <span>{fields.contactEmail}</span></p>}
          {visibility.contactPhone && <p><strong>{t.contactPhone}:</strong> <span>{fields.contactPhone}</span></p>}
          {renderCustomFieldsInSection(['contactName', 'contactEmail', 'contactPhone'])}
        </div>
      )}

      {visibility.qrInstruction && (
        <div className="qr-code">
          <img src={qrPlaceholder} alt="QR Code Invitation" className="qr-img" />
          <p>{fields.qrInstruction}</p>
          {renderCustomFieldsInSection(['qrInstruction'])}
        </div>
      )}

      {(visibility.eventName || visibility.eventDate || visibility.eventLocation || visibility.eventDescription) && (
        <div className="event-details">
          <h2 className="section-title">{language === 'english' ? 'Event Details' : language === 'spanish' ? 'Detalles del Evento' : 'Detalls de l\'Esdeveniment'}</h2>
          {visibility.eventName && <p><strong>{t.eventName}:</strong> <span>{fields.eventName}</span></p>}
          {visibility.eventDate && <p><strong>{t.eventDate}:</strong> <span>{fields.eventDate}</span></p>}
          {visibility.eventLocation && <p><strong>{t.eventLocation}:</strong> <span>{fields.eventLocation}</span></p>}
          {visibility.eventDescription && (
            <p><strong>{t.eventDescription}:</strong> <span>{fields.eventDescription}</span></p>
          )}
          {renderCustomFieldsInSection(['eventName', 'eventDate', 'eventLocation', 'eventDescription'])}
        </div>
      )}

      {(visibility.footerText1 || visibility.footerText2 || customFields.length > 0) && (
        <div className="footer">
          {visibility.footerText1 && <p>{fields.footerText1}</p>}
          {visibility.footerText2 && <p>{fields.footerText2}</p>}
          {renderCustomFieldsInSection(['footerText1', 'footerText2'])}
        </div>
      )}
    </div>
  );
};

export default PreviewPanel;
```

Step 4: Update ActionBar.tsx

Add a combo box for language selection.

tsx

```tsx
import React, { ChangeEvent } from 'react';
import AddFieldModal from './AddFieldModal';
import './styles.css';

interface ActionBarProps {
  templateName: string;
  createdAt: string;
  showAddFieldForm: boolean;
  showActionBar: boolean;
  defaultFields: string[];
  language: string; // Add language prop
  onAddCustomField: (name: string, placeholder: string, position: string) => void;
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
    <div className={`action-bar ${showActionBar ? 'open' : ''}`}>
      <div>
        <h6>Create Email Template</h6>
        <input
          type="text"
          value={templateName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onSetTemplateName(e.target.value)}
          className="action-input"
          placeholder="Template Name"
        />
        <select
          value={language}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => onSetLanguage(e.target.value)}
          className="action-input" // Reuse styling
        >
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="catalan">Catalan</option>
        </select>
        <div className="timestamp">Created: {new Date(createdAt).toLocaleString()}</div>
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
```

Explanation of Changes

1. JSON File:
   
   - Created email-default-languages.json with translations for English, Spanish, and Catalan for all default fields.

2. EmailTemplateCreator:
   
   - Added language to TemplateState with a default of 'english'.
   
   - Added SET_LANGUAGE action to the reducer.
   
   - Imported languages from the JSON file and passed it to PreviewPanel.
   
   - Passed language and onSetLanguage callback to ActionBar.

3. PreviewPanel:
   
   - Added language and translations props.
   
   - Used translations[language] (aliased as t) to dynamically display field labels (e.g., t.contactName instead of hardcoding "Name").
   
   - Hardcoded section titles (Contact Information, Event Details) with conditional logic for now; these could also be moved to the JSON if desired.

4. ActionBar:
   
   - Added a <select> element for language selection with options for English, Spanish, and Catalan.
   
   - Styled it with action-input class for consistency.
   
   - On change, it calls onSetLanguage to update the state.

How It Works

- Language Selection: In the Action Bar, select a language from the dropdown (e.g., "Spanish").

- State Update: The SET_LANGUAGE action updates state.language in the parent.

- Preview Update: PreviewPanel re-renders with labels from the selected language (e.g., "Nombre" instead of "Name").

- JSON Export: The language field is included in the exported JSON via onDownloadJson.

Notes

- Custom Fields: These still use their name as entered by the user; we could extend the JSON to support custom field translations if needed.

- Section Titles: Hardcoded for simplicity (Contact Information, Event Details). To fully localize, add them to the JSON (e.g., "sectionTitles": { "contact": { "english": "Contact Information", ... } }) and update PreviewPanel.

- EditorPanel: Unchanged for now, as it uses field names for labels. We could localize placeholders if desired.
