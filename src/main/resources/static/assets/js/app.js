(function($) {
    "use strict";
    /*-------------------------------------
      Sidebar Toggle Menu
    -------------------------------------*/
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);

    /*-------------------------------------
      Sidebar Toggle Menu
    -------------------------------------*/
    $('.sidebar-toggle-view').on('click', '.sidebar-nav-item .dsy-menu-link', function(e) {
        if ($(this).parents('#main-wrapper')) {
            var animationSpeed = 300,
                subMenuSelector = '.sub-group-menu',
                $this = $(this),
                checkElement = $this.next();
            if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
                checkElement.slideUp(animationSpeed, function() {
                    checkElement.removeClass('menu-open');
                });
                checkElement.parent(".sidebar-nav-item").removeClass("active");
            } else if ((checkElement.is(subMenuSelector)) && (!checkElement.is(':visible'))) {
                var parent = $this.parents('ul').first();
                var ul = parent.find('ul:visible').slideUp(animationSpeed);
                ul.removeClass('menu-open');
                var parent_li = $this.parent("li");
                checkElement.slideDown(animationSpeed, function() {
                    checkElement.addClass('menu-open');
                    parent.find('.sidebar-nav-item.active').removeClass('active');
                    parent_li.addClass('active');
                });
            }
            if (checkElement.is(subMenuSelector)) {
                e.preventDefault();
            }
        } else {
            if ($(this).attr('href') === "#") {
                e.preventDefault();
            }
        }
    });

    /*-------------------------------------
        Sidebar Menu Control
      -------------------------------------*/
    $("#dsy-aside-toggler").on("click", function() {
        $("#main-wrapper").toggleClass("sidebar-collapsed");
    });

    /*-------------------------------------
      Sidebar Menu Control Mobile
    -------------------------------------*/
   $(".sidebar-toggle-mobile").on("click", function() {
        $("#main-wrapper").toggleClass("sidebar-collapsed-mobile");
    });

    function mobile_nav_class() {
        var mq = window.matchMedia("(max-width: 991px)");
        if (mq.matches) {
            $("#main-wrapper").removeClass("sidebar-collapsed");
        } else {
            $("#main-wrapper").removeClass("sidebar-collapsed-mobile");
        }
    }

    $(window).resize(function() {
        mobile_nav_class();
    });
    
    /*-------------------------------------
    Section background image
    -------------------------------------*/
    $("[data-bg-image]").each(function() {
        var img = $(this).data("bg-image");
        $(this).css({
            backgroundImage: "url(" + img + ")"
        });
    });

    /*---------------------------------------
    On Click Section Switch
    --------------------------------------- */
    $('[data-type="section-switch"]').on('click', function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            if (target.length > 0) {

                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    /*-------------------------------------
    On Scroll 
    -------------------------------------*/
    $(window).on('scroll', function() {

        // Back Top Button
        if ($(window).scrollTop() > 500) {
            $('.scrollup').addClass('back-top');
        } else {
            $('.scrollup').removeClass('back-top');
        }
    });

    /*-------------------------------------
        Select2 activation code
    -------------------------------------*/
    if ($('select.select2').length) {
        $('select.select2').select2({
            theme: 'classic',
            dropdownAutoWidth: true,
            width: '100%'
        });
    }

    /*-------------------------------------
    Color Picker Initialize
    -------------------------------------*/
    $('#cp1, #cp2, #cp3').colorpicker();

    /*-------------------------------------
    Date Picker Initialize
    -------------------------------------*/
    $(".flatpickr-date").flatpickr();

    $(".flatpickr-time").flatpickr({
        noCalendar: true,
        enableTime: true,
        dateFormat: "H:i",
        time_24hr: false
    });

    /*-------------------------------------
    ToolTip Initialize
    -------------------------------------*/
    $('[data-toggle="tooltip"]').tooltip();

    /*-------------------------------------
    DataTables Initialize
    -------------------------------------*/
    if ($.fn.DataTable !== undefined) {
        $('#data-table').DataTable({
            responsive: true,
            pageLength: 25
        });
    }

    /*-------------------------------------
      Quill Initialize
    -------------------------------------*/
    if ($("#quill-editor").length) {
        var quill = new Quill('#quill-editor', {
            modules: {
                toolbar: '#quill-toolbar'
            },
            placeholder: 'Your message write here',
            theme: 'snow'
        });
    }

    /*-------------------------------------
      Mail Compose Box
    -------------------------------------*/
    //compose box show
    $('#mail-compose-btn').on('click', function() {
        $('#mail-compose').addClass('show');
    })

    // compose box close
    $('#compose-close').on('click', function(e) {
        e.preventDefault()

        if ($('#mail-compose').hasClass('minimize') || $('#mail-compose').hasClass('shrink')) {
            $('#mail-compose').addClass('d-none');

            setTimeout(function() {
                $('#mail-compose').attr('class', 'mail-compose-wrap');
            }, 500);

        } else {
            $('#mail-compose').removeClass('show');
        }
    })

    //compose box shirnk
    $('#compose-shrink').on('click', function(e) {
        e.preventDefault()
        $('#mail-compose').toggleClass('shrink')
        $('#mail-compose').removeClass('minimize')
    })

    //compose box minimize
    $('#compose-minimize').on('click', function(e) {
        e.preventDefault()
        $('#mail-compose').toggleClass('minimize')
    })

    /*-------------------------------------
      Chat Attach Btn
    -------------------------------------*/
    $('.media-attach-toggle').on('click', function() {
        var $this = $(this);
        $this.parent('.input-group').toggleClass('attach-expand');
    })


})(jQuery);