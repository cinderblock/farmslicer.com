import type { MetaFunction } from "react-router";
import { SITE } from "../site";

export const meta: MetaFunction = () => {
  const title = `${SITE.name}: ${SITE.tagline}`;
  return [
    { title },
    { name: "description", content: SITE.description },
    { tagName: "link", rel: "canonical", href: `${SITE.url}/` },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${SITE.url}/` },
    { property: "og:title", content: title },
    { property: "og:description", content: SITE.description },
    { property: "og:image", content: `${SITE.url}/og.png` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: SITE.description },
    { name: "twitter:image", content: `${SITE.url}/og.png` },
  ];
};

const FEATURES: { title: string; body: string }[] = [
  {
    title: "Slice on the server or in the browser",
    body: "OrcaSlicer's engine, linked into the server and compiled to WebAssembly, so a slice runs wherever there's room. Vendor profiles with their inheritance, per-job overrides, supports, several plates per job.",
  },
  {
    title: "A plate you can work on",
    body: "A 3D view of the printer's bed: add parts, duplicate, fill, arrange across plates, move, rotate and lay a face flat. Overhangs show before you slice, and the preview shows every layer after.",
  },
  {
    title: "Five kinds of printers",
    body: "Bambu Lab, Klipper (Moonraker), OctoPrint, Prusa (PrusaLink) and Elegoo Centauri Carbon, on your network: discovery, live status, AMS trays, sending and following prints, pause and stop, cameras.",
  },
  {
    title: "Run the farm",
    body: "A print queue, projects that count good copies, outcomes for every print, printer pools with their operators, and printers that take the next plate by themselves once the bed is clear.",
  },
  {
    title: "Nothing unchecked reaches a printer",
    body: "Every plate's G-code is read in its firmware's own dialect and run through a model of the printer: moves, temperatures, firmware hazards. Anything unusual waits for an admin.",
  },
  {
    title: "People, not passwords",
    body: "Passkey sign-in, nested groups with shared libraries, quotas, print rules that need approval, guest accounts, and notifications on your phone when a print fails.",
  },
];

const PRINTERS = [
  "Bambu Lab X1, P1, A1, H2, P2S, X2D",
  "Klipper: Voron, RatRig, Sovol, Qidi, Creality K1/K2, ...",
  "Any printer behind OctoPrint",
  "Prusa MK4, MK3.5/3.9, MINI, XL, CORE One",
  "Elegoo Centauri Carbon",
];

export default function Home() {
  const run = [
    "docker run -d --name farmslicer --network host \\",
    "  -e FARMSLICER_ORIGINS=https://farm.example.com \\",
    "  -v farmslicer_data:/app/data \\",
    `  ${SITE.image}:latest`,
  ].join("\n");
  return (
    <>
      <main>
        <section className="hero container">
          <img
            className="logo"
            src="/favicon.svg"
            alt=""
            width={112}
            height={112}
          />
          <h1>{SITE.name}</h1>
          <p className="subtitle">{SITE.tagline}</p>
          <p className="intro">
            An open-source slicer and print-farm manager you host yourself, for
            a makerspace, a classroom or a small print farm.
          </p>
          <div className="actions">
            {SITE.demoLive ? (
              <a className="cta" href={SITE.demo}>
                Try the demo
              </a>
            ) : (
              <span className="cta cta-soon" aria-disabled="true">
                Demo coming soon
              </span>
            )}
            <a className="cta cta-secondary" href={SITE.repo}>
              Source on GitHub
            </a>
          </div>
        </section>

        <section className="container features" aria-label="Features">
          {FEATURES.map((f) => (
            <article key={f.title} className="feature">
              <h2>{f.title}</h2>
              <p>{f.body}</p>
            </article>
          ))}
        </section>

        <section className="container band">
          <h2>Printers</h2>
          <ul className="printers">
            {PRINTERS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <p className="note">
            What has been tried on real hardware, and what only against
            simulators, is{" "}
            <a href={`${SITE.repo}/blob/master/issues/untested-printers.md`}>
              tracked in the repository
            </a>
            .
          </p>
        </section>

        <section className="container band">
          <h2>Run it yourself</h2>
          <p>
            One container. Host networking lets it discover printers on your
            network; set the address people will open it at.
          </p>
          <pre>
            <code>{run}</code>
          </pre>
          <p className="note">
            Configuration, remote access and building from source are in the{" "}
            <a href={`${SITE.repo}#running-it`}>README</a>.
          </p>
        </section>

        <section className="container band">
          <h2>Open source</h2>
          <p>
            {SITE.name} is free software under the{" "}
            <a href={`${SITE.repo}/blob/master/LICENSE`}>{SITE.license}</a>{" "}
            license, built on{" "}
            <a href="https://github.com/SoftFever/OrcaSlicer">OrcaSlicer</a>
            's libslic3r. Read it, run it, change it, and share what you change.
          </p>
        </section>
      </main>
      <footer className="container footer">
        <p>
          <a href={SITE.repo}>GitHub</a> ·{" "}
          <a href={`${SITE.repo}/issues`}>Issues</a> · {SITE.license}
        </p>
        <p className="note">
          {SITE.name} is an independent project, not affiliated with OrcaSlicer,
          Bambu Lab, Prusa Research, Elegoo, Klipper or OctoPrint.
        </p>
      </footer>
    </>
  );
}
