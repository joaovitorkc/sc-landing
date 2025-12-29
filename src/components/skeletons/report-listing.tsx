import { Skeleton } from "../ui/skeleton";

const ReportListingSkeleton: React.FC = () => (
    <div className="flex flex-col w-full max-w-6xl mx-auto">
        <div className="flex flex-col">
            <Skeleton className="h-[500px] w-full" />
        </div>
    </div>
);

export { ReportListingSkeleton };