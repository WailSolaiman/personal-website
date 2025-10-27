/**
 * Sections Loader for Wail Solaiman Portfolio
 * Dynamically loads HTML sections to create a modular structure
 */

;(function () {
  "use strict"

  // Array of section files to load in order
  const sections = [
    "sections/header.html",
    "sections/intro.html",
    "sections/about.html",
    "sections/resume.html",
    "sections/portfolio.html",
    "sections/services.html",
    "sections/stats.html",
    "sections/contact.html",
    "sections/footer.html",
    "sections/modals.html",
  ]

  // Function to load a single section
  function loadSection(sectionPath) {
    return new Promise((resolve, reject) => {
      fetch(sectionPath)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to load ${sectionPath}: ${response.status}`)
          }
          return response.text()
        })
        .then((html) => {
          const container = document.getElementById("sections-container")
          const tempDiv = document.createElement("div")
          tempDiv.innerHTML = html

          // Move all child nodes to the container
          while (tempDiv.firstChild) {
            container.appendChild(tempDiv.firstChild)
          }
          resolve()
        })
        .catch((error) => {
          console.error(`Error loading section ${sectionPath}:`, error)
          reject(error)
        })
    })
  }

  // Function to load all sections sequentially
  async function loadAllSections() {
    try {
      for (const section of sections) {
        await loadSection(section)
      }
      console.log("All sections loaded successfully in order")
      // Initialize all JavaScript functionality after sections are loaded
      initPageFunctionality()
    } catch (error) {
      console.error("Error loading sections:", error)
    }
  }

  // Function to initialize all page functionality
  function initPageFunctionality() {
    // Reinitialize all the functionality from main.js
    if (typeof $ !== "undefined") {
      // Preloader - hide the loading animation
      $("#loader").fadeOut("slow", function () {
        $("#preloader").delay(300).fadeOut("slow")
      })

      // Smooth scrolling
      $(".smoothscroll").on("click", function (e) {
        e.preventDefault()
        var target = this.hash,
          $target = $(target)
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $target.offset().top,
            },
            800,
            "swing",
            function () {
              window.location.hash = target
            }
          )
      })

      // Modal popups
      $(".item-wrap a").magnificPopup({
        type: "inline",
        fixedContentPos: false,
        removalDelay: 300,
        showCloseBtn: false,
        mainClass: "mfp-fade",
      })

      $(document).on("click", ".popup-modal-dismiss", function (e) {
        e.preventDefault()
        $.magnificPopup.close()
      })

      // FitText for intro heading
      setTimeout(function () {
        $("#intro h1").fitText(1, { minFontSize: "42px", maxFontSize: "84px" })
      }, 100)

      // Owl Carousel
      $("#owl-slider").owlCarousel({
        navigation: false,
        pagination: true,
        itemsCustom: [
          [0, 1],
          [700, 2],
          [960, 3],
        ],
        navigationText: false,
      })

      // Masonry for portfolio
      var containerProjects = $("#folio-wrapper")
      if (containerProjects.length) {
        containerProjects.imagesLoaded(function () {
          containerProjects.masonry({
            itemSelector: ".folio-item",
            resize: true,
          })
        })
      }

      // Stat counter
      var statSection = $("#stats"),
        stats = $(".stat-count")

      if (statSection.length) {
        statSection.waypoint({
          handler: function (direction) {
            if (direction === "down") {
              stats.each(function () {
                var $this = $(this)
                $({ Counter: 0 }).animate(
                  { Counter: $this.text() },
                  {
                    duration: 4000,
                    easing: "swing",
                    step: function (curValue) {
                      $this.text(Math.ceil(curValue))
                    },
                  }
                )
              })
            }
            this.destroy()
          },
          offset: "90%",
        })
      }

      // Section highlighting
      var sections = $("section"),
        navigation_links = $("#main-nav-wrap li a")

      if (sections.length) {
        sections.waypoint({
          handler: function (direction) {
            var active_section
            active_section = $("section#" + this.element.id)
            if (direction === "up") active_section = active_section.prev()
            var active_link = $(
              '#main-nav-wrap a[href="#' + active_section.attr("id") + '"]'
            )
            navigation_links.parent().removeClass("current")
            active_link.parent().addClass("current")
          },
          offset: "25%",
        })
      }

      // Back to top button
      var pxShow = 300
      var fadeInTime = 400
      var fadeOutTime = 400

      $(window).scroll(function () {
        if (!$("#header-search").hasClass("is-visible")) {
          if ($(window).scrollTop() >= pxShow) {
            $("#go-top").fadeIn(fadeInTime)
          } else {
            $("#go-top").fadeOut(fadeOutTime)
          }
        }
      })

      console.log("All page functionality initialized successfully")
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadAllSections)
  } else {
    loadAllSections()
  }

  // Make function available globally for manual initialization if needed
  window.loadSections = loadAllSections
})()
