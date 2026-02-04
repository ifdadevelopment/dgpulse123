$(document).ready(function () {
  (function ($, window, document) {
    'use strict';
    $(document).on('click', '[data-toggle="readmore"]', function (e) {
      e.preventDefault();

      const target = $(this).data('target');
      const textEl = $(target);

      textEl.slideToggle(300);
      $(this).text($(this).text() === 'Read more' ? 'Read less' : 'Read more');
    });

    window.openTab = function (evt, tabId) {
      $('.tabcontent').hide();
      $('.tablinks').removeClass('active');

      $('#' + tabId).show();
      $(evt.currentTarget).addClass('active');
    };
    window.formSubmit = function (e, form) {
      e.preventDefault();

      const $form = $(form);
      const formData = new FormData(form);

      $form.find('.msg').html('');

      $.ajax({
        type: 'POST',
        url: base_url + 'includes/form-process.php',
        data: formData,
        dataType: 'json',
        cache: false,
        contentType: false,
        processData: false,

        beforeSend() {
          $('.loader-sec').css('display', 'flex');
        },

        success(response) {
          $('.loader-sec').hide();

          if (response.sts === 1) {
            $form.find('.msg').html(
              `<div class="alert alert-success">${response.msg}</div>`
            );

            const formTitle = $form.find('input[name="form_title"]').val();
            window.location.href =
              formTitle === 'Book A call'
                ? base_url + 'book-a-call.html'
                : base_url + 'thank-you.html';
          } else {
            const msg = Array.isArray(response.msg)
              ? response.msg.join('<br/>')
              : response.msg;

            $form.find('.msg').html(
              `<div class="alert alert-danger">${msg}</div>`
            );
          }
        },

        error() {
          $('.loader-sec').hide();
          $form.find('.msg').html(
            `<div class="alert alert-danger">Oops! Something went wrong</div>`
          );
        },
      });
    };
    $(window).on('scroll', function () {
      const scrollTop = $(this).scrollTop();

      $('#sticky-header').toggleClass('sticky', scrollTop > 120);
      $('.sidebar-contact').toggleClass('show', scrollTop > 500);
      $('#return-to-top').toggle(scrollTop > 300);
    });
    $('#return-to-top').on('click', function () {
      $('html, body').animate({ scrollTop: 0 }, 500);
    });
    $('.count').each(function () {
      const $el = $(this);
      $el.prop('Counter', 0).animate(
        { Counter: $el.text() },
        {
          duration: 4000,
          easing: 'swing',
          step(now) {
            $el.text(Math.ceil(now));
          },
        }
      );
    });
    $('.top-nav li, .footer-colom li').on('click', function () {
      $(this).find('.dropdown, .footer-dropdown').slideToggle();
      $(this).siblings().find('.dropdown, .footer-dropdown').hide();
    });
    $('#FaqList').on('hide.bs.collapse show.bs.collapse', function (e) {
      $(e.target)
        .prev()
        .find('i:last-child')
        .toggleClass('fa-minus fa-plus');
    });
    $('#book-a-call, #schedule-a-call').on('click', function () {
      $('.book-a-call-slide').slideToggle(400);
      $('#book-a-call').hide();
    });
    $('[data-bs-toggle-theme]').on('click', function (e) {
      e.preventDefault();
      const html = $('html');
      html.attr(
        'data-bs-theme',
        html.attr('data-bs-theme') === 'dark' ? 'light' : 'dark'
      );
    });

  })(jQuery, window, document);
});

