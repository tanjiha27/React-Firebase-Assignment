
import { useAuth } from "../AuthContext";

function Profile() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Profile Page</h1>

      <p>Your Email: {user.email}</p>

      <p>Your account is active.</p>
    </div>
  );
}

export default Profile;
