
import React from 'react';

// Definindo as interfaces exportadas para serem usadas em outros componentes
// Corrigindo o erro "is not a module" ao adicionar exports válidos.
export interface BenefitItem {
  title: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}
