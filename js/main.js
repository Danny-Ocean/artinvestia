jQuery(document).ready(function ($) {

  // Header fixed and Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      $('#header').addClass('header-fixed');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('#header').removeClass('header-fixed');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function (e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smoth scroll on page hash links
  $('a[href*="#"]:not([href="#"])').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-fixed')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Porfolio filter
  $("#portfolio-flters li").click(function () {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    var selectedFilter = $(this).data("filter");
    $("#portfolio-wrapper").fadeTo(100, 0);

    $(".portfolio-item").fadeOut().css('transform', 'scale(0)');

    setTimeout(function () {
      $(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
      $("#portfolio-wrapper").fadeTo(300, 1);
    }, 300);
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 500
  });

  // custom code




  $(".hero-image").hide().fadeIn(2000);


  function quizInit() {

    // Selectors
    var $quizQuestionText = $('.quiz .question .questionText');
    var $quizQuestionOptions = $('.quiz .question .options');
    var $quizProgress= $('.quiz progress');
    var $quizProgressDataCurrent= $('.quiz .progressData .current');
    var $quizProgressDataLimit= $('.quiz .progressData .limit');

    // Data input for Questions and Results
    var questions = [
      {


         text: 'What painting style do you look for?',
      answers: {
        type: '',
        options: [{
          text: 'abstract',
          weight: 1
        }, {
          text: 'figurative',
          weight: 2
        }, {
          text: 'photorealism',
          weight: 3
        },{
          text: 'pop art',
          weight: 4
        },{
          text: 'other',
          weight: 5
        }]
      },
    },


      {
         text: 'What size do you prefear?',
      answers: {
        type: '',
        options: [{
          text: 'up to 50cm width',
          weight: 1
        }, {
          text: 'up to 100cm width',
          weight: 2
        }, {
          text: 'up to 200cm width',
          weight: 3
        },{
          text: 'up to 300cm width',
          weight: 4
        },{
          text: 'more than 300cm width',
          weight: 5
        },{
          text: "doesn't matter",
          weight: 6
        }]
      },
    },
       {
      text: 'I am more of a',
      answers: {
        type: 'multiple',
        options: [{
          text: 'Collector',
          weight: 1
        }, {
          text: 'Investor',
          weight: 2

        }]
      },
    },
       {
         text: 'i am interessted in',
      answers: {
        type: '',
        options: [{
          text: 'widely known artists',
          weight: 1
        }, {
          text: 'young emerging artists',
          weight: 2
        },{
          text: 'both',
          weight: 3
        }]
      },
    },
{
      text: 'My Budget is (Dollars)',
      answers: {
        type: '',
        options: [{
          text: 'under 1.000',
          weight: 1
        }, {
          text: '5.000-10.000',
          weight: 2
        },{
          text: '5.000-10.000',
          weight: 3
        }, {
          text: '10.000- 30.000',
          weight: 4
        },{
          text: '30.000- 60.000',
          weight: 5
        },{
          text: '60.000- 100.000',
          weight: 6
        },
        {
          text: '100.000- 150.000',
          weight: 7
        },
        {
          text: '150.000- 200.000',
          weight: 8
        },  {
            text: '200.000- 500.000',
            weight: 9
          },  {
              text: '500.000- 1.000.000',
              weight: 10
            },
                 {
          text: '1.000.000-5.000.000',
          weight: 11
        }]
      },
    }];

    var results = [{
      id: 1,
      text:'result 1 text',
      minScore:0
    },{
      id: 2,
      text:'result 2 text',
      minScore:5
    },{
      id: 3,
      text:'result 3 text',
      minScore:9
    },{
      id: 4,
      text:'result 4 text',
      minScore:12
    }];

    var question_answers = [];

    // QUIZ ENGINE
    function quiz() {
      var currentQuestion = 0; // default starting value
      var currentScore = 0; // default starting value
      var answerLog = [] // for storing answers for Marketo
      $quizProgress.attr("max", questions.length);
      $quizProgressDataLimit.html(questions.length);
      renderQuestion(currentQuestion);

      // RENDER
      function renderQuestion() {
        var question = questions[currentQuestion];
        var optionsHtml = [];
        var questionText = question.text;
        var questionOptionText = question.answers.options;
        $quizQuestionText.html(questionText);
        for(var i = 0; i < questionOptionText.length; i++) {
          if (question.answers.type == 'range'){
            var questionOptionItem = '<button class="quiz-opt range" value="'+questionOptionText[i].weight+'" id="'+questionOptionText[i].text+'">'+questionOptionText[i].text+'</button>'
          } else {
            var questionOptionItem = '<button class="quiz-opt" value="'+questionOptionText[i].weight+'" id="'+questionOptionText[i].text+'">'+questionOptionText[i].text+'</button>'
          }
          optionsHtml.push(questionOptionItem);
        }
        $quizQuestionOptions.html(optionsHtml.join(''));
        $('.quiz button').click(nextQuestion);
      } // END renderQuestion

      // HANDLER
      function nextQuestion() {
        currentQuestion += 1;
        var optionValue = parseInt(this.value);
        question_answers[currentQuestion-1] = optionValue;
        console.log(question_answers);
        currentScore += optionValue;
        console.log('currentScore=', currentScore);
        $quizProgress.attr("value", currentQuestion);
        $quizProgressDataCurrent.html(currentQuestion);
        if (questions.length == currentQuestion){
          calculateResults();
        } else {
          renderQuestion();
          // addToAnswerLog();
        }
      } // END nextQuestion

      // RESULTS
      function calculateResults() {
        $('.quiz .question').html('<p class="questionText"Almost done! Your Search profile is immediatly available to 400 Top Galleries worldwide after you enter Name and email</p><form method="GET" action="/store.php"><input type="hidden" name="q1" id="q1" value="" /><input type="hidden" name="q2" id="q2" value="" /><input type="hidden" name="q3" id="q3" value="" /><input type="hidden" name="q4" id="q4" value="" /><input type="hidden" name="q5" id="q5" value="" /><input type="hidden" name="q6" id="q6" value="" /><input type="hidden" name="q7" id="q7" value="" /><input type="hidden" name="q8" id="q8" value="" /><input style="width: 50%; text-align: center; margin-left: 28%;border-radius: 3px; font-size: 16px;" type="text" name="name" placeholder="your name (only visible for Galleries)" value="" /><input type="text" style="width: 50%; text-align: center; margin-left: 28%;border-radius: 3px; font-size: 16px;" name="email" placeholder="your email (only visible for Galleries)" value="" /><br><textarea style="margin-left: 28%;" name="notes" placeholder="Write a note for additional information like a specific artist. (can leave empty)" rows="6" cols="71""></textarea><br><input type="submit" value="SEND TO 400 TOP GALLERIES" style="color:white; margin-left: 43%; background: linear-gradient(to right, #396afc, #2948ff);" /></form>');
        $('#q1').val(question_answers[0]);
          $('#q2').val(question_answers[1]);
            $('#q3').val(question_answers[2]);
              $('#q4').val(question_answers[3]);
                $('#q5').val(question_answers[4]);

      }
    } // END quiz engine

    // Init render
    quiz();

  } // END quizInit

  $(function() {
    quizInit();
  });

  // MARKETO FORM INJECTION










  // AB HIER FÜR DIE tabs
  $(function() {
	// Active the first thumb & panel
	$(".tabs-thumb:first-child").addClass("is-active").closest(".tabs").find(".tabs-panel:first-child").show();

	$(".tabs-thumb").click(function() {
		// Cancel the siblings
		$(this).siblings(".tabs-thumb").removeClass("is-active").closest(".tabs").find(".tabs-panel").hide();
		// Active the thumb & panel
		$(this).addClass("is-active").closest(".tabs").find(".tabs-panel").eq($(this).index(".tabs-thumb")).show();
	});
});






});
