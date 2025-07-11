
import { Check, ArrowRight,Shield, Headphones, Clock, Heart } from "lucide-react"
import { Button } from "./ui/button"

export function Cta(){
    return(
        <>
            <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 text-center">
                    <div>
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-6 h-6 text-blue-500" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Secure & Private</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Enterprise-grade security</p>
                    </div>

                    <div>
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Headphones className="w-6 h-6 text-green-500" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">24/7 Support</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Always here to help</p>
                    </div>

                    <div>
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Clock className="w-6 h-6 text-purple-500" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">No Commitment</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Cancel anytime</p>
                    </div>

                    <div>
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Heart className="w-6 h-6 text-orange-500" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Money Back</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">30-day guarantee</p>
                    </div>
                </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-blue-500">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Transform Your Kitchen?</h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                    Join thousands of home cooks who&apos;ve already discovered the power of AI-assisted cooking.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-white text-blue-500 hover:bg-gray-100">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-500 bg-transparent"
                    >
                    Contact Sales
                    </Button>
                </div>

                <div className="flex items-center justify-center gap-8 mt-8 text-sm text-blue-100">
                    <div className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    14-day free trial
                    </div>
                    <div className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    No credit card required
                    </div>
                    <div className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    Cancel anytime
                    </div>
                </div>
                </div>
            </section>
        </>    
    )
}