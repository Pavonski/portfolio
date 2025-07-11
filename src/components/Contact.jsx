import fondo4 from '../assets/fondo4.png';


export default function Contact() {
  return (
    <section className="h-screen w-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${fondo4})` }}>
      <div className='items-center relative justify-center min-w-9/12 h-5/6'>
      <div className='h-full w-full flex absolute justify-center flex-col items-center gap-0.5'>
        <a className='text-[120px] font-clash700 text-white hover:underline'>Mail</a>
        <a className='text-[120px] font-clash500 text-white hover:underline'>Instagram</a>
        <a className='text-[120px] font-clash300 text-white hover:underline'>WhatsApp</a>
        <a className='text-[120px] font-clash100 text-white hover:underline'>Discord</a>
      </div>
      </div>
    </section>
  );
}
