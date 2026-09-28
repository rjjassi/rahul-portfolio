'use client'

import {useEffect,useState} from 'react'
import {ArrowUpRight,CheckCircle2,Cloud,Code2,Container,Database,ExternalLink,Github,Layers3,Linkedin,Mail,Menu,ServerCog,ShieldCheck,Terminal, X} from 'lucide-react'

const skills=[
  {title:'Cloud',desc:'Azure, AKS, Azure DevOps, Azure Monitor',icon:Cloud},
  {title:'Containers',desc:'Kubernetes, Docker, Helm, containerd',icon:Container},
  {title:'IaC',desc:'Terraform, Bicep, Ansible',icon:Code2},
  {title:'DevSecOps',desc:'CI/CD, WAF, SAST/DAST, secrets, TLS',icon:ShieldCheck},
  {title:'Observability',desc:'Prometheus, Grafana, Loki, LangSmith',icon:Database},
  {title:'AI Infrastructure',desc:'GPU VMs, NVIDIA NIM, LLM serving, OpenAI',icon:ServerCog}
]
const projects=[
  {title:'AI Observability Platform',desc:'Enterprise AI observability platform on Azure Kubernetes Service with Helm-managed services, ingress, authentication, object storage and ClickHouse-backed workloads.',tags:['AKS','Helm','LangSmith','Azure','ClickHouse'],icon:Layers3},
  {title:'GPU / LLM Infrastructure',desc:'Cloud infrastructure for GPU-backed inference workloads, including NVIDIA drivers, CUDA, container runtimes and model-serving components.',tags:['NVIDIA','CUDA','A100/H100','NIM','Docker'],icon:ServerCog},
  {title:'Kubernetes AIOps',desc:'Automation and intelligent operational workflows for Kubernetes failure detection, diagnostics, observability and incident response.',tags:['Kubernetes','Python','Prometheus','AI'],icon:Terminal},
  {title:'DevSecOps Platform Automation',desc:'Reusable Azure DevOps pipelines and infrastructure automation for secure, repeatable application and platform delivery.',tags:['Azure DevOps','Terraform','Bicep','Security'],icon:ShieldCheck}
]
const certs=['AZ-900','AZ-104','AZ-305','AZ-400','AI-900']

