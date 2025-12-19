import { initScrollAnimations } from './scrollAnimations.js';
import { initProgressBars } from './progressBar.js';
import { initTypingEffect } from './typingEffect.js';
import { initMenuBurger } from './menuBurger.js';
import { initSkillsCarousel } from './skillsCarousel.js';
import { initProjectsCarousel } from './projectsCarousel.js';

document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initProgressBars();
    initTypingEffect();
    initMenuBurger();
    initSkillsCarousel();
    initProjectsCarousel();
});