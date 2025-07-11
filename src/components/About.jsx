import fondo3 from "../assets/fondo3.png";




export default function About() {
  return (
    <section className="h-screen w-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${fondo3})` }}>
      <div className="items-center relative w-[1150px] h-5/6">
      <div className="absolute top-8 left-0">
      <h1 className="text-[36px]">Pablo Ojeda</h1>
      <div className="w-[220px] text-wrap text-justify">
      <span className="text-[15px]">Residente de Guadalajara, México. Con mas de 5 años de experiencia en la creación de contenido atractivo para redes sociales.</span>
      </div>
      </div>
       <div className="absolute top-8 right-0">
      <h1 className="text-[36px] text-right">Video en</h1>
      <div className="text-right">
      <span className="text-[15px]">Resolve + Ae + Ps + Ai + Blender + Capcut</span>
      </div>
      <h1 className="text-[36px] text-right">Dev en</h1>
      <div className="text-right">
      <span className="text-[15px]">HTML + CSS + JS + React + Python</span>
      </div>
      </div>
      <div className="h-full flex justify-center items-center">
        <button className="absolute h-[250px] w-[430px] bg-white text-black px-6 text-[36px] mix-blend-exclusion transition hover:scale-105">
          contacto
        </button>
      </div>
      </div>
    </section>
  );
}
