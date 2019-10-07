//tabs
$('.tab').click(function (event) {
    $(".chosen").removeClass("chosen");
    $(this).addClass('chosen');
    //get index of tab
    var index = $('.tab').index($(this));
    //go to the page[index]
    $(".shown").removeClass("shown");
    $('.page').eq(index).addClass('shown');

});

$(document).ready(function() {

    $(".btn-login").click(function() {
        $("body").toggleClass("show-popup");
    });

});

$(document).ready(function() {

    $(".btn-show-profile-info").click(function() {
        $(".user-interface__popup").toggleClass("show");
    });

});


jQuery(function() {
    initMobileNav();
});

// mobile menu init
function initMobileNav() {
    jQuery('body').mobileNav({
        menuActiveClass: 'nav-active',
        menuOpener: '.nav-opener'
    });
}


// custom select
$('select').each(function() {
    var $this = $(this),
        numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function() {
            $(this).removeClass('active').next('ul.select-options').hide();po
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });

    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});

// list-product-start
$(function() {
    var selectList = $(".select-list");

    selectList.on("click", function(event) {
        event.preventDefault();
        $(".icon-th-list").toggleClass("active-select");
        $(".icon-grid").removeClass("active-select");
        $(".products-grid").toggleClass("product-list");
    });

});
// list-product-end

// grid-product-start
$(function() {
    var selectGrid = $(".select-grid");

    selectGrid.on("click", function(event) {
        event.preventDefault();
        $(".icon-grid").toggleClass("active-select");
        $(".icon-th-list").removeClass("active-select");
        $(".products-grid").removeClass("product-list");
    });

});
// grid-product-end

// drop-munu-start
window.onload = function() {
    var menuElem = document.getElementById('dropdown-menu'),
        titleElem = menuElem.querySelector('.title');
    document.onclick = function(event) {
        var target = elem = event.target;
        while (target != this) {
            if (target == menuElem) {
                if (elem.tagName == 'A') titleElem.innerHTML = elem.textContent;
                menuElem.classList.toggle('open')
                return;
            }
            target = target.parentNode;
        }
        menuElem.classList.remove('open');
    }
}
// drop-munu-end

// filter-start

$(".filter-new").click(function(event) {
    event.preventDefault();
    $(".col-product-filter").hide();
    $(".new-product").show();
});

$(".filter-old").click(function(event) {
    event.preventDefault();
    $(".col-product-filter").hide();
    $(".old-product").show();
});

$(".filter-best").click(function(event) {
    event.preventDefault();
    $(".col-product-filter").hide();
    $(".best-product").show();
});

$(".filter-all").click(function(event) {
    event.preventDefault();
    $(".col-product-filter").show();
});

// filter-end

// trending-products-carousel

$('.trending-products-carousel').slick({
  dots: true,
  infinite: false,
  speed: 300,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
    

