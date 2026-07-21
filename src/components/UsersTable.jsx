import React from "react";
import UserRow from "./UserRow";

function UsersTable({ users = [] }) {
  return (
    <div
      style={{
        overflowX: "auto",
        borderRadius: 8,
        border: "1px solid #2d3748",
        background: "#1a202c",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead
          style={{
            background: "#2d3748",
            textAlign: "left",
          }}
        >
          <tr>
            <th
              style={{
                padding: "14px 12px",
                fontSize: 13,
                color: "#e2e8f0",
                fontWeight: 600,
              }}
            >
              Name
            </th>
            <th
              style={{
                padding: "14px 12px",
                fontSize: 13,
                color: "#e2e8f0",
                fontWeight: 600,
              }}
            >
              Email
            </th>
            <th
              style={{
                padding: "14px 12px",
                fontSize: 13,
                color: "#e2e8f0",
                fontWeight: 600,
              }}
            >
              Role
            </th>
            <th
              style={{
                padding: "14px 12px",
                fontSize: 13,
                color: "#e2e8f0",
                fontWeight: 600,
              }}
            >
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 ? (
            <tr>
              <td
                colSpan={4}
                style={{
                  padding: 24,
                  textAlign: "center",
                  color: "#94a3b8",
                }}
              >
                No users found.
              </td>
            </tr>
          ) : (
            users.map((u) => <UserRow key={u.id} user={u} />)
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;