import React from "react";
import { useState } from "react";
import List from "@/Components/ListQuote";
import AddQuote from "@/Components/AddQuote";

function App() {
  const [quotes, setQuotes] = useState([]);
  const handleAddQuote = (title) => {
    const quote = {
      id: crypto.randomUUID(),
      likes: 0,
      title,
    };
    setQuotes((prev) => [quote, ...prev]);
  };

  const deleteQuote = (id) => {
    setQuotes((prev) => prev.filter((quote) => quote.id !== id));
  };

  const handleLikeQuote = (id) => {
    setQuotes((prev) =>
      prev.map((quote) =>
        quote.id === id ? { ...quote, likes: quote.likes + 1 } : quote
      )
    );
  };
  const handleDisklikeQuote = (id) => {
    setQuotes((prev) =>
      prev.map((quote) =>
        quote.id === id ? { ...quote, likes: quote.likes - 1 } : quote
      )
    );
  };

  const handleSortQuotes = () => {
    setQuotes((prev) => prev.sort((a, b) => b.likes - a.likes));
  };
  return (
    <div className="max-w-96 mx-auto p-2 flex flex-col gap-5">
      <h1 className="text-3xl text-center font-bold my-5">Quotes</h1>
      <AddQuote onSubmit={handleAddQuote} onSort={handleSortQuotes} />
      <List
        quotes={quotes}
        onDelete={deleteQuote}
        onLike={handleLikeQuote}
        onDislike={handleDisklikeQuote}
      />
    </div>
  );
}
export default App;