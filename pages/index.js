import Head from "next/head";
import { Container } from "../components/Container";

// A Smart Component from Framer
import Player from "https://framer.com/m/Player-9OhH.js@c6FijxheZrXfJDcI3ekC";

export default function Home() {
  return (
    <>
      <Head>
        <title>Flipbook Mobile</title>
        <meta name="description" content="Modules" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container>
        <Player />
      </Container>
    </>
  );
}
