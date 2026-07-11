import { ArrowRight } from "lucide-react";
import Container from "../../ui/Container";

const CTA = () => {
  return (
    <section className="bg-zinc-950 py-20">
      <Container>
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 py-16 px-8 md:px-12 text-center">
          <h2 className="text-4xl font-bold text-white">
            Ready to Start <span className="text-yellow-400">Learning?</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-400">
            Join thousands of learners and explore programming through
            practical, beginner-friendly playlists.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                document
                  .getElementById("featured-playlists")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              Explore Playlists <ArrowRight size={18} />
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://youtube.com/@auditzone?si=K54tvDQ3L2N5KYo1",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="border border-zinc-700 text-white px-6 py-3 rounded-lg hover:text-yellow-400 transition-colors"
            >
              Visit YouTube
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
