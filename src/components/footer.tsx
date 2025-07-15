import { ChefHat } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center">
                <ChefHat className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-orange-500 tracking-tight">Coquina</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              AI-powered kitchen assistant built to help you eat better, cook smarter, and waste less.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition">Features</a></li>
              <li><a href="#" className="hover:text-foreground transition">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground transition">Integrations</a></li>
              <li><a href="#" className="hover:text-foreground transition">Developer API</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition">About</a></li>
              <li><a href="#" className="hover:text-foreground transition">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition">Press</a></li>
              <li><a href="#" className="hover:text-foreground transition">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition">Status</a></li>
              <li><a href="#" className="hover:text-foreground transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Coquina. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
