import './input.css'
import { useState } from 'react'
import axios from 'axios'
const OPENAI_API_KEY = import.meta.env.VITE_REACT_APP_OPENAI_API_KEY;
import ReactMarkdown from 'react-markdown';

const Input = () => {
  const [chatGPTResponse, setChatGPTResponse] = useState("Your Ideas will be Listed here :)");
  const TripPlanner = async (e) => {
    e.preventDefault();
    // scroll to output
    const outputArea = document.querySelector(".outputArea");
    outputArea.scrollIntoView({ behavior: "smooth" });
    setChatGPTResponse("Generating...");
    const input = document.querySelector(".input");
    const inputText = input.value;

    const prompt = `You are Chat GPT's latest version, and you shall act as my personal and exclusive travel agent.

    Please assist me in creating a very detailed itinerary for a trip to #destination, for a duration of #amount of days starting on the date of arrival. You will get the destination and number of days from the the following user input ${inputText}.
    
    I'm seeking recommendations for activities and attractions, as well as restaurants or cuisine, to try.
    
    Additionally, please suggest suitable hotels or accommodations in the vicinity.
    
    I want you to display the result split by days, the title being bold.`;

    if (!inputText) {
      setChatGPTResponse("Please enter a prompt");
      return;
    }
    const response = await axios
    .post(

      "https://chimeragpt.adventblocks.cc/v1/completions",
      {
        model: "text-davinci-003",
        max_tokens: 500,
        temperature: 0.3,
        prompt: `${prompt}`,
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

  // console.log(response.data.choices[0].text);
  setChatGPTResponse(response.data.choices[0].text);
  }
  return (
    <>
    <form className="inputArea">
      <textarea className="input" placeholder="Give your location and number of days here..."></textarea>
      <button className="submit" onClick={
        TripPlanner
      }
      >Plan your trip now!</button>
    <div className="outputArea">
      {chatGPTResponse && <ReactMarkdown>{chatGPTResponse}</ReactMarkdown>}
    </div>
    </form>
    </>
  )
}

export default Input