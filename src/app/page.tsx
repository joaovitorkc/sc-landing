import type React from "react"
import type { Metadata } from "next"
import Header from "./header"
import Hero from "./components/hero"
import About from "./components/about"
import Services from "./components/services"
import Differentials from "./components/differentials"
import Testimonials from "./components/testimonials"
import Contact from "./components/contact"
import Footer from "./footer"

export const metadata: Metadata = {
    title: "Dr. Sebastião Cavalcanti",
}

const LangingPage: React.FC = async () => {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-slate-50 selection:bg-amber-500/30 selection:text-amber-900">
            <Header />
            <Hero />
            <About />
            <Services />
            <Differentials />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    )
}

export default LangingPage
