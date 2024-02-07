import Page from "./Slides/page";
import Header from "./Header/page";
export default function Home() {
  console.log("Ruta de la imagen:", "/prueba.jpeg");

  return (
    <section className="py-24">
      <Header />
      <div className="container">
        <h1 className="text-3xl font-bold">Proyectos</h1>
      </div>
      <div className="container">
        <Page />
      </div>
    </section>
  );
}
