import Image from "next/image";
import Spotlight from "@/components/Spotlight";
import SectionNav from "@/components/SectionNav";
import { ArrowUpRight, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { about, experience, profile, projects } from "@/data/content";

const socialIcon: Record<string, React.ReactNode> = {
  GitHub: <GitHubIcon />,
  LinkedIn: <LinkedInIcon />,
};

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  // Sticky label on mobile/tablet; visually hidden on desktop where the left nav takes over.
  return (
    <div className="sticky top-0 z-20 -mx-6 mb-4 bg-bg/80 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
      <h2 id={`${id}-heading`} className="text-sm font-bold uppercase tracking-widest text-fg">
        {children}
      </h2>
    </div>
  );
}

function TechList({ items, label }: { items: string[]; label: string }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2" aria-label={label}>
      {items.map((t) => (
        <li
          key={t}
          className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium leading-5 text-accent"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-2 text-sm">
      {items.map((b) => (
        <li key={b} className="relative pl-4 before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-subtle">
          {b}
        </li>
      ))}
    </ul>
  );
}

const cardClass =
  "group relative grid gap-2 rounded-lg p-0 transition-all motion-reduce:transition-none sm:grid-cols-8 sm:gap-6 lg:-mx-5 lg:p-5 lg:hover:bg-surface/70 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,161,178,0.1)] lg:group-hover/list:opacity-50 lg:hover:!opacity-100 lg:focus-within:bg-surface/70 lg:focus-within:!opacity-100";

export default function Home() {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-bg"
      >
        Skip to content
      </a>
      <Spotlight />

      <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left column */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <Image
                src="/headshot.jpg"
                alt="Portrait of Carson Christensen"
                width={112}
                height={112}
                priority
                className="mb-6 h-24 w-24 rounded-full object-cover ring-2 ring-accent/40 ring-offset-4 ring-offset-bg sm:h-28 sm:w-28 lg:h-24 lg:w-24"
              />
              <h1 className="text-4xl font-bold tracking-tight text-fg sm:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-3 text-lg font-medium tracking-tight text-fg sm:text-xl">{profile.title}</p>
              <p className="mt-4 max-w-xs">{profile.tagline}</p>
              <SectionNav />
            </div>

            <ul className="mt-8 flex items-center gap-5" aria-label="Social links">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${s.label} (opens in a new tab)`}
                    className="block text-muted transition-colors hover:text-fg"
                  >
                    {socialIcon[s.label]}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  className="block text-muted transition-colors hover:text-fg"
                >
                  <MailIcon />
                </a>
              </li>
            </ul>
          </header>

          {/* Right column */}
          <main id="content" tabIndex={-1} className="pt-24 outline-none lg:w-1/2 lg:py-24">
            <section id="about" aria-labelledby="about-heading" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <SectionHeading id="about">About</SectionHeading>
              <div className="space-y-4">
                {about.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>

            <section id="experience" aria-labelledby="experience-heading" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <SectionHeading id="experience">Experience</SectionHeading>
              <ol className="group/list space-y-12">
                {experience.map((job) => (
                  <li key={job.role}>
                    <article className={cardClass}>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-subtle sm:col-span-2">
                        {job.dates}
                      </p>
                      <div className="sm:col-span-6">
                        <h3 className="font-medium leading-snug text-fg">
                          {job.role}
                          <span className="block text-sm font-normal text-muted">
                            {job.org}
                            {job.location ? ` · ${job.location}` : ""}
                          </span>
                        </h3>
                        <Bullets items={job.bullets} />
                        <TechList items={job.tech} label={`Technologies used at ${job.org}`} />
                      </div>
                    </article>
                  </li>
                ))}
              </ol>
              <a
                href={profile.resumeHref}
                download
                className="group mt-12 inline-flex items-center gap-2 font-semibold text-fg"
              >
                <span className="border-b border-transparent pb-px transition-colors group-hover:border-accent group-focus-visible:border-accent">
                  Download Résumé (PDF)
                </span>
                <DownloadIcon className="h-4 w-4 text-accent transition-transform group-hover:translate-y-0.5 motion-reduce:transition-none" />
              </a>
            </section>

            <section id="projects" aria-labelledby="projects-heading" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <SectionHeading id="projects">Projects</SectionHeading>
              <ol className="group/list space-y-12">
                {projects.map((p, i) => (
                  <li key={p.name}>
                    <article className={cardClass}>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-subtle sm:col-span-2" aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <div className="sm:col-span-6">
                        <h3 className="font-medium leading-snug text-fg">
                          {p.name}
                          <span className="block text-sm font-normal text-muted">{p.subtitle}</span>
                        </h3>
                        <Bullets items={p.bullets} />
                        {(p.github || p.live) && (
                          <ul className="mt-3 flex gap-4 text-sm font-medium" aria-label={`${p.name} links`}>
                            {p.github && (
                              <li>
                                <a href={p.github} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1 text-fg hover:text-accent">
                                  GitHub <ArrowUpRight />
                                  <span className="sr-only">(opens in a new tab)</span>
                                </a>
                              </li>
                            )}
                            {p.live && (
                              <li>
                                <a href={p.live} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1 text-fg hover:text-accent">
                                  Live site <ArrowUpRight />
                                  <span className="sr-only">(opens in a new tab)</span>
                                </a>
                              </li>
                            )}
                          </ul>
                        )}
                        <TechList items={p.tech} label={`Technologies used in ${p.name}`} />
                      </div>
                    </article>
                  </li>
                ))}
              </ol>
            </section>

            <section id="contact" aria-labelledby="contact-heading" className="mb-16 scroll-mt-16 lg:scroll-mt-24">
              <SectionHeading id="contact">Contact</SectionHeading>
              <p className="max-w-md">
                Want to get in touch? Email is the best way to reach me, and my résumé is available below.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-md border border-accent px-5 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent-soft"
                >
                  <MailIcon className="h-4 w-4" /> {profile.email}
                </a>
                <a
                  href={profile.resumeHref}
                  download
                  className="inline-flex items-center gap-2 rounded-md border border-subtle/60 px-5 py-3 text-sm font-semibold text-fg transition-colors hover:border-fg"
                >
                  <DownloadIcon /> Download Résumé
                </a>
              </div>
            </section>

            <footer className="pb-16 text-sm text-subtle sm:pb-0">
              <p>Built with Next.js and Tailwind CSS, deployed on Vercel.</p>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
