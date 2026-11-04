"use client";
import { useMemo, useState } from "react";
import { Header, Footer, ProjectCard, SectionLabel } from "../components";
import { projects } from "@/data/projects";
export default function ProjectsPage(){
 const [filter,setFilter]=useState("All");
 const filtered=useMemo(()=>filter==="All"?projects:projects.filter(p=>p.category===filter),[filter]);
 return <><Header/><main className="wrap"><section className="page-intro"><SectionLabel>Selected work / 2022—2026</SectionLabel><h1>Projects.</h1><p>A selection of residential projects and architectural explorations. Each project page brings together the brief, the design problem and the response. Project imagery and technical material will be added as the portfolio is developed.</p></section><div className="section-head"><div className="kicker">{filtered.length.toString().padStart(2,"0")} projects</div><div className="filters">{["All","Residential","Multi-family"].map(x=><button key={x} className={filter===x?"filter active":"filter"} onClick={()=>setFilter(x)}>{x}</button>)}</div></div><div className="projects" style={{paddingBottom:110}}>{filtered.map(p=><ProjectCard key={p.slug} project={p}/>)}</div></main><Footer/></>
}
