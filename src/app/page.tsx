import Landing from "@/components/landing/Landing";
import Products from "@/components/products/Products";
import Trademarks from "@/components/trademarks/Trademarks";

export default function Home() {
  return (
    <main>
      <Landing />
      <Trademarks />
      <Products />
    </main>
  );
}
