import { useState } from 'react';
import '../assets/Css/P2-Css/Proyecto2.css'; // Importamos los nuevos estilos

// Importamos las rutas de los ejercicios para que Vite las gestione.
// Esto es más seguro que usar rutas relativas como strings.
import rutaEjercicio1 from '../components/Proyecto02/Ejercicio1/ejercicio1.html?url';
import rutaEjercicio2 from '../components/Proyecto02/Ejercicio2/ejercicio2.html?url';
import rutaEjercicio3 from '../components/Proyecto02/Ejercicio3/ejercicio3.html?url';
import rutaEjercicio4 from '../components/Proyecto02/Ejercicio4/ejercicio4.html?url';
import rutaEjercicio5 from '../components/Proyecto02/Ejercicio5/ejercicio5.html?url';

// Definimos los ejercicios fuera del componente, ya que son datos estáticos.
// Esto evita que se vuelvan a crear en cada renderizado.
const ejercicios = [
  { nombre: 'Ejercicio 1', ruta: rutaEjercicio1 },
  { nombre: 'Ejercicio 2', ruta: rutaEjercicio2 },
  { nombre: 'Ejercicio 3', ruta: rutaEjercicio3 },
  { nombre: 'Ejercicio 4', ruta: rutaEjercicio4 },
  { nombre: 'Ejercicio 5', ruta: rutaEjercicio5 },
];

export default function Proyecto2() {
  // El estado 'activo' ahora guarda la ruta del ejercicio seleccionado.
  // Lo inicializamos con la ruta del primer ejercicio.
  const [activo, setActivo] = useState(ejercicios[0].ruta);

  return (
    <div className="proyecto2-container">
      <h2>Proyecto02 - Ejercicios</h2>
      <div className="ejercicios-nav">
        {ejercicios.map((ej, idx) => (
          <button
            key={idx}
            onClick={() => setActivo(ej.ruta)}
            className={`ejercicio-tab ${activo === ej.ruta ? 'active' : ''}`}
          >
            {ej.nombre}
          </button>
        ))}
      </div>
      <div className="iframe-container">
        <iframe
          src={activo}
          title="Ejercicio Viewer"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }} />
      </div>
    </div>
  );
}
