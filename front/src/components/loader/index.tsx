import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const Loader = ({ className }: { className?: string }) => {
  return <Loader2 className={cn("h-16 w-16 animate-spin", className)} />;
};

export default Loader;
