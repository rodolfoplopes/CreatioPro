import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Lightbulb, TrendingUp, Building2 } from "lucide-react";
import { content } from "@/lib/content";

const icons = [Heart, Lightbulb, TrendingUp, Building2];

export default function TargetAudienceSection() {
  return (
    <section className="py-20 md:py-28 bg-[#f8f9fa]" data-testid="section-target-audience">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black tracking-tight" data-i18n="target_audience_title">
            {content.targetAudience.title}
          </h2>
          <p className="mt-6 text-lg text-[#6b7280]" data-i18n="target_audience_subtitle">
            {content.targetAudience.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.targetAudience.audiences.map((audience, index) => {
            const Icon = icons[index];
            return (
              <Card
                key={index}
                className="bg-white border border-[rgba(0,0,0,0.08)]"
                data-testid={`card-audience-${index}`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#000000]/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-[#000000]" />
                    </div>
                    <Badge
                      variant="outline"
                      className="border-[#7ad1e4]/30 text-[#7ad1e4] bg-[#7ad1e4]/5 text-xs"
                    >
                      {audience.tag}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-4" data-i18n={`target_audience_${index}_title`}>
                    {audience.title}
                  </h3>
                  <p className="text-[#6b7280]" data-i18n={`target_audience_${index}_description`}>
                    {audience.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
