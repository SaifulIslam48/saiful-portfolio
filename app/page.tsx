"use client";

import React, { useState, useEffect, useCallback } from 'react';
import {
  Mail,
  FileText,
  ExternalLink,
  Terminal,
  Layers,
  Database,
  Wrench,
  X,
  Check,
  Copy,
  Send,
  ArrowUpRight,
  ArrowUp,
  CheckCircle2,
  AlertCircle,
  Dumbbell,
  Calendar,
  Download,
  FolderOpen,
  FileCode2,
  ChevronRight,
  Code,
  MapPin,
  Cpu,
  RotateCcw,
  Sparkles,
  ShoppingBasket,
  SlidersHorizontal,
} from 'lucide-react';


const Github: React.FC<{ className?: string }> = ({ className = 'h-4 w-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin: React.FC<{ className?: string }> = ({ className = 'h-4 w-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export interface ProjectItem {
  id: string;
  repoIndex: string;
  fileName: string;
  fileExtension: 'tsx' | 'ts';
  title: string;
  repoName: string;
  repoSlug: string;
  primaryLanguage: string;
  languageColor: string;
  branch: string;
  visibility: string;
  badge: string;
  problemSolution: string;
  architectureHighlights: string[];
  techStack: string[];
  liveUrl: string;
  repoUrl: string;
  previewType: 'fitlog' | 'devconf' | 'bazardor';
  codeNotesTitle: string;
  codeSnippet: string;
  engineeringDecision: string;
}

export type SkillCategory = 'All' | 'Frontend' | 'Backend & DB' | 'Tools';

export interface SkillItem {
  name: string;
  category: Exclude<SkillCategory, 'All'>;
  tag: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Saiful Islam',
    brand: 'Saiful.dev',
    role: 'Front-End & Aspiring Full-Stack Developer',
    location: 'Bangladesh',
    statusPill: 'Available for Junior Full-Stack & Front-End Roles',
    bio: 'I build clean, accessible front-end interfaces and end-to-end full-stack web applications with React, TypeScript, Next.js, and MongoDB. Focused on type-safe architecture, responsive UX, and turning everyday workflows into fast, reliable software.',
    email: 'ss3848940@gmail.com',
    githubUsername: 'saifulislam48',
    githubUrl: 'https://github.com/saifulislam48',
    githubReposUrl: 'https://github.com/saifulislam48?tab=repositories',
    linkedinUrl: 'https://www.linkedin.com/in/saiful-islam-owlid/',
    resumePath: '/resume.pdf', // Drop resume.pdf inside your Next.js /public folder
  },
  navItems: [
    { label: 'Overview', href: '#overview' },
    { label: 'Projects', href: '#projects' },
    { label: 'Stack', href: '#stack' },
    { label: 'Contact', href: '#contact' },
  ],
  terminalPresets: [
    {
      command: 'whoami',
      label: 'whoami',
      output: [
        '{',
        '  "name": "Saiful Islam",',
        '  "role": "Front-End & Aspiring Full-Stack Developer",',
        '  "location": "Bangladesh",',
        '  "status": "Open to Junior Full-Stack & Front-End Roles"',
        '}',
      ],
    },
    {
      command: 'stack --list',
      label: 'stack --list',
      output: [
        '→ Frontend : React, TypeScript, Next.js, Tailwind CSS, HTML5, CSS3',
        '→ Backend  : Next.js App Router APIs, MongoDB, REST APIs, Auth',
        '→ Workflow : Git, GitHub (@saifulislam48), VS Code, Vercel',
      ],
    },
    {
      command: 'projects --featured',
      label: 'projects --featured',
      output: [
        '01. Bazardor — Daily Market Price & Grocery Tracker (saifulislam48/bazardor)',
        '02. FitLog — Workout Library & Daily Lift Tracker (saifulislam48/fitlog)',
        '03. Dev Conference 2026 (saifulislam48/dev-conference-2026)',
      ],
    },
    {
      command: 'contact',
      label: 'contact',
      output: [
        'Email  : ss3848940@gmail.com',
        'GitHub : https://github.com/saifulislam48',
        'Resume : /resume.pdf (Ready for download)',
      ],
    },
  ],
  projects: [
    {
      id: 'bazardor',
      repoIndex: '01',
      fileName: '01-bazardor.tsx',
      fileExtension: 'tsx',
      title: 'Bazardor — Daily Market Price & Grocery Tracker',
      repoName: 'bazardor',
      repoSlug: 'saifulislam48/bazardor',
      primaryLanguage: 'TypeScript',
      languageColor: 'bg-emerald-400',
      branch: 'main',
      visibility: 'Public • Repo #1',
      badge: 'GitHub Repo #01 • Local Market Rate Directory',
      problemSolution:
        'Shoppers often face inconsistent daily prices for essential groceries and fresh produce across local markets without a quick way to check current rates beforehand. Built Bazardor, a clean, mobile-first web application that organizes daily commodity prices by category with instant search, unit breakdowns, and transparent price updates.',
      architectureHighlights: [
        'Structured modular TypeScript interfaces for commodity categories, unit pricing (kg/liter/piece), and daily rate updates',
        'Built fast client-side filtering and category tabs with Tailwind CSS for effortless mobile browsing in local markets',
        'Designed clean data-fetching and state patterns ready for live market price updates and full-stack backend persistence',
      ],
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Vercel'],
      liveUrl: 'https://bazar-dor-five-lyart.vercel.app/',
      repoUrl: 'https://github.com/saifulislam48/bazardor',
      previewType: 'bazardor',
      codeNotesTitle: 'lib/marketRates.ts & Commodity Filter Logic',
      codeSnippet: `export type CommodityCategory = 'ALL' | 'VEGETABLES' | 'FISH_MEAT' | 'GROCERIES';

export interface MarketItem {
  id: string;
  name: string;
  category: Exclude<CommodityCategory, 'ALL'>;
  unit: 'kg' | 'liter' | 'piece';
  todayPriceBdt: number;
  previousPriceBdt: number;
}

export function getPriceTrend(item: MarketItem) {
  const diff = item.todayPriceBdt - item.previousPriceBdt;
  return { diff, status: diff > 0 ? 'UP' : diff < 0 ? 'DOWN' : 'STABLE' };
}`,
      engineeringDecision:
        'Modeled unit pricing explicitly (kg, liter, piece) alongside previous-day rates so shoppers can spot daily price drops or spikes at a glance on mobile.',
    },
    {
      id: 'fitlog',
      repoIndex: '02',
      fileName: '02-fitlog.tsx',
      fileExtension: 'tsx',
      title: 'FitLog — Workout Library & Daily Lift Tracker',
      repoName: 'fitlog',
      repoSlug: 'saifulislam48/fitlog',
      primaryLanguage: 'TypeScript',
      languageColor: 'bg-sky-400',
      branch: 'main',
      visibility: 'Public • Repo #2',
      badge: 'GitHub Repo #02 • Next.js + TypeScript',
      problemSolution:
        'Replaces cluttered phone notes with a fast, mobile-first workout library and daily lift tracker. Lifters can filter exercises by muscle group, log daily sets and weights, and monitor progressive overload in real time.',
      architectureHighlights: [
        'Next.js App Router with strongly typed TypeScript interfaces for exercises, sets, and workout sessions',
        'Responsive Tailwind CSS dashboard engineered for one-handed mobile logging during gym sessions',
        'Structured data model prepared for MongoDB user persistence and cross-device PR history',
      ],
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      liveUrl: 'https://fit-log-workout-library-daily-lift.vercel.app/',
      repoUrl: 'https://github.com/saifulislam48/fitlog',
      previewType: 'fitlog',
      codeNotesTitle: 'types/workout.ts & Progressive Overload Logic',
      codeSnippet: `export interface LiftSet {
  id: string;
  exerciseId: string;
  weightKg: number;
  reps: number;
  completedAt: string;
}

export function calculateEstimated1RM(weight: number, reps: number): number {
  if (reps === 1) return weight;
  return Math.round(weight * (1 + reps / 30));
}`,
      engineeringDecision:
        'Modeled sets as atomic records with ISO timestamps so daily volume and estimated 1RM trends compute deterministically without mutating historical logs.',
    },
    {
      id: 'dev-conf-2026',
      repoIndex: '03',
      fileName: '03-dev-conf-2026.tsx',
      fileExtension: 'tsx',
      title: 'Dev Conference 2026',
      repoName: 'dev-conference-2026',
      repoSlug: 'saifulislam48/dev-conference-2026',
      primaryLanguage: 'TypeScript',
      languageColor: 'bg-indigo-400',
      branch: 'main',
      visibility: 'Public • Repo #3',
      badge: 'GitHub Repo #03 • React + TypeScript',
      problemSolution:
        'Solves conference schedule overload by giving attendees a crisp, filterable event hub with multi-track session timelines, speaker spotlights, tiered ticket pricing, and instant attendee registration.',
      architectureHighlights: [
        'Modular React & TypeScript component tree separating track filters, speaker cards, and ticket tiers',
        'Zero-overflow responsive grid adapting multi-column schedules cleanly down to 360px viewports',
        'Client-side registration validation with accessible keyboard focus states and instant confirmation',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive UI'],
      liveUrl: 'https://dev-conference-2026.vercel.app/',
      repoUrl: 'https://github.com/saifulislam48/dev-conference-2026',
      previewType: 'devconf',
      codeNotesTitle: 'components/ScheduleFilter.tsx',
      codeSnippet: `type TrackFilter = 'ALL' | 'FRONTEND' | 'FULLSTACK' | 'SYSTEMS';

export function filterSessions(
  sessions: ConferenceSession[],
  activeTrack: TrackFilter
) {
  if (activeTrack === 'ALL') return sessions;
  return sessions.filter((session) => session.track === activeTrack);
}`,
      engineeringDecision:
        'Kept track filtering pure and URL-ready so switching between Full-Stack and UI tracks updates the timeline instantaneously with zero layout shift.',
    },
  ] as ProjectItem[],
  skills: [
    { name: 'HTML5', category: 'Frontend', tag: 'Semantic' },
    { name: 'CSS3', category: 'Frontend', tag: 'Grid / Flex' },
    { name: 'Tailwind CSS', category: 'Frontend', tag: 'UI System' },
    { name: 'JavaScript (ES6+)', category: 'Frontend', tag: 'Core' },
    { name: 'TypeScript', category: 'Frontend', tag: 'Type-Safe' },
    { name: 'React', category: 'Frontend', tag: 'Components' },
    { name: 'Next.js', category: 'Backend & DB', tag: 'App Router' },
    { name: 'MongoDB', category: 'Backend & DB', tag: 'NoSQL' },
    { name: 'REST APIs', category: 'Backend & DB', tag: 'JSON / HTTP' },
    { name: 'Git', category: 'Tools', tag: 'Version Control' },
    { name: 'GitHub', category: 'Tools', tag: 'Collaboration' },
    { name: 'VS Code', category: 'Tools', tag: 'IDE' },
    { name: 'Vercel', category: 'Tools', tag: 'CI / Edge' },
  ] as SkillItem[],
};

interface ToastData {
  id: number;
  type: 'success' | 'info' | 'error';
  title: string;
  message: string;
}

const ToastBanner: React.FC<{
  toast: ToastData | null;
  onDismiss: () => void;
}> = ({ toast, onDismiss }) => {
  if (!toast) return null;

  const borderAccent = {
    success: 'border-emerald-500/40',
    info: 'border-indigo-500/40',
    error: 'border-rose-500/40',
  }[toast.type];

  const icon = {
    success: <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />,
    info: <FileText className="h-5 w-5 text-indigo-400 shrink-0" />,
    error: <AlertCircle className="h-5 w-5 text-rose-400 shrink-0" />,
  }[toast.type];

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-5 right-5 z-50 w-[calc(100%-2.5rem)] max-w-sm animate-[fadeSlideUp_0.22s_ease-out]"
    >
      <div
        className={`flex items-start gap-3 rounded-2xl border ${borderAccent} bg-[#111113]/95 p-4 shadow-2xl shadow-black/70 backdrop-blur-md`}
      >
        <div className="mt-0.5">{icon}</div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-zinc-100">{toast.title}</p>
          <p className="mt-1 text-xs leading-relaxed text-zinc-400">
            {toast.message}
          </p>
        </div>
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Close notification"
          className="rounded-lg p-1 text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-zinc-200"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

interface FloatingNavProps {
  onResumeClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const FloatingNav: React.FC<FloatingNavProps> = ({ onResumeClick }) => {
  const [activeSection, setActiveSection] = useState('#overview');

  useEffect(() => {
    const sections = ['#overview', '#projects', '#stack', '#contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.querySelector(sections[i]) as HTMLElement | null;
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setActiveSection(href);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-4 z-40 mx-auto max-w-6xl px-3 sm:px-6">
      <nav
        aria-label="Primary Floating Navigation"
        className="mx-auto flex w-full max-w-3xl items-center justify-between gap-2 rounded-full border border-[#27272A]/90 bg-[#111113]/85 px-3 py-2 shadow-2xl shadow-black/60 backdrop-blur-xl sm:px-4"
      >
        <a
          href="#overview"
          onClick={(e) => handleNavClick(e, '#overview')}
          className="group flex items-center gap-2 rounded-full pl-1 pr-2 py-1 text-sm font-bold tracking-tight text-zinc-100"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-indigo-500 font-mono text-xs font-extrabold text-zinc-950 shadow-sm">
            S
          </span>
          <span className="hidden xs:inline sm:inline">
            Saiful<span className="text-emerald-400">.dev</span>
          </span>
        </a>

        <div className="flex items-center gap-0.5 sm:gap-1">
          {PORTFOLIO_DATA.navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`rounded-full px-2.5 py-1.5 text-xs font-medium transition-all sm:px-3.5 ${
                  isActive
                    ? 'bg-zinc-800/90 text-zinc-100 shadow-inner'
                    : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <a
          href={PORTFOLIO_DATA.profile.resumePath}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onResumeClick}
          className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-3.5 py-1.5 text-xs font-semibold text-zinc-950 shadow-md shadow-emerald-500/20 transition-all hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          <Download className="h-3.5 w-3.5" />
          <span>Resume</span>
        </a>
      </nav>
    </header>
  );
};

const InteractiveTerminal: React.FC = () => {
  const [selectedCmd, setSelectedCmd] = useState<string>('whoami');
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const activePreset = PORTFOLIO_DATA.terminalPresets.find(
    (p) => p.command === selectedCmd
  );

  useEffect(() => {
    if (!activePreset) {
      const resetTimer = setTimeout(() => {
        setDisplayedLines([]);
        setIsTyping(false);
      }, 0);
      return () => clearTimeout(resetTimer);
    }

    const startTimer = setTimeout(() => {
      setDisplayedLines([]);
      setIsTyping(true);
    }, 0);
    let idx = 0;

    const interval = setInterval(() => {
      idx += 1;
      setDisplayedLines(activePreset.output.slice(0, idx));
      if (idx >= activePreset.output.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 45);

    return () => 
      clearInterval(interval);
      clearTimeout(startTimer);
  }, [selectedCmd, activePreset]);

  return (
    <div className="bento-card flex h-full flex-col justify-between rounded-3xl border border-[#27272A] bg-[#111113] p-5 transition-all duration-300 hover:border-indigo-500/50">
      <div>
        <div className="flex items-center justify-between border-b border-[#27272A] pb-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[11px] text-zinc-400">
              saiful@portfolio ~ %
            </span>
          </div>
          <button
            type="button"
            onClick={() => {
              setSelectedCmd('');
              setDisplayedLines([]);
            }}
            title="Clear terminal output"
            className="inline-flex items-center gap-1 rounded-md border border-[#27272A] bg-[#09090B] px-2 py-0.5 font-mono text-[10px] text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-200"
          >
            <RotateCcw className="h-2.5 w-2.5" />
            <span>clear</span>
          </button>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {PORTFOLIO_DATA.terminalPresets.map((preset) => {
            const active = selectedCmd === preset.command;
            return (
              <button
                key={preset.command}
                type="button"
                onClick={() => setSelectedCmd(preset.command)}
                className={`rounded-lg border px-2.5 py-1 font-mono text-[11px] transition-all ${
                  active
                    ? 'border-emerald-500/50 bg-emerald-500/15 text-emerald-300'
                    : 'border-[#27272A] bg-[#09090B] text-zinc-400 hover:border-indigo-500/40 hover:text-zinc-200'
                }`}
              >
                $ {preset.label}
              </button>
            );
          })}
        </div>

        <div className="mt-3.5 min-h-[146px] rounded-2xl border border-[#27272A]/90 bg-[#09090B] p-3.5 font-mono text-xs leading-relaxed">
          {selectedCmd ? (
            <>
              <div className="flex items-center gap-1.5 text-emerald-400">
                <span>❯</span>
                <span className="text-zinc-200">{selectedCmd}</span>
              </div>
              <div className="mt-2 space-y-1 text-[11px] text-zinc-300">
                {displayedLines.map((line, i) => (
                  <div key={i} className="whitespace-pre-wrap break-words">
                    {line}
                  </div>
                ))}
                {isTyping && (
                  <span className="inline-block h-3.5 w-1.5 animate-pulse bg-emerald-400" />
                )}
              </div>
            </>
          ) : (
            <div className="flex h-full min-h-[115px] flex-col items-center justify-center text-center text-[11px] text-zinc-500">
              <Terminal className="mb-1.5 h-4 w-4 text-zinc-600" />
              <p>Terminal cleared. Click a command pill above to inspect.</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-zinc-500">
        <span>zsh • interactive-cli</span>
        <span className="text-indigo-400">click any command</span>
      </div>
    </div>
  );
};

interface HeroBentoProps {
  onResumeClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const HeroBento: React.FC<HeroBentoProps> = ({ onResumeClick }) => {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="overview"
      aria-label="Developer Overview"
      className="pt-8 sm:pt-10"
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div className="bento-card relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#27272A] bg-[#111113] p-6 sm:p-8 lg:col-span-7 hover:border-emerald-500/40">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl"
          />

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span>{PORTFOLIO_DATA.profile.statusPill}</span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl lg:text-[42px] lg:leading-[1.12]">
              {PORTFOLIO_DATA.profile.name}
            </h1>
            <p className="mt-2 font-mono text-sm font-medium text-indigo-400 sm:text-base">
              {PORTFOLIO_DATA.profile.role}
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              {PORTFOLIO_DATA.profile.bio}
            </p>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[#27272A] pt-6">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/15 transition-all hover:bg-emerald-400"
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onResumeClick}
                className="inline-flex items-center gap-2 rounded-xl border border-[#27272A] bg-[#09090B] px-5 py-2.5 text-sm font-semibold text-zinc-200 transition-all hover:border-indigo-500/50 hover:text-indigo-300"
              >
                <Download className="h-4 w-4 text-indigo-400" />
                <span>Download Resume</span>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={PORTFOLIO_DATA.profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#27272A] bg-[#09090B] text-zinc-400 transition-colors hover:border-emerald-500/40 hover:text-zinc-100"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#27272A] bg-[#09090B] text-zinc-400 transition-colors hover:border-indigo-500/40 hover:text-zinc-100"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#27272A] bg-[#09090B] text-zinc-400 transition-colors hover:border-emerald-500/40 hover:text-zinc-100"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <InteractiveTerminal />
        </div>
      </div>
    </section>
  );
};

const ProjectMockupPreview: React.FC<{
  type: ProjectItem['previewType'];
}> = ({ type }) => {
  if (type === 'fitlog') {
    return (
      <div className="rounded-2xl border border-[#27272A] bg-gradient-to-br from-[#0D1318] via-[#09090B] to-[#12111D] p-4 sm:p-5">
        <div className="flex items-center justify-between border-b border-[#27272A] pb-3">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
              <Dumbbell className="h-4 w-4" />
            </div>
            <div>
              <p className="font-mono text-xs font-semibold text-zinc-100">
                FitLog Dashboard
              </p>
              <p className="font-mono text-[10px] text-zinc-500">
                Session #42 • Push Day
              </p>
            </div>
          </div>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-medium text-emerald-400">
            ● Live Sync
          </span>
        </div>

        <div className="mt-3.5 grid grid-cols-3 gap-2">
          <div className="rounded-xl border border-[#27272A] bg-[#111113] p-2.5">
            <p className="font-mono text-[10px] text-zinc-500">Volume</p>
            <p className="mt-0.5 font-mono text-sm font-bold text-zinc-100">
              6,420 kg
            </p>
          </div>
          <div className="rounded-xl border border-[#27272A] bg-[#111113] p-2.5">
            <p className="font-mono text-[10px] text-zinc-500">Best Lift</p>
            <p className="mt-0.5 font-mono text-sm font-bold text-emerald-400">
              95 kg × 5
            </p>
          </div>
          <div className="rounded-xl border border-[#27272A] bg-[#111113] p-2.5">
            <p className="font-mono text-[10px] text-zinc-500">Streak</p>
            <p className="mt-0.5 font-mono text-sm font-bold text-indigo-400">
              4 Weeks
            </p>
          </div>
        </div>

        <div className="mt-3 space-y-2">
          <div className="flex items-center justify-between rounded-xl border border-[#27272A] bg-[#111113]/90 px-3 py-2">
            <span className="text-xs font-medium text-zinc-200">
              Incline Dumbbell Press
            </span>
            <span className="rounded bg-emerald-500/15 px-2 py-0.5 font-mono text-[11px] text-emerald-300">
              32.5kg × 10 • +2.5kg
            </span>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-[#27272A] bg-[#111113]/90 px-3 py-2">
            <span className="text-xs font-medium text-zinc-200">
              Overhead Barbell Press
            </span>
            <span className="rounded bg-indigo-500/15 px-2 py-0.5 font-mono text-[11px] text-indigo-300">
              55kg × 8 • Logged
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'devconf') {
    return (
      <div className="rounded-2xl border border-[#27272A] bg-gradient-to-br from-[#12101E] via-[#09090B] to-[#0E151B] p-4 sm:p-5">
        <div className="flex items-center justify-between border-b border-[#27272A] pb-3">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">
              <Calendar className="h-4 w-4" />
            </div>
            <div>
              <p className="font-mono text-xs font-semibold text-zinc-100">
                DEVCONF // 2026
              </p>
              <p className="font-mono text-[10px] text-zinc-500">
                Multi-Track Schedule &amp; Tickets
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            <span className="rounded-md bg-indigo-500 px-2 py-0.5 font-mono text-[10px] font-semibold text-white">
              Full-Stack
            </span>
            <span className="rounded-md border border-[#27272A] bg-[#111113] px-2 py-0.5 font-mono text-[10px] text-zinc-400">
              UI Systems
            </span>
          </div>
        </div>

        <div className="mt-3.5 space-y-2.5">
          <div className="rounded-xl border border-indigo-500/30 bg-[#111113] p-3">
            <div className="flex items-center justify-between font-mono text-[10px]">
              <span className="text-indigo-400">10:00 AM • MAIN AUDITORIUM</span>
              <span className="text-emerald-400">Seats Available</span>
            </div>
            <p className="mt-1 text-xs font-bold text-zinc-100">
              End-to-End Type Safety with Next.js App Router &amp; TypeScript
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-[#27272A] bg-[#111113] p-2.5">
              <p className="font-mono text-[10px] text-zinc-500">Speaker Lineup</p>
              <p className="mt-0.5 text-xs font-semibold text-zinc-200">
                18 Engineers &amp; Creators
              </p>
            </div>
            <div className="rounded-xl border border-[#27272A] bg-[#111113] p-2.5">
              <p className="font-mono text-[10px] text-zinc-500">Registration</p>
              <p className="mt-0.5 text-xs font-semibold text-emerald-400">
                Student / Pro Passes
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#27272A] bg-gradient-to-br from-[#0B1512] via-[#09090B] to-[#11121B] p-4 sm:p-5">
      <div className="flex items-center justify-between border-b border-[#27272A] pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
            <ShoppingBasket className="h-4 w-4" />
          </div>
          <div>
            <p className="font-mono text-xs font-semibold text-zinc-100">
              Bazardor • Daily Market Rates
            </p>
            <p className="font-mono text-[10px] text-zinc-500">
              Today&apos;s Essential Commodity Index
            </p>
          </div>
        </div>
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] text-emerald-300">
          Updated Today
        </span>
      </div>

      {/* Category Filter Strip */}
      <div className="mt-3 flex flex-wrap gap-1 font-mono text-[10px]">
        <span className="rounded-md bg-emerald-500 px-2 py-0.5 font-semibold text-zinc-950">
          All
        </span>
        <span className="rounded-md border border-[#27272A] bg-[#111113] px-2 py-0.5 text-zinc-400">
          Vegetables
        </span>
        <span className="rounded-md border border-[#27272A] bg-[#111113] px-2 py-0.5 text-zinc-400">
          Fish &amp; Meat
        </span>
        <span className="rounded-md border border-[#27272A] bg-[#111113] px-2 py-0.5 text-zinc-400">
          Groceries
        </span>
      </div>

      {/* Local Commodity Rate Rows */}
      <div className="mt-3 space-y-2 font-mono text-[11px]">
        <div className="flex items-center justify-between rounded-xl border border-[#27272A] bg-[#111113] px-3 py-2">
          <span className="text-zinc-200">Miniket Rice (Per kg)</span>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-100">৳72 / kg</span>
            <span className="rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-400">
              0৳
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-xl border border-[#27272A] bg-[#111113] px-3 py-2">
          <span className="text-zinc-200">Deshi Onion (Per kg)</span>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-100">৳65 / kg</span>
            <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-[10px] text-emerald-400">
              -5৳
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-xl border border-[#27272A] bg-[#111113] px-3 py-2">
          <span className="text-zinc-200">Rui Fish (Medium)</span>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-100">৳340 / kg</span>
            <span className="rounded bg-amber-500/15 px-1.5 py-0.5 text-[10px] text-amber-300">
              +10৳
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 7. INTERACTIVE PROJECT EXPLORER (ProjectWorkspace.tsx)
// ============================================================================

const STORAGE_KEY_LIVE_URLS = 'saiful_portfolio_live_urls_v1';

interface ProjectWorkspaceProps {
  onShowToast: (toast: Omit<ToastData, 'id'>) => void;
}

const ProjectWorkspace: React.FC<ProjectWorkspaceProps> = ({ onShowToast }) => {
  const [activeProjectId, setActiveProjectId] = useState<string>(
    PORTFOLIO_DATA.projects[0].id
  );
  const [showCodeNotes, setShowCodeNotes] = useState<boolean>(false);
  const [showUrlEditor, setShowUrlEditor] = useState<boolean>(false);
  const [customLiveUrls, setCustomLiveUrls] = useState<Record<string, string>>(
    () => {
      const defaults: Record<string, string> = {};
      PORTFOLIO_DATA.projects.forEach((p) => {
        defaults[p.id] = p.liveUrl;
      });
      if (typeof window !== 'undefined') {
        try {
          const saved = window.localStorage.getItem(STORAGE_KEY_LIVE_URLS);
          if (saved) {
            return { ...defaults, ...JSON.parse(saved) };
          }
        } catch {
          // Ignore storage read errors
        }
      }
      return defaults;
    }
  );
  const [draftUrls, setDraftUrls] =
    useState<Record<string, string>>(customLiveUrls);
  const [copiedConfig, setCopiedConfig] = useState<boolean>(false);

  const activeProject =
    PORTFOLIO_DATA.projects.find((p) => p.id === activeProjectId) ||
    PORTFOLIO_DATA.projects[0];

  const resolvedLiveUrl =
    customLiveUrls[activeProject.id]?.trim() || activeProject.liveUrl;

  const handleOpenUrlEditor = () => {
    setDraftUrls(customLiveUrls);
    setShowUrlEditor((prev) => !prev);
  };

  const handleSaveUrls = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized: Record<string, string> = {};
    PORTFOLIO_DATA.projects.forEach((p) => {
      const raw = (draftUrls[p.id] || '').trim();
      if (!raw) {
        normalized[p.id] = p.liveUrl;
      } else {
        normalized[p.id] = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
      }
    });

    setCustomLiveUrls(normalized);
    setDraftUrls(normalized);
    try {
      window.localStorage.setItem(
        STORAGE_KEY_LIVE_URLS,
        JSON.stringify(normalized)
      );
    } catch {
      // Ignore storage write errors
    }
    setShowUrlEditor(false);
    onShowToast({
      type: 'success',
      title: 'Live Demo URLs Saved',
      message:
        'Your project Live Demo links are updated and ready to test immediately.',
    });
  };

  const handleResetDefaultUrls = () => {
    const defaults: Record<string, string> = {};
    PORTFOLIO_DATA.projects.forEach((p) => {
      defaults[p.id] = p.liveUrl;
    });
    setCustomLiveUrls(defaults);
    setDraftUrls(defaults);
    try {
      window.localStorage.removeItem(STORAGE_KEY_LIVE_URLS);
    } catch {
      // Ignore storage errors
    }
    onShowToast({
      type: 'info',
      title: 'URLs Reset',
      message: 'Restored default saifulislam48 Vercel URLs.',
    });
  };

  const handleCopyConfigSnippet = async () => {
    const snippet = PORTFOLIO_DATA.projects
      .map(
        (p) =>
          `// ${p.title}\n{ id: '${p.id}', liveUrl: '${
            (draftUrls[p.id] || p.liveUrl).trim()
          }', repoUrl: '${p.repoUrl}' }`
      )
      .join('\n\n');

    try {
      await navigator.clipboard.writeText(snippet);
      setCopiedConfig(true);
      onShowToast({
        type: 'success',
        title: 'PORTFOLIO_DATA Copied',
        message: 'Paste these liveUrl values into data/portfolio.ts in your project.',
      });
      setTimeout(() => setCopiedConfig(false), 2500);
    } catch {
      onShowToast({
        type: 'info',
        title: 'Copy Config',
        message: 'Copy the URLs directly from the input fields above.',
      });
    }
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-workspace-heading"
      className="pt-5"
    >
      <div className="overflow-hidden rounded-3xl border border-[#27272A] bg-[#111113] shadow-2xl shadow-black/40">
        {/* Top VS Code / Browser Workspace Title Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#27272A] bg-[#0D0D0F] px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-rose-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="h-4 w-px bg-[#27272A]" />
            <h2
              id="projects-workspace-heading"
              className="font-mono text-xs font-semibold text-zinc-200 sm:text-sm"
            >
              github.com / <span className="text-emerald-400">saifulislam48</span>{' '}
              / top-3-repositories
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleOpenUrlEditor}
              aria-expanded={showUrlEditor}
              className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1 font-mono text-xs transition-colors ${
                showUrlEditor
                  ? 'border-indigo-500/60 bg-indigo-500/15 text-indigo-300'
                  : 'border-[#27272A] bg-[#111113] text-zinc-300 hover:border-indigo-500/50 hover:text-indigo-300'
              }`}
            >
              <SlidersHorizontal className="h-3.5 w-3.5 text-indigo-400" />
              <span>Configure Live URLs</span>
            </button>

            <a
              href={PORTFOLIO_DATA.profile.githubReposUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#27272A] bg-[#111113] px-3 py-1 font-mono text-xs text-zinc-300 transition-colors hover:border-emerald-500/50 hover:text-emerald-300"
            >
              <Github className="h-3.5 w-3.5 text-emerald-400" />
              <span>View All on @{PORTFOLIO_DATA.profile.githubUsername}</span>
              <ExternalLink className="h-3 w-3 opacity-70" />
            </a>
          </div>
        </div>

        {/* Inline Live Demo URL Editor Panel */}
        {showUrlEditor && (
          <form
            onSubmit={handleSaveUrls}
            className="animate-[fadeSlideUp_0.2s_ease-out] border-b border-[#27272A] bg-[#0B0B0E] px-4 py-4 sm:px-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3">
              <div>
                <p className="font-mono text-xs font-semibold text-zinc-100">
                  Configure Exact Vercel Live Demo URLs
                </p>
                <p className="text-xs text-zinc-400">
                  Paste your real deployed links below so each{' '}
                  <span className="font-mono text-emerald-400">Live Demo</span>{' '}
                  button opens your exact site.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowUrlEditor(false)}
                aria-label="Close Live URL editor"
                className="rounded-lg p-1 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div
                  key={proj.id}
                  className="rounded-xl border border-[#27272A] bg-[#111113] p-3"
                >
                  <label
                    htmlFor={`live-url-${proj.id}`}
                    className="flex items-center justify-between font-mono text-[11px] font-semibold text-zinc-300"
                  >
                    <span>
                      #{proj.repoIndex} {proj.repoName}
                    </span>
                    <span className="text-[10px] text-zinc-500">liveUrl</span>
                  </label>
                  <input
                    id={`live-url-${proj.id}`}
                    type="url"
                    value={draftUrls[proj.id] || ''}
                    onChange={(e) =>
                      setDraftUrls((prev) => ({
                        ...prev,
                        [proj.id]: e.target.value,
                      }))
                    }
                    placeholder={proj.liveUrl}
                    className="mt-1.5 w-full rounded-lg border border-[#27272A] bg-[#09090B] px-2.5 py-1.5 font-mono text-xs text-zinc-100 placeholder-zinc-600 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              ))}
            </div>

            <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyConfigSnippet}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#27272A] bg-[#111113] px-3 py-1.5 font-mono text-xs text-zinc-300 transition-colors hover:border-indigo-500/50 hover:text-indigo-300"
                >
                  {copiedConfig ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied Config</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-indigo-400" />
                      <span>Copy Config</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleResetDefaultUrls}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#27272A] bg-[#111113] px-3 py-1.5 font-mono text-xs text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-200"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Reset Defaults</span>
                </button>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-4 py-1.5 font-mono text-xs font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
              >
                <Check className="h-3.5 w-3.5" />
                <span>Save Live URLs</span>
              </button>
            </div>
          </form>
        )}

        {/* Workspace Body: Left Sidebar Explorer + Main Tabbed Editor Pane */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Explorer Sidebar (Desktop) */}
          <aside
            aria-label="Project Files Explorer"
            className="hidden border-r border-[#27272A] bg-[#0C0C0E] p-4 lg:col-span-3 lg:flex lg:flex-col lg:justify-between"
          >
            <div>
              <div className="flex items-center justify-between px-2 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                <span className="flex items-center gap-2">
                  <FolderOpen className="h-3.5 w-3.5 text-indigo-400" />
                  <span>PINNED REPOS</span>
                </span>
                <span className="rounded bg-zinc-800/80 px-1.5 py-0.5 text-[10px] text-zinc-300">
                  3
                </span>
              </div>

              <div className="mt-2 space-y-1.5">
                {PORTFOLIO_DATA.projects.map((project) => {
                  const isSelected = project.id === activeProject.id;
                  return (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => setActiveProjectId(project.id)}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left font-mono text-xs transition-all ${
                        isSelected
                          ? 'border border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                          : 'border border-transparent text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200'
                      }`}
                    >
                      <span className="flex items-center gap-2 truncate">
                        <FileCode2
                          className={`h-4 w-4 shrink-0 ${
                            project.fileExtension === 'tsx'
                              ? 'text-indigo-400'
                              : 'text-emerald-400'
                          }`}
                        />
                        <span className="truncate">{project.repoName}</span>
                      </span>
                      {isSelected && (
                        <ChevronRight className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-[#27272A] bg-[#111113] p-3.5">
              <p className="font-mono text-[11px] font-semibold text-zinc-200">
                GitHub Sync (@saifulislam48)
              </p>
              <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                Displaying the first 3 repositories from your GitHub profile.
                Click any tab to inspect architecture and live links.
              </p>
            </div>
          </aside>

          {/* Right Main Workspace Area */}
          <div className="flex flex-col lg:col-span-9">
            {/* Top Editor File Tabs */}
            <div
              role="tablist"
              aria-label="Project File Tabs"
              className="flex overflow-x-auto border-b border-[#27272A] bg-[#0B0B0D]"
            >
              {PORTFOLIO_DATA.projects.map((project) => {
                const isSelected = project.id === activeProject.id;
                return (
                  <button
                    key={project.id}
                    role="tab"
                    aria-selected={isSelected}
                    type="button"
                    onClick={() => setActiveProjectId(project.id)}
                    className={`flex shrink-0 items-center gap-2 border-r border-[#27272A] px-4 py-3 font-mono text-xs transition-colors ${
                      isSelected
                        ? 'border-t-2 border-t-emerald-400 bg-[#111113] font-semibold text-zinc-100'
                        : 'text-zinc-500 hover:bg-[#111113]/60 hover:text-zinc-300'
                    }`}
                  >
                    <FileCode2
                      className={`h-3.5 w-3.5 ${
                        project.fileExtension === 'tsx'
                          ? 'text-indigo-400'
                          : 'text-emerald-400'
                      }`}
                    />
                    <span>
                      #{project.repoIndex} {project.repoName}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Project Preview & Details Pane */}
            <div className="p-5 sm:p-7">
              <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
                {/* Left Column: Visual UI Mockup Preview */}
                <div className="xl:col-span-5">
                  <ProjectMockupPreview type={activeProject.previewType} />

                  {/* GitHub Repo Metadata Strip */}
                  <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[#27272A] bg-[#09090B] px-3 py-2 font-mono text-[11px] text-zinc-400">
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        className={`h-2 w-2 rounded-full ${activeProject.languageColor}`}
                      />
                      <span className="text-zinc-200">
                        {activeProject.primaryLanguage}
                      </span>
                    </span>
                    <span>branch: {activeProject.branch}</span>
                    <span className="text-emerald-400">
                      {activeProject.visibility}
                    </span>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {activeProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-[#27272A] bg-[#09090B] px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Problem/Solution, Architecture & Action Buttons */}
                <div className="flex flex-col justify-between xl:col-span-7">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-0.5 font-mono text-[11px] font-medium text-indigo-300">
                        {activeProject.badge}
                      </span>
                      <a
                        href={activeProject.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-zinc-400 underline-offset-4 hover:text-emerald-400 hover:underline"
                      >
                        {activeProject.repoSlug}
                      </a>
                    </div>

                    <h3 className="mt-3 text-xl font-bold tracking-tight text-zinc-100 sm:text-2xl">
                      {activeProject.title}
                    </h3>

                    {/* Problem & Solution Summary */}
                    <div className="mt-3">
                      <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                        Problem &amp; Solution
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                        {activeProject.problemSolution}
                      </p>
                    </div>

                    {/* Architecture & Database Highlights */}
                    <div className="mt-4">
                      <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-indigo-400">
                        Architecture &amp; Database Highlights
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {activeProject.architectureHighlights.map(
                          (highlight, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-xs leading-relaxed text-zinc-300 sm:text-[13px]"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                              <span>{highlight}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Direct Action Buttons + Toggleable Code/Architecture Notes */}
                  <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-[#27272A] pt-5">
                    <a
                      href={resolvedLiveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={resolvedLiveUrl}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2 text-xs font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Live Demo</span>
                    </a>

                    <a
                      href={activeProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-[#27272A] bg-[#09090B] px-4 py-2 text-xs font-semibold text-zinc-200 transition-colors hover:border-zinc-600 hover:text-white"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>GitHub Source</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setShowCodeNotes((prev) => !prev)}
                      aria-expanded={showCodeNotes}
                      className={`ml-auto inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 font-mono text-xs font-medium transition-all ${
                        showCodeNotes
                          ? 'border-indigo-500/60 bg-indigo-500/15 text-indigo-300'
                          : 'border-[#27272A] bg-[#09090B] text-zinc-300 hover:border-indigo-500/40 hover:text-indigo-300'
                      }`}
                    >
                      <Code className="h-3.5 w-3.5 text-indigo-400" />
                      <span>
                        {showCodeNotes
                          ? 'Hide Architecture Notes'
                          : 'Code / Architecture Notes'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Toggleable Code / Architecture Notes Drawer */}
              {showCodeNotes && (
                <div className="mt-6 animate-[fadeSlideUp_0.2s_ease-out] rounded-2xl border border-indigo-500/30 bg-[#09090B] p-4 sm:p-5">
                  <div className="flex items-center justify-between border-b border-[#27272A] pb-2.5">
                    <span className="font-mono text-xs font-semibold text-indigo-400">
                     {activeProject.codeNotesTitle}
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowCodeNotes(false)}
                      className="rounded p-1 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-200"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <pre className="mt-3 overflow-x-auto font-mono text-xs leading-relaxed text-zinc-300">
                    <code>{activeProject.codeSnippet}</code>
                  </pre>
                  <div className="mt-3 rounded-xl border border-[#27272A] bg-[#111113] p-3 text-xs leading-relaxed text-zinc-400">
                    <span className="font-mono font-semibold text-emerald-400">
                      Engineering Note:{' '}
                    </span>
                    {activeProject.engineeringDecision}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Repository Bar */}
        <div className="flex flex-col items-start justify-between gap-3 border-t border-[#27272A] bg-[#0D0D0F] px-5 py-3.5 sm:flex-row sm:items-center sm:px-6">
          <p className="font-mono text-xs text-zinc-400">
            Want to inspect more commits, branches &amp; experiments?
          </p>
          <a
            href={PORTFOLIO_DATA.profile.githubReposUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
          >
            <span>github.com/saifulislam48?tab=repositories</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// 8. TECH STACK BENTO CARD (BentoStack.tsx)
// ============================================================================

const BentoStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<SkillCategory>('All');

  const categories: SkillCategory[] = [
    'All',
    'Frontend',
    'Backend & DB',
    'Tools',
  ];

  const filteredSkills =
    selectedCategory === 'All'
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((s) => s.category === selectedCategory);

  const getCategoryIcon = (category: SkillItem['category']) => {
    switch (category) {
      case 'Frontend':
        return <Layers className="h-3.5 w-3.5 text-indigo-400" />;
      case 'Backend & DB':
        return <Database className="h-3.5 w-3.5 text-emerald-400" />;
      case 'Tools':
        return <Wrench className="h-3.5 w-3.5 text-zinc-400" />;
    }
  };

  return (
    <div
      id="stack"
      className="bento-card flex h-full flex-col justify-between rounded-3xl border border-[#27272A] bg-[#111113] p-6 sm:p-7 hover:border-indigo-500/40"
    >
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-indigo-400">
            <Cpu className="h-4 w-4" />
            <span>Tech Stack</span>
          </div>
          <span className="font-mono text-[11px] text-zinc-500">
            {filteredSkills.length} tools
          </span>
        </div>

        <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-100">
          Core Technologies
        </h2>
        <p className="mt-1 text-xs leading-relaxed text-zinc-400 sm:text-sm">
          Filter by layer to inspect my front-end, backend, and deployment
          toolkit.
        </p>

        {/* Interactive Category Filter Pills */}
        <div
          role="tablist"
          aria-label="Filter technologies by category"
          className="mt-4 flex flex-wrap gap-1.5"
        >
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={active}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full border px-3 py-1 font-mono text-xs transition-all ${
                  active
                    ? 'border-indigo-500/60 bg-indigo-500/20 font-semibold text-indigo-200'
                    : 'border-[#27272A] bg-[#09090B] text-zinc-400 hover:border-zinc-600 hover:text-zinc-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Filtered Skill Pills */}
        <div className="mt-5 flex flex-wrap gap-2">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="inline-flex items-center gap-2 rounded-xl border border-[#27272A] bg-[#09090B] px-3 py-2 transition-colors hover:border-emerald-500/40"
            >
              {getCategoryIcon(skill.category)}
              <span className="text-xs font-semibold text-zinc-200">
                {skill.name}
              </span>
              <span className="rounded bg-[#111113] px-1.5 py-0.5 font-mono text-[10px] text-zinc-500">
                {skill.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 border-t border-[#27272A] pt-4 font-mono text-[11px] text-zinc-500">
        Currently expanding full-stack TypeScript &amp; MongoDB patterns.
      </div>
    </div>
  );
};

// ============================================================================
// 9. QUICK INFO & RESUME BENTO CARD
// ============================================================================

interface QuickInfoResumeCardProps {
  onShowToast: (toast: Omit<ToastData, 'id'>) => void;
  onResumeClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const QuickInfoResumeCard: React.FC<QuickInfoResumeCardProps> = ({
  onShowToast,
  onResumeClick,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
      setCopied(true);
      onShowToast({
        type: 'success',
        title: 'Email Copied',
        message: `${PORTFOLIO_DATA.profile.email} copied to clipboard.`,
      });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      onShowToast({
        type: 'info',
        title: 'Direct Email',
        message: PORTFOLIO_DATA.profile.email,
      });
    }
  };

  return (
    <div className="bento-card flex h-full flex-col justify-between rounded-3xl border border-[#27272A] bg-[#111113] p-6 sm:p-7 hover:border-emerald-500/40">
      <div>
        <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
          <Sparkles className="h-4 w-4" />
          <span>Quick Info &amp; Resume</span>
        </div>

        <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-100">
          Credentials &amp; Direct Links
        </h2>

        {/* Structured Info Tiles */}
        <div className="mt-5 space-y-3">
          {/* Location Tile */}
          <div className="flex items-center justify-between rounded-2xl border border-[#27272A] bg-[#09090B] px-4 py-3">
            <div className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 text-indigo-400" />
              <span className="font-mono text-xs text-zinc-400">Location</span>
            </div>
            <span className="text-xs font-semibold text-zinc-100">
              {PORTFOLIO_DATA.profile.location}
            </span>
          </div>

          {/* GitHub Handle Tile */}
          <a
            href={PORTFOLIO_DATA.profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl border border-[#27272A] bg-[#09090B] px-4 py-3 transition-colors hover:border-emerald-500/40"
          >
            <div className="flex items-center gap-2.5">
              <Github className="h-4 w-4 text-emerald-400" />
              <span className="font-mono text-xs text-zinc-400">GitHub</span>
            </div>
            <span className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-zinc-100">
              @{PORTFOLIO_DATA.profile.githubUsername}
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500" />
            </span>
          </a>

          {/* One-Click Copyable Email Tile */}
          <div className="flex items-center justify-between gap-2 rounded-2xl border border-[#27272A] bg-[#09090B] px-4 py-2.5">
            <div className="flex items-center gap-2.5 min-w-0">
              <Mail className="h-4 w-4 shrink-0 text-indigo-400" />
              <span className="truncate font-mono text-xs text-zinc-200">
                {PORTFOLIO_DATA.profile.email}
              </span>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-[#27272A] bg-[#111113] px-2.5 py-1.5 font-mono text-[11px] font-medium text-zinc-300 transition-colors hover:border-emerald-500/50 hover:text-emerald-300"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Prominent View / Download Resume (PDF) Card Button */}
      <div className="mt-6">
        <a
          href={PORTFOLIO_DATA.profile.resumePath}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onResumeClick}
          className="group flex w-full items-center justify-between rounded-2xl border border-emerald-500/40 bg-gradient-to-r from-emerald-500/15 via-emerald-500/10 to-indigo-500/15 p-4 transition-all hover:border-emerald-400 hover:from-emerald-500/25 hover:to-indigo-500/25"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-zinc-100">
                View / Download Resume (PDF)
              </p>
              <p className="font-mono text-[11px] text-zinc-400">
                Mapped to /public/resume.pdf
              </p>
            </div>
          </div>
          <Download className="h-4 w-4 text-emerald-400 transition-transform group-hover:translate-y-0.5" />
        </a>
      </div>
    </div>
  );
};

// ============================================================================
// 10. COMPACT CONTACT BENTO CARD (ContactBento.tsx)
// ============================================================================

interface ContactBentoProps {
  onShowToast: (toast: Omit<ToastData, 'id'>) => void;
}

const ContactBento: React.FC<ContactBentoProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      nextErrors.name = 'Name must be at least 2 characters.';
    }
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      nextErrors.message = 'Message should be at least 10 characters.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulates Next.js App Router POST /api/contact endpoint
    await new Promise((resolve) => setTimeout(resolve, 750));

    setIsSubmitting(false);
    setSubmitted(true);
    onShowToast({
      type: 'success',
      title: 'Message Delivered',
      message: `Thanks ${formData.name.trim()}! Your message has been sent.`,
    });
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-bento-heading"
      className="pt-5"
    >
      <div className="bento-card rounded-3xl border border-[#27272A] bg-[#111113] p-6 sm:p-8 hover:border-indigo-500/40">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Let's Build Together & Direct Links */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 font-mono text-xs font-medium text-indigo-300">
              <Mail className="h-3.5 w-3.5" />
              <span>POST /api/contact</span>
            </div>

            <h2
              id="contact-bento-heading"
              className="mt-4 text-2xl font-extrabold tracking-tight text-zinc-100 sm:text-3xl"
            >
              Let&apos;s Build Together
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Looking for a motivated junior full-stack or front-end developer
              who writes clean TypeScript and ships responsive products? Reach
              out directly or send a quick note here.
            </p>

            <div className="mt-6 space-y-2.5">
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="flex items-center gap-2.5 font-mono text-xs text-zinc-300 transition-colors hover:text-emerald-400"
              >
                <Mail className="h-4 w-4 text-emerald-400" />
                <span>{PORTFOLIO_DATA.profile.email}</span>
              </a>
              <a
                href={PORTFOLIO_DATA.profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 font-mono text-xs text-zinc-300 transition-colors hover:text-indigo-400"
              >
                <Github className="h-4 w-4 text-indigo-400" />
                <span>github.com/saifulislam48</span>
              </a>
            </div>
          </div>

          {/* Right Column: Inline Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-[#27272A] bg-[#09090B] p-5 sm:p-6"
            >
              {submitted && (
                <div className="mb-4 flex items-center justify-between rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2.5 text-xs text-emerald-300">
                  <span className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    Message sent! I&apos;ll get back to you shortly.
                  </span>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="font-mono text-[11px] underline hover:text-white"
                  >
                    New
                  </button>
                </div>
              )}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="bento-name"
                    className="block font-mono text-[11px] font-medium text-zinc-400"
                  >
                    Name
                  </label>
                  <input
                    id="bento-name"
                    type="text"
                    placeholder="Saiful Islam"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    className="mt-1.5 w-full rounded-xl border border-[#27272A] bg-[#111113] px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 transition-colors focus:border-emerald-500 focus:outline-none"
                  />
                  {errors.name && (
                    <p className="mt-1 text-[11px] text-rose-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="bento-email"
                    className="block font-mono text-[11px] font-medium text-zinc-400"
                  >
                    Email
                  </label>
                  <input
                    id="bento-email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email)
                        setErrors({ ...errors, email: undefined });
                    }}
                    className="mt-1.5 w-full rounded-xl border border-[#27272A] bg-[#111113] px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 transition-colors focus:border-emerald-500 focus:outline-none"
                  />
                  {errors.email && (
                    <p className="mt-1 text-[11px] text-rose-400">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="bento-message"
                  className="block font-mono text-[11px] font-medium text-zinc-400"
                >
                  Message
                </label>
                <textarea
                  id="bento-message"
                  rows={3}
                  placeholder="Tell me about your role, team, or project idea..."
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message)
                      setErrors({ ...errors, message: undefined });
                  }}
                  className="mt-1.5 w-full resize-none rounded-xl border border-[#27272A] bg-[#111113] px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 transition-colors focus:border-emerald-500 focus:outline-none"
                />
                {errors.message && (
                  <p className="mt-1 text-[11px] text-rose-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="mt-4 flex items-center justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-zinc-950 transition-all hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-950 border-t-transparent" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// 11. MINIMAL FOOTER COMPONENT
// ============================================================================

interface MinimalFooterProps {
  onResumeClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const MinimalFooter: React.FC<MinimalFooterProps> = ({ onResumeClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-8 border-t border-[#27272A]/80 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="font-mono text-xs text-zinc-500">
          © 2026 {PORTFOLIO_DATA.profile.name} • Built with Next.js, TypeScript
          &amp; Tailwind CSS
        </p>

        <div className="flex items-center gap-5 font-mono text-xs text-zinc-400">
          <a
            href={PORTFOLIO_DATA.profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-emerald-400"
          >
            GitHub
          </a>
          <a
            href={PORTFOLIO_DATA.profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onResumeClick}
            className="transition-colors hover:text-indigo-400"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-zinc-300 transition-colors hover:text-emerald-400"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

// ============================================================================
// 12. MAIN APPLICATION ROOT (App)
// ============================================================================

export default function App() {
  const [toast, setToast] = useState<ToastData | null>(null);

  const showToast = useCallback((nextToast: Omit<ToastData, 'id'>) => {
    setToast({ ...nextToast, id: Date.now() });
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 4200);
    return () => clearTimeout(timer);
  }, [toast]);

  // Handles resume link smoothly in sandboxed preview environments while keeping standard href="/resume.pdf"
  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (
      window.location.protocol === 'about:' ||
      window.location.hostname === '' ||
      window.location.href.includes('srcdoc')
    ) {
      e.preventDefault();
      showToast({
        type: 'info',
        title: 'Resume Connected (/resume.pdf)',
        message:
          'Drop your resume.pdf file inside your Next.js /public folder—all Resume buttons will automatically open and download it.',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-zinc-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Typography & Subtle Bento Hover Glow */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background-color: #09090B;
        }
        .font-mono {
          font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;
        }
        .bento-card {
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .bento-card:hover {
          box-shadow: 0 0 0 1px rgba(16, 185, 129, 0.12), 0 16px 36px -12px rgba(0, 0, 0, 0.65);
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* 1. Floating Glass Pill Navigation Bar */}
      <FloatingNav onResumeClick={handleResumeClick} />

      {/* Main 12-Column Asymmetric Bento Grid Container */}
      <main className="mx-auto max-w-6xl px-3 sm:px-6">
        {/* 2. Top Bento Hero Row (Intro 7 cols + Interactive Terminal 5 cols) */}
        <HeroBento onResumeClick={handleResumeClick} />

        {/* 3. Interactive Project Explorer (VS Code / Browser Tabbed Workspace) */}
        <ProjectWorkspace onShowToast={showToast} />

        {/* 4. Bottom Bento Row: Tech Stack (6 cols) + Quick Info & Resume (6 cols) */}
        <section
          aria-label="Skills and Credentials"
          className="grid grid-cols-1 gap-5 pt-5 lg:grid-cols-12"
        >
          <div className="lg:col-span-6">
            <BentoStack />
          </div>
          <div className="lg:col-span-6">
            <QuickInfoResumeCard
              onShowToast={showToast}
              onResumeClick={handleResumeClick}
            />
          </div>
        </section>

        {/* 5. Compact Contact Bento Card (12 cols) */}
        <ContactBento onShowToast={showToast} />
      </main>

      {/* 6. Minimal Single-Row Footer */}
      <MinimalFooter onResumeClick={handleResumeClick} />

      {/* Toast Feedback Banner */}
      <ToastBanner toast={toast} onDismiss={() => setToast(null)} />
    </div>
  );
}