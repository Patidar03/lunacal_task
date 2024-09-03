import './App.css'
import GalleryWidget from './components/GalleryWidget'
import InfoWidget from './components/InfoWidget'

function App() {

  return (
    <>
      <div className='w-full h-[895px] bg-gradient-to-b from-[#373E44] to-[#191B1F] flex justify-center'>
        <div className='w-[720px] absolute top-[96px] lg:right-[86px]'>
          <InfoWidget />
          <hr className=' w-[612px] h-[4px] bg-gradient-to-b from-[rgba(40,40,40,0.1)] to-[rgba(248,248,248,0.1)] rounded-[2.46px] border-none m-auto my-[27px] shadow-[0_4px_4px_rgba(0,0,0,0.33)]' />
          <GalleryWidget />
          <hr className=' w-[612px] h-[4px] bg-gradient-to-b from-[rgba(40,40,40,0.1)] to-[rgba(248,248,248,0.1)] rounded-[2.46px] border-none m-auto my-[27px] shadow-[0_4px_4px_rgba(0,0,0,0.33)]' />
        </div>
      </div>
    </>
  )
}

export default App
