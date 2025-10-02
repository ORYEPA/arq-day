import { useEffect, useState } from "react";

type ASCIICastleProps = {
  /** Fotogramas por segundo de la animación (entre 2 y 10 va bien) */
  fps?: number;
};

const FRAMES = [
String.raw`
        >>>               >>>
         |                |
    ___|_|___          ___|_|___
   |         |        |         |
   |  _____  |        |  _____  |
   | |     | |        | |     | |
   | |     | |________| |     | |
   | |     |  ________  |     | |
   | |     | |        | |     | |
   |_|     |_|  ____  |_|     |_|
     |       | |    | |       |
     |       | |____| |       |
     |_______|________|_______|
`,
String.raw`
        <<<              <<<
         |                |
    ___|_|___          ___|_|___
   |         |        |         |
   |  _____  |        |  _____  |
   | |     | |        | |     | |
   | |     | |________| |     | |
   | |     |  ________  |     | |
   | |     | |        | |     | |
   |_|     |_|  ____  |_|     |_|
     |       | |    | |       |
     |       | |____| |       |
     |_______|________|_______|
`,
String.raw`
        ~~~              ~~~
         |                |
    ___|_|___          ___|_|___
   |         |        |         |
   |  _____  |        |  _____  |
   | |     | |        | |     | |
   | |     | |________| |     | |
   | |     |  ________  |     | |
   | |     | |        | |     | |
   |_|     |_|  ____  |_|     |_|
     |       | |    | |       |
     |       | |____| |       |
     |_______|________|_______|
`,
];

export default function ASCIICastle({ fps = 4 }: ASCIICastleProps) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const ms = Math.max(1000 / fps, 15);
    const id = setInterval(() => setI((v) => (v + 1) % FRAMES.length), ms);
    return () => clearInterval(id);
  }, [fps]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-sky-400 to-sky-200">
      <pre
        className="text-gray-800 text-sm font-mono"
        role="img"
        aria-label="Castillo ASCII animado con banderas ondeando"
      >
        {FRAMES[i]}
      </pre>
    </div>
  );
}