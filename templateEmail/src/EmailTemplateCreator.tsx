import React, { useReducer } from "react";
import EditorPanel from "./EditorPanel";
import PreviewPanel from "./PreviewPanel";
import ActionBar from "./ActionBar";
import languages from "./email-default-languages.json"; // Import languages
import "./styles.css";

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
  | { type: "UPDATE_FIELD"; field: string; value: string }
  | { type: "TOGGLE_VISIBILITY"; field: string }
  | {
      type: "ADD_CUSTOM_FIELD";
      name: string;
      placeholder: string;
      position: string;
    }
  | { type: "TOGGLE_ADD_FIELD_FORM" }
  | { type: "TOGGLE_ACTION_BAR" }
  | { type: "SET_TEMPLATE_NAME"; name: string }
  | { type: "RESET" }
  | { type: "SET_LANGUAGE"; language: string }; // New action for language

// Initial state
const initialState: TemplateState = {
  templateName: "Untitled Template",
  createdAt: new Date().toISOString(),
  fields: {
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
    eventDescription: "One of Europe's biggest music festivals...",
    footerText1: "This invitation is non-transferable.",
    footerText2: "© 2025 Invite2Me. All rights reserved.",
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
  language: "english", // Default language
};

// Reducer
const reducer = (state: TemplateState, action: Action): TemplateState => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        fields: { ...state.fields, [action.field]: action.value },
      };
    case "TOGGLE_VISIBILITY":
      return {
        ...state,
        visibility: {
          ...state.visibility,
          [action.field]: !state.visibility[action.field],
        },
      };
    case "ADD_CUSTOM_FIELD":
      const newField = {
        name: action.name,
        placeholder: action.placeholder,
        position: action.position,
      };
      return {
        ...state,
        customFields: [...state.customFields, newField],
        fields: { ...state.fields, [action.name]: "" },
        visibility: { ...state.visibility, [action.name]: true },
        showAddFieldForm: false,
      };
    case "TOGGLE_ADD_FIELD_FORM":
      return { ...state, showAddFieldForm: !state.showAddFieldForm };
    case "TOGGLE_ACTION_BAR":
      return { ...state, showActionBar: !state.showActionBar };
    case "SET_TEMPLATE_NAME":
      return { ...state, templateName: action.name };
    case "RESET":
      return { ...initialState, createdAt: new Date().toISOString() };
    case "SET_LANGUAGE":
      return { ...state, language: action.language }; // Update language
    default:
      return state;
  }
};

const EmailTemplateCreator: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  return (
    <div className="container">
      <button
        className="hamburger"
        onClick={() => dispatch({ type: "TOGGLE_ACTION_BAR" })}
      >
        ☰
      </button>
      <EditorPanel
        fields={state.fields}
        visibility={state.visibility}
        customFields={state.customFields}
        defaultFields={defaultFields}
        onInputChange={(field, value) =>
          dispatch({ type: "UPDATE_FIELD", field, value })
        }
        onToggleVisibility={(field) =>
          dispatch({ type: "TOGGLE_VISIBILITY", field })
        }
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
          dispatch({ type: "ADD_CUSTOM_FIELD", name, placeholder, position })
        }
        onToggleAddFieldForm={() => dispatch({ type: "TOGGLE_ADD_FIELD_FORM" })}
        onSetTemplateName={(name) =>
          dispatch({ type: "SET_TEMPLATE_NAME", name })
        }
        onSave={() => console.log("Save:", state)}
        onReset={() => dispatch({ type: "RESET" })}
        onDownloadJson={() => {
          const json = JSON.stringify(state, null, 2);
          const blob = new Blob([json], { type: "application/json" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `${state.templateName || "template"}.json`;
          a.click();
          URL.revokeObjectURL(url);
        }}
        onSetLanguage={(language) =>
          dispatch({ type: "SET_LANGUAGE", language })
        } // New callback
      />
    </div>
  );
};

export default EmailTemplateCreator;
