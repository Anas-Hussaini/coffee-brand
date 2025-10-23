import { Coffee, Heart, Leaf, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          About Artisan Coffee Co.
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Our passion for exceptional coffee drives everything we do
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p>
            Founded in 2020, Artisan Coffee Co. began with a simple mission: to
            bring the world&apos;s finest coffee beans directly to coffee lovers
            everywhere. We work closely with farmers and cooperatives across the
            globe, ensuring fair trade practices and sustainable farming methods.
          </p>
          <p>
            Every bean we source is carefully selected and roasted to perfection,
            highlighting the unique flavors and characteristics of each origin. From
            the bright, fruity notes of Ethiopian Yirgacheffe to the rich, chocolatey
            depth of Colombian Supremo, we celebrate the diversity and complexity of
            coffee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Coffee className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Premium Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We source only the finest specialty-grade beans, ensuring every cup
                delivers an exceptional experience.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Leaf className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Sustainability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We&apos;re committed to environmental responsibility and supporting
                sustainable farming practices worldwide.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Heart className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Fair Trade</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We ensure fair compensation for farmers and invest in their
                communities to create lasting positive impact.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Join our community of coffee enthusiasts and discover new flavors,
                brewing techniques, and stories from origin.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Our Promise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We promise to deliver freshly roasted, ethically sourced coffee beans
            that not only taste exceptional but also support the people and places
            that make it all possible. Every purchase contributes to a more
            sustainable and equitable coffee industry.
          </p>
        </div>
      </div>
    </div>
  );
}

