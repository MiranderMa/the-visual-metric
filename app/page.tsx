import ScaledFrame from "./ui/scaled-frame";

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

const ExternalLinkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-4 w-4"
  >
    <path d="M14 5h5v5" />
    <path d="M10 14 19 5" />
    <path d="M19 13v6H5V5h6" />
  </svg>
);

/* =========================================================
   DASHBOARD LINKS
========================================================= */

// Estately lives inside this website: the files sit in public/estately/
const ESTATELY_DASHBOARD = "/estately/index.html";

const PERFORMANCE_DASHBOARD =
  "https://app.powerbi.com/view?r=eyJrIjoiMWIwNGJkOWQtYzZmMy00OTljLTg0OTQtNTM4NzAzOTQ0N2NjIiwidCI6ImM1ZjU2YjY5LTFkZWMtNGNiNS05YzAxLWY4NzUyZWUxN2RkNyJ9";

const CUSTOM_VISUAL_DASHBOARD =
  "https://app.fabric.microsoft.com/view?r=eyJrIjoiODUzNmNjZTMtNDUxZi00YjljLWFiNTEtOWU5ODljZDkxNDgzIiwidCI6ImM1ZjU2YjY5LTFkZWMtNGNiNS05YzAxLWY4NzUyZWUxN2RkNyJ9";

const EXC_DASHBOARD =
  "https://app.powerbi.com/view?r=eyJrIjoiOGZjOGEyOTMtZGRlOS00YTFhLWI2ZDMtZWZlNzllNTk5OGExIiwidCI6ImM1ZjU2YjY5LTFkZWMtNGNiNS05YzAxLWY4NzUyZWUxN2RkNyJ9";

const VISUAL_INSIGHTS_DASHBOARD =
  "https://app.fabric.microsoft.com/view?r=eyJrIjoiMTg0M2FkOTUtMThhZC00MGNlLThkYmQtMTFjMDE4MDQ4NDM0IiwidCI6ImM1ZjU2YjY5LTFkZWMtNGNiNS05YzAxLWY4NzUyZWUxN2RkNyJ9";

const NEW_DASHBOARD =
  "https://app.fabric.microsoft.com/view?r=eyJrIjoiN2JkMjNmMmMtMDFhNC00Yzc2LTliOGItMWZjOGFhOTNiMzdkIiwidCI6ImM1ZjU2YjY5LTFkZWMtNGNiNS05YzAxLWY4NzUyZWUxN2RkNyJ9";

const LATEST_DASHBOARD =
  "https://app.powerbi.com/view?r=eyJrIjoiZDAyZDZmNTgtYjBmOS00MWFlLTk1YjUtNDI4ZGFjNjI1N2NmIiwidCI6ImM1ZjU2YjY5LTFkZWMtNGNiNS05YzAxLWY4NzUyZWUxN2RkNyJ9";

/* =========================================================
   DASHBOARD CARDS
========================================================= */

