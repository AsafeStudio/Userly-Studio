import React from 'react';
import { Hero } from '../components/Hero';
import { Differentiators } from '../components/Differentiators';
import { Benefits } from '../components/Benefits';
import { Services } from '../components/Services';
import { AboutPreview } from '../components/AboutPreview';
import { FAQ } from '../components/FAQ';

interface HomeProps {
  onNavigate: (page: 'home' | 'services' | 'about') => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Differentiators />
      <Benefits />
      <Services />
      <AboutPreview />
      <FAQ />
    </>
  );
};