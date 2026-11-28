import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CarouselDemo } from "./Carusel";

export function CardImage({name,desc,image,status}) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 ">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
    <CarouselDemo image={image}/>
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{status?"Active":"Inactive"}</Badge>
        </CardAction>
        <CardTitle>{name}</CardTitle>
        <CardDescription>
        {desc}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
  );
}
