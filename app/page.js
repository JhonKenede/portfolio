import Image from "next/image";

export default function Home() {
  console.log("Ruta de la imagen:", "/prueba.jpeg");

  return (
    <body>
      <main>
        <div className="bg-white">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className="grid  mx-auto  gap-4 sm:gap-6 lg:gap-8">
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocLI445h56qWfC3ixxTTgJ1RDpoPEJ14uAous2MC43ZxFysT=s288-c-no"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                width="500"
                className="rounded-lg bg-gray-100"
              />
            </div>
            <div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Sobre mi
                </h2>
                <p className="mt-4 text-gray-500">
                  I am an enthusiastic novice programmer entering the world of
                  software development with a strong programming foundation
                  despite lacking prior work experience.
                </p>
              </div>

              <div className="mt-10">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  Tecnologias
                </h2>
                <div className="inline-flex flex-row m-4">
                  <Image
                    src="/iconos/javaScript.png"
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    width="60"
                    height="60"
                    className="rounded-lg bg-gray-100"
                  />
                </div>
                <div className="inline-flex flex-row m-4">
                  <Image
                    src="/iconos/nodeJs.png"
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    width="60"
                    height="60"
                    className="rounded-lg bg-gray-100"
                  />
                </div>
                <div className="inline-flex flex-row m-4">
                  <Image
                    src="/iconos/express.png"
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    width="60"
                    height="60"
                    className="rounded-lg bg-gray-100"
                  />
                </div>
                <div className="inline-flex flex-row m-4">
                  <Image
                    src="/iconos/sequalize.png"
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    width="60"
                    height="60"
                    className="rounded-lg bg-gray-100"
                  />
                </div>
                <div className="inline-flex flex-row m-4">
                  <Image
                    src="/iconos/slq.png"
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    width="60"
                    height="60"
                    className="rounded-lg bg-gray-100"
                  />
                </div>
                <div className="inline-flex flex-row m-4">
                  <Image
                    src="/iconos/jest.png"
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    width="60"
                    height="60"
                    className="rounded-lg bg-gray-100"
                  />
                </div>
                <div className="inline-flex flex-row m-4">
                  <Image
                    src="/iconos/react.png"
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    width="60"
                    height="60"
                    className="rounded-lg bg-gray-100"
                  />
                </div>
                <div className="inline-flex flex-row m-4">
                  <Image
                    src="/iconos/html.png"
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    width="60"
                    height="60"
                    className="rounded-lg bg-gray-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}
