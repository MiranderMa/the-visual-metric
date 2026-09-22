const FolderIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    className="h-4 w-4"
  >
    <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5H9l2 2h8.5A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5z" />
  </svg>
);

const TagIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    className="h-4 w-4"
  >
    <path d="M20 13 13 20l-9-9V4h7z" />
    <circle cx="8.5" cy="8.5" r="1" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    className="h-4 w-4"
  >
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M8 3v4M16 3v4M3 10h18" />
  </svg>
);

const YouTubeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M23 12s0-3.4-.43-5.04a2.95 2.95 0 0 0-2.08-2.08C18.85 4.45 12 4.45 12 4.45s-6.85 0-8.49.43A2.95 2.95 0 0 0 1.43 6.96C1 8.6 1 12 1 12s0 3.4.43 5.04a2.95 2.95 0 0 0 2.08 2.08c1.64.43 8.49.43 8.49.43s6.85 0 8.49-.43a2.95 2.95 0 0 0 2.08-2.08C23 15.4 23 12 23 12Zm-13.2 3.2V8.8l5.8 3.2z" />
  </svg>
);

const projects = [
  {
    id: 1,
    title: "A Greener Tomorrow",
    description:
      "An interactive dashboard exploring global sustainability trends and progress.",
    type: "Full Dashboard",
    category: "Environment",
    date: "Jan 2026",
    bg: "bg-[#EAF1EB]",
  },
  {
    id: 2,
    title: "Cities in Focus",
    description:
      "Visualizing how cities grow, move and thrive around the world.",
    type: "Full Dashboard",
    category: "Society",
    date: "Dec 2025",
    bg: "bg-[#EDF2F4]",
  },
  {
    id: 3,
    title: "The Creative Economy",
    description:
      "A data story celebrating the people and industries behind creative work.",
    type: "Full Dashboard",
    category: "Economy",
    date: "Nov 2025",
    bg: "bg-[#241A22]",
  },
  {
    id: 4,
    title: "Healthier Lives",
    description:
      "Exploring global health trends and what helps people live longer, healthier lives.",
    type: "Full Dashboard",
    category: "Health",
    date: "Oct 2025",
    bg: "bg-[#EAF2F2]",
  },
  {
    id: 5,
    title: "Education Matters",
    description:
      "A global view of education, access and opportunity through data.",
    type: "Custom Visual",
    category: "Education",
    date: "Sep 2025",
    bg: "bg-[#F4EFE7]",
  },
  {
    id: 6,
    title: "A Healthier Planet",
    description:
      "An interactive look at our changing planet and the path toward a more resilient future.",
    type: "Full Dashboard",
    category: "Climate",
    date: "Aug 2025",
    bg: "bg-[#111D29]",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      {/* HEADER */}
      <header className="bg-[#20201D] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          {/* LOGO */}
          <div className="flex items-center gap-4">
            <div className="flex items-end gap-[3px]">
              <span className="h-4 w-[5px] bg-[#DCC9B6]" />
              <span className="h-6 w-[5px] bg-[#B79E89]" />
              <span className="h-8 w-[5px] bg-[#876956]" />
              <span className="h-10 w-[5px] bg-[#5A4638]" />
            </div>

            <div>
              <h1 className="text-xl font-medium tracking-tight">
                The Visual Metric
              </h1>
              <p className="mt-1 text-[9px] tracking-[0.28em] text-[#DCC9B6]">
                DATA · DESIGN · IMPACT
              </p>
            </div>
          </div>

          {/* NAV */}
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a
              href="#home"
              className="border-b border-[#DCC9B6] pb-1"
            >
              Home
            </a>

            <a
              href="#dashboards"
              className="transition hover:text-[#DCC9B6]"
            >
              Full Dashboards
            </a>

            <a
              href="#visuals"
              className="transition hover:text-[#DCC9B6]"
            >
              Custom Visuals
            </a>

            <a
              href="#about"
              className="transition hover:text-[#DCC9B6]"
            >
              About Me
            </a>

            <a
              href="https://youtube.com/@powerbiwithmimi"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#DCC9B6]"
            >
              YouTube
            </a>

            <a
              href="#contact"
              className="transition hover:text-[#DCC9B6]"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="mx-auto grid max-w-7xl gap-8 border-b border-[#E7E7E3] px-6 py-14 md:grid-cols-[1.05fr_0.95fr] md:py-20"
      >
        <div className="flex flex-col justify-center">
          <p className="mb-6 text-xs tracking-[0.38em] text-[#696969]">
            DATA · DESIGN · HUMAN STORIES
          </p>

          <h2 className="max-w-2xl text-5xl font-normal leading-[0.98] tracking-[-0.04em] md:text-7xl">
            Data Stories,
            <br />
            <span className="text-[#5A4638]">Beautifully</span> Told.
          </h2>

          <p className="mt-7 max-w-xl text-xl leading-relaxed text-[#60606B]">
            Turning data into meaningful stories through beautiful dashboards
            and thoughtful visuals.
          </p>

          <div className="my-7 h-px w-12 bg-[#5A4638]" />

          <p className="max-w-lg text-base leading-7 text-[#66666F]">
            I create data visualizations that inform, inspire and make complex
            information feel human.
          </p>

          <div className="mt-9">
            <a
              href="#dashboards"
              className="inline-flex items-center gap-8 bg-[#5A4638] px-7 py-4 text-xs font-semibold tracking-[0.18em] text-white transition hover:bg-[#47372C]"
            >
              EXPLORE WORK
              <span className="text-lg font-light">→</span>
            </a>
          </div>
        </div>

        {/* HERO IMAGE PLACEHOLDER */}
        <div className="relative min-h-[430px] overflow-hidden bg-[#F2F1EE]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-xs tracking-[0.28em] text-[#8F8F8F]">
                HERO IMAGE
              </p>
              <p className="mt-3 text-sm text-[#9A9A9A]">
                Editorial image will go here
              </p>
            </div>
          </div>

          <div className="absolute right-5 top-8 text-[10px] leading-6 tracking-[0.32em] text-[#6F6F6F]">
            INSIGHTS
            <br />
            CREATE
            <br />
            A BRIGHTER
            <br />
            TOMORROW
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="dashboards" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs tracking-[0.35em] text-[#6F6F6F]">
                FEATURED WORK
              </p>

              <h2 className="mt-2 text-4xl font-normal tracking-[-0.03em] text-[#5A4638] md:text-5xl">
                Latest Projects
              </h2>
            </div>

            <a
              href="#"
              className="hidden border-b border-[#5A4638] pb-1 text-xs font-semibold tracking-[0.12em] md:block"
            >
              VIEW ALL PROJECTS →
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="border border-[#E0E0DC] bg-white p-3 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* DASHBOARD PLACEHOLDER */}
                <div
                  className={`flex aspect-[16/9] items-center justify-center ${project.bg}`}
                >
                  <span
                    className={`text-xs tracking-[0.18em] ${
                      project.id === 3 || project.id === 6
                        ? "text-white/70"
                        : "text-[#777]"
                    }`}
                  >
                    PROJECT IMAGE
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-medium tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-[#707078]">
                  {project.description}
                </p>

                {/* METADATA ICONS */}
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[#EFEFEB] pt-4 text-xs text-[#6B6B73]">
                  <div className="flex items-center gap-2">
                    <FolderIcon />
                    <span>{project.type}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <TagIcon />
                    <span>{project.category}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarIcon />
                    <span>{project.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM VISUALS */}
      <section
        id="visuals"
        className="border-y border-[#E7E7E3] bg-white px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.35em] text-[#6F6F6F]">
            CUSTOM VISUALS
          </p>

          <h2 className="mt-3 text-4xl font-normal tracking-[-0.03em] text-[#5A4638] md:text-5xl">
            Designed beyond the defaults.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-[#6F6F6F]">
            Custom Power BI visuals, Deneb experiments and dashboard components
            designed to make information clearer and more engaging.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {["KPI Cards", "Pareto", "Deneb", "Cohort"].map((visual) => (
              <div
                key={visual}
                className="flex aspect-square items-center justify-center border border-[#E7E7E3] bg-[#FAFAF8] transition hover:border-[#5A4638]"
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
          <div className="flex flex-col justify-center">
            <p className="text-xs tracking-[0.35em] text-[#6F6F6F]">
              LEARN WITH MIMI
            </p>

            <h2 className="mt-3 text-4xl font-normal tracking-[-0.03em] text-[#5A4638] md:text-5xl">
              Power BI with Mimi
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-[#6F6F6F]">
              Practical Power BI tutorials, dashboard walkthroughs, custom
              visuals and data storytelling.
            </p>

            <a
              href="https://youtube.com/@powerbiwithmimi"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-3 bg-[#20201D] px-6 py-4 text-sm text-white transition hover:bg-[#5A4638]"
            >
              <YouTubeIcon />
              Watch on YouTube →
            </a>
          </div>

          <div className="flex min-h-[320px] items-center justify-center border border-[#E7E7E3] bg-white">
            <div className="text-center text-[#8A8A8A]">
              <YouTubeIcon />
              <p className="mt-4 text-sm">Featured YouTube Video</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-[#E7E7E3] bg-white px-6 py-20"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs tracking-[0.35em] text-[#6F6F6F]">
            ABOUT THE VISUAL METRIC
          </p>

          <h2 className="mt-4 text-4xl font-normal text-[#5A4638] md:text-5xl">
            Data. Design. Decisions.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-[#6F6F6F]">
            The Visual Metric is a space for thoughtful dashboard design,
            visual storytelling and practical Power BI learning.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="bg-[#20201D] px-6 py-10 text-white"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-end gap-[3px]">
              <span className="h-4 w-[5px] bg-[#DCC9B6]" />
              <span className="h-6 w-[5px] bg-[#B79E89]" />
              <span className="h-8 w-[5px] bg-[#876956]" />
              <span className="h-10 w-[5px] bg-[#5A4638]" />
            </div>

            <div>
              <h3 className="text-xl">The Visual Metric</h3>
              <p className="mt-1 text-[9px] tracking-[0.28em] text-[#DCC9B6]">
                DATA · DESIGN · IMPACT
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="https://youtube.com/@powerbiwithmimi"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#DCC9B6]"
            >
              YouTube
            </a>

            <a href="#" className="transition hover:text-[#DCC9B6]">
              LinkedIn
            </a>

            <a href="#" className="transition hover:text-[#DCC9B6]">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}