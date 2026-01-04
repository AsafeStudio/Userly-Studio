import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BenefitItem {
  title: string;
}

export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  company: string;
}