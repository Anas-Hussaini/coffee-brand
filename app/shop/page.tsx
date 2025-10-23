"use client";

import { useState, useMemo } from "react";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function ShopPage() {
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [roastFilter, setRoastFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Apply category filter
    if (categoryFilter !== "all") {
      filtered = filtered.filter((p) => p.category === categoryFilter);
    }

    // Apply roast filter
    if (roastFilter !== "all") {
      filtered = filtered.filter((p) => p.roast === roastFilter);
    }

    // Apply sorting
    const sorted = [...filtered];
    switch (sortBy) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "featured":
      default:
        sorted.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
    }

    return sorted;
  }, [categoryFilter, roastFilter, sortBy]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Our Coffee Collection</h1>
        <p className="text-muted-foreground text-lg">
          Explore our premium selection of coffee from around the world
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-4">
        <Tabs value={categoryFilter} onValueChange={setCategoryFilter}>
          <TabsList>
            <TabsTrigger value="all">All Coffee</TabsTrigger>
            <TabsTrigger value="beans">Beans</TabsTrigger>
            <TabsTrigger value="ground">Ground</TabsTrigger>
            <TabsTrigger value="instant">Instant</TabsTrigger>
            <TabsTrigger value="pods">Pods</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex flex-wrap gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Roast Level</label>
            <Select value={roastFilter} onValueChange={setRoastFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Roasts" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roasts</SelectItem>
                <SelectItem value="light">Light Roast</SelectItem>
                <SelectItem value="medium">Medium Roast</SelectItem>
                <SelectItem value="dark">Dark Roast</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Sort By</label>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="name">Name: A to Z</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAndSortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredAndSortedProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No products found matching your filters.
          </p>
        </div>
      )}
    </div>
  );
}

