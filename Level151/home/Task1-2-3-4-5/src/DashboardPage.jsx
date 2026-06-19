import React from 'react'

const DashboardPage = () => {
  const { tab } = useParams();
  let content;

  switch (tab) {
    case "Overview":
      content = "Dashboard Overview Content";
      break;
    case "Stats":
      content = "Dashboard Stats Content";
      break;
    case "Settings":
      content = "Dashboard Settings Content";
      break;
    default:
      content = "Unknown tab";
  }

  return (
    <h1>{content}</h1>

  )
}

export default DashboardPage;