import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface TestimonialItem {
  name: string;
  role?: string;
  text: string;
  rating: number;
  image?: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}