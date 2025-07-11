
import { ChefHat } from "lucide-react"

export default function Footer(){
    return(
              <footer className="bg-gray-50 dark:bg-gray-900 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <ChefHat className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-orange-500">Culina AI</span>
              </div>
              <p className="text-muted-foreground">
                Your intelligent kitchen assistant for smarter cooking, healthier eating, and less food waste.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#" className="block hover:text-foreground">
                  Features
                </a>
                <a href="#" className="block hover:text-foreground">
                  Pricing
                </a>
                <a href="#" className="block hover:text-foreground">
                  API
                </a>
                <a href="#" className="block hover:text-foreground">
                  Integrations
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#" className="block hover:text-foreground">
                  About
                </a>
                <a href="#" className="block hover:text-foreground">
                  Blog
                </a>
                <a href="#" className="block hover:text-foreground">
                  Careers
                </a>
                <a href="#" className="block hover:text-foreground">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#" className="block hover:text-foreground">
                  Help Center
                </a>
                <a href="#" className="block hover:text-foreground">
                  Privacy Policy
                </a>
                <a href="#" className="block hover:text-foreground">
                  Terms of Service
                </a>
                <a href="#" className="block hover:text-foreground">
                  Status
                </a>
              </div>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Culina AI. All rights reserved.
          </div>
        </div>
      </footer>
    )
}