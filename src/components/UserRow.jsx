import React from "react";

function statusStyle(status) {
  const s = (status || "").toLowerCase();

  if (s === "active") {
    return {
      color: "#86efac",
      background: "#14532d",
    };
  }

  if (s === "inactive") {
    return {
      color: "#cbd5e1",
      background: "#334155",
    };
  }

  if (s === "pending") {
    return {
      color: "#fde68a",
      background: "#78350f",
    };
  }

  return {
    color: "#e2e8f0",
    background: "#374151",
  };
}

function UserRow({ user }) {
  return (
    <tr
      style={{
        borderBottom: "1px solid #2d3748",
      }}
    >
      <td
        style={{
          padding: "14px 12px",
          color: "#f8fafc",
        }}
      >
        {user.name}
      </td>

      <td
        style={{
          padding: "14px 12px",
          color: "#cbd5e1",
        }}
      >
        {user.email}
      </td>

      <td
        style={{
          padding: "14px 12px",
          color: "#cbd5e1",
        }}
      >
        {user.role}
      </td>

      <td
        style={{
          padding: "14px 12px",
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "6px 12px",
            borderRadius: 9999,
            fontSize: 12,
            fontWeight: 600,
            ...statusStyle(user.status),
          }}
        >
          {user.status}
        </span>
      </td>
    </tr>
  );
}

export default UserRow;