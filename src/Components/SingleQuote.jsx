import { ThumbsUp, ThumbsDown } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";

import { Button } from "@/Components/ui/button";

function SingleQuote({ quote ,onDelete, onLike, onDislike, }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{quote.title}</CardTitle>
        <CardDescription>Total Likes: {quote.likes}</CardDescription>
      </CardHeader>
      <CardFooter className="flex gap-2">
        <Button variant="outline" onClick={() => onLike(quote.id)}>
          <ThumbsUp />
        </Button>
        <Button variant="outline" onClick={() => onDislike(quote.id)}>
          <ThumbsDown />
        </Button>
        <Button variant="destructive" onClick={() => onDelete(quote.id)}></Button>
      </CardFooter>
    </Card>
  );
}

export default SingleQuote;