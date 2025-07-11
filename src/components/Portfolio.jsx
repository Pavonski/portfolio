import ReactPlayer from 'react-player';

import Eno from "@assets/Videos/ENO.webm";
import Extraordinario from "@assets/Videos/Extraordinario.webm";
import Insti from "@assets/Videos/Insti.webm";
import Pauta from "@assets/Videos/Pauta.webm";
import Licenciaturas from "@assets/Videos/licenciaturas.webm";
import fondo2 from "@assets/fondo2.png";

export default function Portfolio() {
  return (
    <section id='portfolio' className="w-screen h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${fondo2})` }}>
        <div className="grid grid-cols-5 grid-rows-4 gap-[7px] w-[1150px] h-5/6 bg-black p-[7px]">
        <div className="col-span-2 row-span-1 flex justify-center items-center">
          <ReactPlayer 
          src={Licenciaturas}
          width='100%'
          height='100%'
          controls={false}
          playing={true}
          loop={true}
          muted={true}
          className='object-cover'
          />
        </div>
        <div className="col-span-1 row-span-2 flex justify-center items-center">
          <ReactPlayer 
          src={Pauta}
          width='100%'
          height='100%'
          controls={false}
          playing={true}
          loop={true}
          muted={true}
          className='object-cover'
          />
        </div>
        <div className="col-span-2 row-span-4 flex justify-center items-center">
          <ReactPlayer 
          src={Eno}
          width='100%'
          height='100%'
          controls={false}
          playing={true}
          loop={true}
          muted={true}
          className='object-cover'
          />
        </div>
        <div className="col-span-1 row-span-2 flex justify-center items-center">
          <ReactPlayer 
          src={Extraordinario}
          width='100%'
          height='100%'
          controls={false}
          playing={true}
          loop={true}
          muted={true}
          className='object-cover'
          />
        </div>
        <div className="col-span-1 row-span-1 flex bg-linear-0 from-[#000000] to-[#FFFFFF] justify-center items-center">
        </div>
        <div className="col-span-2 row-span-2 flex justify-center items-center">
          <ReactPlayer 
          src={Insti}
          width='100%'
          height='100%'
          controls={false}
          playing={true}
          loop={true}
          muted={true}
          className='object-cover'
          />
        </div>
        <div className="col-span-1 row-span-1 bg-linear-180 from-[#000000] to-[#FFFFFF] flex justify-center items-center"></div>

      </div>
      
    </section>
  );
}