export default function Home(){
 const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false)
 useEffect(()=>{const f=()=>setScrolled(scrollY>20);addEventListener('scroll',f);return()=>removeEventListener('scroll',f)},[])
 const nav=(id:string)=><a key={id} onClick={()=>setOpen(false)} href={'#'+id} className="text-sm text-slate-300 hover:text-white transition">{id}</a>
 return <main className="min-h-screen overflow-hidden">
  <header className={`fixed top-0 z-50 w-full transition ${scrolled?'glass shadow-lg':'bg-transparent'}`}>
   <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
    <a href="#top" className="font-semibold tracking-tight">RJ<span className="text-sky-400">.</span></a>
    <nav className="hidden items-center gap-7 md:flex">{['about','expertise','projects','experience','contact'].map(nav)}</nav>
    <a href="#contact" className="hidden rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-200 hover:bg-sky-400/20 md:block">Let’s connect</a>
    <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button>
   </div>
   {open&&<div className="glass mx-3 mb-3 rounded-2xl p-4 md:hidden"><div className="flex flex-col gap-4">{['about','expertise','projects','experience','contact'].map(nav)}</div></div>}
  </header>

  <section id="top" className="grid-bg relative flex min-h-[92vh] items-center pt-24">
   <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(56,189,248,.12),transparent_30%),radial-gradient(circle_at_20%_70%,rgba(139,92,246,.10),transparent_30%)]"/>
   <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.3fr_.7fr] lg:items-center">
    <div>
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]"/>Available for engineering conversations</div>
      <p className="mb-4 font-mono text-sm uppercase tracking-[.28em] text-sky-300">DevOps Engineer · Azure · Kubernetes · DevSecOps</p>
      <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">Building <span className="gradient-text">secure, scalable</span> cloud platforms.</h1>
      <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">I’m Rahul Jaiswal — a DevOps / DevSecOps engineer focused on cloud-native platforms, Kubernetes automation, infrastructure as code, observability and AI infrastructure.</p>
      <div className="mt-9 flex flex-wrap gap-3"><a href="#projects" className="group rounded-full bg-sky-400 px-5 py-3 font-semibold text-slate-950 hover:bg-sky-300">Explore my work <ArrowUpRight className="ml-1 inline h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></a><a href="#contact" className="rounded-full border border-slate-700 px-5 py-3 font-semibold text-slate-200 hover:border-slate-500">Get in touch</a></div>
      <div className="mt-10 flex flex-wrap gap-3 text-xs text-slate-500">{['7+ years experience','Azure','Kubernetes','Terraform','AI Infrastructure'].map(x=><span key={x} className="rounded-full border border-slate-800 px-3 py-1.5">{x}</span>)}</div>
    </div>
    <div className="glass scanline relative overflow-hidden rounded-3xl p-6 shadow-glow">
      <div className="mb-5 flex items-center gap-2 text-xs text-slate-500"><span className="h-2.5 w-2.5 rounded-full bg-red-400/70"/><span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70"/><span className="h-2.5 w-2.5 rounded-full bg-green-400/70"/><span className="ml-auto font-mono">rahul@platform:~</span></div>
      <pre className="relative whitespace-pre-wrap font-mono text-sm leading-7 text-slate-300"><span className="text-sky-400">$</span> kubectl get platform<br/><br/><span className="text-slate-500">NAME</span>              <span className="text-slate-500">STATUS</span><br/>azure-platform      <span className="text-emerald-300">Ready</span><br/>k8s-clusters        <span className="text-emerald-300">Healthy</span><br/>observability       <span className="text-emerald-300">Running</span><br/>ai-inference        <span className="text-emerald-300">Online</span><br/><br/><span className="text-sky-400">$</span> echo $FOCUS<br/><span className="text-purple-300">automation + reliability + security</span></pre>
    </div>
   </div>
  </section>

  <section id="about" className="mx-auto max-w-6xl px-5 py-24"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="font-mono text-sm text-sky-400">01 / ABOUT</p><h2 className="mt-3 text-4xl font-bold">Engineer who likes systems that just work.</h2></div><div className="space-y-5 text-lg leading-8 text-slate-400"><p>I work across the space between development, infrastructure and security — turning manual platform operations into repeatable, observable automation.</p><p>My work spans Azure cloud, Kubernetes, CI/CD, infrastructure as code, enterprise networking, identity, observability and GPU-backed AI workloads.</p><p className="text-slate-200">The goal is simple: <span className="text-sky-300">make complex platforms easier to operate.</span></p></div></div></section>

  <section id="expertise" className="border-y border-slate-900 bg-slate-950/40"><div className="mx-auto max-w-6xl px-5 py-24"><p className="font-mono text-sm text-sky-400">02 / EXPERTISE</p><div className="mt-3 flex flex-col justify-between gap-5 md:flex-row"><h2 className="text-4xl font-bold">Technical toolkit</h2><p className="max-w-xl text-slate-400">A practical stack for building, shipping and operating production platforms.</p></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{skills.map(({title,desc,icon:Icon})=><div key={title} className="glass rounded-2xl p-6 hover:-translate-y-1 hover:border-sky-400/20 transition"><div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300"><Icon className="h-5 w-5"/></div><h3 className="font-semibold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{desc}</p></div>)}</div></div></section>

  <section id="projects" className="mx-auto max-w-6xl px-5 py-24"><p className="font-mono text-sm text-sky-400">03 / SELECTED WORK</p><h2 className="mt-3 text-4xl font-bold">Projects & platform work</h2><div className="mt-12 grid gap-5 md:grid-cols-2">{projects.map(p=>{const Icon=p.icon;return <article key={p.title} className="group glass rounded-3xl p-7 transition hover:-translate-y-1 hover:border-sky-400/25"><div className="flex items-start justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-sky-300"><Icon className="h-5 w-5"/></div><ArrowUpRight className="h-5 w-5 text-slate-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-300"/></div><h3 className="mt-7 text-xl font-semibold">{p.title}</h3><p className="mt-3 leading-7 text-slate-400">{p.desc}</p><div className="mt-6 flex flex-wrap gap-2">{p.tags.map(t=><span key={t} className="rounded-full border border-slate-800 px-2.5 py-1 text-xs text-slate-400">{t}</span>)}</div></article>})}</div></section>

  <section id="experience" className="border-y border-slate-900 bg-slate-950/40"><div className="mx-auto max-w-6xl px-5 py-24"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="font-mono text-sm text-sky-400">04 / EXPERIENCE</p><h2 className="mt-3 text-4xl font-bold">Experience & credentials</h2></div><div><div className="relative border-l border-slate-800 pl-7"><div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-sky-400"/><p className="text-xs font-mono uppercase tracking-widest text-slate-500">2022 — Present</p><h3 className="mt-2 text-xl font-semibold">DevOps / DevSecOps Engineering</h3><p className="mt-3 leading-7 text-slate-400">Azure cloud engineering, Kubernetes platforms, CI/CD automation, infrastructure as code, enterprise security and AI platform operations.</p></div><div className="mt-12"><p className="mb-5 font-mono text-sm text-slate-500">CERTIFICATIONS / TRAINING</p><div className="flex flex-wrap gap-3">{certs.map(c=><span key={c} className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm"><CheckCircle2 className="h-4 w-4 text-emerald-400"/>{c}</span>)}</div></div></div></div></div></section>

  <section id="contact" className="relative mx-auto max-w-6xl px-5 py-28"><div className="absolute inset-x-10 top-20 h-40 bg-sky-500/10 blur-3xl"/><div className="glass relative overflow-hidden rounded-3xl p-8 text-center md:p-14"><p className="font-mono text-sm text-sky-400">05 / CONTACT</p><h2 className="mx-auto mt-3 max-w-2xl text-4xl font-bold">Let’s build something reliable.</h2><p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">Interested in DevOps, platform engineering, Kubernetes, cloud infrastructure or AI systems? Let’s connect.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><a href="mailto:your.email@example.com" className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-3 font-semibold text-slate-950"><Mail className="h-4 w-4"/>Email me</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 font-semibold"><Linkedin className="h-4 w-4"/>LinkedIn</a><a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 font-semibold"><Github className="h-4 w-4"/>GitHub</a></div></div></section>

  <footer className="border-t border-slate-900 px-5 py-8"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-slate-500 sm:flex-row"><span>© {new Date().getFullYear()} Rahul Jaiswal</span><span>Built with Next.js · Tailwind CSS</span></div></footer>
 </main>
}