const dashboardCards = [
  {
    id: "estately",
    title: "Estately Property Dashboard",
    description:
      "A custom-built interactive dashboard tracking a year of property sales: prices, pipeline, buyer mix and top agents.",
    type: "Full Dashboard",
    category: "Real Estate Analytics",
    date: "Nov 2026",
    url: ESTATELY_DASHBOARD,
    // Shown as a shrunken desktop view in the card preview
    scaledPreview: true,
  },
  {
    id: "latest-dashboard",
    title: "Operational Insights Dashboard",
    description:
      "An interactive Power BI report bringing together key operational metrics, trends and drivers in one clear view.",
    type: "Full Dashboard",
    category: "Operational Analytics",
    date: "Oct 2026",
    url: LATEST_DASHBOARD,
  },
  {
    id: "exc",
    title: "EXC Dashboard",
    description:
      "An executive-focused Power BI dashboard providing a clear view of key performance metrics, trends and operational insights.",
    type: "Full Dashboard",
    category: "Executive Reporting",
    date: "Sep 2026",
    url: EXC_DASHBOARD,
  },
  {
    id: "performance",
    title: "Performance Overview",
    description:
      "An interactive Power BI experience designed to turn performance data into clear, accessible business insights.",
    type: "Full Dashboard",
    category: "Performance Analytics",
    date: "Sep 2026",
    url: PERFORMANCE_DASHBOARD,
  },
  {
    id: "custom-visual",
    title: "Custom Visual Analytics",
    description:
      "An interactive dashboard combining custom visuals, analytical storytelling and thoughtful data design.",
    type: "Full Dashboard",
    category: "Custom Visuals",
    date: "Sep 2026",
    url: CUSTOM_VISUAL_DASHBOARD,
  },
  {
    id: "visual-insights",
    title: "Visual Insights Dashboard",
    description:
      "A visual analytics experience designed to transform detailed information into clear interactive insights.",
    type: "Full Dashboard",
    category: "Visual Analytics",
    date: "Sep 2026",
    url: VISUAL_INSIGHTS_DASHBOARD,
  },
  {
    id: "new-dashboard",
    title: "Interactive Analytics Dashboard",
    description:
      "An interactive Power BI report presenting key metrics, patterns and insights through clear visual analysis.",
    type: "Full Dashboard",
    category: "Data Analytics",
    date: "Sep 2026",
    url: NEW_DASHBOARD,
  },
];

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-white text-[#1A1A1A]">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="sticky top-0 z-50 bg-[#111111] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-4">
            <div className="flex items-end gap-[3px]">
              <span className="h-4 w-[5px] bg-[#525252]" />
              <span className="h-6 w-[5px] bg-[#737373]" />
              <span className="h-8 w-[5px] bg-[#A3A3A3]" />
              <span className="h-10 w-[5px] bg-[#FFFFFF]" />
            </div>

            <div>
              <h1 className="text-xl font-medium tracking-tight">
                The Visual Metric
              </h1>

              <p className="mt-1 text-[9px] tracking-[0.28em] text-[#A3A3A3]">
                DATA · DESIGN · IMPACT
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a
              href="#home"
              className="border-b border-[#A3A3A3] pb-1"
            >
              Home
            </a>

            <a
              href="#dashboards"
              className="transition hover:text-[#A3A3A3]"
            >
              Full Dashboards
            </a>

            <a
              href="#visuals"
              className="transition hover:text-[#A3A3A3]"
            >
              Custom Visuals
            </a>
          </nav>
        </div>
      </header>

      {/* =====================================================
          FULL DASHBOARDS
      ===================================================== */}
      <section
        id="dashboards"
        className="bg-[#FAFAFA] px-6 py-6 md:py-8"
      >
        <div className="mx-auto max-w-6xl">
          {/* SECTION HEADER */}
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-xs tracking-[0.35em] text-[#77777D]">
                FEATURED WORK
              </p>

              <h2 className="mt-1 text-2xl font-normal tracking-[-0.03em] text-[#1A1A1A] md:text-3xl">
                Explore Dashboards
              </h2>
            </div>

            <a
              href="#all-projects"
              className="hidden items-center gap-3 text-xs font-semibold tracking-[0.12em] text-[#111111] md:flex"
            >
              VIEW ALL
              <span className="text-lg">→</span>
            </a>
          </div>

          {/* =================================================
              LATEST / FEATURED DASHBOARD
          ================================================= */}
          <article className="mb-5 flex flex-col overflow-hidden border border-[#E5E5E5] bg-white lg:flex-row">
            {/* Details: a narrow column beside the dashboard */}
            <div className="flex flex-col gap-4 border-b border-[#EEEEEE] p-5 lg:w-[280px] lg:shrink-0 lg:border-b-0 lg:border-r">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.28em] text-[#111111]">
                  LATEST DASHBOARD
                </p>

                <h3 className="mt-2 text-xl font-medium tracking-[-0.02em]">
                  Estately Property Dashboard
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#707078]">
                  A custom-built interactive dashboard tracking a year of
                  property sales: prices, pipeline, buyer mix and top agents.
                </p>

                <p className="mt-3 text-xs leading-5 text-[#8A8A90]">
                  Filter by property type, period, region, bedrooms, buyer
                  type and agency, or click a month, buyer group or agent to
                  drill in. Built with HTML and Apache ECharts.
                </p>
              </div>

              <div className="flex flex-col gap-2 text-xs text-[#6B6B73]">
                <div className="flex items-center gap-2">
                  <FolderIcon />
                  <span>Full Dashboard</span>
                </div>

                <div className="flex items-center gap-2">
                  <TagIcon />
                  <span>Real Estate Analytics</span>
                </div>

                <div className="flex items-center gap-2">
                  <CalendarIcon />
                  <span>Nov 2026</span>
                </div>
              </div>

              <a
                href={ESTATELY_DASHBOARD}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex w-fit items-center gap-3 bg-[#111111] px-5 py-3 text-[11px] font-semibold tracking-[0.14em] text-white transition hover:bg-[#404040]"
              >
                OPEN FULL SCREEN
                <ExternalLinkIcon />
              </a>
            </div>

            {/* The whole desktop dashboard, shrunk to fit the box */}
            <div className="min-w-0 flex-1">
              <ScaledFrame
                src={ESTATELY_DASHBOARD}
                title="Estately Property Dashboard"
              />
            </div>
          </article>

          {/* =================================================
              DASHBOARD GRID
          ================================================= */}
          <div
            id="all-projects"
            className="grid gap-5 md:grid-cols-2"
          >
            {/* Estately is already featured above, so skip it here */}
            {dashboardCards
              .filter((project) => project.id !== "estately")
              .map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden border border-[#E5E5E5] bg-white p-3 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-white">
                  {project.scaledPreview ? (
                    // Render at desktop size, then shrink, so the preview
                    // shows the full dashboard layout instead of the phone one.
                    <ScaledFrame
                      src={project.url}
                      title={project.title}
                      baseHeight={810}
                      interactive={false}
                      lazy
                    />
                  ) : (
                    <iframe
                      src={project.url}
                      title={project.title}
                      className="pointer-events-none absolute inset-0 h-full w-full border-0 bg-white"
                      tabIndex={-1}
                    />
                  )}

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute inset-0 z-20 flex items-center justify-center bg-[#111111]/0 opacity-0 transition duration-300 group-hover:bg-[#111111]/45 group-hover:opacity-100"
                  >
                    <span className="inline-flex items-center gap-2 bg-white px-5 py-3 text-[10px] font-semibold tracking-[0.15em] text-[#111111]">
                      VIEW DASHBOARD
                      <ExternalLinkIcon />
                    </span>
                  </a>
                </div>

                <h3 className="mt-4 text-xl font-medium tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-2 min-h-[60px] text-sm leading-6 text-[#707078]">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[#EEEEEE] pt-4 text-xs text-[#6B6B73]">
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

                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.14em] text-[#111111]"
                >
                  VIEW FULL DASHBOARD
                  <ExternalLinkIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CUSTOM VISUALS
      ===================================================== */}
      <section
        id="visuals"
        className="border-y border-[#EEEEEE] bg-white px-6 py-10"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.35em] text-[#6F6F6F]">
            CUSTOM VISUALS
          </p>

          <h2 className="mt-2 text-2xl font-normal tracking-[-0.03em] text-[#111111] md:text-3xl">
            Designed beyond the defaults.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-[#6F6F6F]">
            Custom Power BI visuals, Deneb experiments and dashboard components
            created to make information clearer, more engaging and more
            memorable.
          </p>

          <article className="mt-8 overflow-hidden border border-[#E5E5E5] bg-white">
            <div className="border-b border-[#EEEEEE] px-6 py-5">
              <p className="text-[10px] font-semibold tracking-[0.28em] text-[#111111]">
                CUSTOM VISUAL FEATURE
              </p>

              <div className="mt-2 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <h3 className="text-2xl font-medium">
                    Custom Visual Analytics
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[#707078]">
                    A showcase of custom Power BI visual design, interactive
                    analysis and data storytelling.
                  </p>
                </div>

                <a
                  href={CUSTOM_VISUAL_DASHBOARD}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-3 text-xs font-semibold tracking-[0.12em] text-[#111111]"
                >
                  OPEN PROJECT
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>

            <div className="relative h-[55vh] min-h-[480px] overflow-hidden bg-white">
              <iframe
                src={CUSTOM_VISUAL_DASHBOARD}
                title="Custom Visual Analytics"
                className="absolute inset-0 h-full w-full border-0 bg-white"
                allowFullScreen
              />
            </div>
          </article>

          <div className="mt-6 grid gap-5 md:grid-cols-4">
            {[1, 2, 3, 4].map((slot) => (
              <div
                key={slot}
                className="flex aspect-square items-center justify-center border border-[#EEEEEE] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#111111]"
              >
                <span className="text-sm text-[#8A8A90]">Coming soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer
        id="contact"
        className="bg-[#111111] px-6 py-9 text-white"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-end gap-[3px]">
              <span className="h-4 w-[5px] bg-[#525252]" />
              <span className="h-6 w-[5px] bg-[#737373]" />
              <span className="h-8 w-[5px] bg-[#A3A3A3]" />
              <span className="h-10 w-[5px] bg-[#FFFFFF]" />
            </div>

            <div>
              <h3 className="text-xl">
                The Visual Metric
              </h3>

              <p className="mt-1 text-[9px] tracking-[0.28em] text-[#A3A3A3]">
                DATA · DESIGN · IMPACT
              </p>
            </div>
          </div>

          <div className="md:text-center">
            <p className="text-base">
              Data Stories, Beautifully Told.
            </p>

            <p className="mt-1 text-xs text-[#A3A3A3]">
              Turning data into meaningful stories through beautiful dashboards
              and thoughtful visuals.
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="transition hover:text-[#A3A3A3]"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="transition hover:text-[#A3A3A3]"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
