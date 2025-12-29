import { Skeleton } from "../ui/skeleton";

const NotFoundSkeleton: React.FC = () => (
    <>
        <Skeleton className="flex items-center justify-between rounded-md px-3 py-2 w-[343px] h-12 sm:w-[179px]" />
    </>
);

export { NotFoundSkeleton };