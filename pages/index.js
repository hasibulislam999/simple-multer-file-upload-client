import Head from "next/head";
import { Toaster } from "react-hot-toast";
import PhoneContent from "../components/phone.content";
import Phone from "../components/phone.mockup";
import WindowContent from "../components/window.content";
import Window from "../components/window.mockup";

export default function Home() {
  return (
    <section className="p-4">
      <Head>
        <title>Simple Multer File Upload</title>
        <meta
          name="description"
          content="Generated by simple multer file upload"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          {/* content for mockup phone */}
          <Phone>
            <PhoneContent />
          </Phone>

          {/* content for mockup window */}
          <Window>
            <WindowContent />
          </Window>
        </section>
      </main>
      <Toaster position="bottom-left" reverseOrder={false} />
    </section>
  );
}
