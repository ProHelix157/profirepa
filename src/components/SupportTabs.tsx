"use client";

import { useState } from "react";
import { TicketForm } from "./TicketForm";

export function SupportTabs({ initial }: { initial: "support" | "consultation" }) {
  const [tab, setTab] = useState<"support" | "consultation">(initial);

  const tabStyle = (active: boolean): React.CSSProperties => ({
    padding: "14px 22px",
    fontFamily: "var(--font-heading)",
    fontWeight: 800,
    fontSize: 15,
    cursor: "pointer",
    border: "1px solid var(--divider)",
    background: active ? "var(--accent)" : "transparent",
    color: active ? "var(--ink)" : "var(--text)",
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button type="button" style={tabStyle(tab === "consultation")} onClick={() => setTab("consultation")}>
          New customer — free evaluation
        </button>
        <button type="button" style={tabStyle(tab === "support")} onClick={() => setTab("support")}>
          Existing customer — support ticket
        </button>
      </div>
      {tab === "support" ? <TicketForm kind="support" /> : <TicketForm kind="consultation" />}
    </div>
  );
}
