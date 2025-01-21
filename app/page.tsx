import Hero from "./component/Hero";
import Content from "./component/Content";
import Overview from "./component/Overview";
import Activities from "./component/Activities";
import Community from "./component/Community";
import About from "./component/About";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Activities />
      <Content />
      <Overview />
      <Community />
    </div>
  );
}
