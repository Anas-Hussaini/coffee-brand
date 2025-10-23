"use client";

import Image from "next/image";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/cart-context";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="capitalize">
            {product.roast}
          </Badge>
        </div>
      </div>
      <CardHeader className="flex-grow">
        <CardTitle className="line-clamp-1">{product.name}</CardTitle>
        <CardDescription className="line-clamp-2">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{product.origin}</p>
            <p className="text-sm text-muted-foreground capitalize">
              {product.category}
            </p>
          </div>
          <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => addToCart(product)}
          className="w-full"
          disabled={!product.inStock}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </CardFooter>
    </Card>
  );
}

