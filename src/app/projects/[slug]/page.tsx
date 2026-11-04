import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Footer, SectionLabel } from "../../components";
import { getProject, projects } from "@/data/projects";
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const project=getProject(slug); if(!project) notFound();
 const index=projects.findIndex(p=>p.slug===slug); const next=projects[(index+1)%projects.length];
 return <><Header/><main className="wrap"><section className="page-intro"><SectionLabel>{project.location} / {project.year}</SectionLabel><h1>{project.title}.</h1><p>{project.typology} · {project.status}</p></section><div className="visual detail-hero"><span className="visual-label">{project.title} / Project imagery to be placed</span></div><section className="detail-grid"><div><SectionLabel>01 / Project overview</SectionLabel><h2>The brief.</h2><p>{project.brief}</p></div><div><SectionLabel>Project snapshot</SectionLabel><div className="facts">{project.facts.map(f=><div className="fact" key={f.label}><span>{f.label}</span><strong>{f.value}</strong></div>)}</div></div></section><section className="detail-grid"><div><SectionLabel>02 / Design challenge</SectionLabel><h2>The problem to solve.</h2></div><p>{project.challenge}</p></section><section className="detail-grid"><div><SectionLabel>03 / Design response</SectionLabel><h2>From constraint to opportunity.</h2></div><p>{project.response}</p></section><section className="detail-grid"><div><SectionLabel>04 / Role & contribution</SectionLabel><h2>My involvement.</h2></div><p>{project.roleNote}</p></section><div className="next-project"><Link className="textlink" href="/projects">← All projects</Link><Link className="textlink" href={`/projects/${next.slug}`}>Next project: {next.title} ↗</Link></div></main><Footer/></>
}
