import React from "react";
import { AnalyticsWidget, UserFeed, RevenueChart } from "./Widgets";
import ErrorBoundary from "./ErrorBoundary";

function Dashboard() {
  return (
    <div>
      <h1>Dynamic Dashboard</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <ErrorBoundary>
          <AnalyticsWidget />
        </ErrorBoundary>

        <ErrorBoundary>
          <UserFeed />
        </ErrorBoundary>

        <ErrorBoundary>
          <RevenueChart />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default Dashboard;
