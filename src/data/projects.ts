export type Project = {
  slug: string; title: string; location: string; typology: string; status: string;
  category: "Residential" | "Multi-family"; year: string; summary: string;
  brief: string; challenge: string; response: string; facts: { label: string; value: string }[];
  roleNote: string; accent: string;
};

export const projects: Project[] = [
  {
    slug: "avisterra-residence-2", title: "Avisterra Residence 2", location: "Lekki Phase 1, Lagos",
    typology: "Luxury condominium · 18 units", status: "Status to confirm", category: "Multi-family", year: "To be confirmed",
    summary: "A compact urban site becomes the setting for an 18-unit residential development, organised around an elevated ground plane and a sequence of private and shared outdoor spaces.",
    brief: "The proposal accommodates 18 residential units on a 1,009.79 sqm site in Lekki Phase 1. The brief called for a high-quality condominium with resident parking, shared amenities and a clear arrival sequence.",
    challenge: "The central design question was how to accommodate the required residential density, parking and amenity spaces without allowing the building to feel congested or compromising the quality of the ground plane.",
    response: "An elevated stilt arrangement separates much of the parking and service activity from the residential levels. A composed massing strategy, terraces and planter boxes help articulate the building while introducing greenery into the vertical residential environment.",
    facts: [{label:"Site area",value:"1,009.79 sqm"},{label:"Residential units",value:"18"},{label:"Configuration",value:"Ground + 4 floors + penthouse"},{label:"Location",value:"Lekki Phase 1, Lagos"}],
    roleNote: "Individual project responsibilities and contributions will be added after confirmation.", accent:"olive"
  },
  {
    slug: "cc-residence", title: "CC Residence", location: "Cowrie Creek Estate, Ikate, Lagos",
    typology: "Semi-detached residential · 2 homes", status: "Status to confirm", category: "Residential", year: "To be confirmed",
    summary: "A pair of contemporary family homes shaped by privacy, outdoor living and a layered architectural language suited to a waterfront estate setting.",
    brief: "The project is a semi-detached twin residential development on an 830.29 sqm site within Cowrie Creek Estate, Ikate. The brief brings together generous family living spaces, private outdoor areas and a distinct identity for each home within a coherent pair.",
    challenge: "The design needed to balance the visual unity of the two homes with privacy between households, while making the most of the site's dimensions and the relationship between interior spaces and the rear garden.",
    response: "A three-level composition, perforated breeze-block screens and a private rear pool create layers of privacy and shade. The screens give the façade depth while moderating views and daylight.",
    facts: [{label:"Site area",value:"830.29 sqm"},{label:"Development",value:"Semi-detached twin homes"},{label:"Configuration",value:"Ground + first + penthouse / sky terrace"},{label:"Location",value:"Cowrie Creek Estate, Ikate"}],
    roleNote: "Individual project responsibilities and contributions will be added after confirmation.", accent:"sand"
  },
  {
    slug: "rainbow-court", title: "Rainbow Court", location: "Lekki Phase 1, Lagos",
    typology: "Multi-family residential", status: "Status to confirm", category: "Multi-family", year: "To be confirmed",
    summary: "A multi-family residential scheme that brings different apartment typologies together through a layered façade and a clear hierarchy of shared and private spaces.",
    brief: "The development combines lower-level duplexes with upper-level maisonettes. Its brief required a varied residential offer supported by communal amenities and a strong architectural identity.",
    challenge: "The project brings together different dwelling types within one building. The design challenge is to maintain privacy, daylight and legibility while coordinating the spatial, structural and building-services requirements of the varied units.",
    response: "A layered façade, deep overhangs and planter terraces help mediate sun and views. The design also considers the transition between private dwellings and shared amenity spaces, including a rooftop pool.",
    facts: [{label:"Typology",value:"Duplexes and maisonettes"},{label:"Key elements",value:"Layered façade and planter terraces"},{label:"Amenity",value:"Rooftop pool"},{label:"Location",value:"Lekki Phase 1, Lagos"}],
    roleNote: "Individual project responsibilities and contributions will be added after confirmation.", accent:"clay"
  },
  {
    slug: "wonderpark-5", title: "Wonderpark 5", location: "Lekki Peninsula Scheme 1, Lagos",
    typology: "Residential development · 17 units", status: "Status to confirm", category: "Multi-family", year: "To be confirmed",
    summary: "A five-level residential proposal for 17 two-bedroom apartments, combining an open arrival level with shared facilities and rooftop leisure spaces.",
    brief: "The proposal accommodates 17 two-bedroom apartments within a five-level building. The wider brief includes parking, concierge, a gym and shared leisure amenities.",
    challenge: "The design has to organise residential access, parking and communal facilities within a compact urban footprint, while giving the building a recognisable identity and maintaining a welcoming ground level.",
    response: "An open pilotis level supports parking and arrival functions. Resident amenities, including a gym and dual infinity pools, extend the programme beyond the apartments, while the façade gives the building a distinct visual rhythm.",
    facts: [{label:"Apartments",value:"17 two-bedroom units"},{label:"Building",value:"Five levels"},{label:"Amenities",value:"Concierge, gym and dual infinity pools"},{label:"Location",value:"Lekki Peninsula Scheme 1"}],
    roleNote: "Individual project responsibilities and contributions will be added after confirmation.", accent:"blue"
  }
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
