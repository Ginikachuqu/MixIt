// Essentials
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";

// Pages
import Home from "./pages/home/Home";
import SignUp from "./pages/sign up/SignUp";
import SignIn from "./pages/sign in/SignIn";
import UserProfile from "./pages/user/UserProfile";
import RecipeCreator from "./pages/recipeCreator/RecipeCreator";
import EditProfile from "./pages/edit profile/EditProfile";

// Components
import NavBar from "./components/navbar/NavBar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

// Context
import AuthProvider from "./contexts/authcontext/AuthContext";
import RecipeProvider from "./contexts/createRecipeContent/RecipeContext";

function App() {
  return (
    // <AuthProvider>
      <RecipeProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/create-recipe/:recipeid" element={<RecipeCreator />} />
            <Route path='/edit-profile' element={<EditProfile />} />
          </Routes>
          <GlobalStyle />
        </Router>
      </RecipeProvider>
    // </AuthProvider>
  );
}

export default App;
