import { Separator } from "@radix-ui/react-separator";
import { Skeleton } from "../ui/skeleton";

const ReportActionsSkeleton: React.FC = () => (
    <div className="flex flex-col w-full max-w-6xl mx-auto">
        <header className="mt-4">
            <Skeleton className="mt-2 mb-2 h-10 w-[60%]" />
            <div className="grid grid-cols-4 gap-2">
                <Skeleton className="h-5 w-full col-span-1" />
                <Skeleton className="h-5 w-full col-span-1" />
            </div>
        </header>
        <Separator orientation="horizontal" className="w-auto my-8" />

        <div className="space-y-6 my-6 w-full">
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                <Skeleton className="relative h-10 w-[30%]" />
                <div className="flex gap-2 flex-wrap w-full ml-auto">
                    <Skeleton className="relative h-8 w-[30%]" />
                    <Skeleton className="relative h-8 w-[6%]" />
                    <Skeleton className="relative h-8 w-[6%]" />
                </div>
            </div>

            <div className="flex justify-between items-center">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-20" />
            </div>

            <div className="grid grid-cols-3 gap-4">
                <Skeleton className="h-[86px] w-full" />
                <Skeleton className="h-[86px] w-full" />
                <Skeleton className="h-[86px] w-full" />
            </div>

            <div className="flex w-full justify-center items-center">
                <Skeleton className="w-full h-6 rounded-lg" />
            </div>
        </div>
    </div>
);

export { ReportActionsSkeleton };