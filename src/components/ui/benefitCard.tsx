import { Card,CardHeader, CardDescription, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import type { StaticImport } from "next/dist/shared/lib/get-img-props"

export const BenefitCard = ({
  icon: Icon,
  title,
  description,
  imagesrc,
  stats,
  color,
}: {
  icon:  React.ElementType
  title: string
  description: string
  imagesrc?: string | StaticImport
  stats?: string
  color: string
}) => {
  return (
    <Card className="h-full pt-0 pb-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="relative overflow-hidden rounded-t-lg">
        <div className={`h-48 w-full aspect-auto ${color} flex items-center justify-center relative`}>
            {imagesrc && (
            <Image
                src={imagesrc}
                alt={title}
                width={400}
                height={300}
                className="rounded-lg"
            />
            )}
          <div className="absolute top-4 left-4">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <Icon className="w-5 h-5 text-white" />
            </div>
          </div>
          {stats && (
            <div className="absolute bottom-4 right-4">
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">{stats}</Badge>
            </div>
          )}
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl group-hover:text-orange-500 transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}