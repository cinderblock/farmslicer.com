// Facts about FarmSlicer that more than one page uses.

export const SITE = {
  name: "FarmSlicer",
  url: "https://farmslicer.com",
  tagline: "Slice and run a 3D print farm from the browser.",
  description:
    "FarmSlicer is an open-source, self-hosted slicer and print-farm manager: OrcaSlicer's engine on your server or in your browser, sending to Bambu Lab, Klipper, OctoPrint, Prusa and Elegoo printers.",
  repo: "https://github.com/cinderblock/FarmSlicer",
  image: "ghcr.io/cinderblock/farmslicer",
  demo: "https://demo.farmslicer.com",
  /** Flip when demo.farmslicer.com is up: until then the page says it's coming. */
  demoLive: false,
  license: "AGPL-3.0-or-later",
} as const;
