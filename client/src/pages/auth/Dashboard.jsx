import useAuth from "../../hooks/useAuth";
import FormContainer from "../../components/formContainer/FormContainer";
import { Button } from "react-bootstrap";

const Dashboard = () => {
  // HOOK: CONTEXT FOR AUTH
  const { user, logout } = useAuth();

  // CONDITIONAL LOAD: USER ERROR [POSSIBLY REPLACE WITH LOADING STATE]
  if (!user) {
    return (
      <FormContainer title="Profile" authform>
        <div className="text-center mb-4">Cannot Retrieve User</div>
      </FormContainer>
    );
  }

  return (
    <FormContainer title="Profile" authform>
      <div className="text-center mb-4">
        <h4>Welcome {user.username}!</h4>
      </div>
      <p>
        <strong>Email: </strong>
        {user.email}
      </p>
      {user.isAdmin && (
        <p>
          <strong>Secret: </strong> Hello Admin - nice to see you here
        </p>
      )}

      {/* Log Out & Forces a Redirect */}
      {user && (
        <div className="mt-5">
          <Button
            onClick={() => {
              logout();
            }}
          >
            Log Out
          </Button>
        </div>
      )}
    </FormContainer>
  );
};

export default Dashboard;
