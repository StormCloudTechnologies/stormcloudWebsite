function fullScreen() {
    var e = $(window).height();
    $(".fullScreen").css("height", e)
}

function parallaxInit() {
    $("#about_more").parallax("50%", .3);
    $("#feature").parallax("50%", .3);
    $("#quote").parallax("50%", .3);
    $("#skill").parallax("50%", .3);
    $("#testimonial").parallax("50%", .3)
}

function initBxModal() {
    $(".project-slider").bxSlider({
        controls: false,
        pager: true,
        nextText: '<i class="fa fa-angle-right">',
        prevText: '<i class="fa fa-angle-left">',
        responsive: true,
        auto: true,
        pause: 3e3,
        preloadImages: "visible"
    })
}(function() {
    jQuery(function() {
        return $.jackInTheBox = function(e, t) {
            var n, r = this;
            return n = "", this.settings = {}, this.$element = $(e), this.getSetting = function(e) {
                return this.settings[e]
            }, this.callSettingFunction = function(e, t) {
                return null == t && (t = []), this.settings[e].apply(this, t)
            }, this.mobileDevice = function() {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            }, this.visible = function(e) {
                var t, n, i, o;
                return o = r.$window.scrollTop(), i = o + r.$window.height() - r.settings.offset, n = e.offset().top, t = n + e.height(), i >= n && t >= o
            }, this.scrollHandler = function() {
                return r.$window.scroll(function() {
                    return r.show()
                })
            }, this.show = function() {
                return r.$boxes.each(function(e, t) {
                    var n;
                    return n = $(t), r.visible(n) ? n.css({
                        visibility: "visible"
                    }).addClass(r.settings.animateClass) : void 0
                })
            }, this.init = function() {
                return this.settings = $.extend({}, this.defaults, t), this.$window = $(window), this.$boxes = $("." + this.settings.boxClass).css({
                    visibility: "hidden"
                }), this.$boxes.length ? (this.scrollHandler(), this.show()) : void 0
            }, this.mobileDevice() || this.init(), this
        }, $.jackInTheBox.prototype.defaults = {
            boxClass: "box",
            animateClass: "animated",
            offset: 0
        }, $.fn.jackInTheBox = function(e) {
            return this.each(function() {
                var n;
                return void 0 === $(this).data("jackInTheBox") ? (n = new $.jackInTheBox(this, e), $(this).data("jackInTheBox", n)) : void 0
            })
        }
    })
}).call(this);
"use strict";
var onMobile = false;
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i)
    },
    any: function() {
        return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()
    }
};
if (isMobile.any()) onMobile = true;
$(window).load(function() {
    $(".intro-loader").delay(0.5e3).fadeOut("fast");
    $("#mask").delay(0.5e3).fadeOut("fast")
});
$(document).ready(function() {

    $(".item_top").each(function() {
        $(this).appear(function() {
            $(this).delay(0).animate({
                opacity: 1,
                top: "0px"
            }, 0, "easeInOutExpo")
        })
    });
    $(".item_bottom").each(function() {
        $(this).appear(function() {
            $(this).delay(0).animate({
                opacity: 1,
                bottom: "10px"
            }, 0, "easeInOutExpo")
        })
    });
    $(".item_left").each(function() {
        $(this).appear(function() {
            $(this).delay(0).animate({
                opacity: 1,
                left: "0px"
            }, 0, "easeInOutExpo")
        })
    });
    $(".item_right").each(function() {
        $(this).appear(function() {
            $(this).delay(0).animate({
                opacity: 1,
                right: "0px"
            }, 0, "easeInOutExpo")
        })
    });
    $(".item_fade_in").each(function() {
        $(this).appear(function() {
            $(this).delay(0).animate({
                opacity: 1
            }, 0)
        })
    });
    if ($(".fullScreen").length) {
        fullScreen()
    }
    if ($(".text-rotator").length) {
        $(".text-rotator").each(function() {
            var e = $(this).html();
            $(this).empty();
            $(this).html('<div class="rotator-wrap"></div>');
            this_item = $(this).children(".rotator-wrap");
            var t = e.split(",");
            var n = t.length;
            nova_text_rotator(t, this_item, n)
        })
    }
    $("body").scrollspy({
        target: ".nav-menu",
        offset: 75
    });
    $(window).bind("resize", function() {
        fullScreen()
    });
    $(".fitVideo").fitVids();
    $(".slide").fitVids();
    $(function() {
        if ($(".chart").length) {
            $(".chart").appear(function() {
                $(".chart").easyPieChart({
                    easing: "easeOutBounce",
                    barColor: "#1ABC9C",
                    size: "200",
                    lineWidth: 20,
                    animate: 2e3,
                    onStep: function(e, t, n) {
                        $(this.el).find(".percent").text(Math.round(n))
                    }
                })
            })
        }
    });
    $(function() {
        if ($(".skillBar li").length) {
            $(".skillBar li").each(function() {
                $(this).appear(function() {
                    $(this).animate({
                        opacity: 1,
                        left: "0px"
                    }, 0);
                    var e = $(this).find("span").attr("data-width");
                    $(this).find("span").animate({
                        width: e + "%"
                    }, 0, "easeOutBounce")
                })
            })
        }
    });
    $(".validate").validate();
    var e = $("#contactform");
    var t = $("#contactForm_submit");
    var n = $(".form-respond");
    $(document).on("submit", "#contactform", function(r) {
        r.preventDefault();
        $.ajax({
            url: "sendemail.php",
            type: "POST",
            dataType: "html",
            data: e.serialize(),
            beforeSend: function() {
                n.fadeOut();
                t.html("Sending....")
            },
            success: function(t) {
                e.fadeOut(300);
                n.html(t).fadeIn(1e3);
                setTimeout(function() {
                    n.html(t).fadeOut(300);
                    $("#name, #email,#phone, #message").val("");
                    e.fadeIn(1800)
                }, 4e3)
            },
            error: function(e) {
                console.log(e)
            }
        })
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > 400) {
            $("#back-top").fadeIn(550)
        } else {
            $("#back-top").fadeOut(550)
        }
    });
    $("#back-top").click(function() {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1e3, "easeInOutExpo")
    });
    $("[rel='tooltip']").tooltip();
    $(".tip-top").tooltip({
        placement: "top"
    });
    $(".tip-right").tooltip({
        placement: "right"
    });
    $(".tip-bottom").tooltip({
        placement: "bottom"
    });
    $(".tip-left").tooltip({
        placement: "left"
    })
});
$(".nav-toggle").hover(function() {
    $(this).find(".dropdown-menu").first().stop(true, true).fadeIn(450)
}, function() {
    $(this).find(".dropdown-menu").first().stop(true, true).fadeOut(450)
});
$(".scroll").bind("click", function(e) {
    var t = $(this);
    var n = $("#navigation, #navigation-sticky").outerHeight();
    $("html, body").stop().animate({
        scrollTop: $(t.attr("href")).offset().top - n + "px"
    }, 1200, "easeInOutExpo");
    e.preventDefault()
});
if ($(".headerWrapper").length) {
    var menu = $("#navigation");
    $(window).scroll(function() {
        var e = $(this).scrollTop();
        var t = $(".headerWrapper").outerHeight();
        var n = $("#navigation").outerHeight();
        var r = $(".headerWrapper").offset().top + t - n - 70;
        if (e >= r) {
            menu.removeClass("first-nav").addClass("second-nav")
        } else {
            menu.removeClass("second-nav").addClass("first-nav")
        }
    });
    var menu2 = $("#navigation-sticky");
    menu2.removeClass("color-nav second-nav").addClass("trans-nav second-nav");
    $(window).scroll(function() {
        var e = $(this).scrollTop();
        var t = $(".headerWrapper").outerHeight();
        var n = $("#navigation-sticky").outerHeight();
        var r = $(".headerWrapper").offset().top + t - n - 70;
        if (e >= 0 && e <=915) {
            // white
            menu2.removeClass("color-nav second-nav").addClass("trans-nav second-nav");
            if ($(".light-logo").length && $(".dark-logo").length) {
                $(".dark-logo").css("display", "none");
                $(".light-logo").css("display", "block")
            }
        } 
        if(e >= 915){
            // dark
            menu2.removeClass("trans-nav").addClass("color-nav second-nav");
            if ($(".light-logo").length && $(".dark-logo").length) {
                $(".light-logo").css("display", "none");
                $(".dark-logo").css("display", "block")
            }
        }
        
    })
}
$(".mobile-nav-button").click(function() {
    $(".nav-inner div.nav-menu").slideToggle("medium", function() {})
});
$(".nav-inner div.nav-menu ul.nav li a").click(function() {
    if ($(window).width() < 1e3) {
        $(".nav-menu").slideToggle("2000")
    }
});
$(window).bind("load", function() {
    if (!onMobile) parallaxInit()
});
$(window).load(function() {
    if (jQuery().bxSlider) {
        if ($(".fullwidth-slider").length) {
            var e = $(".fullwidth-slider").bxSlider({
                mode: "fade",
                speed: 1e3,
                auto: true,
                pause: 5e3,
                pager: false,
                video: true,
                useCSS: false,
                preloadImages: "visible",
                nextText: '<i class="fa fa-angle-right">',
                prevText: '<i class="fa fa-angle-left">',
                responsive: true,
                onSlideBefore: function(e) {
                    e.find(".slide-caption").fadeOut().animate({
                        top: "80px"
                    }, {
                        queue: false,
                        easing: "easeOutQuad",
                        duration: 450
                    });
                    e.find(".slide-caption").hide().animate({
                        top: "-100px"
                    })
                },
                onSlideAfter: function(t) {
                    t.find(".slide-caption").fadeIn().animate({
                        top: "0px"
                    }, {
                        queue: false,
                        easing: "easeOutQuad",
                        duration: 450
                    });
                    if (t.find("iframe:first").length) {
                        e.stopAuto()
                    }
                }
            });
            $(".fullwidth-slider li").each(function() {
                if ($(this).children(".background-image").length) {
                    var e = jQuery(this).children(".background-image").attr("src");
                    jQuery(this).css("background", 'url("' + e + '") 50% 50%');
                    jQuery(this).children(".background-image").remove()
                }
                if ($(this).children(".kenburn-image").length) {
                    var e = jQuery(this).children(".kenburn-image").attr("src");
                    jQuery(this).children(".slide-bg").css("background", 'url("' + e + '") 50% 50%');
                    jQuery(this).children(".kenburn-image").remove()
                }
            });
            $("iframe").each(function() {
                var e = $(this).attr("src");
                var t = e.search(/youtube/i);
                if (t != -1) {
                    t = e.indexOf("?");
                    if (t != -1) {
                        $(this).attr("src", e + "&wmode=transparent")
                    } else {
                        $(this).attr("src", e + "?wmode=transparent")
                    }
                }
            })
        }
    }
    if ($("ul.timeline").length) {
        $("ul.timeline").children().eq(0).find(".content").slideDown().addClass("open");
        $("ul.timeline").on("click", "li", function() {
            $this = $(this);
            $this.find(".content").slideDown();
            $this.addClass("open");
            $this.siblings("li.open").find(".content").slideUp();
            $this.siblings("li").removeClass("open")
        }).on("mouseenter", "li", function() {
            $this = $(this);
            $this.hasClass("open")
        })
    }
    if ($(".fullwidth-background").length) {
        $(".fullwidth-background").each(function() {
            if ($(this).children(".background-image").length) {
                var e = jQuery(this).children(".background-image").attr("src");
                jQuery(this).css("background", 'url("' + e + '")  50% 50%');
                jQuery(this).children(".background-image").remove()
            }
        })
    }
    if ($(".fullscreen-background").length) {
        $(".fullscreen-background").each(function() {
            if ($(this).children(".background-image").length) {
                var e = jQuery(this).children(".background-image").attr("src");
                jQuery(this).css("background", 'url("' + e + '") 50% 50%');
                jQuery(this).children(".background-image").remove()
            }
        })
    }
    var t = function() {
        var e = $(window).scrollTop();
        if (e < 0) {
            return
        }
        if ($(".fullwidth-slider").length) {
            if ($(".slide-bg").length) {
                $(".slide-bg").css({
                    "background-position": "50% " + (50 - e / 8) + "%"
                })
            } else {
                $(".slide").css({
                    "background-position": "50% " + (50 - e / 8) + "%"
                })
            }
            $(".bx-wrapper .bx-controls-direction a").css({
                "margin-top": e / 1 + "px",
                opacity: 1 - e / 100
            });
            // $(".slide .caption").css({
            //     "margin-top": e / 1.5 + "px",
            //     opacity: 1 - e / 10
            // })
        }
        if ($(".fullwidth-background").length) {
            $(".fullwidth-background").css({
                "background-position": "50% " + (50 - e / 8) + "%"
            })
        }
        if ($(".fullscreen-background").length) {
            $(".fullscreen-background").css({
                "background-position": "50% " + (50 - e / 8) + "%"
            })
        }
        if ($(".fullwidth-background .header-title").length) {
            $(".fullwidth-background .header-title").css({
                top: 50 + e / 6 + "%",
                opacity: 1 - e / 300
            })
        }
        if ($(".fullScreen").length) {
            $(".fullScreen .header").css({
                top: 50 + e / 6 + "%",
                opacity: 1 - e / 600
            })
        }
        if ($(".scrollIcon").length) {
            $(".scrollIcon").css({
                bottom: 15 - e / 3 + "px",
                opacity: 1 - e / 300
            })
        }
    };
    $(window).bind("scroll", function() {
        t()
    });
    if ($(".blog-slider").length) {
        $(".blog-slider").bxSlider({
            controls: false,
            pager: true,
            auto: false,
            pause: 3e3,
            // nextText: '<i class="fa fa-angle-right">',
            // prevText: '<i class="fa fa-angle-left">',
            preloadImages: "visible"
        })
    }
});
$(window).load(function() {
    var e = $(".grid");
    colWidth = function() {
        var t = e.width(),
            n = 1,
            r = 0,
            i = 2;
        return t > 1440 ? n = 7 : t > 1365 ? n = 7 : t > 1279 ? n = 7 : t > 1023 ? n = 5 : t > 767 ? n = 3 : t > 479 && (n = 2), r = Math.floor(t / n), e.find(".grid-item").each(function() {
            var e = $(this);
            e.hasClass("item-big") && (480 > t ? ($(".item-big").css({
                width: r - i + "px",
                height: Math.round(.7777777 * (r - i)) + "px"
            }), $(".item-big img").css({
                width: r - i + "px",
                height: "auto"
            })) : ($(".item-big").css({
                width: 2 * r - i + "px",
                height: Math.round(.7777777 * (2 * r - i)) + "px"
            }), $(".item-big img").css({
                width: 2 * r - i + "px",
                height: "auto"
            }))), e.hasClass("item-small") && ($(".item-small").css({
                width: r - i + "px",
                height: Math.round(.7777777 * (r - i)) + "px"
            }), $(".item-small img").css({
                width: r - i + "px",
                height: "auto"
            })), e.hasClass("item-wide") && (480 > t ? ($(".item-wide").css({
                width: r - i + "px",
                height: Math.round(.7777777 * (r - i) / 2) + "px"
            }), $(".item-wide img").css({
                width: r - i + "px",
                height: "auto"
            })) : ($(".item-wide").css({
                width: 2 * r - i + "px",
                height: Math.round(.7777777 * (r - i)) + "px"
            }), $(".item-wide img").css({
                width: 2 * r - i + "px",
                height: "auto"
            }))), e.hasClass("item-high") && ($(".item-high").css({
                width: r - i + "px",
                height: Math.round(.7777777 * (2 * r - i)) + "px"
            }), $(".item-high img").css({
                width: r - i + "px",
                height: "auto"
            }))
        }), r
    }, gridIsotope = function() {
        e.isotope({
            layoutMode: "masonry",
            itemSelector: ".grid-item",
            animationEngine: "jquery",
            resizable: !1,
            masonry: {
                columnWidth: colWidth(),
                gutterWidth: 0
            }
        })
    }, gridIsotope(), $(window).smartresize(gridIsotope);
    var t = $("#options #filters"),
        n = t.find("a");
    n.click(function() {
        var t = $(this);
        if (t.hasClass("selected")) return !1;
        var n = t.parents("#filters");
        n.find(".selected").removeClass("selected"), t.addClass("selected");
        var r = {},
            i = n.attr("data-option-key"),
            s = t.attr("data-filter");
        return s = "false" === s ? !1 : s, r[i] = s, "layoutMode" === i && "function" == typeof changeLayoutMode ? changeLayoutMode(t, r) : e.isotope(r), !1
    }), $.Isotope.prototype._getMasonryGutterColumns = function() {
        var e = this.options.masonry && this.options.masonry.gutterWidth || 0;
        containerWidth = this.element.width(), this.masonry.columnWidth = this.options.masonry && this.options.masonry.columnWidth || this.$filteredAtoms.outerWidth(!0) || containerWidth, this.masonry.columnWidth += e, this.masonry.cols = Math.floor((containerWidth + e) / this.masonry.columnWidth), this.masonry.cols = Math.max(this.masonry.cols, 1)
    }, $.Isotope.prototype._masonryReset = function() {
        this.masonry = {}, this._getMasonryGutterColumns();
        var e = this.masonry.cols;
        for (this.masonry.colYs = []; e--;) this.masonry.colYs.push(0)
    }, $.Isotope.prototype._masonryResizeChanged = function() {
        var e = this.masonry.cols;
        return this._getMasonryGutterColumns(), this.masonry.cols !== e
    };
    $(".grid-item-on-hover").hover(function() {
        $(this).animate({
            opacity: .9
        }, 0)
    }, function() {
        $(this).animate({
            opacity: 0
        }, 0)
    })
});
$("a[rel^='prettyPhoto']").prettyPhoto({
    animation_speed: "normal",
    theme: "facebook",
    slideshow: 4e3,
    autoplay_slideshow: !1,
    deeplinking: false
});
$(function() {
    "use strict";
    $(".videoBg[data-video-height]").each(function() {
        var e = $(this);
        e.css({
            height: e.attr("data-video-height")
        })
    });
    $(".videoBg").each(function() {
        var e = $(this),
            t = e.attr("data-fullwidth"),
            n = e.attr("data-autoplay"),
            r = e.find(".videoBg-video"),
            i = e.find(".videoBg-control"),
            s = e.find(".video-overlay"),
            o = e.find(".video-control-btn"),
            u = r.attr("id");
        if (u == "") return;
        var a = {
            enableAutosize: true,
            loop: true,
            features: ["fullscreen"],
            alwaysShowControls: false,
            iPadUseNativeControls: false,
            iPhoneUseNativeControls: false,
            AndroidUseNativeControls: false,
            alwaysShowHours: false,
            showTimecodeFrameCount: false,
            success: function(e, t) {
                if (n) e.play();
                else e.pause();
                e.addEventListener("play", function(e) {
                    $(i).fadeOut(300)
                }, false);
                e.addEventListener("pause", function(e) {
                    $(i).fadeIn(300)
                }, false);
                e.addEventListener("ended", function(e) {
                    $(i).fadeIn(300)
                }, false)
            }
        };
        if (t) {
            a.videoWidth = "100%";
            a.videoHeight = "100%"
        }
        var f = new MediaElementPlayer("#" + u, a);
        $(o).bind("click", function(e) {
            f.play();
            e.preventDefault();
            e.stopPropagation()
        });
        $(s).bind("click", function(e) {
            f.pause();
            e.preventDefault();
            e.stopPropagation()
        })
    })
});
$(function() {
    $(".counters-item").appear(function() {
        $(".counters-item [data-to]").each(function() {
            var e = $(this).attr("data-to");
            $(this).delay(0).countTo({
                from: 0,
                to: e,
                speed: 1e3,
                refreshInterval: 50
            })
        })
    })
});
if ($(".swiper-testimonial").length) {
    var mySwiper = new Swiper(".swiper-testimonial", {
        mode: "horizontal",
        loop: true,
        speed: 400,
        autoplay: 5e3,
        autoResize: true,
        pagination: ".pagination-testimonial",
        paginationClickable: true
    })
}
if (jQuery().owlCarousel) {
    if ($("#logos_carrousel").length) {
        $("#logos_carrousel").owlCarousel({
            navigation: false,
            pagination: false,
            responsive: true,
            slideSpeed: 100,
            paginationSpeed: 800,
            items: 4,
            touchDrag: true,
            mouseDrag: true,
            itemsDesktop: [3e3, 4],
            itemsDesktopSmall: [1440, 4],
            itemsTablet: [1024, 3],
            itemsTabletSmall: [800, 2],
            itemsMobile: [360, 1],
            autoHeight: true,
            autoPlay: true
        })
    }
    if ($(".project-carousel").length) {
        $(".project-carousel").owlCarousel({
            navigation: false,
            pagination: true,
            responsive: true,
            items: 2,
            touchDrag: true,
            mouseDrag: true,
            itemsDesktop: [3e3, 3],
            itemsDesktopSmall: [1440, 2],
            itemsTablet: [1024, 2],
            itemsTabletSmall: [600, 2],
            itemsMobile: [360, 1],
            autoPlay: true
        })
    }
    if ($(".project-carousel-2").length) {
        $(".project-carousel-2").owlCarousel({
            navigation: false,
            pagination: true,
            responsive: true,
            items: 1,
            touchDrag: true,
            mouseDrag: true,
            autoPlay: true
        })
    }
    if ($(".feature-carousel").length) {
        $(".feature-carousel").owlCarousel({
            navigation: false,
            pagination: true,
            responsive: true,
            slideSpeed: 200,
            paginationSpeed: 1e3,
            items: 1,
            touchDrag: true,
            mouseDrag: true,
            autoPlay: false
        })
    }
    if ($("#feature-list-carousel").length) {
        $("#feature-list-carousel").owlCarousel({
            navigation: false,
            pagination: true,
            responsive: true,
            items: 2,
            touchDrag: true,
            mouseDrag: true,
            itemsDesktop: [3e3, 3],
            itemsDesktopSmall: [1440, 2],
            itemsTablet: [800, 2],
            itemsTabletSmall: [600, 1],
            itemsMobile: [360, 1],
            autoHeight: true,
            autoPlay: true
        })
    }
}
$(window).load(function() {
    function n() {
        var e = $(window).width(),
            t = 1;
        if (e > 1024) {
            t = 4
        } else if (e > 900) {
            t = 2
        } else if (e > 479) {
            t = 2
        } else if (e < 479) {
            t = 1
        }
        return t
    }

    function r() {
        var e = $(window).width(),
            r = n(),
            i = Math.floor(e / r);
        t.find(".portfolio-item").each(function() {
            $(this).css({
                width: i + "px"
            })
        })
    }

    function i() {
        r();
        t.isotope("reLayout")
    }
    var e = $(".gallery-wrapper");
    e.isotope({
        animationEngine: "best-available",
        animationOptions: {
            duration: 200,
            queue: false
        },
        layoutMode: "fitRows"
    });
    var t = $(".grid-wrapper");
    t.isotope({
        animationEngine: "best-available",
        animationOptions: {
            duration: 200,
            queue: false
        },
        layoutMode: "fitRows"
    });
    $(".filters a").click(function() {
        $(".filters a").removeClass("active");
        $(this).addClass("active");
        var n = $(this).attr("data-filter");
        t.isotope({
            filter: n
        });
        e.isotope({
            filter: n
        });
        i();
        return false
    });
    t.imagesLoaded(function() {
        r()
    });
    $(window).bind("resize", function() {
        i()
    });
    var s = $(".masonry-wrapper"),
        o = $(".gallery-item"),
        u = o.outerWidth(true);
    s.isotope({
        resizable: false,
        masonry: {
            columnWidth: u
        }
    }).isotope("reLayout");
    $(window).smartresize(function() {
        var e = o.outerWidth(true);
        s.isotope({
            masonry: {
                columnWidth: e
            }
        })
    });
    $(".masonry a").click(function() {
        $(".masonry a").removeClass("active");
        $(this).addClass("active");
        var e = $(this).attr("data-filter");
        s.isotope({
            filter: e
        });
        s.isotope("reLayout");
        return false
    })
});
$(window).load(function() {
    (function() {
        var e = $("#project-page-holder");
        var t = $("#portfolio-wrapper .expand-link");
        var n = t.length;
        $("#portfolio-wrapper .expand-link").click(function() {
            if ($(this).hasClass("active")) {} else {
                lastIndex = n;
                n = $(this).index();
                t.removeClass("active");
                $(this).addClass("active");
                var e = $(this).find(".open-project").attr("href") + " .item-data";
                $("#project-page-data").animate({
                    opacity: 0
                }, 0, function() {
                    $("#project-page-data").load(e, function(e) {
                        var t = $(".helper");
                        var n = t.height();
                        $("#project-page-data").css("min-height", n);
                        $(".project-slider").css({
                            height: ""
                        })
                    });
                    $("#project-page-data").delay(0).animate({
                        opacity: 1
                    }, 0)
                });
                $("html, body").animate({
                    scrollTop: $(".portfolio-bottom").offset().top - 40
                }, 900);
                $("#project-page-holder").slideUp(600, function() {
                    $("#project-page-data").css("visibility", "visible")
                }).delay(0).slideDown(1e3, function() {
                    $("#project-page-data").fadeIn("slow", function() {
                        initBxModal()
                    });
                    $(".element_fade_in").each(function() {
                        $(this).appear(function() {
                            $(this).delay(0).animate({
                                opacity: 1,
                                right: "0px"
                            }, 0)
                        })
                    })
                })
            }
            return false
        });
        $(document).on("click", "#project_close", function(e) {
            $("#project-page-data").animate({
                opacity: 0
            }, 0, function() {
                $("#project-page-holder").delay(0).slideUp(400)
            });
            $("html, body").delay(0).animate({
                scrollTop: $(".portfolio-top").offset().top - 70
            }, 0);
            t.removeClass("active");
            return false
        })
    })()
})