'use client';
import React, { useState, useMemo } from 'react';
import { FAQHero } from '@/components/sections/faq/FAQHero';
import { FAQFilters } from '@/components/sections/faq/FAQFilters';
import { FAQList } from '@/components/sections/faq/FAQList';
import { StillHaveQuestions } from '@/components/sections/faq/StillHaveQuestions';

const faqData = [
  {
    category: 'Platform',
    items: [
      {
        question: "What is the multi-agent SDLC Platform?",
        answer: "The multi-agent SDLC Platform is a comprehensive solution designed to streamline your entire software development lifecycle. It provides tools and workflows for planning, building, testing, deploying, and monitoring your software projects — all in one unified platform."
      },
      {
        question: "Which programming languages and frameworks are supported?",
        answer: "Our platform is language-agnostic and supports all major programming languages and frameworks. Whether you use JavaScript, Python, Java, Go, Ruby, .NET, or any other technology stack, the platform integrates seamlessly with your existing toolchain."
      },
      {
        question: "Does the platform integrate with existing CI/CD tools?",
        answer: "Yes, we offer native integrations with popular CI/CD tools including GitHub Actions, GitLab CI/CD, Jenkins, CircleCI, and Azure DevOps. We also provide a REST API for custom integrations."
      },
      {
        question: "Is the platform available as a cloud or self-hosted solution?",
        answer: "Our solution is fully managed and available immediately. For organizations with specific compliance or infrastructure requirements."
      },
      {
        question: "What is the uptime SLA for the platform?",
        answer: "We guarantee 99.9% uptime for our cloud-hosted platform. Enterprise customers receive a 99.95% uptime SLA with dedicated infrastructure. Real-time status is available on our status page."
      }
    ]
  },
  {
    category: 'Pricing',
    items: [
      {
        question: "What pricing tiers are available?",
        answer: "We offer three main tiers: Builders (Free/Individuals), Partners (Professional teams), and Enterprise (Custom solutions). Visit our pricing page for more details."
      },

      {
        question: "Can I change my plan later?",
        answer: "For those on the ThinkNew Plan (solo developers, freelancers, founders, and small builder teams shipping AI-powered products, you can upgrade your plan any time. Changes take effect at the start of the next billing cycle. For Those on the ThinkBig or ThinkBlue plans, individual contract terms govern plan and pricing adjustments."
      }
    ]
  },
  {
    category: 'Onboarding',
    items: [
      {
        question: "How long does it take to get started?",
        answer: "For the Builders tier, you can sign up and start using the platform within minutes. Partners and Enterprise customers typically complete onboarding within 1-2 weeks, including configuration, integrations, and team training."
      },
      {
        question: "Do you provide onboarding assistance?",
        answer: "Yes. All plans include access to our documentation and getting-started guides. Partners tier includes a dedicated onboarding session. Enterprise customers receive a full onboarding program with a dedicated Customer Success Manager."
      },
      {
        question: "Can I import data from my existing tools?",
        answer: "Yes, we provide migration tools and import utilities for common platforms including Jira, Trello, Asana, and GitHub Projects. Our team can also assist with custom migrations for Enterprise customers."
      },
      {
        question: "What training resources are available?",
        answer: "We provide web-based documentation, tutorials, video walkthroughs. Live training sessions are available (for Partners & Enterprise tiers)."
      },
      {
        question: "How do I invite my team members?",
        answer: "You can invite team members directly from the Team Management section in your Customer Portal. Simply enter their email addresses and assign appropriate roles. They will receive an invitation email to set up their accounts."
      }
    ]
  },
  {
    category: 'Support',
    items: [
      {
        question: "What support channels are available?",
        answer: "Support varies by plan. Independents are self-serve with access to our online help portal. Partners and Enterprise customers have access to our sales and support team who can address your needs directly — reach out to your contact or submit a request through the portal."
      },
      {
        question: "How do I submit a support ticket?",
        answer: "You can submit support tickets directly from your Customer Portal under the Support Tickets section. You can also email support@think4ever.com. All tickets are tracked and you will receive updates via email and in your portal."
      },

      {
        question: "Can I request a feature or report a bug?",
        answer: "Absolutely! We welcome feedback. You can submit feature requests and bug reports through the support ticket system in your portal. We also have a public roadmap where you can vote on upcoming features."
      },
      {
        question: "What are your support hours?",
        answer: "Our standard support team is available Mon-Fri during global business hours. Enterprise customers have access to 24/7/365 emergency technical support."
      }
    ]
  },
  {
    category: 'Security',
    items: [
      {
        question: "What security certifications does the platform hold?",
        answer: "Our platform is SOC 2 Type II certified and GDPR compliant. We also support SSO via SAML 2.0 and OIDC, role-based access control (RBAC), audit logging, and data encryption at rest and in transit."
      }
    ]
  }
];

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Questions');

  const categories = useMemo(() => {
    return ['All Questions', ...faqData.map(d => d.category)];
  }, []);

  const filteredData = useMemo(() => {
    let data = faqData;
    
    // 1. Filter by Category
    if (activeCategory !== 'All Questions') {
      data = data.filter(d => d.category === activeCategory);
    }

    // 2. Filter by Search Query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      data = data.map(section => ({
        ...section,
        items: section.items.filter(item => 
          item.question.toLowerCase().includes(q) || 
          item.answer.toLowerCase().includes(q)
        )
      })).filter(section => section.items.length > 0);
    }

    return data;
  }, [searchQuery, activeCategory]);

  return (
    <>
      <FAQHero 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />

      <FAQFilters 
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <FAQList data={filteredData} />

      <StillHaveQuestions />
    </>
  );
};

export default FAQPage;
