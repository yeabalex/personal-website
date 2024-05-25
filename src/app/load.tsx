import {Spinner} from "@nextui-org/spinner";

export default function Load() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
    <Spinner label="Loading..." color="warning" />
    </div>
  );
}