/**
 * 心灵港湾 - 交互脚本
 * IIFE 封装，无全局变量污染
 */
(function () {
  'use strict';

  // ============ DOM Ready ============
  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  // ============ Mobile Navigation ============
  function initMobileNav() {
    var toggle = document.getElementById('navToggle');
    var menu = document.getElementById('navMenu');
    var overlay = document.getElementById('navOverlay');

    if (!toggle || !menu) return;

    function openMenu() {
      menu.classList.add('nav__menu--open');
      toggle.classList.add('nav__toggle--active');
      if (overlay) overlay.classList.add('nav__overlay--open');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      menu.classList.remove('nav__menu--open');
      toggle.classList.remove('nav__toggle--active');
      if (overlay) overlay.classList.remove('nav__overlay--open');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', function () {
      if (menu.classList.contains('nav__menu--open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    if (overlay) {
      overlay.addEventListener('click', closeMenu);
    }

    // Close on nav link click
    var navLinks = menu.querySelectorAll('.nav__link');
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', closeMenu);
    }

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('nav__menu--open')) {
        closeMenu();
      }
    });
  }

  // ============ Active Nav Link Highlight ============
  function initActiveNav() {
    var links = document.querySelectorAll('.nav__link');
    var currentPath = window.location.pathname;
    var currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute('href') || '';
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        links[i].classList.add('nav__link--active');
      }
    }
  }

  // ============ Smooth Scroll for Anchor Links ============
  function initSmoothScroll() {
    document.addEventListener('click', function (e) {
      var target = e.target.closest('a[href^="#"]');
      if (!target) return;

      var hash = target.getAttribute('href');
      if (hash === '#') return;

      var el = document.querySelector(hash);
      if (!el) return;

      e.preventDefault();

      var headerHeight = 72;
      var top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    });
  }

  // ============ Scroll Animation (Fade In) ============
  function initScrollAnimation() {
    var fadeEls = document.querySelectorAll('.fade-in');
    if (fadeEls.length === 0) return;

    var observer = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add('fade-in--visible');
          observer.unobserve(entries[i].target);
        }
      }
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    for (var j = 0; j < fadeEls.length; j++) {
      observer.observe(fadeEls[j]);
    }
  }

  // ============ Back to Top Button ============
  function initBackToTop() {
    var btn = document.getElementById('backToTop');
    if (!btn) return;

    function toggleVisibility() {
      if (window.pageYOffset > 400) {
        btn.classList.add('back-to-top--visible');
      } else {
        btn.classList.remove('back-to-top--visible');
      }
    }

    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          toggleVisibility();
          ticking = false;
        });
        ticking = true;
      }
    });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ============ Articles Search & Filter ============
  function initArticlesFilter() {
    var searchInput = document.getElementById('articleSearch');
    var filterTags = document.querySelectorAll('.filter-tag');
    var articles = document.querySelectorAll('.article-full');

    if (!searchInput && filterTags.length === 0) return;

    var activeFilter = 'all';
    var searchTerm = '';

    function filterArticles() {
      var visibleCount = 0;

      for (var i = 0; i < articles.length; i++) {
        var article = articles[i];
        var tags = (article.getAttribute('data-tags') || '').toLowerCase();
        var title = (article.getAttribute('data-title') || '').toLowerCase();
        var excerpt = (article.getAttribute('data-excerpt') || '').toLowerCase();

        var matchesFilter = (activeFilter === 'all' || tags.indexOf(activeFilter) !== -1);
        var matchesSearch = (
          searchTerm === '' ||
          title.indexOf(searchTerm) !== -1 ||
          excerpt.indexOf(searchTerm) !== -1 ||
          tags.indexOf(searchTerm) !== -1
        );

        if (matchesFilter && matchesSearch) {
          article.style.display = '';
          visibleCount++;
        } else {
          article.style.display = 'none';
        }
      }

      // Show/hide empty state
      var emptyEl = document.getElementById('articlesEmpty');
      if (emptyEl) {
        emptyEl.style.display = visibleCount === 0 ? '' : 'none';
      }
    }

    if (searchInput) {
      searchInput.addEventListener('input', function () {
        searchTerm = this.value.toLowerCase().trim();
        filterArticles();
      });
    }

    for (var j = 0; j < filterTags.length; j++) {
      filterTags[j].addEventListener('click', function () {
        for (var k = 0; k < filterTags.length; k++) {
          filterTags[k].classList.remove('filter-tag--active');
        }
        this.classList.add('filter-tag--active');
        activeFilter = this.getAttribute('data-filter') || 'all';
        filterArticles();
      });
    }
  }

  // ============ i18n ============
  var lang = document.documentElement.lang || 'zh-CN';
  var isEN = lang.indexOf('en') !== -1;

  var i18n = isEN ? {
    nameRequired: 'Please enter your name',
    phoneRequired: 'Please enter your phone number',
    phoneInvalid: 'Please enter a valid phone number',
    typeRequired: 'Please select a consultation type',
    descRequired: 'Please briefly describe your concern',
    submitting: 'Submitting...',
    submit: 'Book Appointment',
    successMsg: 'Your appointment has been submitted! I will contact you within 24 hours. Please keep your phone available.'
  } : {
    nameRequired: '请输入您的姓名',
    phoneRequired: '请输入您的联系电话',
    phoneInvalid: '请输入有效的电话号码',
    typeRequired: '请选择咨询类型',
    descRequired: '请简要描述您想咨询的问题',
    submitting: '提交中...',
    submit: '提交预约',
    successMsg: '预约提交成功！我会在 24 小时内与您联系，请保持手机畅通。'
  };

  // ============ Contact Form Validation ============
  function initContactForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;

    var fields = [
      { id: 'contactName', validate: function (v) { return v.trim().length > 0 ? '' : i18n.nameRequired; } },
      { id: 'contactPhone', validate: function (v) {
        if (v.trim().length === 0) return i18n.phoneRequired;
        if (!/^[\d\-+\s()]{7,20}$/.test(v.trim())) return i18n.phoneInvalid;
        return '';
      }},
      { id: 'contactWechat', validate: function (v) { return ''; } }, // Optional
      { id: 'contactType', validate: function (v) { return v ? '' : i18n.typeRequired; } },
      { id: 'contactDesc', validate: function (v) { return v.trim().length > 0 ? '' : i18n.descRequired; } }
    ];

    function showError(fieldId, message) {
      var errorEl = document.getElementById(fieldId + 'Error');
      var input = document.getElementById(fieldId);
      if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.add('form__error--visible');
      }
      if (input) {
        if (message) {
          input.classList.add('form__input--error');
        } else {
          input.classList.remove('form__input--error');
        }
      }
    }

    function clearErrors() {
      for (var i = 0; i < fields.length; i++) {
        showError(fields[i].id, '');
      }
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      clearErrors();

      var hasError = false;

      for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        var input = document.getElementById(field.id);
        if (!input) continue;
        var errorMessage = field.validate(input.value);
        if (errorMessage) {
          showError(field.id, errorMessage);
          hasError = true;
        }
      }

      if (!hasError) {
        var submitBtn = form.querySelector('.form__submit');
        var successEl = document.getElementById('formSuccess');

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = i18n.submitting;
        }

        var formData = new FormData(form);
        var plainData = {};
        formData.forEach(function (value, key) { plainData[key] = value; });

        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(plainData)
        })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (data.success) {
            if (successEl) {
              successEl.textContent = i18n.successMsg;
              successEl.style.display = 'block';
            }
            form.reset();
          } else {
            alert(data.message || 'Submission failed. Please try again.');
          }
        })
        .catch(function () {
          alert('Network error. Please try again later.');
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = i18n.submit;
          }
        });
      }
    });

    // Real-time validation on blur
    for (var j = 0; j < fields.length; j++) {
      (function (field) {
        var input = document.getElementById(field.id);
        if (!input) return;
        input.addEventListener('blur', function () {
          var msg = field.validate(this.value);
          showError(field.id, msg);
        });
        input.addEventListener('input', function () {
          showError(field.id, '');
        });
      })(fields[j]);
    }
  }

  // ============ FAQ Accordion ============
  function initFaq() {
    var questions = document.querySelectorAll('.faq__question');

    for (var i = 0; i < questions.length; i++) {
      questions[i].addEventListener('click', function () {
        var answer = this.nextElementSibling;
        var arrow = this.querySelector('.faq__arrow');
        var isOpen = answer.classList.contains('faq__answer--open');

        // Close all
        var allAnswers = document.querySelectorAll('.faq__answer--open');
        var allArrows = document.querySelectorAll('.faq__arrow--open');
        for (var j = 0; j < allAnswers.length; j++) {
          allAnswers[j].classList.remove('faq__answer--open');
        }
        for (var k = 0; k < allArrows.length; k++) {
          allArrows[k].classList.remove('faq__arrow--open');
        }

        // Open clicked (if not already open)
        if (!isOpen) {
          answer.classList.add('faq__answer--open');
          arrow.classList.add('faq__arrow--open');
        }
      });
    }
  }

  // ============ Online Status Detection ============
  function initOnlineStatus() {
    fetch('/psy_online.json')
      .then(function (r) { return r.json(); })
      .then(function (config) {
        var url = config.tunnel_url;
        if (!url) return;

        var controller = new AbortController();
        var timeout = setTimeout(function () { controller.abort(); }, 5000);

        fetch(url + '/api/health', { signal: controller.signal, mode: 'cors' })
          .then(function (r) { return r.json(); })
          .then(function (data) {
            clearTimeout(timeout);
            if (data && data.status === 'ok') {
              showEntryButton(url);
            }
          })
          .catch(function () {
            clearTimeout(timeout);
          });
      })
      .catch(function () {});
  }

  function showEntryButton(baseUrl) {
    var existing = document.getElementById('adminEntryBtn');
    if (existing) existing.remove();

    var btn = document.createElement('a');
    btn.id = 'adminEntryBtn';
    btn.className = 'admin-entry';
    btn.href = baseUrl;
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
    btn.innerHTML = '<span class="admin-entry__dot"></span> 管理系统';
    document.body.appendChild(btn);
  }

  // ============ Init All ============
  ready(function () {
    initMobileNav();
    initActiveNav();
    initSmoothScroll();
    initScrollAnimation();
    initBackToTop();
    initArticlesFilter();
    initContactForm();
    initFaq();
    initOnlineStatus();
  });

})();
