import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function Hero() {
  return (
    <Card className="w-full max-w-7xl space-y-6 mx-auto p-12">
      <Avatar className="w-16 h-16">
        <AvatarImage src="https://github.com/sefakpsz.png" />
        <AvatarFallback className="font-bold text-xl">SF</AvatarFallback>
      </Avatar>
      <CardTitle className="leading-relaxed text-xl font-semibold max-w-5xl text-zinc-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, rerum autem a, totam dicta dolorum temporibus itaque repellat fugit iusto excepturi in, sit incidunt.</CardTitle>
    </Card>
  );
}

export default Hero;
