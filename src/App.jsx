import AddQuote from "@/Components/AddQuote";
import ListQuote from "@/Components/ListQuote";
import SingleQuote from "@/Components/SingleQuote";
import { useState } from "react";

function App()
{
  const[quotes, setQuotes] = useState([
    {
      id: 1,
      likes: 5,
      title: "I am a quote",
    },
    {
      id: 2,
      likes: 5,
      title: "I am a quote",
    },
  ]);

    const handleAddQuote = (title) => {
    // Create a new quote
    const quote = {
      title,
      id: crypto.randomUUID(),
      likes: 0,
    };

    // Add to new state
    setQuotes((prevQuotes) => [quote, ...prevQuotes]);
    };
  
   return (
    <div className="max-w-96 mx-auto p-2">
      <h1 className="text-3xl text-center font-bold my-5">Quotes</h1>
      <AddQuote onSubmit={handleAddQuote} />
      <ListQuote quotes={quotes} />
    </div>
  );
}

export default App;