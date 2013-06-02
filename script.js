$(document).ready(function() {
   $('div').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('div').click(function() {
       $(this).toggle(1000);
   });
   $('ul li').addClass('emphasis') ;
});


// in a selector, for any rule use the name itself like div in above case. For id use $('#...').asdasd and for class use $('.classname'). asdasd like that ! 
// $() is a funciton that turns anything to a jQuery Object. So it can use it to work with later on. while $p is nothing but a variable.

/*
Sometimes our jQuery code gets really long, and it can be nice to store it in small variables for later use. 
For example, if we wanted to modify a deeply nested HTML element, we could do this:
$(document).ready(function() {
    var $item = $('div ul li ol li');
    $item.fadeOut('fast');
});
*/

/*
$(document).ready(function(){
    $('.pull-me').click(function(){
        $('.panel').slideToggle('slow');
    });
});
*/

/*
however, instead of just having something like:

$p = $('p');
We'll want to pass in an entire HTML element in quotes:

$p = $("<p>I'm a new paragraph!</p>");
When we put text in quotes like this, we call it a string (as in a "string of characters"). 
From now on, when we say "string," you can think "text" or "phrase." Strings are always in single or double quotes.

*/
/*
.append() inserts the specified element as the last child of the target element. 
.prepend() inserts the specified element as the first child of the target element. If we have a div of class .info,
$(document).ready(function(){
$('body').append("<p>I'm a paragraph</p>");
});

*/

/*
Your syntax should look like this:
$('element to remove').remove();
(You should be removing a 'p', not a '<p>'.)
*/

/*
.val() is used to get the value of form elements. For example,

$('input:checkbox:checked').val();
would get the value of the first checked checkbox that jQuery finds.

*/

/*

You'll notice we've set up an HTML form for grabbing the user's input. We'll need to store the user's input in a variable, which will allow us to append that input to the body of the HTML document later on.

You can set a variable equal to the contents of the input field using .val(), like so:

var variable = $('input[name=fieldName]').val();
In this case, our fieldName is 'checkListItem', as you can see on line 11 of index.html.
$(document).ready(function(){
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
    });
});
*/

/*
$(document).ready(function(){
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item">' + toAdd + '</div>');
    });
});
*/

/*
Remove What's Been Clicked
Great job! Finally, we want to be able to check items off our list.

You might think we could do this:

$('.item').click(function() {
    $(this).remove();
});
and that's not a bad idea. The problem is that it won't work—jQuery looks for all the .items when the DOM is loaded, 
so by the time your document is ready, it's already decided there are no .items to .remove(), and your code won't work.

For this, we'll need a new event handler: .on(). You can think of .on() as a general handler that takes the event, its selector, and an action as inputs. The syntax looks like this:

$(document).on('event', 'selector', function() {
    Do something!
});
In this case, 'event' will be 'click', 'selector' will be '.item', and the thing we'll want to do is call .remove() on this.

*/


/*
Review of jQuery Events
You know a lot about jQuery events already, but it never hurts to review the basics.

The setup almost always looks like this:

$(document).ready(function() {
    $('thingToTouch').event(function() {
        $('thingToAffect').effect();
    });
});
where "thing to touch" is the HTML element you'll click on, hover over, or otherwise interact with, 
and "thing to affect" is the HTML element that fades away, changes size, or undergoes some other transformation.

Sometimes these elements are one and the same—you might hover over a <div> to change its opacity. Other times, you might interact with a separate element; for example, you might click on a button to resize a <div>.

Sometimes if you want an effect to occur right away, without an event like .click() or .hover(), you'll skip the second line in the above:

$(document).ready(function() {
    $('thingToAffect').effect();
});

*/


/*
$(document).ready(function(){
    $(document).keydown(function(){
        $('div').animate({left:'+=10px'},500);
    });
});
*/

/*
Inside your $(document).ready() setup, call the .keydown() event on $(document). Pass .keydown() a function(){} as an input. Here's the twist: your function should take a single input, key, which will help jQuery figure out which key was pressed.
Hint
Your code should look something like this:
$(document).ready(function() {
    $(document).event(function(key){});
Where event is .keydown().
*/

/*
$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
      case 65:
        $('img').animate({left: "-=10px"}, 'fast');
        break;
      case 83:
        $('img').animate({top: "+=10px"}, 'fast');
        break;
      case 87:
        $('img').animate({top: "-=10px"}, 'fast');
        break;
      case 68:
        $('img').animate({left: "+=10px"}, 'fast');
        break;
      default:
        break;
    }
  });
});
*/



/* To make a collapsable menu 
<!DOCTYPE html>
<html>
    <head>
      <title>Behold!</title>
        <link rel='stylesheet' type='text/css' href='http://code.jquery.com/ui/1.9.1/themes/base/jquery-ui.css'/>
        <script type='text/javascript' src='script.js'></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
  </head>
  <body>
        <div id="menu">
            <h3>jQuery</h3>
            <div>
                <p>jQuery is a JavaScript library that makes your websites look absolutely stunning.</p>
            </div>
            <h3>jQuery UI</h3>
            <div>
                <p>jQuery UI includes even more jQuery goodness!</p>
            </div>
            <h3>JavaScript</h3>
            <div>
                <p>JavaScript is a programming language used in web browsers, and it's what powers jQuery and jQuery UI. You can learn about JavaScript in the <a href="http://www.codecademy.com/tracks/javascript" target="blank" style="text-decoration:none; color:#F39814">JavaScript track</a> here on Codecademy.</a></p>
            </div>
        </div>
  </body>
</html>
and .js willl be 

$(document).ready(function() {
    $("#menu").accordion({collapsible: true, active: false});
});

*/

/*
jQuery UI includes a .draggable() function that can make any HTML element draggable—you can click on it and move it anywhere on the page!

*/

/*
$(document).ready(function(){
    $('#menu').accordion();
});

Make an awesome menu  !! !
*/
