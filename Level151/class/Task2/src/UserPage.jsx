import { useParams } from "react-router-dom";

function UserPage() {
  const { id } = useParams(); // URL-დან იღებს :id-ს

  return (
    <div>
      <h2>User Page</h2>
      <p>ეს არის მომხმარებლის გვერდი ID: {id}</p>
    </div>
  );
}

export default UserPage;
