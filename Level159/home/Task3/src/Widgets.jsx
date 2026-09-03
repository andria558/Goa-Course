import React from "react";

function AnalyticsWidget() {
  return <div>📊 Analytics მონაცემები</div>;
}

function UserFeed() {
  return <div>👥 User Feed სიახლეები</div>;
}

function RevenueChart() {
  throw new Error("RevenueChart crashed!");
}

export { AnalyticsWidget, UserFeed, RevenueChart };
