import { Card, CardHeader } from "@nextui-org/card";

export default function Twitt(){
   return(
   <Card className="col-span-12 w-[290px] h-[230px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
            <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
        </CardHeader>
    </Card>
   )
}