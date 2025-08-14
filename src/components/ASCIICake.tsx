import { useEffect, useState } from "react";

type ASCIICakeProps = {
  /** Fotogramas por segundo de la animación (entre 2 y 10 va bien) */
  fps?: number;
};

const FRAMES = [
String.raw`
            i   i   i
           | | | | | |
         __|_|_|_|_|_|__
        |               |
        |   _________   |
        |  |         |  |
        |  |  Feliz  |  |
        |  |   CUM   |  |
        |  |_________|  |
        |_______________|`,
String.raw`
            '   *   '
           | | | | | |
         __|_|_|_|_|_|__
        |               |
        |   _________   |
        |  |         |  |
        |  |  Feliz  |  |
        |  |   CUM   |  |
        |  |_________|  |
        |_______________|`,
String.raw`
            *   '   *
           | | | | | |
         __|_|_|_|_|_|__
        |               |
        |   _________   |
        |  |         |  |
        |  |  Feliz  |  |
        |  |   CUM   |  |
        |  |_________|  |
        |_______________|`,
];

export default function ASCIICake({ fps = 4 }: ASCIICakeProps) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const ms = Math.max(1000 / fps, 60);
    const id = setInterval(() => setI((v) => (v + 1) % FRAMES.length), ms);
    return () => clearInterval(id);
  }, [fps]);

  return (
    <pre
      className="ascii"
      role="img"
      aria-label="Pastel ASCII animado con velitas parpadeando"
    >
      {FRAMES[i]}
    </pre>
  );
}
