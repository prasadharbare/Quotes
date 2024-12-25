import { useState } from "react";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";

function AddQuote({ onSubmit }) {
  const [inputValue, setIntputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent Form Refresh

    if (!inputValue.trim()) return; // Return if input empty

    onSubmit(inputValue);

    setIntputValue(""); // Reset the input field
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <Input
        type="text"
        placeholder="Add a Quote"
        className="mb-2"
        onChange={(e) => setIntputValue(e.target.value)}
        value={inputValue}
      />

      <div className="flex gap-2">
        <Button>Add</Button>
        <Button>Sort</Button>
      </div>
    </form>
  );
}

export default AddQuote;