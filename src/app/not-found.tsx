import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="shell py-[clamp(96px,16vw,240px)]">
      <h1 className="title-xl">This page isn&rsquo;t here.</h1>
      <p className="lede mt-6">The link may be old, or the address mistyped.</p>
      <Button asChild className="mt-10 h-12 rounded-full px-6">
        <Link href="/">Back to the homepage</Link>
      </Button>
    </section>
  );
}
