import { initScrollAnimations } from './scrollAnimations.js';
import { initProgressBars } from './progressBar.js';
import { initTypingEffect } from './typingEffect.js';
import { initMenuBurger } from './menuBurger.js';
import { initSkillsCarousel } from './skillsCarousel.js';

document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initProgressBars();
    initTypingEffect();
    initMenuBurger();
    initSkillsCarousel();
});