import { Skeleton } from "../ui/skeleton";

const AppSidebarSkeleton: React.FC = () => (
    <div className="text-sidebar-foreground flex flex-col fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-background transition-transform duration-300 ease-in-out lg:translate-x-0 lg:z-30 -translate-x-full">
        <div className="flex flex-col gap-2 p-2 border-b border-border px-6 py-0">
            <div className="flex h-16 items-center gap-3">
                <Skeleton className="flex h-10 w-full items-center justify-center rounded-lg" />
            </div>
        </div>
        <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-auto px-0 py-0">
            <div className="relative flex w-full flex-col p-2 pt-5 gap-2">
                <Skeleton className="h-4 w-full" />
                {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex gap-2 w-full">
                        <Skeleton className="rounded-full h-10 w-10" />
                        <div className="flex flex-col items-center justify-center gap-2 w-56">
                            <Skeleton className="h-4 w-full" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="relative flex w-full flex-col p-2 pt-5 gap-2">
                <Skeleton className="h-4 w-full" />
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 w-full">
                        <Skeleton className="rounded-full h-10 w-10" />
                        <div className="flex flex-col items-center justify-center gap-2 w-56">
                            <Skeleton className="h-4 w-full" />
                        </div>
                    </div>
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="flex w-full items-end justify-end pl-3">
                            <Skeleton className="h-7 w-full" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative flex w-full flex-col p-2 pt-5 gap-2">
                <Skeleton className="h-4 w-full" />
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 w-full">
                        <Skeleton className="rounded-full h-10 w-10" />
                        <div className="flex flex-col items-center justify-center gap-2 w-56">
                            <Skeleton className="h-4 w-full" />
                        </div>
                    </div>
                    {Array.from({ length: 1 }).map((_, i) => (
                        <div key={i} className="flex w-full items-end justify-end pl-3">
                            <Skeleton className="h-7 w-full" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export { AppSidebarSkeleton };