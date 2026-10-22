import { Fuite } from "./components/fuite";

/** À chaque changement de page, un voile couleur de fond avec une fuite de lumière s'efface en 400 ms.
    Il est posé au-dessus du contenu : la page se peint dessous dès le premier instant. */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Fuite />
    </>
  );
}
