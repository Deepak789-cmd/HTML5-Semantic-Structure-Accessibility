/**
 * DEEPAK GOUDA PORTFOLIO - Main JavaScript
 * Handles navigation, form validation, filtering, and accessibility features
 */

(function() {
    'use strict';

    // ===== DOM Elements =====
    const header = document.getElementById('header');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    const sendAnotherBtn = document.getElementById('send-another-btn');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const projectsGrid = document.getElementById('projects-grid');
    const emptyState = document.getElementById('empty-state');
    const currentYearSpan = document.getElementById('current-year');

    // ===== Utility Functions =====
    
    /**
     * Validates email format using regex
     * @param {string} email - Email address to validate
     * @returns {boolean} - True if valid email format
     */
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Shows an error message for a form field
     * @param {HTMLElement} field - The form field element
     * @param {HTMLElement} errorElement - The error message element
     */
    function showError(field, errorElement) {
        field.classList.add('error');
        field.setAttribute('aria-invalid', 'true');
        errorElement.hidden = false;
    }

    /**
     * Hides an error message for a form field
     * @param {HTMLElement} field - The form field element
     * @param {HTMLElement} errorElement - The error message element
     */
    function hideError(field, errorElement) {
        field.classList.remove('error');
        field.setAttribute('aria-invalid', 'false');
        errorElement.hidden = true;
    }

    /**
     * Announces a message to screen readers
     * @param {string} message - Message to announce
     */
    function announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }

    // ===== Header Scroll Effect =====
    function handleHeaderScroll() {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // ===== Mobile Navigation =====
    function toggleMobileNav() {
        const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
        
        navToggle.setAttribute('aria-expanded', !isOpen);
        navToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
        navMenu.classList.toggle('open', !isOpen);

        // Trap focus in menu when open
        if (!isOpen) {
            const firstLink = navMenu.querySelector('.nav-link');
            if (firstLink) {
                firstLink.focus();
            }
        }
    }

    function closeMobileNav() {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open navigation menu');
        navMenu.classList.remove('open');
    }

    function handleNavKeydown(event) {
        if (event.key === 'Escape' && navMenu.classList.contains('open')) {
            closeMobileNav();
            navToggle.focus();
        }
    }

    // ===== Project Filtering =====
    function filterProjects(category) {
        let visibleCount = 0;

        projectCards.forEach(card => {
            const cardCategory = card.dataset.category;
            const shouldShow = category === 'all' || cardCategory === category;
            
            card.style.display = shouldShow ? '' : 'none';
            if (shouldShow) visibleCount++;
        });

        // Show/hide empty state
        if (emptyState) {
            emptyState.hidden = visibleCount > 0;
        }

        // Announce filter result to screen readers
        announceToScreenReader(`Showing ${visibleCount} project${visibleCount !== 1 ? 's' : ''}`);
    }

    function handleFilterClick(event) {
        const btn = event.target.closest('.filter-btn');
        if (!btn) return;

        // Update active state
        filterBtns.forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        // Filter projects
        filterProjects(btn.dataset.filter);
    }

    // ===== Contact Form Validation =====
    function validateForm() {
        const nameField = document.getElementById('name');
        const emailField = document.getElementById('email');
        const subjectField = document.getElementById('subject');
        const messageField = document.getElementById('message');

        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const subjectError = document.getElementById('subject-error');
        const messageError = document.getElementById('message-error');

        let isValid = true;
        let firstErrorField = null;

        // Validate name
        if (!nameField.value.trim() || nameField.value.trim().length < 2) {
            showError(nameField, nameError);
            if (!firstErrorField) firstErrorField = nameField;
            isValid = false;
        } else {
            hideError(nameField, nameError);
        }

        // Validate email
        if (!emailField.value.trim() || !isValidEmail(emailField.value)) {
            showError(emailField, emailError);
            if (!firstErrorField) firstErrorField = emailField;
            isValid = false;
        } else {
            hideError(emailField, emailError);
        }

        // Validate subject
        if (!subjectField.value) {
            showError(subjectField, subjectError);
            if (!firstErrorField) firstErrorField = subjectField;
            isValid = false;
        } else {
            hideError(subjectField, subjectError);
        }

        // Validate message
        if (!messageField.value.trim() || messageField.value.trim().length < 10) {
            showError(messageField, messageError);
            if (!firstErrorField) firstErrorField = messageField;
            isValid = false;
        } else {
            hideError(messageField, messageError);
        }

        // Focus first error field
        if (firstErrorField) {
            firstErrorField.focus();
        }

        return isValid;
    }

    function handleFormSubmit(event) {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        const submitBtn = document.getElementById('submit-btn');
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;

            // Show success message
            contactForm.hidden = true;
            successMessage.hidden = false;
            successMessage.focus();

            // Reset form
            contactForm.reset();

            // Announce success to screen readers
            announceToScreenReader('Your message has been sent successfully');
        }, 1500);
    }

    function handleSendAnother() {
        successMessage.hidden = true;
        contactForm.hidden = false;
        contactForm.querySelector('input').focus();
    }

    // Clear error on input
    function handleInputChange(event) {
        const field = event.target;
        const errorId = field.id + '-error';
        const errorElement = document.getElementById(errorId);
        
        if (errorElement && field.classList.contains('error')) {
            hideError(field, errorElement);
        }
    }

    // ===== Update Current Year =====
    function updateYear() {
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }
    }

    // ===== Event Listeners =====
    function initEventListeners() {
        // Header scroll effect
        if (header) {
            window.addEventListener('scroll', handleHeaderScroll, { passive: true });
            handleHeaderScroll(); // Initial check
        }

        // Mobile navigation
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', toggleMobileNav);
            document.addEventListener('keydown', handleNavKeydown);
            
            // Close menu when clicking outside
            document.addEventListener('click', (event) => {
                if (navMenu.classList.contains('open') && 
                    !navMenu.contains(event.target) && 
                    !navToggle.contains(event.target)) {
                    closeMobileNav();
                }
            });

            // Close menu on window resize to desktop
            window.addEventListener('resize', () => {
                if (window.innerWidth >= 768 && navMenu.classList.contains('open')) {
                    closeMobileNav();
                }
            });
        }

        // Project filtering
        if (filterBtns.length > 0 && projectCards.length > 0) {
            filterBtns.forEach(btn => {
                btn.addEventListener('click', handleFilterClick);
            });
        }

        // Contact form
        if (contactForm) {
            contactForm.addEventListener('submit', handleFormSubmit);
            
            // Clear errors on input
            const formFields = contactForm.querySelectorAll('input, select, textarea');
            formFields.forEach(field => {
                field.addEventListener('input', handleInputChange);
                field.addEventListener('change', handleInputChange);
            });
        }

        // Send another message button
        if (sendAnotherBtn) {
            sendAnotherBtn.addEventListener('click', handleSendAnother);
        }

        // Update year
        updateYear();
    }

    // ===== Initialize =====
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initEventListeners);
        } else {
            initEventListeners();
        }
    }

    init();
})();
