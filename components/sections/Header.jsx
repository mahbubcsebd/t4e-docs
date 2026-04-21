'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Logo from '@/public/assets/images/think4ever-logo.png';
import { Briefcase, Building, Cloud, Code, Cpu, Layers, Menu, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const PRODUCT_DATA = [
  {
    title: 'Multi-Agent SDLC',
    desc: 'The first platform that designs and builds entire systems.',
    href: '/#build-new',
    icon: Zap
  },
  {
    title: 'AI Orchestration',
    desc: 'Deploy complex ideas at the speed of thought.',
    href: '/#modernize-existing',
    icon: Cpu
  },
  {
    title: 'Full System View',
    desc: 'Map and manage dependencies automatically.',
    href: '/#integrations',
    icon: Layers
  }
];

const SOLUTIONS_DATA = {
  build: [
    {
      title: 'Independent Developers',
      desc: 'Build enterprise-grade systems as a solo creator.',
      href: '/#indie-devs',
    },
    {
      title: 'Software and SaaS',
      desc: 'Scaling output with AI-managed software cycles.',
      href: '/#software-saas',
    },
    {
      title: "SI's and Consultants",
      desc: 'Deliver complex integrations in record time.',
      href: '/#systems-integrators',
    },
  ],
  modernize: [
    {
      title: "SI's and Consultants",
      desc: 'Transform legacy stacks into modern AI systems.',
      href: '/#modernize-integrators',
    },
    {
      title: 'Enterprise IT Teams',
      desc: 'Modernize infrastructure with multi-agent orchestration.',
      href: '/#enterprise-it',
    },
  ],
  segments: [
    {
      title: 'Independent Developers',
      desc: 'Full-stack power for independent innovators.',
      href: '/#indie-devs',
    },
    {
      title: 'Software and SaaS',
      desc: 'Accelerate product roadmap for SaaS companies.',
      href: '/#software-saas',
    },
    {
      title: "SI's and Consultants",
      desc: 'Consulting solutions for complex workflows.',
      href: '/#systems-integrators',
    },
    {
      title: 'Enterprise IT Teams',
      desc: 'Enterprise-scale transformation simplified.',
      href: '/#enterprise-it',
    },
  ],
};

const ListItem = React.forwardRef(
  ({ className, title, children, icon: Icon, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            href={href}
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 group',
              className,
            )}
            {...props}
          >
            <div className="flex items-center gap-3">
              {Icon && (
                <div className="h-9 w-9 shrink-0 flex items-center justify-center rounded-lg bg-gray-50 border border-gray-100 group-hover:bg-white group-hover:shadow-sm transition-all aspect-square">
                  <Icon className="h-4.5 w-4.5 text-gray-400 group-hover:text-[#3b82f6]" />
                </div>
              )}
              <div>
                <div className="text-[13.5px] font-bold leading-none text-gray-900 group-hover:text-[#3b82f6] transition-colors mb-1">
                  {title}
                </div>
                <p className="line-clamp-1 text-[11px] leading-snug text-gray-400">
                  {children}
                </p>
              </div>
            </div>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = 'ListItem';

export const Header = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md py-3 px-4 sm:px-6 lg:px-12 flex items-center justify-between transition-all">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-1.5 font-bold tracking-tight cursor-pointer relative z-50 shrink-0"
      >
        <Image
          src={Logo}
          alt="Logo"
          width={180}
          height={45}
          className="w-auto h-9 sm:h-11"
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isActive('/') 
                      ? 'bg-[#f0f4ff] text-[#3b82f6] hover:bg-[#e6eeff] hover:text-[#3b82f6]' 
                      : 'text-gray-500 hover:text-gray-900 bg-transparent',
                    'font-semibold px-4 transition-colors'
                  )}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={cn(
                "transition-colors",
                isActive('/product') ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
              )}>
                Product
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {PRODUCT_DATA.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      icon={item.icon}
                      href={item.href}
                    >
                      {item.desc}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={cn(
                "transition-colors",
                pathname.startsWith('/#') || isActive('/') ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
              )}>
                Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-8 p-6 w-[850px] lg:grid-cols-[1.1fr_1.1fr_1.2fr]">
                  <div>
                    <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest pl-3 mb-4">
                      Build New Systems
                    </h4>
                    <ul className="grid gap-1">
                      {SOLUTIONS_DATA.build.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          icon={
                            item.title === 'Independent Developers'
                              ? Code
                              : item.title === 'Software and SaaS'
                                ? Cloud
                                : Briefcase
                          }
                          href={item.href}
                        >
                          {item.desc}
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest pl-3 mb-4">
                      Modernize Existing Systems
                    </h4>
                    <ul className="grid gap-1">
                      {SOLUTIONS_DATA.modernize.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          icon={
                            item.title === "SI's and Consultants"
                              ? Briefcase
                              : Building
                          }
                          href={item.href}
                        >
                          {item.desc}
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest pl-3 mb-4 border-l border-gray-100 pl-6">
                      By Segment
                    </h4>
                    <ul className="grid gap-1 border-l border-gray-100 pl-3">
                      {SOLUTIONS_DATA.segments.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          icon={
                            item.title === 'Independent Developers'
                              ? Code
                              : item.title === 'Software and SaaS'
                                ? Cloud
                                : item.title === 'Enterprise IT Teams'
                                  ? Building
                                  : Briefcase
                          }
                          href={item.href}
                        >
                          {item.desc}
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isActive('/pricing') 
                      ? 'bg-[#f0f4ff] text-[#3b82f6] hover:bg-[#e6eeff] hover:text-[#3b82f6]' 
                      : 'text-gray-500 hover:text-gray-900 bg-transparent',
                    'font-medium transition-colors'
                  )}
                >
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/faq" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isActive('/faq') 
                      ? 'bg-[#f0f4ff] text-[#3b82f6] hover:bg-[#e6eeff] hover:text-[#3b82f6]' 
                      : 'text-gray-500 hover:text-gray-900 bg-transparent',
                    'font-medium transition-colors'
                  )}
                >
                  FAQ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact-us" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isActive('/contact-us') 
                      ? 'bg-[#f0f4ff] text-[#3b82f6] hover:bg-[#e6eeff] hover:text-[#3b82f6]' 
                      : 'text-gray-500 hover:text-gray-900 bg-transparent',
                    'font-medium transition-colors'
                  )}
                >
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
          <SheetContent
            side="right"
            className="w-full sm:w-[380px] p-0 flex flex-col h-full border-l bg-white"
          >
            <SheetHeader className="p-6 border-b text-left shrink-0">
              <SheetTitle>
                <SheetClose asChild>
                  <Link href="/" className="inline-block">
                    <Image
                      src={Logo}
                      alt="Logo"
                      width={140}
                      height={35}
                      className="w-auto h-8"
                    />
                  </Link>
                </SheetClose>
              </SheetTitle>
            </SheetHeader>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              <Accordion type="single" collapsible className="w-full space-y-2">
                {/* Home */}
                <AccordionItem value="home" className="border-0">
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className={cn(
                        "flex py-3 text-[18px] font-bold transition-colors",
                        isActive('/') ? "text-[#3b82f6]" : "text-gray-900"
                      )}
                    >
                      Home
                    </Link>
                  </SheetClose>
                </AccordionItem>

                {/* Product */}
                <AccordionItem value="product" className="border-0">
                  <AccordionTrigger className="py-3 hover:no-underline text-[18px] font-bold text-gray-900">
                    Product
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <div className="grid gap-4 pl-4 border-l border-gray-100 ml-1">
                      {PRODUCT_DATA.map((item) => (
                        <SheetClose key={item.title} asChild>
                          <Link href={item.href} className="group block">
                            <span className="block text-[15px] font-bold text-gray-900 group-hover:text-[#3b82f6] transition-colors">
                              {item.title}
                            </span>
                            <span className="block text-xs text-gray-500 mt-0.5">
                              {item.desc}
                            </span>
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Solutions */}
                <AccordionItem value="solutions" className="border-0">
                  <AccordionTrigger className="py-3 hover:no-underline text-[18px] font-bold text-gray-900">
                    Solutions
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <div className="grid gap-6 pl-4 border-l border-gray-100 ml-1">
                      <div className="space-y-3">
                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                          Build New Systems
                        </div>
                        <div className="grid gap-4">
                          {SOLUTIONS_DATA.build.map((item) => (
                            <SheetClose key={item.title} asChild>
                              <Link
                                href={item.href}
                                className="group block"
                              >
                                <span className="block text-[15px] font-bold text-gray-900 group-hover:text-[#3b82f6] transition-colors">
                                  {item.title}
                                </span>
                                <span className="block text-xs text-gray-500 mt-0.5">
                                  {item.desc}
                                </span>
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3 pt-2">
                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                          Modernize Existing Systems
                        </div>
                        <div className="grid gap-4">
                          {SOLUTIONS_DATA.modernize.map((item) => (
                            <SheetClose key={item.title} asChild>
                              <Link
                                href={item.href}
                                className="group block"
                              >
                                <span className="block text-[15px] font-bold text-gray-900 group-hover:text-[#3b82f6] transition-colors">
                                  {item.title}
                                </span>
                                <span className="block text-xs text-gray-500 mt-0.5">
                                  {item.desc}
                                </span>
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3 pt-2">
                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                          By Segment
                        </div>
                        <div className="grid gap-4">
                          {SOLUTIONS_DATA.segments.map((item) => (
                            <SheetClose key={item.title} asChild>
                              <Link
                                href={item.href}
                                className="group block"
                              >
                                <span className="block text-[15px] font-bold text-gray-900 group-hover:text-[#3b82f6] transition-colors">
                                  {item.title}
                                </span>
                                <span className="block text-xs text-gray-500 mt-0.5">
                                  {item.desc}
                                </span>
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Pricing */}
                <AccordionItem value="pricing" className="border-0">
                  <SheetClose asChild>
                    <Link
                      href="/pricing"
                      className={cn(
                        "flex py-3 text-[18px] font-bold transition-colors",
                        isActive('/pricing') ? "text-[#3b82f6]" : "text-gray-900"
                      )}
                    >
                      Pricing
                    </Link>
                  </SheetClose>
                </AccordionItem>

                {/* FAQ */}
                <AccordionItem value="faq" className="border-0">
                  <SheetClose asChild>
                    <Link
                      href="/faq"
                      className={cn(
                        "flex py-3 text-[18px] font-bold transition-colors",
                        isActive('/faq') ? "text-[#3b82f6]" : "text-gray-900"
                      )}
                    >
                      FAQ
                    </Link>
                  </SheetClose>
                </AccordionItem>

                {/* Contact Us */}
                <AccordionItem value="contact" className="border-0">
                  <SheetClose asChild>
                    <Link
                      href="/contact-us"
                      className={cn(
                        "flex py-3 text-[18px] font-bold transition-colors",
                        isActive('/contact-us') ? "text-[#3b82f6]" : "text-gray-900"
                      )}
                    >
                      Contact Us
                    </Link>
                  </SheetClose>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="p-6 border-t mt-auto">
              <Button
                variant="orange"
                className="w-full font-bold py-6 rounded-lg text-lg shadow-xl shadow-orange-500/20"
              >
                Get Early Access
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
