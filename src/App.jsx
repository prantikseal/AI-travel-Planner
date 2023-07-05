import Input from './components/Input.jsx'
import Output from './components/Output'
import { Configuration, OpenAIApi } from 'openai'
import './App.css'


function App() {
  return (
    <>
    <div className="container">
      <h1 className='heading'>
        Ai Trip Planner 
      </h1>
      <p className='sub-heading'>
        Plan your Trip in seconds for your next vacation
      </p>
      <Input />
      <Output />
    </div>
    </>
  )
}

export default App
