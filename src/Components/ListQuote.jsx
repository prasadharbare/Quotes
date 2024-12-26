import SingleQuote from "./SingleQuote";

function ListQuote({ quotes ,onDelete, onLike, onDislike }) {
  return (
    <div className="flex flex-col gap-2">
      {quotes.map((quote) => (
        <SingleQuote key={quote.id} quote={quote} onDelete={onDelete} onLike={onLike} onDislike={onDislike}/>  
      ))}
    </div>
  );
}

export default ListQuote;