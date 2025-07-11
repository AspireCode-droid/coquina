
import { BenefitCard } from "@/components/ui/benefitCard"
import { primaryBenefits, secondaryBenefits } from "@/data/benefits"

export function BenefitsSection() {
  return (
    <>
      {/* Primary Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Culina AI?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the transformative benefits that make Culina AI the smart choice for modern kitchens.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {primaryBenefits.map((benefit, idx) => (
              <BenefitCard key={idx} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Benefits */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Even More Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover additional advantages that make Culina AI an essential kitchen companion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {secondaryBenefits.map((benefit, idx) => (
              <BenefitCard key={idx} {...benefit} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}