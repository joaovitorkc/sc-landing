import { MenuIcon } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";

const AppHeaderSkeleton: React.FC = () => (
    <header className="fixed left-0 right-0 top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:left-64 lg:px-8 shadow-sm">
        <Button variant="ghost" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
        </Button>
        <div className="flex items-center gap-2 lg:gap-3 flex-1 lg:flex-initial">
            <Skeleton className="flex items-center justify-between rounded-md px-3 py-2 w-10 sm:w-[180px] lg:w-[220px] h-10" />
            <div className="flex items-center gap-2 lg:gap-3 flex-1 lg:flex-initial">
                <Skeleton className="flex items-center gap-2 px-3 h-10 w-10 sm:w-[300px] rounded-md" />
            </div>
        </div>
        <div className="flex gap-2">
            <Skeleton className="rounded-full h-10 w-10" />
            <div className="hidden sm:flex flex-col items-center justify-center gap-2 w-56">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
            </div>
        </div>
    </header>
);

export { AppHeaderSkeleton };