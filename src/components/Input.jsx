import './input.css'

const Input = () => {
  return (
    <div className="inputArea">
      <textarea className="input" placeholder="Give your location and number of days here..."></textarea>
      <button className="submit">Plan your trip now!</button>
    </div>
  )
}

export default Input