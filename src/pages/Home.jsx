import { Aboutus } from "../components/about-us/Aboutus";
import { Hero } from "../components/hero/Hero";
import { Partner } from "../components/partners/Partner";
import { Header } from "../components/header/Header";

export default function Home(params) {
  return (
    <>
      <Header />
      <Hero />
      <Partner />
      <Aboutus />
    </>
  );
}
