import Image from "next/image";
import Header from "./components/Header";
import Info from "./components/Info";
import DirectionsAndIngre from "./components/DirectionsAndIngre";
import SubmitBtn from "./components/SubmitBtn";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans text-black">
      <main>
        <form className="space-y-10">
          <Header />
          <Info />
          <DirectionsAndIngre />
          <SubmitBtn />
        </form>
      </main>
    </div>
  );
}
