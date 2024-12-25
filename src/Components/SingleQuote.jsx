import { ThumbsUp, ThumbsDown } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";

import { Button } from "@/Components/ui/button";

function SingleQuote({ quote }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{quote.title}</CardTitle>
        <CardDescription>Total Likes: {quote.likes}</CardDescription>
      </CardHeader>
      <CardFooter className="flex gap-2">
        <Button variant="outline">
          <ThumbsUp />
        </Button>
        <Button variant="outline">
          <ThumbsDown />
        </Button>
        <Button variant="destructive">Delete</Button>
      </CardFooter>
    </Card>
  );
}

export default SingleQuote;