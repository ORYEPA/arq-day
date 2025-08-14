import ASCIICake from "./components/ASCIICake";

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <h1>¡Feliz cumpleaños Nico! 🎉🎂</h1>
        <p className="subtitle">
          Que se cumplan todos tus deseos. Aquí tienes un pastel:
        </p>

        <ASCIICake fps={5} />

        
      </div>
    </div>
  );
}
