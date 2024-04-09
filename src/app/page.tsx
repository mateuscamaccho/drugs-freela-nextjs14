import Campus from "@/images/campus.webp";
import Alcool from "@/images/alcool.webp";
import Maconha from "@/images/maconha.webp";
import Tabaco from "@/images/tabaco.webp";
import Sinteticos from "@/images/sinteticos.webp";
import Card from "@/components/card";

export default function Home() {
  const style = {
    backgroundImage: `url(${Campus.src})`,
    backgroundSize: 'cover', // ou 'contain' dependendo de como você quer que a imagem se ajuste
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // Adicione outras propriedades de estilo conforme necessário
  };

  const data = [{
    id: 1,
    backgroundImageSrc: Tabaco,
    title: "Tabaco",
    description: "Reprehenderit sunt ad officia consectetur veniam nisi proident duis. Qui enim tempor proident laboris duis. Anim dolor labore veniam ad nisi. Pariatur proident nostrud magna velit velit voluptate et amet reprehenderit ullamco nulla tempor eu. Deserunt ut cupidatat amet sunt duis sunt cupidatat exercitation irure officia non nulla exercitation. Veniam elit tempor adipisicing enim aute magna amet velit eu. Commodo exercitation eiusmod ad ex irure pariatur esse ipsum eiusmod.",
  }, {
    id: 2,
    backgroundImageSrc: Alcool,
    title: "Alcool",
    description: "Reprehenderit sunt ad officia consectetur veniam nisi proident duis. Qui enim tempor proident laboris duis. Anim dolor labore veniam ad nisi. Pariatur proident nostrud magna velit velit voluptate et amet reprehenderit ullamco nulla tempor eu. Deserunt ut cupidatat amet sunt duis sunt cupidatat exercitation irure officia non nulla exercitation. Veniam elit tempor adipisicing enim aute magna amet velit eu. Commodo exercitation eiusmod ad ex irure pariatur esse ipsum eiusmod.",
  }, {
    id: 3,
    backgroundImageSrc: Maconha,
    title: "Maconha",
    description: "Reprehenderit sunt ad officia consectetur veniam nisi proident duis. Qui enim tempor proident laboris duis. Anim dolor labore veniam ad nisi. Pariatur proident nostrud magna velit velit voluptate et amet reprehenderit ullamco nulla tempor eu. Deserunt ut cupidatat amet sunt duis sunt cupidatat exercitation irure officia non nulla exercitation. Veniam elit tempor adipisicing enim aute magna amet velit eu. Commodo exercitation eiusmod ad ex irure pariatur esse ipsum eiusmod.",
  }, {
    id: 4,
    backgroundImageSrc: Sinteticos,
    title: "Sintéticos",
    description: "Reprehenderit sunt ad officia consectetur veniam nisi proident duis. Qui enim tempor proident laboris duis. Anim dolor labore veniam ad nisi. Pariatur proident nostrud magna velit velit voluptate et amet reprehenderit ullamco nulla tempor eu. Deserunt ut cupidatat amet sunt duis sunt cupidatat exercitation irure officia non nulla exercitation. Veniam elit tempor adipisicing enim aute magna amet velit eu. Commodo exercitation eiusmod ad ex irure pariatur esse ipsum eiusmod.",
  }];

  return (
    <>
      <div className="h-screen">
        <div className="container-fluid h-1/5 bg-red-600" style={style}></div>
        <div className="container-fluid flex flex-row flex-wrap gap-10 h-4/5 p-4">
          {data.map((data) => {
            return (
              <Card
                key={data.id}
                id={data.id}
                backgroundImageSrc={data.backgroundImageSrc}
                title={data.title}
                description={data.description}
              ></Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
