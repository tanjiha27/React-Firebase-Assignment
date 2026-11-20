
import { useAuth } from "../AuthContext";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Welcome to Dashboard</h1>

      <p>Logged-in User: {user.email}</p>

      <p>You have successfully logged in!</p>
    </div>
  );
}

export default Dashboard;
