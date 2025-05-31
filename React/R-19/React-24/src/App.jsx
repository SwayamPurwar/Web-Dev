import Nav from './components/Nav'
import Mainroutes from './routes/Mainroutes'

const App = () => {
  return (
    <div className=' h-screen w-screen py-10  px-[20%]'>
    <h1 className='"text-5xl font-thin mb-5'>Routing Instance</h1>
     <Nav />
     <Mainroutes />
    </div>
  )
}

export default App