$(document).ready(function () {
  let isFloatingMenuOpen = false;
  let isCallSubmenuOpen = false;

  const $floatingMainBtn = $('#floatingMainBtn');
  const $floatingMenu = $('#floatingMenu');
  const $callBtn = $('#callBtn');
  const $callSubmenu = $('#callSubmenu');

  $floatingMainBtn.on('click', function (e) {
    e.stopPropagation();
    isFloatingMenuOpen = !isFloatingMenuOpen;
    $floatingMenu.toggleClass('active');
    $floatingMainBtn.toggleClass('active');

    if (!isFloatingMenuOpen && isCallSubmenuOpen) {
      $callSubmenu.removeClass('active');
      isCallSubmenuOpen = false;
    }
  });

  $callBtn.on('click', function (e) {
    e.stopPropagation();
    isCallSubmenuOpen = !isCallSubmenuOpen;
    $callSubmenu.toggleClass('active');
  });

  $(document).on('click', function (e) {
    if (
      !$(e.target).closest('.floating-action-wrapper').length &&
      (isFloatingMenuOpen || isCallSubmenuOpen)
    ) {
      $floatingMenu.removeClass('active');
      $floatingMainBtn.removeClass('active');
      $callSubmenu.removeClass('active');
      isFloatingMenuOpen = false;
      isCallSubmenuOpen = false;
    }
  });

  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') {
      $floatingMenu.removeClass('active');
      $floatingMainBtn.removeClass('active');
      $callSubmenu.removeClass('active');
      isFloatingMenuOpen = false;
      isCallSubmenuOpen = false;
    }
  });
  $('#FaqList .accordion-collapse')
    .on('shown.bs.collapse', function () {
      $(this).prev().find('.fa-plus').removeClass('fa-plus').addClass('fa-minus');
    })
    .on('hidden.bs.collapse', function () {
      $(this).prev().find('.fa-minus').removeClass('fa-minus').addClass('fa-plus');
    });
  const $mobileMenu = $('#mobileMenu');
  const $mobileOverlay = $('#mobileOverlay');
  const $mobileToggle = $('#mobileToggle');

  $mobileToggle.on('click', function () {
    $mobileMenu.addClass('active');
    $mobileOverlay.addClass('active');
    $mobileToggle.addClass('active');
    $('body').css('overflow', 'hidden');
  });

  function closeMobileMenu() {
    $mobileMenu.removeClass('active');
    $mobileOverlay.removeClass('active');
    $mobileToggle.removeClass('active');
    $('body').css('overflow', '');

    $('.mobile-dropdown, .mobile-subdropdown').removeClass('active');
    $('.mobile-toggle-icon').removeClass('rotated');
  }

  $('#mobileClose, #mobileOverlay').on('click', closeMobileMenu);

  window.toggleMobileDropdown = function (e, id) {
    e.preventDefault();
    e.stopPropagation();

    const $dropdown = $('#dropdown-' + id);
    const $icon = $('#icon-' + id);

    $('.mobile-dropdown').not($dropdown).removeClass('active');
    $('.mobile-toggle-icon').not($icon).removeClass('rotated');

    $dropdown.toggleClass('active');
    $icon.toggleClass('rotated');
  };

  window.toggleMobileSubdropdown = function (e, id) {
    e.preventDefault();
    e.stopPropagation();

    const $sub = $('#subdropdown-' + id);
    const $icon = $('#icon-' + id);

    $sub.siblings('.mobile-subdropdown').removeClass('active');
    $icon.toggleClass('rotated');
    $sub.toggleClass('active');
  };
  const $header = $('#mainHeader');
  const $scrollTop = $('#scrollTop');

  $(window).on('scroll', function () {
    $header.toggleClass('scrolled', window.scrollY > 50);
    $scrollTop.toggleClass('show', window.scrollY > 300);
  });

  $scrollTop.on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  $('.nav-item')
    .on('mouseenter', function () {
      $(this).find('.dropdown').css({
        opacity: 1,
        visibility: 'visible',
        transform: 'translateY(0)',
      });
    })
    .on('mouseleave', function () {
      $(this).find('.dropdown').css({
        opacity: 0,
        visibility: 'hidden',
        transform: 'translateY(20px)',
      });
    });

  $('#exploreBtn').on('click', function () {
    const $content = $('#expandedContent');
    const isActive = $content.hasClass('active');

    $content.toggleClass('active');
    $(this).html(
      isActive
        ? 'Explore How We Drive Growth ▼'
        : 'Show Less ▲'
    );
  });

  const videoIds = ['HdzyxELapTs', 'anotherVideoID123', 'thirdVideoID456'];

  $('.testimonial-card').each(function (index) {
    $(this)
      .css('cursor', 'pointer')
      .on('click', function () {
        window.open(
          `https://www.youtube.com/watch?v=${videoIds[index]}`,
          '_blank'
        );
      });
  });

  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    alert(
      'Thank you! Your message has been sent successfully. Our team will contact you soon.'
    );
    this.reset();
  });
});
$(document).ready(function () {

  /* ===============================
     Smooth Scroll on Contact Links
  =============================== */
  $('.contact-value').on('click', function (e) {
    const href = $(this).attr('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const $target = $(href);
      if ($target.length) {
        $('html, body').animate(
          { scrollTop: $target.offset().top },
          600
        );
      }
    }
  });

  /* ===============================
     Header Scroll Animation
  =============================== */
  let lastScrollTop = 0;
  const $header = $('.contact-header');

  $header.css('transition', 'all 0.3s ease');

  $(window).on('scroll', function () {
    const scrollTop = $(this).scrollTop();

    if (scrollTop > lastScrollTop) {
      $header.css({
        transform: 'translateY(-5px)',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      });
    } else {
      $header.css({
        transform: 'translateY(0)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      });
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  /* ===============================
     Ripple Effect on Click
  =============================== */
  $('.contact-item').on('click', function (e) {
    const $this = $(this);
    const offset = $this.offset();
    const size = Math.max($this.outerWidth(), $this.outerHeight());

    const x = e.pageX - offset.left - size / 2;
    const y = e.pageY - offset.top - size / 2;

    const $ripple = $('<span class="ripple"></span>').css({
      width: size,
      height: size,
      left: x,
      top: y,
    });

    $this.append($ripple);

    setTimeout(() => {
      $ripple.remove();
    }, 600);
  });

  /* ===============================
     Screen Size Check
  =============================== */
  function checkScreenSize() {
    if ($(window).width() <= 768) {
      console.log('Mobile view activated');
    } else {
      console.log('Desktop view activated');
    }
  }

  $(window).on('resize', checkScreenSize);
  checkScreenSize();

  /* ===============================
     Keyboard Accessibility
  =============================== */
  $('.contact-value').on('keypress', function (e) {
    if (e.key === 'Enter') {
      $(this).trigger('click');
    }
  });

  /* ===============================
     WhatsApp Chat Functionality
  =============================== */
  const $whatsappBtn = $('#whatsappBtn');
  const $whatsappChat = $('#whatsappChat');
  const $closeChat = $('#closeChat');
  const $sendBtn = $('#sendBtn');
  const $whatsappInput = $('#whatsappInput');
  const $notificationBadge = $('.notification-badge');

  const whatsappNumber = '919560133711';

  $whatsappBtn.on('click', function () {
    $whatsappChat.toggleClass('active');

    if ($whatsappChat.hasClass('active')) {
      setTimeout(() => {
        $notificationBadge.hide();
      }, 300);
    }
  });

  $closeChat.on('click', function (e) {
    e.stopPropagation();
    $whatsappChat.removeClass('active');
  });

  $(document).on('click', function (e) {
    if (
      !$whatsappChat.is(e.target) &&
      !$whatsappBtn.is(e.target) &&
      !$whatsappChat.has(e.target).length &&
      !$whatsappBtn.has(e.target).length
    ) {
      $whatsappChat.removeClass('active');
    }
  });

  function sendWhatsAppMessage() {
    const message = $whatsappInput.val().trim();
    if (!message) return;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');

    $whatsappInput.val('');
    setTimeout(() => {
      $whatsappChat.removeClass('active');
    }, 500);
  }

  $sendBtn.on('click', sendWhatsAppMessage);

  $whatsappInput.on('keypress', function (e) {
    if (e.key === 'Enter') {
      sendWhatsAppMessage();
    }
  });

  $whatsappBtn.on('dblclick', function () {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  });

  $whatsappInput.on('input', function () {
    $sendBtn.css(
      'transform',
      this.value.length ? 'scale(1.05)' : 'scale(1)'
    );
  });

  setTimeout(() => {
    if (!$whatsappChat.hasClass('active')) {
      $notificationBadge.css('display', 'flex');
    }
  }, 3000);

  /* ===============================
     WhatsApp Entrance Animation
  =============================== */
  $(window).on('load', function () {
    setTimeout(() => {
      const $float = $('.whatsapp-float');
      $float.css({ opacity: 0, transform: 'scale(0.5)' });

      setTimeout(() => {
        $float.css({
          transition: 'all 0.5s cubic-bezier(0.68,-0.55,0.265,1.55)',
          opacity: 1,
          transform: 'scale(1)',
        });
      }, 100);
    }, 1000);
  });

  $whatsappChat.on('keydown', function (e) {
    const $focusable = $whatsappChat.find(
      'button, input, [tabindex]:not([tabindex="-1"])'
    );
    const first = $focusable.first()[0];
    const last = $focusable.last()[0];

    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    if (e.key === 'Escape') {
      $whatsappChat.removeClass('active');
      $whatsappBtn.focus();
    }
  });

});

function toggleList(listId, btn) {
  const $list = $('#' + listId);
  const $btn = $(btn);

  if ($list.hasClass('show-all')) {
    $list.removeClass('show-all');
    $btn.html('Read More <i class="fas fa-chevron-down"></i>');
  } else {
    $list.addClass('show-all');
    $btn.html('Read Less <i class="fas fa-chevron-up"></i>');
  }
}
$(document).ready(function () {

  $('.tab-btn').on('click', function () {
    const targetTab = $(this).data('tab');
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');
    $('.tab-content-wrapper').removeClass('active');
    $('#' + targetTab).addClass('active');
  });

  $('.click-div').on('click', function () {

    $('.click-div').removeClass('activelink');
    $(this).addClass('activelink');

    const tagid = $(this).data('tag');

    $('.uix-tabs__content')
      .removeClass('active')
      .addClass('hide');

    $('#' + tagid)
      .addClass('active')
      .removeClass('hide');
  });

});

$(document).ready(function () {

  const $megaDropdowns = $('.mega-menu-dropdown');

  function closeAllMegaMenus() {
    $('.mega-menu-dropdown .nav-link')
      .removeClass('show')
      .attr('aria-expanded', 'false');

    $('.mega-menu-dropdown .dropdown-menu').each(function () {
      $(this)
        .removeClass('show')
        .css({
          opacity: '',
          transform: ''
        })
        .removeAttr('data-bs-popper');
    });
  }

  $megaDropdowns.each(function () {
    const $dropdown = $(this);
    const $toggle = $dropdown.find('.nav-link').first();
    const $menu = $dropdown.find('.dropdown-menu').first();

    if (!$toggle.length || !$menu.length) return;

    /* =========================
       CLICK (Mobile + Desktop)
    ========================= */
    $toggle.on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      const isOpen = $toggle.hasClass('show');

      closeAllMegaMenus();

      if (!isOpen) {
        $toggle
          .addClass('show')
          .attr('aria-expanded', 'true');

        $menu
          .addClass('show')
          .css({
            opacity: '1',
            transform: 'translateY(0)'
          })
          .attr('data-bs-popper', 'static');
      }
    });

    /* =========================
       HOVER (Desktop Only)
    ========================= */
    $dropdown.on('mouseenter', function () {
      if ($(window).width() >= 992) {
        closeAllMegaMenus();

        $toggle
          .addClass('show')
          .attr('aria-expanded', 'true');

        $menu
          .addClass('show')
          .css({
            opacity: '1',
            transform: 'translateY(0)'
          })
          .attr('data-bs-popper', 'static');
      }
    });

    $dropdown.on('mouseleave', function () {
      if ($(window).width() >= 992) {
        closeAllMegaMenus();
      }
    });
  });

  /* =========================
     OUTSIDE CLICK CLOSE
  ========================= */
  $(document).on('click', function () {
    closeAllMegaMenus();
  });

});
$(document).ready(function () {

  /* =========================
     Tabs
  ========================= */
  window.openCity = function (e, tabId) {
    $(".tabcontent").hide();
    $(".tablinks").removeClass("active");
    $("#" + tabId).show();
    $(e.currentTarget).addClass("active");
  };


  /* =========================
     Read More / Less (generic)
  ========================= */
  $("[class^='moreless-button']").on("click", function () {
    const index = this.className.match(/\d+/);
    const target = index ? ".moretext" + index[0] : ".moretext";

    $(target).slideToggle();
    $(this).text($(this).text() === "Read more" ? "Read less" : "Read more");
  });


  /* =========================
     Sidebar / Sticky / Footer CTA
  ========================= */
  $(window).on("scroll", function () {
    const top = $(this).scrollTop();

    $(".sidebar-contact").toggleClass("show", top > 500);
    $("#sticky-header").toggleClass("sticky", top > 120);

    top > 300
      ? $(".ftr_cta_blk, #return-to-top").fadeIn()
      : $(".ftr_cta_blk, #return-to-top").fadeOut();
  });


  /* =========================
     Return to Top
  ========================= */
  $("#return-to-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });


  /* =========================
     Navbar & Dropdowns
  ========================= */
  $(".top-nav li, .footer-colom li").on("click", function () {
    $(this).find(".dropdown, .footer-dropdown").slideToggle();
    $(this).siblings().find(".dropdown, .footer-dropdown").hide();
  });

  $(".navbar-toggler").on("click", function () {
    $(this).children().first().toggleClass("active");
  });


  /* =========================
     Theme Toggle
  ========================= */
  const $html = $("html").attr("data-bs-theme", "dark");

  $("[data-bs-toggle-theme]").on("click", function (e) {
    e.preventDefault();
    $html.attr(
      "data-bs-theme",
      $html.attr("data-bs-theme") === "dark" ? "light" : "dark"
    );
  });


  /* =========================
     Counter Animation
  ========================= */
  $(".count").each(function () {
    $(this).prop("Counter", 0).animate(
      { Counter: $(this).text() },
      {
        duration: 4000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      }
    );
  });


  /* =========================
     Click Tabs (Custom UI)
  ========================= */
  $(".click-div a").on("click", function () {
    $(".click-div a").removeClass("activelink");
    $(this).addClass("activelink");

    const target = $(this).data("tag");
    $(".uix-tabs__content").removeClass("active").addClass("hide");
    $("#" + target).addClass("active").removeClass("hide");
  });


  /* =========================
     Tooltip Follow
  ========================= */
  $("a.trigger")
    .hover(() => {}, () => $("div.pop-up").hide())
    .mousemove(e => {
      $("div.pop-up")
        .css({ top: e.pageY + 10, left: e.pageX + 20 });
    });


  /* =========================
     FAQ Icon Toggle
  ========================= */
  $("#FaqList").on("hide.bs.collapse show.bs.collapse", function (e) {
    $(e.target).prev().find("i:last-child").toggleClass("fa-minus fa-plus");
  });


  /* =========================
     Package / Form Modals
  ========================= */
  $(".close-frm, .close-package-form").on("click", function () {
    $("#show-form, #show-instamojo-form").fadeOut("slow");
  });

  $(".insta-mojo-5555").on("click", function () {
    $("#show-instamojo-form").fadeIn("slow");
  });


  /* =========================
     Know More Toggle
  ========================= */
  $("#knowmore").on("click", function () {
    $("#AllCOn").slideToggle("slow");
  });


  /* =========================
     Proposal Form Logic
  ========================= */
  $("#send-perposal").on("click", function () {
    const $form = $("#ready_to_grow_form");
    const website = $form.find("input[name=website]").val();

    if (!website) {
      $form.find(".msg").html("Please Enter Your Website");
      $form.find("input[name=website]").focus();
    } else {
      $form.find(".msg").html("");
      $form.find(".hidden-form").show();
      $form.find(".website-area").hide();
    }
  });


  /* =========================
     Book a Call Slide
  ========================= */
  $("#book-a-call, #schedule-a-call").on("click", function () {
    $(".book-a-call-slide").slideToggle(400, function () {
      if ($(this).is(":visible")) {
        $("#book-a-call").hide();
      }
    });
  });

});


/* =========================
   AJAX Form Submit (Global)
========================= */
function formSubmit(e, form) {
  e.preventDefault();

  const $form = $("#" + form.id);
  $form.find(".msg").html("");

  $.ajax({
    type: "POST",
    url: base_url + "includes/form-process.php",
    data: new FormData(form),
    dataType: "json",
    cache: false,
    contentType: false,
    processData: false,
    beforeSend: () => $(".loader-sec").css("display", "flex"),
    success: response => {
      $(".loader-sec").hide();

      if (response.sts === 1) {
        $form.find(".msg").html(`<div class="alert alert-success">${response.msg}</div>`);

        const title = $form.find("input[name='form_title']").val();
        window.location.href = base_url + (title === "Book A call" ? "book-a-call.html" : "thank-you.html");
      } else {
        const msg = Array.isArray(response.msg) ? response.msg.join("<br>") : response.msg;
        $form.find(".msg").html(`<div class="alert alert-danger">${msg}</div>`);
      }
    },
    error: () => {
      $(".loader-sec").hide();
      $form.find(".msg").html(`<div class="alert alert-danger">Oops! Something went wrong</div>`);
    }
  });
}

/* ================================
   GLOBAL UI HELPERS
================================ */

// Read more / Read less toggle
function showhide(contentId, btnId, dotsId = 'dots') {
  const content = document.getElementById(contentId);
  const btn = document.getElementById(btnId);
  const dots = document.getElementById(dotsId);

  if (!content || !btn || !dots) return;

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btn.innerHTML = 'Read more';
    content.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btn.innerHTML = 'Read less';
    content.style.display = 'inline';
  }
}

// Tabs
function openCity(evt, tabId) {
  const tabcontent = document.getElementsByClassName('tabcontent');
  const tablinks = document.getElementsByClassName('tablinks');

  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  document.getElementById(tabId).style.display = 'block';
  evt.currentTarget.className += ' active';
}

/* ================================
   FORM HANDLING
================================ */

function getToken(e, formId) {
  if (typeof grecaptcha === 'undefined') return;

  e.preventDefault();
  grecaptcha.ready(function () {
    grecaptcha.execute(RECAPTCHA_SITEKEY, { action: 'submit' })
      .then(function (token) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'token';
        input.value = token;
        document.getElementById(formId).appendChild(input);
      });
  });
}

function formSubmit(e, form) {
  e.preventDefault();
  const $form = $('#' + form.id);

  $form.find('.msg').html('');
  getToken(e, form.id);

  const formData = new FormData(form);

  $.ajax({
    type: 'post',
    url: base_url + 'includes/form-process.php',
    data: formData,
    dataType: 'json',
    cache: false,
    contentType: false,
    processData: false,
    beforeSend() {
      $('.loader-sec').css('display', 'flex');
    },
    success(response) {
      $('.loader-sec').css('display', 'none');

      if (response.sts == 1) {
        $form.find('.msg').html(
          `<div class="alert alert-success">${response.msg}</div>`
        );

        const formTitle = $("input[name='form_title']", form).val();
        window.location.href =
          formTitle === 'Book A call'
            ? base_url + 'book-a-call.html'
            : base_url + 'thank-you.html';

      } else if (response.sts == 2) {
        $form.find('.msg').html(
          `<div class="alert alert-danger">${response.msg}</div>`
        );
      } else {
        $form.find('.msg').html(
          `<div class="alert alert-danger">${response.msg.join('<br>')}</div>`
        );
      }
    },
    error() {
      $('.loader-sec').css('display', 'none');
      $form.find('.msg').html(
        `<div class="alert alert-danger">Oops! Something went wrong</div>`
      );
    }
  });
}

// Package signup
function package_signup(title, type) {
  $('#signupletscon').show();
  $('#packMessage').html('');
  $('#show-form').fadeIn('slow');

  $('form#signupletscon input[name=packagetitle]').val(title);
  $('form#signupletscon input[name=packagetype]').val(type);

  $('html, body').animate(
    { scrollTop: $('#show-form').offset().top },
    2000
  );
}

/* ================================
   DOCUMENT READY (jQuery)
================================ */

$(function () {

  /* Dropdowns */
  $('.top-nav li, .footer-colom li').on('click', function () {
    $(this).find('.dropdown, .footer-dropdown').slideToggle();
    $(this).siblings().find('.dropdown, .footer-dropdown').hide();
  });

  /* Navbar toggler icon */
  $('.navbar-toggler').on('click', function () {
    $(this).find('span').toggleClass('active');
  });

  /* Theme toggle */
  const $html = $('html');
  $html.attr('data-bs-theme', 'dark');

  $('[data-bs-toggle-theme]').on('click', function (e) {
    e.preventDefault();
    $html.attr(
      'data-bs-theme',
      $html.attr('data-bs-theme') === 'dark' ? 'light' : 'dark'
    );
  });

  /* Counter animation */
  $('.count').each(function () {
    $(this).prop('Counter', 0).animate(
      { Counter: $(this).text() },
      {
        duration: 4000,
        easing: 'swing',
        step(now) {
          $(this).text(Math.ceil(now));
        }
      }
    );
  });

  /* Tab click */
  $('.click-div a').on('click', function () {
    $('.click-div').removeClass('activelink');
    $(this).addClass('activelink');

    const tag = $(this).data('tag');
    $('.uix-tabs__content').removeClass('active').addClass('hide');
    $('#' + tag).addClass('active').removeClass('hide');
  });

  /* FAQ icon toggle */
  $('#FaqList').on('hide.bs.collapse show.bs.collapse', function (e) {
    $(e.target).prev().find('i:last-child')
      .toggleClass('fa-minus fa-plus');
  });

  /* Scroll behaviors */
  $(window).on('scroll', function () {
    const top = $(this).scrollTop();

    $('.sidebar-contact').toggleClass('show', top > 500);
    $('#return-to-top').toggle(top > 50);
    $('.ftr_cta_blk').toggle(top > 300);
    $('#sticky-header').toggleClass('sticky', top > 120);
  });

  /* Back to top */
  $('#return-to-top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  /* More / less blocks (generic) */
  $('[class^="moreless-button"]').on('click', function () {
    const index = this.className.match(/\d+/)?.[0] || '';
    const $text = $('.moretext' + index);

    $text.slideToggle();
    $(this).text(
      $(this).text() === 'Read more' ? 'Read less' : 'Read more'
    );
  });

  /* Close forms */
  $('.close-frm, .close-package-form').on('click', function () {
    $('#show-form, #show-instamojo-form').fadeOut('slow');
  });

  $('.insta-mojo-5555').on('click', function () {
    $('#show-instamojo-form').fadeIn('slow');
  });

  /* Know more */
  $('#knowmore').on('click', function () {
    $('#AllCOn').slideToggle('slow');
  });

  /* Website field check */
  $('#send-perposal').on('click', function () {
    const $form = $('form#ready_to_grow_form');
    const website = $form.find('input[name=website]').val();

    if (!website) {
      $form.find('.msg').html('Please Enter Your Website');
      $form.find('input[name=website]').focus();
    } else {
      $form.find('.msg').html('');
      $form.find('.hidden-form').show();
      $form.find('.website-area').hide();
    }
  });

  /* Book a call slide */
  $('#book-a-call, #schedule-a-call').on('click', function () {
    $('.book-a-call-slide').slideToggle(400, function () {
      if ($(this).is(':visible')) {
        $('#book-a-call').hide();
      }
    });
  });

});
(function ($) {

  const AOS = {
    offset: 120,
    once: false,

    init() {
      this.$items = $("[data-aos]");
      this.applyBaseStyles();
      this.handleScroll();

      $(window).on("scroll resize", () => {
        this.handleScroll();
      });
    },

    applyBaseStyles() {
      this.$items.each(function () {
        const $el = $(this);
        const duration = $el.data("aos-duration") || 400;
        const delay = $el.data("aos-delay") || 0;

        $el.css({
          transitionDuration: duration + "ms",
          transitionDelay: delay + "ms"
        });
      });
    },

    handleScroll() {
      const winTop = $(window).scrollTop();
      const winHeight = $(window).height();

      this.$items.each(function () {
        const $el = $(this);
        const elTop = $el.offset().top;
        const once = $el.data("aos-once");

        if (winTop + winHeight - AOS.offset > elTop) {
          $el.addClass("aos-animate");
        } else if (!once && !AOS.once) {
          $el.removeClass("aos-animate");
        }
      });
    }
  };

  $(document).ready(function () {
    AOS.init();
  });

})(jQuery);
/* ===============================
   READ MORE / READ LESS
================================ */
function toggleReadMore(contentId, btn) {
  const content = document.getElementById(contentId);
  const dots = document.getElementById("dots");

  if (!content || !dots) return;

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.innerHTML = "Read more";
    content.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.innerHTML = "Read less";
    content.style.display = "inline";
  }
}

/* ===============================
   TABS
================================ */
function openCity(evt, tabId) {
  $(".tabcontent").hide();
  $(".tablinks").removeClass("active");

  $("#" + tabId).show();
  $(evt.currentTarget).addClass("active");
}

/* ===============================
   RECAPTCHA TOKEN
================================ */
function getToken(e, formId) {
  e.preventDefault();

  if (typeof grecaptcha === "undefined") return true;

  grecaptcha.ready(function () {
    grecaptcha.execute(RECAPTCHA_SITEKEY, { action: "submit" })
      .then(function (token) {
        $("<input>", {
          type: "hidden",
          name: "token",
          value: token
        }).appendTo("#" + formId);
      });
  });
}

/* ===============================
   FORM SUBMIT (AJAX)
================================ */
function formSubmit(e, form) {
  e.preventDefault();
  const $form = $(form);

  $form.find(".msg").html("");
  getToken(e, form.id);

  $.ajax({
    type: "POST",
    url: base_url + "includes/form-process.php",
    data: new FormData(form),
    dataType: "json",
    cache: false,
    contentType: false,
    processData: false,

    beforeSend() {
      $(".loader-sec").css("display", "flex");
    },

    success(response) {
      $(".loader-sec").hide();

      if (response.sts === 1) {
        $form.find(".msg").html(`<div class="alert alert-success">${response.msg}</div>`);

        const title = $form.find("input[name='form_title']").val();
        window.location.href =
          title === "Book A call"
            ? base_url + "book-a-call.html"
            : base_url + "thank-you.html";

      } else if (response.sts === 2) {
        $form.find(".msg").html(`<div class="alert alert-danger">${response.msg}</div>`);
      } else {
        $form.find(".msg").html(
          `<div class="alert alert-danger">${response.msg.join("<br>")}</div>`
        );
      }
    },

    error() {
      $(".loader-sec").hide();
      $form.find(".msg").html(`<div class="alert alert-danger">Oops! Something went wrong</div>`);
    }
  });
}

/* ===============================
   PACKAGE SIGNUP
================================ */
function package_signup(title, type) {
  $("#signupletscon").show();
  $("#packMessage").html("");
  $("#show-form").fadeIn("slow");

  $("form#signupletscon input[name=packagetitle]").val(title);
  $("form#signupletscon input[name=packagetype]").val(type);

  $("html, body").animate({
    scrollTop: $("#show-form").offset().top
  }, 2000);
}

/* ===============================
   DOCUMENT READY
================================ */
$(function () {

  /* Dropdown toggles */
  $(".top-nav li, .footer-colom li").on("click", function () {
    $(this).find(".dropdown, .footer-dropdown").slideToggle();
    $(this).siblings().find(".dropdown, .footer-dropdown").hide();
  });

  /* Navbar toggler animation */
  $(".navbar-toggler").on("click", function () {
    $(this).find("span").toggleClass("active");
  });

  /* FAQ icons */
  $("#FaqList").on("show.bs.collapse hide.bs.collapse", function (e) {
    $(e.target).prev().find("i:last-child").toggleClass("fa-plus fa-minus");
  });

  /* Return to top */
  $("#return-to-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  /* More / Less blocks */
  $("[class^='moreless-button']").on("click", function () {
    const index = this.className.replace("moreless-button", "");
    $(".moretext" + index).slideToggle();
    $(this).text($(this).text() === "Read more" ? "Read less" : "Read more");
  });

  /* Close forms */
  $(".close-frm, .close-package-form").on("click", function () {
    $("#show-form, #show-instamojo-form").fadeOut("slow");
  });

  $(".insta-mojo-5555").on("click", function () {
    $("#show-instamojo-form").fadeIn("slow");
  });

  /* Book a call slide */
  $("#book-a-call, #schedule-a-call").on("click", function () {
    $(".book-a-call-slide").slideToggle(400);
    $("#book-a-call").hide();
  });

});

/* ===============================
   GLOBAL SCROLL HANDLER (MERGED)
================================ */
$(window).on("scroll", function () {
  const top = $(this).scrollTop();

  $(".sidebar-contact").toggleClass("show", top > 500);
  $("#return-to-top, .ftr_cta_blk").toggle(top > 300);
  $("#sticky-header").toggleClass("sticky", top > 120);
});

/* ===============================
   COUNTER ANIMATION
================================ */
$(".count").each(function () {
  $(this).prop("Counter", 0).animate(
    { Counter: $(this).text() },
    {
      duration: 4000,
      easing: "swing",
      step(now) {
        $(this).text(Math.ceil(now));
      }
    }
  );
});
