export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      {/* HEADER */}
      <header className="bg-[#20201D] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex items-end gap-1">
              <span className="h-4 w-2 bg-[#D7C5A5]"></span>
              <span className="h-6 w-2 bg-[#D7C5A5]"></span>
              <span className="h-8 w-2 bg-[#D7C5A5]"></span>
              <span className="h-10 w-2 bg-[#D7C5A5]"></span>
            </div>

            <div>
              <h1 className="text-xl font-semibold">The Visual Metric</h1>
              <p className="text-xs tracking-[0.22em] text-[#D7C5A5]">
                DATA · DESIGN · IMPACT
              </p>
            </div>
          </div>

          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#home" className="hover:text-[#D7C5A5]">
              Home
            </a>
            <a href="#dashboards" className="hover:text-[#D7C5A5]">
              Full Dashboards
            </a>
            <a href="#visuals" className="hover:text-[#D7C5A5]">
              Custom Visuals
            </a>
            <a href="#about" className="hover:text-[#D7C5A5]">
              About Me
            </a>
            <a
              href="https://youtube.com/@powerbiwithmimi"
              target="_blank"
              className="hover:text-[#D7C5A5]"
            >
              YouTube
            </a>
            <a href="#contact" className="hover:text-[#D7C5A5]">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28"
      >
        <div className="flex flex-col justify-center">
          <p className="mb-5 text-xs tracking-[0.35em] text-[#6F6F6F]">
            DATA · DESIGN · HUMAN STORIES
          </p>

          <h2 className="max-w-xl text-5xl font-medium leading-[0.95] text-[#B99A73] md:text-7xl">
            The Visual Metric
          </h2>

          <p className="mt-8 max-w-xl text-xl leading-relaxed text-[#4F4F4F]">
            Turning data into meaningful stories through beautiful dashboards
            and thoughtful visuals.
          </p>

          <p className="mt-8 max-w-lg text-base leading-7 text-[#6F6F6F]">
            I create data visualizations that inform, inspire and make complex
            information feel human.
          </p>

          <div className="mt-10">
            <a
              href="#dashboards"
              className="inline-flex items-center gap-4 bg-[#D7C5A5] px-6 py-4 text-sm font-semibold tracking-[0.12em] text-[#1A1A1A]"
            >
              EXPLORE WORK
              <span>→</span>
            </a>
          </div>
        </div>

        {/* HERO PLACEHOLDER */}
        <div className="flex min-h-[420px] items-center justify-center border border-[#E7E7E3] bg-white">
          <div className="text-center">
            <p className="text-sm tracking-[0.2em] text-[#9A9A9A]">
              HERO VISUAL
            </p>
            <p className="mt-3 text-sm text-[#6F6F6F]">
              Your future dashboard / editorial image goes here
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="dashboards" className="border-t border-[#E7E7E3] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs tracking-[0.35em] text-[#6F6F6F]">
                FEATURED WORK
              </p>
              <h2 className="mt-3 text-4xl text-[#B99A73] md:text-5xl">
                Latest Projects
              </h2>
            </div>

            <a href="#" className="text-sm">
              View all projects →
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((project) => (
              <article
                key={project}
                className="border border-[#E7E7E3] bg-white p-4"
              >
                <div className="flex aspect-[16/10] items-center justify-center bg-[#F1F1EE]">
                  <span className="text-sm text-[#8A8A8A]">
                    Dashboard Placeholder
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-medium">
                  Project {project}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#6F6F6F]">
                  A future Power BI project and case study will appear here.
                </p>

                <div className="mt-5 flex gap-3 text-xs text-[#6F6F6F]">
                  <span>Power BI</span>
                  <span>•</span>
                  <span>Data Storytelling</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM VISUALS */}
      <section id="visuals" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.35em] text-[#6F6F6F]">
            CUSTOM VISUALS
          </p>

          <h2 className="mt-3 text-4xl text-[#B99A73] md:text-5xl">
            Designed beyond the defaults.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {["KPI Cards", "Pareto", "Deneb", "Cohort"].map((visual) => (
              <div
                key={visual}
                className="flex aspect-square items-center justify-center border border-[#E7E7E3] bg-[#FAFAF8]"
              >
                <span className="text-sm">{visual}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YOUTUBE */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.35em] text-[#6F6F6F]">
              LEARN WITH MIMI
            </p>

            <h2 className="mt-3 text-4xl text-[#B99A73] md:text-5xl">
              Power BI with Mimi
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-[#6F6F6F]">
              Practical Power BI tutorials, dashboard walkthroughs, custom
              visuals and data storytelling.
            </p>

            <a
              href="https://youtube.com/@powerbiwithmimi"
              target="_blank"
              className="mt-8 inline-block bg-[#20201D] px-6 py-4 text-sm text-white"
            >
              Watch on YouTube →
            </a>
          </div>

          <div className="flex min-h-[300px] items-center justify-center border border-[#E7E7E3] bg-white">
            <span className="text-sm text-[#8A8A8A]">
              Featured YouTube Video
            </span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-[#E7E7E3] bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs tracking-[0.35em] text-[#6F6F6F]">
            ABOUT THE VISUAL METRIC
          </p>

          <h2 className="mt-4 text-4xl text-[#B99A73] md:text-5xl">
            Data. Design. Decisions.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-[#6F6F6F]">
            The Visual Metric is a space for thoughtful dashboard design,
            visual storytelling and practical Power BI learning.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#20201D] px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl">The Visual Metric</h3>
            <p className="mt-2 text-xs tracking-[0.2em] text-[#D7C5A5]">
              DATA · DESIGN · IMPACT
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <a
              href="https://youtube.com/@powerbiwithmimi"
              target="_blank"
            >
              YouTube
            </a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}