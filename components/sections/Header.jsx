'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Logo from '@/public/assets/images/think4ever-logo.png';
import { ChevronDown, Menu, Rocket, Zap, Users, Code, Book, MessageSquare, Cpu, Globe, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from "@/lib/utils";

const SOLUTIONS_DATA = {
  build: [
    { title: "AI Apps", desc: "Deploy ideas at the speed of AI orchestration." },
    { title: "Full SDLC", desc: "Automate requirement gathering to deployment." },
    { title: "Web Apps", desc: "Ship high-performance web systems instantly." },
  ],
  modernize: [
    { title: "Architecture", desc: "Map and refactor complex legacy dependencies." },
    { title: "Infrastructure", desc: "Secure and upgrade your tech stack with confidence." },
    { title: "Scale", desc: "Optimize monoliths into modern microservices." },
  ],
  users: [
    { title: "Developers", desc: "Empower indie devs to build enterprise-scale." },
    { title: "SaaS Teams", desc: "Multiply output without increasing headcount." },
    { title: "Enterprise", desc: "Accelerate transformation with multi-agent speed." },
  ]
};

const RESOURCES_DATA = [
  { title: "Blog", desc: "Latest insights on AI-driven development." },
  { title: "Documentation", desc: "Guides, API references, and best practices." },
  { title: "Community", desc: "Join the discussion with other innovators." },
  { title: "Case Studies", desc: "Real-world success stories from our partners." },
];

const ListItem = React.forwardRef(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 group",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-3">
            {Icon && (
              <div className="h-9 w-9 shrink-0 flex items-center justify-center rounded-lg bg-gray-50 border border-gray-100 group-hover:bg-white group-hover:shadow-sm transition-all aspect-square">
                <Icon className="h-5 w-5 text-gray-600 group-hover:text-[#3b82f6]" />
              </div>
            )}
            <div>
              <div className="text-[14px] font-bold leading-none text-gray-900 group-hover:text-[#3b82f6] transition-colors mb-1">{title}</div>
              <p className="line-clamp-1 text-[12px] leading-snug text-gray-500">
                {children}
              </p>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md py-3 px-4 sm:px-6 lg:px-12 flex items-center justify-between transition-all">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-1.5 font-bold tracking-tight cursor-pointer relative z-50 shrink-0"
      >
        <Image src={Logo} alt="Logo" width={180} height={45} className="w-auto h-9 sm:h-11" priority />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-[#f0f4ff] text-[#3b82f6] hover:bg-[#e6eeff] hover:text-[#3b82f6] font-semibold px-4")}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-500 font-medium hover:text-gray-900">Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-8 p-6 w-[750px] lg:grid-cols-[1fr_1fr_1fr]">
                  <div>
                    <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest pl-3 mb-4">Build</h4>
                    <ul className="grid gap-1">
                      {SOLUTIONS_DATA.build.map(item => (
                        <ListItem key={item.title} title={item.title} icon={Zap}>{item.desc}</ListItem>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest pl-3 mb-4">Modernize</h4>
                    <ul className="grid gap-1">
                      {SOLUTIONS_DATA.modernize.map(item => (
                        <ListItem key={item.title} title={item.title} icon={Cpu}>{item.desc}</ListItem>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest pl-3 mb-4">Users</h4>
                    <ul className="grid gap-1">
                      {SOLUTIONS_DATA.users.map(item => (
                        <ListItem key={item.title} title={item.title} icon={Users}>{item.desc}</ListItem>
                      ))}
                    </ul>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-500 font-medium hover:text-gray-900">Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {RESOURCES_DATA.map(item => (
                    <ListItem key={item.title} title={item.title} icon={Book} href="#">{item.desc}</ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-gray-500 font-medium hover:text-gray-900")}>
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-gray-500 font-medium hover:text-gray-900")}>
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* CTA & Mobile Toggle */}
      <div className="flex items-center gap-2">
        <Button
          variant="orange"
          className="hidden sm:flex font-semibold px-5 py-2 h-9 text-sm rounded-md transition-all whitespace-nowrap shadow-sm"
        >
          Get Early Access
        </Button>
        
        <Sheet>
          <SheetTrigger asChild>
            <button 
              className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[380px] p-0 flex flex-col h-full border-l bg-white">
            <SheetHeader className="p-6 border-b text-left shrink-0">
              <SheetTitle>
                <Link href="/" className="inline-block">
                  <Image src={Logo} alt="Logo" width={140} height={35} className="w-auto h-8" />
                </Link>
              </SheetTitle>
            </SheetHeader>
            
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <Accordion type="single" collapsible className="w-full space-y-2">
                {/* Home */}
                <AccordionItem value="home" className="border-0">
                  <Link 
                    href="/" 
                    className="flex py-3 text-[18px] font-bold text-[#3b82f6]"
                  >
                    Home
                  </Link>
                </AccordionItem>

                {/* Solutions */}
                <AccordionItem value="solutions" className="border-0">
                  <AccordionTrigger className="py-3 hover:no-underline text-[18px] font-bold text-gray-900">
                    Solutions
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <div className="grid gap-6 pl-4 border-l border-gray-100 ml-1">
                      <div className="space-y-3">
                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Build</div>
                        <div className="grid gap-4">
                          {SOLUTIONS_DATA.build.map(item => (
                            <Link key={item.title} href="#" className="group block">
                              <span className="block text-[15px] font-bold text-gray-900 group-hover:text-[#3b82f6] transition-colors">{item.title}</span>
                              <span className="block text-xs text-gray-500 mt-0.5">{item.desc}</span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3 pt-2">
                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Modernize</div>
                        <div className="grid gap-4">
                          {SOLUTIONS_DATA.modernize.map(item => (
                            <Link key={item.title} href="#" className="group block">
                              <span className="block text-[15px] font-bold text-gray-900 group-hover:text-[#3b82f6] transition-colors">{item.title}</span>
                              <span className="block text-xs text-gray-500 mt-0.5">{item.desc}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Resources */}
                <AccordionItem value="resources" className="border-0">
                  <AccordionTrigger className="py-3 hover:no-underline text-[18px] font-bold text-gray-900">
                    Resources
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <div className="grid gap-4 pl-4 border-l border-gray-100 ml-1">
                      {RESOURCES_DATA.map(item => (
                        <Link key={item.title} href="#" className="group block">
                          <span className="block text-[15px] font-bold text-gray-900 group-hover:text-[#3b82f6] transition-colors">{item.title}</span>
                          <span className="block text-xs text-gray-500 mt-0.5">{item.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Pricing */}
                <AccordionItem value="pricing" className="border-0">
                  <Link href="#" className="flex py-3 text-[18px] font-bold text-gray-900">Pricing</Link>
                </AccordionItem>

                {/* Contact Us */}
                <AccordionItem value="contact" className="border-0">
                  <Link href="#" className="flex py-3 text-[18px] font-bold text-gray-900">Contact Us</Link>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="p-6 border-t mt-auto">
              <Button variant="orange" className="w-full font-bold py-6 rounded-lg text-lg shadow-xl shadow-orange-500/20">
                Get Early Access
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
