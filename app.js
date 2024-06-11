class NavigationPage {
    constructor() {
    this.currentId = null;
    this.currentTab = null;
    this.tabContainerHeight = 70;
    this.lastScroll = 0;
    let self = this;
    $(".nav-tab").click(function () {
      self.onTabClick(event, $(this));
    });
    $(window).scroll(() => {
      this.onScroll();
    });
    $(window).resize(() => {
      this.onResize();
    });
  }

  onTabClick(event, element) {
    event.preventDefault();
    let scrollTop =
      $(element.attr("href")).offset().top - this.tabContainerHeight + 1;
    $("html, body").animate({ scrollTop: scrollTop }, 600);
  }

  onScroll() {
    this.checkHeaderPosition();
    this.findCurrentTabSelector();
    this.lastScroll = $(window).scrollTop();
  }

  onResize() {
    if (this.currentId) {
      this.setSliderCss();
    }
  }

  checkHeaderPosition() {
    const headerHeight = 75;
    if ($(window).scrollTop() > headerHeight) {
      $(".nav-container").addClass("nav-container--scrolled");
    } else {
      $(".nav-container").removeClass("nav-container--scrolled");
    }
    let offset =
      $(".nav").offset().top +
      $(".nav").height() -
      this.tabContainerHeight -
      headerHeight;
    if (
      $(window).scrollTop() > this.lastScroll &&
      $(window).scrollTop() > offset
    ) {
      $(".nav-container").addClass("nav-container--move-up");
      $(".nav-container").removeClass("nav-container--top-first");
      $(".nav-container").addClass("nav-container--top-second");
    } else if (
      $(window).scrollTop() < this.lastScroll &&
      $(window).scrollTop() > offset
    ) {
      $(".nav-container").removeClass("nav-container--move-up");
      $(".nav-container").removeClass("nav-container--top-second");
      $(".nav-container").addClass("nav-container--top-first");
    } else {
      $(".nav-container").removeClass("nav-container--move-up");
      $(".nav-container").removeClass("nav-container--top-first");
      $(".nav-container").removeClass("nav-container--top-second");
    }
  }

  findCurrentTabSelector(element) {
    let newCurrentId;
    let newCurrentTab;
    let self = this;
    $(".nav-tab").each(function () {
      let id = $(this).attr("href");
      let offsetTop = $(id).offset().top - self.tabContainerHeight;
      let offsetBottom =
        $(id).offset().top + $(id).height() - self.tabContainerHeight;
      if (
        $(window).scrollTop() > offsetTop &&
        $(window).scrollTop() < offsetBottom
      ) {
        newCurrentId = id;
        newCurrentTab = $(this);
      }
    });
    if (this.currentId != newCurrentId || this.currentId === null) {
      this.currentId = newCurrentId;
      this.currentTab = newCurrentTab;
      this.setSliderCss();
    }
  }

  
    setSliderCss() {
      let width = 0;
      let left = 0;
      if (this.currentTab) {
        width = this.currentTab.css("width");
        left = this.currentTab.offset().left;
      }
      $(".nav-tab-slider").css("width", width);
      $(".nav-tab-slider").css("left", left);
    }
  }

  particlesJS(
    {
"particles": {
"number": {
  "value": 29,
  "density": {
    "enable": true,
    "value_area": 710.2328774690454
  }
},
"color": {
  "value": "#03dac6"
},
"shape": {
  "type": "circle",
  "stroke": {
    "width": 0,
    "color": "#000000"
  },
  "polygon": {
    "nb_sides": 4
  },
  "image": {
    "src": "img/github.svg",
    "width": 100,
    "height": 100
  }
},
"opacity": {
  "value": 0.24852886943415603,
  "random": false,
  "anim": {
    "enable": false,
    "speed": 1,
    "opacity_min": 0.1,
    "sync": false
  }
},
"size": {
  "value": 3,
  "random": true,
  "anim": {
    "enable": false,
    "speed": 12.181158184520175,
    "size_min": 0.1,
    "sync": false
  }
},
"line_linked": {
  "enable": true,
  "distance": 150,
  "color": "#ffffff",
  "opacity": 0.4,
  "width": 1
},
"move": {
  "enable": true,
  "speed": 6,
  "direction": "none",
  "random": false,
  "straight": false,
  "out_mode": "out",
  "bounce": false,
  "attract": {
    "enable": false,
    "rotateX": 600,
    "rotateY": 1200
  }
}
},
"interactivity": {
"detect_on": "canvas",
"events": {
  "onhover": {
    "enable": true,
    "mode": "repulse"
  },
  "onclick": {
    "enable": true,
    "mode": "push"
  },
  "resize": true
},
"modes": {
  "grab": {
    "distance": 400,
    "line_linked": {
      "opacity": 1
    }
  },
  "bubble": {
    "distance": 400,
    "size": 40,
    "duration": 2,
    "opacity": 8,
    "speed": 3
  },
  "repulse": {
    "distance": 200,
    "duration": 0.4
  },
  "push": {
    "particles_nb": 4
  },
  "remove": {
    "particles_nb": 2
  }
}
},
"retina_detect": true
}
)
  
  new NavigationPage();
