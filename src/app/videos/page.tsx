import { Metadata } from "next"

import { Section, Container } from "@/components/section"

export const metadata: Metadata = {
  title: "Videos",
  description: "Tutorials and deep dives on Sui development, smart contracts, and blockchain technology.",
}

export default function VideosPage() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Videos
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Tutorials and deep dives on blockchain and smart contract development. 
            Learn by watching and building along.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="aspect-video">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/videoseries?si=hNU6ZX06HtYb2xPA&list=PLJm5g76LAUuree2ABqs8REUxEFCvfor0T"
              title="Sui Move Smart Contract Development Series"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
          
          <div className="aspect-video">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/videoseries?si=xFxqd7lKYmykOxwp&list=PLJm5g76LAUur4YzeloQBcPbO5QMutYiNN"
              title="Enoki Dev Series"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
          
          <div className="aspect-video">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/videoseries?si=DqTJy4EBP7yDB6gf&list=PLJm5g76LAUuoz9XqKp1r9RATIi6_ofpJY"
              title="Walrus Dev Series"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}
