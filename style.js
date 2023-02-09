$(document).ready(function() {
  $(window).scroll(function() {
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  })

  $('.scroll-up-btn').click(function() {
    $('html').animate({ scrollTop: 0 });
  })

  $('.menu-btn').click(function() {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  })

  var typed = new Typed('.typing', {
    strings: [
      "ᴀ 𝙲ᴏᴅᴇʀ ᴡɪᴛʜ 𝟷.𝟸 ʏᴇᴀʀ𝚜 ᴏғ ᴇ𝚡ᴘᴇʀɪᴇɴᴄᴇ.",
      "14",
      "Pᴏᴡᴇʀғᴜʟ",
      "Sᴛʀᴏɴɢ",
      "A Gᴏᴏᴅ Lᴇᴀᴅᴇʀ",
      "Sᴍᴀʀᴛ",
      "A Gᴏᴏᴅ Fʀɪᴇɴᴅ",
      "Pʀᴏ",
      "A Gᴏᴏᴅ Pʀᴏɢʀᴀᴍᴍᴇʀ",
      "Gᴏᴏᴅ Bᴏʏ ᴡʜᴏ ɪs Nɪᴄᴇ Tᴏ Aʟʟ",
      "Sᴛᴜᴅᴇɴᴛ",
    ],
    typeSpeed: 45,
    backSpeed: 56,
    loop: true,
  })

  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });

})
