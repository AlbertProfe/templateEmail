import React from "react";
import qrPlaceholder from "./assets/attachment_preview.png";
import "./styles.css";

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
        {visibility.logoUrl && (
          <img src={fields.logoUrl} alt="Company Logo" className="header-img" />
        )}
        {visibility.header && <h1 className="header-text">{fields.header}</h1>}
        {renderCustomFieldsInSection(["logoUrl", "header"])}
      </div>

      {(visibility.contactName ||
        visibility.contactEmail ||
        visibility.contactPhone) && (
        <div className="contact-details">
          <h2 className="section-title">
            {language === "english"
              ? "Contact Information"
              : language === "spanish"
              ? "Información de Contacto"
              : "Informació de Contacte"}
          </h2>
          {visibility.contactName && (
            <p>
              <strong>{t.contactName}:</strong>{" "}
              <span>{fields.contactName}</span>
            </p>
          )}
          {visibility.contactEmail && (
            <p>
              <strong>{t.contactEmail}:</strong>{" "}
              <span>{fields.contactEmail}</span>
            </p>
          )}
          {visibility.contactPhone && (
            <p>
              <strong>{t.contactPhone}:</strong>{" "}
              <span>{fields.contactPhone}</span>
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
        <div className="qr-code">
          <img
            src={qrPlaceholder}
            alt="QR Code Invitation"
            className="qr-img"
          />
          <p>{fields.qrInstruction}</p>
          {renderCustomFieldsInSection(["qrInstruction"])}
        </div>
      )}

      {(visibility.eventName ||
        visibility.eventDate ||
        visibility.eventLocation ||
        visibility.eventDescription) && (
        <div className="event-details">
          <h2 className="section-title">
            {language === "english"
              ? "Event Details"
              : language === "spanish"
              ? "Detalles del Evento"
              : "Detalls de l'Esdeveniment"}
          </h2>
          {visibility.eventName && (
            <p>
              <strong>{t.eventName}:</strong> <span>{fields.eventName}</span>
            </p>
          )}
          {visibility.eventDate && (
            <p>
              <strong>{t.eventDate}:</strong> <span>{fields.eventDate}</span>
            </p>
          )}
          {visibility.eventLocation && (
            <p>
              <strong>{t.eventLocation}:</strong>{" "}
              <span>{fields.eventLocation}</span>
            </p>
          )}
          {visibility.eventDescription && (
            <p>
              <strong>{t.eventDescription}:</strong>{" "}
              <span>{fields.eventDescription}</span>
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
        <div className="footer">
          {visibility.footerText1 && <p>{fields.footerText1}</p>}
          {visibility.footerText2 && <p>{fields.footerText2}</p>}
          {renderCustomFieldsInSection(["footerText1", "footerText2"])}
        </div>
      )}
    </div>
  );
};

export default PreviewPanel;
