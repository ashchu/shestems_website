var clicks = 0;
$('.quote-title').html("I loved the atmosphere and we were always having fun and they were always making me laugh.");
$('.quote-source').html("-Valentina, 9th grade");
function getQuote() {
      var t = clicks;
      var quote = ["The teachers were amazing and very encouraging!", "Everything was great and fun.", "I loved the atmosphere and we were always having fun and they were always making me laugh."];
      var author = ["Astha", "Cameron", "Jocyleia", "Valentina"];
      var grade = ["8th grade", "5th grade", "6th grade", "9th grade"];
      // console.log(quote.length);
      if(clicks < quote.length){
        $('.quote-title').html(quote[t]);
        $('.quote-source').html("-"+author[t]+", " + grade[t]);
        clicks++;
      }
      else
        clicks = 0;
    }
//
// $(document).ready(getQuote);
