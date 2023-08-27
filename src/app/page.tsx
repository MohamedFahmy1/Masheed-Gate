import BestSeller from "@/components/bestseller/BestSeller";
import Landing from "@/components/landing/Landing";
import Latest from "@/components/latest/Latest";
import Products from "@/components/products/Products";
import RestOfPage from "@/components/restOfPage/RestOfPage";
import Trademarks from "@/components/trademarks/Trademarks";

export default function Home() {
  return (
    <main>
      <Landing />
      <Trademarks />
      <Products />
      <BestSeller />
      <Latest />
      <RestOfPage />
    </main>
  );
}
