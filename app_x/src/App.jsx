import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { TitleProvider } from "./context/TitleContext";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { AuthProvider, AuthRoute } from "./components/auth";
import StudentsList from "./pages/StudentsList";
import DetalleEstudiante from "./components/DetalleEstudiante";
import NotFound from "./pages/NotFound";

//1. hacer la llamada a la api aca en lugar de home
//2. los id en los datos retornaban el siguiente id
//3. Como se haria si existen mas mensajes o como mostrar los mensajes en pantalla

function WrapperWithPermission ({ children }) { //HOC
  return <>
    <Header />
    <AuthRoute>
      {children}
    </AuthRoute>
  </>
}

function App() {
  return (
    <>
      <TitleProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/" >
              
              <Route path="/miuniforme" element={
                <WrapperWithPermission>
                  <Profile />
                </WrapperWithPermission>
              } />
              <Route path="/estudiantes" element={
                <WrapperWithPermission>
                  <StudentsList />
                </WrapperWithPermission>
              } />
            </Route>

            <Route path="/student/:id" element={
              <WrapperWithPermission>
                <DetalleEstudiante />            
              </WrapperWithPermission>
            } />

            <Route path="*" element={<NotFound/>} />
          </Routes>

        </AuthProvider>
      </TitleProvider>
    </>
  );
}

export default App;
