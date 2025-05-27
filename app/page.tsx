import CleanArchitectureDiagram from "./clean-architecture-diagram";
import Navbar from "./components/Navbar";
import FileStructure from "./components/FileStructure";

export default function Home() {
  return (
    <>
      <Navbar />
      <CleanArchitectureDiagram />
      <FileStructure />
    </>
  );
}
