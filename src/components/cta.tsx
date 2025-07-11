
import { Check, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

export function Cta(){
    return(
        <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white">Ready to Transform Your Kitchen?</h2>

                    <p className="text-xl text-orange-100 max-w-2xl mx-auto">
                        Join thousands of home cooks who`&apos;`ve already discovered the power of AI-assisted cooking. Start your free
                        trial today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                        <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
                        Start Your Free Trial
                        <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-orange-500 bg-transparent"
                        >
                        Schedule Demo
                        </Button>
                    </div>

                    <div className="flex items-center justify-center gap-8 pt-8 text-sm text-orange-100">
                        <div className="flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        No credit card required
                        </div>
                        <div className="flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        14-day free trial
                        </div>
                        <div className="flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        Cancel anytime
                        </div>
                    </div>
                 </div>
            </div>
        </section>
    )
}