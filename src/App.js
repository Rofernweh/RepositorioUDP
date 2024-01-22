// App.js
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Inicio";
import ListaAsignaturas from "./pages/Asignaturas";
import Recursos from "./pages/Recursos";
import NoPage from "./pages/NoPage";
import CalculoII from './pages/CalculoII'; 

const asignaturas = [
  [
    { nombre: 'Álgebra y Geometría', tipo: 'ciencias' },
    { nombre: 'Cálculo I', tipo: 'ciencias' },
    { nombre: 'Química', tipo: 'ciencias' },
    { nombre: 'Programación', tipo: 'ingenieria' },
    { nombre: 'Comunicación para la ingeniería', tipo: 'transversal' },
  ], // Semestre 1
  [
    { nombre: 'Álgebra Lineal', tipo: 'ciencias' },
    { nombre: 'Cálculo II', tipo: 'ciencias' },
    { nombre: 'Mécanica', tipo: 'ciencias' },
    { nombre: 'Programación Avanzada', tipo: 'ingenieria' },
    { nombre: 'CFG', tipo: 'transversal' },
  ], // Semestre 2
  [
    { nombre: 'Ecuaciones Diferenciales', tipo: 'ciencias' },
    { nombre: 'Cálculo III', tipo: 'ciencias' },
    { nombre: 'Calor y Ondas', tipo: 'ciencias' },
    { nombre: 'Estructuras de Datos y Algoritmos', tipo: 'informatica' },
    { nombre: 'Redes de Datos', tipo: 'telecomunicaciones' },
  ], // Semestre 3
  [
    { nombre: 'Probabilidad y Estadística', tipo: 'ingenieria' },
    { nombre: 'Electronica y Electrotecnia', tipo: 'ciencias' },
    { nombre: 'Electricidad y Magnetismo', tipo: 'ciencias' },
    { nombre: 'Bases de Datos', tipo: 'informatica' },
    { nombre: 'Desarrollo Web y Móvil', tipo: 'informatica' },
    { nombre: 'Ingles I', tipo: 'transversal' },
  ], // Semestre 4
  [
    { nombre: 'Optimización', tipo: 'ingenieria' },
    { nombre: 'Taller de Redes y Servicios', tipo: 'telecomunicaciones' },
    { nombre: 'Proyectos en TIC\'s I', tipo: 'proyectos' },
    { nombre: 'Bases de Datos Avanzadas', tipo: 'informatica' },
    { nombre: 'CFG', tipo: 'transversal' },
    { nombre: 'Ingles II', tipo: 'transversal' },
    { nombre: 'Practica Profesional I', tipo: 'titulacion' },
  ], // Semestre 5
  [
    { nombre: 'Contabilidad y Costos', tipo: 'ingenieria' },
    { nombre: 'Arquitectura y Organización de Computadores', tipo: 'telecomunicaciones' },
    { nombre: 'Señales y Sistemas', tipo: 'telecomunicaciones' },
    { nombre: 'Sistemas Operativos', tipo: 'informatica' },
    { nombre: 'CFG', tipo: 'transversal' },
    { nombre: 'Ingles III', tipo: 'transversal' },
  ], // Semestre 6
  [
    { nombre: 'Gestión Organizacional', tipo: 'ingenieria' },
    { nombre: 'Sistemas Distribuidos', tipo: 'informatica' },
    { nombre: 'Comunicaciones Digitales', tipo: 'telecomunicaciones' },
    { nombre: 'Ingeniería de Software', tipo: 'informatica' },
    { nombre: 'CFG', tipo: 'transversal' },
  ], // Semestre 7
  [
    { nombre: 'Introducción a la Economía', tipo: 'ingenieria' },
    { nombre: 'Tecnologías Inalámbricas', tipo: 'telecomunicaciones' },
    { nombre: 'Criptografía y Seguridad en Redes', tipo: 'telecomunicaciones' },
    { nombre: 'Inteligencia Artificial', tipo: 'informatica' },
    { nombre: 'Evaluación de Proyectos TIC', tipo: 'proyectos' },
  ], // Semestre 8
  [
    { nombre: 'Electivo Profesional', tipo: 'informatica' },
    { nombre: 'Arquitecturas Emergentes', tipo: 'telecomunicaciones' },
    { nombre: 'Electivo Profesional', tipo: 'telecomunicaciones' },
    { nombre: 'Arquitectura de Software', tipo: 'informatica' },
    { nombre: 'Data Science', tipo: 'proyectos' },
    { nombre: 'Practica profesional II', tipo: 'titulacion' },
  ], // Semestre 9
  [
    { nombre: 'Electivo Profesional', tipo: 'informatica' },
    { nombre: 'Electivo Profesional', tipo: 'telecomunicaciones' },
    { nombre: 'Electivo Profesional', tipo: 'telecomunicaciones' },
    { nombre: 'Electivo Profesional', tipo: 'informatica' },
    { nombre: 'Proyectos en TIC\'s II', tipo: 'proyectos' },
  ], // Semestre 10
  [
    { nombre: 'Actividad de Titulación', tipo: 'titulacion' },
  ] // Semestre 11
];

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Asignaturas" element={<ListaAsignaturas asignaturas={asignaturas} />} />
          <Route path="Recursos" element={<Recursos />} />
          <Route path="/Asignaturas/ClculoII" element={<CalculoII />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);