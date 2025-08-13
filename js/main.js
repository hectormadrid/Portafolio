import { initScrollAnimations } from './scrollAnimations.js';
import { initProgressBars } from './progressBar.js';
import { initcontactFrom } from'./contactForm.js';
import { initTypingEffect } from './typingEffect.js';

document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initProgressBars();
    initTypingEffect();
    initcontactFrom();
});