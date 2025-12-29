"use client"

// import { useSession } from "~/hooks/use-session"

import Link from "next/link"
import { ArrowLeftIcon } from "lucide-react"
import Image from "next/image"
import { Button } from "~/components/ui/button"

export default function NotFound() {
    // const { data: session, isPending } = useSession();
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5 px-4">
            <div className="max-w-2xl w-full">
                <div className="flex flex-col items-center text-center space-y-8">
                    <div className="w-full max-w-md h-auto">
                        <Image
                            src="/svg/404.svg"
                            alt="404 Page Not Found"
                            width={860}
                            height={571}
                            className="w-full h-auto"
                        />
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Página não encontrada</h2>
                        </div>
                        <p className="text-foreground/70 text-lg max-w-md mx-auto">
                            Desculpe, a página que você está procurando não existe ou foi movida. Verifique a URL e tente novamente.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center pt-4">
                        {/* {isPending ?
                            <NotFoundSkeleton />
                            :
                            session ?
                                <>
                                    <Button
                                        variant="outline"
                                        className="font-semibold shadow-lg"
                                        onClick={() => router.back()}
                                    >
                                        <ArrowLeftIcon className="h-4 w-4" />
                                        <span>Voltar</span>
                                    </Button>
                                    <Button
                                        asChild
                                        className="font-semibold shadow-lg"
                                    >
                                        <Link href="/geral/visao-geral">
                                            <HomeIcon className="h-4 w-4" />
                                            <span>Ir para Home</span>
                                        </Link>
                                    </Button>
                                </>
                                : */}
                                <Button
                                    asChild
                                    className="font-semibold shadow-lg"
                                >
                                    <Link href="/">
                                        <ArrowLeftIcon className="h-4 w-4" />
                                        <span>Voltar para Home</span>
                                    </Link>
                                </Button>
                        {/* } */}
                    </div>

                    <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl opacity-50" />
                    <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl opacity-50" />
                </div>
            </div>
        </div>
    )
}
