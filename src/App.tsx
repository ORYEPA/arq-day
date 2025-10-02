import ASCIICake from "./components/ASCIICake";

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <h1>¡Feliz día del arquitecto! 🎉🎂</h1>
        <p className="subtitle">
          Feliz día al arquitecto que me va a sacar de trabajar ♥
        </p>

        <ASCIICake fps={5} />

        <p className="footer">hecho por: Andrea Peyro</p>
      </div>
    </div>
  );
}
