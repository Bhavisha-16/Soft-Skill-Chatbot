import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";
import { SkillProvider } from "./context/SkillContext";
import { ProgressProvider } from "./context/ProgressContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <SkillProvider>
            <ProgressProvider>
              <AppRoutes />
            </ProgressProvider>
          </SkillProvider>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;