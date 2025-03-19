"use client";

import Header from "@/components";

const HomeVideo = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BRALyJ1ikUM?si=2eILIO6FJJpwtESF"
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // referrerpolicy="strict-origin-when-cross-origin"
          // allowfullscreen
        ></iframe>
      </main>
    </>
  );
};

export default HomeVideo;
