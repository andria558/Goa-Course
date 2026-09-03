import React from "react";

function Message({ user, text }) {
  // Skip if text is missing
  if (!text) return null;

  // Handle broken user object
  const displayName = user?.name
    ? user.name.toUpperCase()
    : "Anonymous";

  const avatar = user?.avatarUrl || "/images/default-avatar.png";

  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <img
        src={avatar}
        alt={displayName}
        style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }}
      />
      <div>
        <strong>{displayName}</strong>: {text}
      </div>
    </div>
  );
}

export default Message;
