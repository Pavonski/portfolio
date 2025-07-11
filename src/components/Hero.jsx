import instagram from "../assets/Instagram.svg";
import flecha from "../assets/Flecha.svg";
import fondo1 from "../assets/fondo1.png";

export default function Hero() {
  return (
    <section id="hero" className="h-screen w-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${fondo1})` }}>
      <div className="items-center relative min-w-9/12 h-5/6">
      <div className="absolute top-8 left-0">
          <span className="text-[22px] text-black lowercase">en/es</span> 
        </div>
        <div className="absolute top-8 right-0 transition hover:scale-90">
          <a href="https://www.instagram.com/motion.pd/"><img src={instagram} height="40" width="40"/></a>
        </div>
        <div className="absolute bottom-8 right-0 transition hover:scale-90">
          <img src={flecha} height="40" width="40"/> 
        </div>
        <nav className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-end gap-4">
          <a href="#portfolio" className="text-[32px] lowercase leading-relaxed text-black hover:underline">trabajos</a>
          <a href="#about" className="text-[32px] lowercase leading-relaxed text-black hover:underline">acerca</a>
          <a href="#contact" className="text-[32px] lowercase leading-relaxed text-black hover:underline">contacto</a>
        </nav>
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-end">
          <span className="text-[128px] font-clashbold text-left text-black lowercase -mb-24">pablo</span>
          <h1 className="text-[128px] font-clashbold text-black lowercase">ojeda</h1>
        </div>
        <div className="absolute bottom-8 left-0">
          <span className="text-[22px] text-black lowercase">editor &bull; webdev</span> 
        </div>
      </div>
    </section>
  );
}
