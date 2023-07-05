import './input.css'

const Input = () => {
  return (
    <div className="inputArea">
      <textarea className="input" placeholder="Give your location and number of days here..."
      // onChange={(e) => { console.log(e.target.value) }}
      ></textarea>
      <button 
      className="submit"
      onClick={() => { console.log('clicked') }}
      >Plan your trip now!</button>
    </div>
  )
}

export default Input