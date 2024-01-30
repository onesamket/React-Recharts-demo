import AreaLine from './components/area-chart';
import Example from './components/bar-chart';
import PieLine from './components/pie-chart';
import RadarLine from './components/radar-chart';


const App = () => {
  return (
    <div className='flex w-screen items-center flex-col justify-center'>
      <Example />
      <PieLine />
      <AreaLine />
      <RadarLine />
    </div>
  )
}

export default App