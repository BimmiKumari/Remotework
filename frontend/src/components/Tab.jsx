export default function Tab({ tabData, field, setField }) {
    return (
      <div
        style={{
          boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          display: "flex",
          backgroundColor: "#1F1F1F",
          padding: "1px",
          gap: "1rem",
          margin: "6px 0",
          borderRadius: "999px",
          maxWidth: "max-content",
        }}
      >
        {tabData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setField(tab.type)}
            style={{
              backgroundColor: field === tab.type ? "#1F1F1F" : "transparent",
              color: field === tab.type ? "#E5E5E5" : "#9CA3AF",
              padding: "0.5rem 1rem",
              borderRadius: "999px",
              transition: "background-color 0.2s, color 0.2s",
            }}
          >
            {tab?.tabName}
          </button>
        ))}
      </div>
    );
  }