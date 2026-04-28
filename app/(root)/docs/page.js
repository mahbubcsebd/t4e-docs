import {
  ArrowRight,
  BookOpen,
  Code,
  Cpu,
  Layers,
  Search,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

const DOCS_CATEGORIES = [
  {
    title: 'Getting Started',
    desc: 'Learn the core concepts and set up your first agentic system.',
    icon: Zap,
    links: [
      'Quickstart Guide',
      'Core Concepts',
      'Installation',
      'Basic Tutorial',
    ],
  },
  {
    title: 'Architecture Guide',
    desc: 'Deep dive into design-first development and system blueprints.',
    icon: Layers,
    links: [
      'Blueprint Design',
      'Schema Definition',
      'Entity Mapping',
      'Flow Control',
    ],
  },
  {
    title: 'API Reference',
    desc: 'Detailed documentation for all Think4Ever APIs and SDKs.',
    icon: Code,
    links: ['REST API', 'JavaScript SDK', 'Python Client', 'Authentication'],
  },
  {
    title: 'Advanced Topics',
    desc: 'Scale your systems and optimize agent orchestration.',
    icon: Cpu,
    links: [
      'Multi-Agent Coordination',
      'State Persistence',
      'Custom Tooling',
      'Error Handling',
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="bg-[#f8fafc] border-b border-gray-100 py-16 lg:py-24 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="bg-[#3b82f6]/10 p-3 rounded-2xl mb-6">
            <BookOpen className="w-8 h-8 text-[#3b82f6]" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Documentation
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mb-12 leading-relaxed">
            Everything you need to build production-ready agentic systems with
            Think4Ever.
          </p>

          <div className="w-full max-w-2xl relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full bg-white border border-gray-200 rounded-2xl py-5 pl-14 pr-6 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] shadow-sm transition-all text-lg"
            />
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto py-24 px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {DOCS_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="flex flex-col p-8 rounded-[2rem] border border-gray-100 hover:border-[#3b82f6]/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group bg-white"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gray-50 group-hover:bg-[#3b82f6]/10 transition-colors">
                  <category.icon className="w-6 h-6 text-gray-600 group-hover:text-[#3b82f6]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h2>
              </div>

              <p className="text-gray-500 mb-8 leading-relaxed">
                {category.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mt-auto">
                {category.links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#3b82f6] transition-colors group/link"
                  >
                    <span>{link}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Support Section */}
      {/* <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 pb-24 text-center">
        <div className="bg-[#f8fafc] rounded-[2.5rem] p-12 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Can't find what you're looking for?</h3>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Our team and community are here to help. Reach out to us or join our Discord.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition-all w-full sm:w-auto"
            >
              Contact Support
            </Link>
            <Link
              href="#"
              className="bg-white border border-gray-200 text-gray-900 px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all w-full sm:w-auto"
            >
              Join Discord
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
}
