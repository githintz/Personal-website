// ============================================================
//  SITE DATA  —  edit this file to update your website.
//  No HTML knowledge needed — plain text strings throughout.
//  Use *asterisks* around a word to make it italic.
// ============================================================

const SITE = {

  // ── Identity ──────────────────────────────────────────────
  name:        "Githin Tom Zachariah",
  role:        "Post-Doctoral Researcher",
  institution: "Paul Scherrer Institute, Switzerland",
  email:       "githintz@gmail.com",

  // ── Profile photo ─────────────────────────────────────────
  // Set to a file path, e.g. "images/photo.jpg", or leave null for placeholder.
  photo: "ME.jpeg",

  // ── Bio ───────────────────────────────────────────────────
  // Wrap words in *asterisks* to italicise them.
  bio: "I'm a Post-doctoral researcher at the Paul Scherrer Institute in Switzerland with Dr. Nikolaos I. Prasianakis. I am currently working on a multiscale reactive transport simulation of Fe migration at the Fe-Cement interface due to corrosion. We focus on using machine learning techniques to accelerate speciation calculations and enable simulations of corrosion over very large time-spans. I completed my PhD in Chemical engineering from the University of Limerick, under the supervision of Prof. Dr. Harry Van den Akker, focusing on multiscale modelling of turbulence.",
  // ── Header links (shown as pill buttons in the bio card) ──
  // Set url to null to hide a link.
  links: [
    { label: "CV",             url: "cv.pdf" },
    { label: "Google Scholar", url: "https://scholar.google.com" },
    { label: "Email",          url: "mailto:githintz@gmail.com" },
  ],

  // ── Publications ──────────────────────────────────────────
  // Fields: year, title, authors, venue, doi (use null if none)
  publications: [
    {
      year:    "2025",
      title:   "Modelling the sub-grid scales of turbulent emulsions using Periodic Box Homogeneous Isotropic Turbulence",
      authors: "Zachariah, G. & Van den Akker, H.",
      venue:   "In preparation",
      doi:     null,
    },
    {
      year:    "2025",
      title:   "Novel Lattice Boltzmann approaches to the Euler-Euler equations for two-phase flows",
      authors: "Zachariah, G. & Van den Akker, H.",
      venue:   "In review",
      doi:     null,
    },
    {
      year:    "2023",
      title:   "Representing the Small Scales of Turbulence by Periodic Box Homogeneous Isotropic Turbulence Simulations",
      authors: "Zachariah, G. & Van den Akker, H.",
      venue:   "Flow Turbulence and Combustion",
      doi:     "https://doi.org/10.1007/s10494-023-00497-0",
    },
    {
      year:    "2022",
      title:   "A Mesoscopic Approach for Evaporation in Capillary Porous Media",
      authors: "Panda, D., Paliwal, S., Bhaskaran, S., Zachariah, G., Tsotsas, E., Kharaghani, R. & Surasani, V.",
      venue:   "CRC Press",
      doi:     null,
    },
    {
      year:    "2021",
      title:   "Real-time temperature measurement in stochastic rotation dynamics",
      authors: "Fan, R., Zachariah, G., Padding, J. & Hartkamp, R.",
      venue:   "Physical Review E 104",
      doi:     "https://doi.org/10.1103/PhysRevE.104.034124",
    },
    {
      year:    "2021",
      title:   "On Using Variable Molecular Masses in Multicomponent Lattice Boltzmann Simulations",
      authors: "Van den Akker, H., Donkers, R., Zachariah, G. & Shardt, O.",
      venue:   "Journal of Computational Science 54",
      doi:     "https://doi.org/10.1016/j.jocs.2021.101432",
    },
    {
      year:    "2018",
      title:   "Lattice Boltzmann Simulations for Invasion Patterns during Drying of Capillary Porous Media",
      authors: "Zachariah, G., Panda, D. & Surasani, V.",
      venue:   "Chemical Engineering Science 196",
      doi:     "https://doi.org/10.1016/j.ces.2018.11.003",
    },
    {
      year:    "2018",
      title:   "Simulation of Isothermal Drying of Porous Media using Lattice Boltzmann Method",
      authors: "Zachariah, G. & Surasani, V.K.",
      venue:   "Poster, InterPore 2018, New Orleans, USA",
      doi:     null,
    },
  ],

  // ── Projects ──────────────────────────────────────────────
  projects: [
    {
      title:       "DNS in Large Eddy Simulations",
      description: "PhD project at University of Limerick. Developing a framework for embedding periodic box DNSs in LES, including DNS-informed LES of emulsions using databases. P.I: Prof. Harry Van Den Akker.",
    },
    {
      title:       "Non-isothermal Stochastic Rotation Dynamics",
      description: "Master's thesis at TU Delft. Built a framework for non-isothermal SRD simulations, novel thermal no-slip boundary conditions, and models for adsorption/reaction/desorption with energy transport. P.I: Prof. Dr. Ir Johan Padding.",
    },
    {
      title:       "Reactive Flow in Tubular Reactors",
      description: "Honours project at TU Delft & University of Limerick. Modelled reactive flow with varying molecular weight using a variable speed-of-sound Lattice Boltzmann solver. P.I: Prof.Dr. Ir Harry van den Akker.",
    },
    {
      title:       "Drying of Porous Media via LBM",
      description: "Bachelor's thesis at BITS Pilani. Created a multi-component multi-phase LBM solver for drying in 2D porous media and studied Haines jumps at fluid interfaces. P.I: Prof. Vikranth Surasani.",
    },
  ],

  // ── Photography ───────────────────────────────────────────
  photoHero: {
    title:    "Photography",
    subtitle: "Specialising in landscape, wildlife, and astrophotography.",
    cover:    "",   // optional: path to a hero background image, e.g. "images/hero.jpg"
  },

  // Albums: each has a title, subtitle, optional cover image, and a photos array.
  // Example:
  //   {
  //     title:    "Landscapes",
  //     subtitle: "Chasing light across the horizon",
  //     cover:    "images/landscape-cover.jpg",
  //     photos: [
  //       { src: "images/mountains.jpg", caption: "Dolomites, 2024" },
  //     ]
  //   }
  albums: [],

};
