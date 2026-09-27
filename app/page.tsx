'use client'

import { useState } from 'react'
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Bell,
  Bot,
  BriefcaseBusiness,
  ChevronDown,
  CircleDollarSign,
  Lightbulb,
  Megaphone,
  MoreHorizontal,
  Plus,
  Search,
  Send,
  Settings2,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'

const agents = [
  { name: 'Cora', role: 'Chief Operating AI', task: 'Reviewing today\'s priorities', color: 'bg-violet-500', initials: 'CO', status: 'Working' },
  { name: 'Milo', role: 'Growth & Ads AI', task: 'Optimizing local search campaign', color: 'bg-sky-500', initials: 'MG', status: 'Working' },
  { name: 'Pip', role: 'Product Ideas AI', task: 'Scoring 12 new concepts', color: 'bg-amber-500', initials: 'PI', status: 'Thinking' },
  { name: 'Rhea', role: 'Reputation AI', task: 'Drafted 3 review responses', color: 'bg-emerald-500', initials: 'RR', status: 'Ready' },
]

const activities = [
  ['Milo', 'increased “local service” bid by 8%', '2m ago', 'bg-sky-500'],
  ['Rhea', 'drafted a response to a 5-star review', '18m ago', 'bg-emerald-500'],
  ['Pip', 'found a product opportunity: “The No-BS Bundle”', '41m ago', 'bg-amber-500'],
  ['Cora', 'moved Q4 growth plan to review', '1h ago', 'bg-violet-500'],
]

