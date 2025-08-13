import {initScrollAnimations} from './scrollAnimations.js';
import {initProgressBars}from './progessBar.js';
import {initcontactFrom} from'./contactForm.js';
import {initThemeToggle}from './themeToggles.js';
import {initTypingEffect}from './typingEffect.js';

document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initProgressBars();
    initThemeToggle();
    initTypingEffect();
    initcontactFrom();
});