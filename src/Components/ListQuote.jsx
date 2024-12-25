import SingleQuote from "./SingleQuote";

function ListQuote({ quotes }) {
  return (
    <div className="flex flex-col gap-2">
      {quotes.map((quote) => (
        <SingleQuote key={quote.id} quote={quote} />
      ))}
    </div>
  );
}

export default ListQuote;