export default function Page() {
  const [active, setActive] = useState('Overview')
  const [boosted, setBoosted] = useState(false)
  const [prompt, setPrompt] = useState('')
  const [notice, setNotice] = useState('')

  function runCommand() {
    if (!prompt.trim()) return
    setNotice(`Cora is routing “${prompt.trim()}” to the right agent.`)
    setPrompt('')
  }

  return (
    <main className="min-h-screen bg-[#0c0d10] text-zinc-100 selection:bg-violet-500/30">
      <aside className="fixed inset-y-0 left-0 hidden w-[238px] border-r border-white/[0.07] bg-[#101115] px-4 py-5 lg:block">
        <div className="flex items-center gap-3 px-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-500 shadow-lg shadow-violet-500/25"><Sparkles size={17} /></div>
          <span className="text-[17px] font-semibold tracking-tight">Operator</span>
          <span className="ml-auto rounded-md bg-white/[0.06] px-1.5 py-0.5 text-[10px] font-semibold text-zinc-500">BETA</span>
        </div>
        <div className="mt-10 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600">Workspace</div>
        <nav className="mt-3 space-y-1">
          {[['Overview', BarChart3], ['Agents', Bot], ['Growth & Ads', Megaphone], ['Product Lab', Lightbulb], ['Reputation', Users]].map(([label, Icon]) => (
            <button key={label as string} onClick={() => setActive(label as string)} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] transition ${active === label ? 'bg-white/[0.09] text-white' : 'text-zinc-500 hover:bg-white/[0.05] hover:text-zinc-300'}`}>
              <Icon size={16} className={active === label ? 'text-violet-400' : ''} /> {label as string}
              {label === 'Agents' && <span className="ml-auto rounded-full bg-violet-500/20 px-1.5 py-0.5 text-[10px] text-violet-300">4</span>}
            </button>
          ))}
        </nav>
        <div className="mt-10 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600">Manage</div>
        <nav className="mt-3 space-y-1">
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] text-zinc-500 hover:bg-white/[0.05] hover:text-zinc-300"><Settings2 size={16} /> Settings</button>
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] text-zinc-500 hover:bg-white/[0.05] hover:text-zinc-300"><BriefcaseBusiness size={16} /> Business profile</button>
        </nav>
        <div className="absolute bottom-5 left-4 right-4 rounded-xl border border-white/[0.07] bg-white/[0.03] p-3">
          <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-emerald-400 shadow shadow-emerald-400" /><span className="text-xs font-medium">Simulation live</span></div>
          <p className="mt-2 text-[11px] leading-relaxed text-zinc-600">Your agents are running on a simulated business environment.</p>
        </div>
      </aside>

      <section className="lg:pl-[238px]">
        <header className="flex h-[70px] items-center justify-between border-b border-white/[0.07] px-6 lg:px-10">
          <div className="flex items-center gap-2 text-sm text-zinc-500"><span>Workspace</span><span>/</span><span className="text-zinc-200">Overview</span></div>
          <div className="flex items-center gap-4"><button className="text-zinc-500 hover:text-zinc-200"><Search size={18} /></button><button className="relative text-zinc-500 hover:text-zinc-200"><Bell size={18} /><span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-violet-400" /></button><div className="h-7 w-px bg-white/[0.08]" /><div className="flex items-center gap-2 text-sm"><div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-600 text-[10px] font-bold">SC</div><span className="hidden text-zinc-300 sm:inline">Shit Company</span><ChevronDown size={14} className="text-zinc-600" /></div></div>
        </header>

        <div className="mx-auto max-w-[1180px] px-6 py-8 lg:px-10">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-violet-400">Tuesday, October 14, 2025</p><h1 className="text-3xl font-semibold tracking-tight">Good morning, operator.</h1><p className="mt-2 text-sm text-zinc-500">Your AI team made 14 decisions while you were away.</p></div><button onClick={() => { setBoosted(true); setNotice('Milo is preparing a new Google Ads test campaign.') }} className="flex items-center justify-center gap-2 rounded-lg bg-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-400"><Zap size={16} /> {boosted ? 'Campaign queued' : 'Boost growth'} <ArrowUpRight size={15} /></button></div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[['Revenue influenced', '$18,420', '+24.8%', CircleDollarSign, 'text-emerald-400'], ['Google Ads ROAS', '4.2x', '+0.6x', Megaphone, 'text-sky-400'], ['New customers', '126', '+18.2%', Users, 'text-violet-400'], ['Ideas in pipeline', '24', '+7 this week', Lightbulb, 'text-amber-400']].map(([label, value, change, Icon, color]) => <div key={label as string} className="rounded-xl border border-white/[0.07] bg-[#121318] p-5"><div className="flex items-center justify-between"><span className="text-xs text-zinc-500">{label as string}</span><Icon size={16} className={color as string} /></div><div className="mt-4 flex items-end gap-2"><span className="text-2xl font-semibold tracking-tight">{value as string}</span><span className="mb-1 text-[11px] font-medium text-emerald-400">{change as string}</span></div></div>)}
          </div>

          <div className="mt-8 grid gap-5 xl:grid-cols-[1.55fr_1fr]">
            <div className="rounded-xl border border-white/[0.07] bg-[#121318] p-5"><div className="flex items-center justify-between"><div><h2 className="text-sm font-semibold">Business pulse</h2><p className="mt-1 text-xs text-zinc-600">Last 30 days across all channels</p></div><button className="flex items-center gap-1 rounded-md border border-white/[0.08] px-2.5 py-1.5 text-[11px] text-zinc-400">30 days <ChevronDown size={12} /></button></div><div className="mt-7 flex h-[185px] items-end gap-2 px-1 sm:gap-3">{[32, 45, 38, 52, 48, 66, 59, 72, 68, 77, 74, 88, 81, 94, 90, 100, 96, 112, 104, 122, 116, 135, 130, 142, 149, 158, 151, 169, 164, 181].map((height, i) => <div key={i} className="group relative flex h-full flex-1 items-end"><div style={{ height: `${height}px` }} className={`w-full rounded-t-[3px] transition group-hover:bg-violet-300 ${i > 22 ? 'bg-violet-500' : 'bg-violet-500/35'}`} /></div>)}</div><div className="mt-3 flex justify-between text-[10px] text-zinc-700"><span>Sep 15</span><span>Sep 30</span><span>Oct 14</span></div></div>
            <div className="rounded-xl border border-white/[0.07] bg-[#121318] p-5"><div className="flex items-center justify-between"><div><h2 className="text-sm font-semibold">Growth snapshot</h2><p className="mt-1 text-xs text-zinc-600">Milo&apos;s latest campaign report</p></div><div className="rounded-lg bg-sky-500/10 p-2 text-sky-400"><TrendingUp size={16} /></div></div><div className="mt-7 grid grid-cols-2 gap-y-6"><div><p className="text-[11px] text-zinc-600">Impressions</p><p className="mt-1 text-lg font-semibold">48.2k</p></div><div><p className="text-[11px] text-zinc-600">Clicks</p><p className="mt-1 text-lg font-semibold">3,842</p></div><div><p className="text-[11px] text-zinc-600">Avg. CPC</p><p className="mt-1 text-lg font-semibold">$0.84</p></div><div><p className="text-[11px] text-zinc-600">Conversions</p><p className="mt-1 text-lg font-semibold text-emerald-400">284</p></div></div><div className="mt-6 flex items-center gap-2 border-t border-white/[0.06] pt-4 text-[11px] text-emerald-400"><Activity size={13} /> Performing above target <span className="ml-auto text-zinc-600">View report</span></div></div>
          </div>

          <div className="mt-5 grid gap-5 xl:grid-cols-[1.1fr_1fr]">
            <div className="rounded-xl border border-white/[0.07] bg-[#121318] p-5"><div className="flex items-center justify-between"><div><h2 className="text-sm font-semibold">Your AI team</h2><p className="mt-1 text-xs text-zinc-600">4 agents working for you</p></div><button onClick={() => setActive('Agents')} className="text-xs text-violet-400 hover:text-violet-300">View all</button></div><div className="mt-5 space-y-1">{agents.map((agent) => <div key={agent.name} className="flex items-center gap-3 rounded-lg p-2.5 transition hover:bg-white/[0.03]"><div className={`flex h-9 w-9 items-center justify-center rounded-lg ${agent.color} text-[10px] font-bold text-white`}>{agent.initials}</div><div className="min-w-0 flex-1"><div className="flex items-center gap-2"><span className="text-xs font-semibold">{agent.name}</span><span className="text-[11px] text-zinc-600">{agent.role}</span></div><p className="mt-0.5 truncate text-[11px] text-zinc-500">{agent.task}</p></div><span className={`rounded-full px-2 py-1 text-[10px] ${agent.status === 'Ready' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-violet-500/10 text-violet-300'}`}>{agent.status}</span></div>)}</div></div>
            <div className="rounded-xl border border-white/[0.07] bg-[#121318] p-5"><div className="flex items-center justify-between"><div><h2 className="text-sm font-semibold">Latest activity</h2><p className="mt-1 text-xs text-zinc-600">What your agents are doing</p></div><button className="text-zinc-600 hover:text-zinc-300"><MoreHorizontal size={18} /></button></div><div className="mt-5 space-y-4">{activities.map(([name, text, time, color]) => <div key={text} className="flex gap-3"><div className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${color}`} /><p className="text-xs leading-relaxed text-zinc-400"><span className="font-semibold text-zinc-200">{name}</span> {text}<span className="ml-2 text-[10px] text-zinc-700">{time}</span></p></div>)}</div></div>
          </div>

          <div className="mt-5 flex flex-col gap-3 rounded-xl border border-violet-500/20 bg-violet-500/[0.06] p-4 sm:flex-row sm:items-center"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300"><Sparkles size={17} /></div><div className="flex-1"><p className="text-xs font-semibold">Tell your team what to do next</p><p className="mt-0.5 text-[11px] text-zinc-500">Ask anything — Cora will route it to the right agent.</p></div><div className="flex w-full max-w-md items-center rounded-lg border border-white/[0.1] bg-[#0e0f13] px-3 py-1.5"><input value={prompt} onChange={(e) => setPrompt(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && !e.nativeEvent.isComposing && e.keyCode !== 229) runCommand() }} placeholder="e.g. Find my next best product idea" className="min-w-0 flex-1 bg-transparent text-xs text-zinc-200 outline-none placeholder:text-zinc-700" /><button onClick={runCommand} aria-label="Send command" className="text-violet-400 hover:text-violet-300"><Send size={15} /></button></div></div>
          {notice && <div className="mt-3 flex items-center gap-2 text-xs text-emerald-400"><Target size={14} />{notice}</div>}
          <p className="mt-8 text-center text-[10px] text-zinc-700">Simulation mode · No real ad spend or business actions are being taken</p>
        </div>
      </section>
    </main>
  )
}
