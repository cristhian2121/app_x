import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { TitleProvider } from "./context/TitleContext";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { AuthProvider, AuthRoute } from "./components/auth";
import StudentsList from "./pages/StudentsList";
import DetalleEstudiante from "./components/DetalleEstudiante";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./hooks/ErrorBoundary";
import Prueba from "./components/Prueba";
import Prueba2 from "./components/Prueba2";

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
          <ErrorBoundary>
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

            <Route path="/prueba" element={
              <>
              {/* <Header /> */}
              <Prueba/>
              </>
            } />
            <Route path="/prueba2" element={<Prueba2/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
          </ErrorBoundary>
        </AuthProvider>
      </TitleProvider>
    </>
  );
}

export default App;
