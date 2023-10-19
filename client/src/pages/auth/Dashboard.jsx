import useAuth from "../../hooks/useAuth";
import FormContainer from "../../components/formContainer/FormContainer";
import CusButton from "../../components/button/CusButton";
import * as styles from "./Dashboard.css";
import { Link } from "react-router-dom";
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
  console.log(user);
  return (
    <FormContainer title="Profile" authform className={styles.text}>
      <div className="text-center mb-4">
        <h4>Welcome {user.username}!</h4>
      </div>
      <p>
        <strong>Email: </strong>
        {user.email}
      </p>

      {/* Log Out & Forces a Redirect */}
      {user && (
        <div className={styles.buttonBox}>
          {user.isAdmin === true && (
            <CusButton as={Link} to="/add">
              Add Item
            </CusButton>
          )}
          <CusButton
            onClick={() => {
              logout();
            }}
          >
            Log Out
          </CusButton>
        </div>
      )}
    </FormContainer>
  );
};

export default Dashboard;
