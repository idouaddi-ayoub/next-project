import Hero from "./component/Hero";
import Content from "./component/Content";
import Overview from "./component/Overview";
import Features from "./component/Features";
import Community from "./component/Community";

export default function Home() {
  return (
    <div>
      <Hero />
      <Content />
      <Overview />
      <Features />
      <Community />
    </div>
  );
}
