import { initScrollAnimations } from './scrollAnimations.js';
import { initProgressBars } from './progressBar.js';
import { initTypingEffect } from './typingEffect.js';
import { initMenuBurger } from './menuBurger.js'

document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initProgressBars();
    initTypingEffect();
    initMenuBurger();
});