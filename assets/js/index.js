function newHEX() {
   function ran() {
         return Math.floor((Math.random() * 16) + 1);
   }

function genhex() {
      var hex1 = ran().toString(16);
      var hex2 = ran().toString(16);
      var hex3 = ran().toString(16);
      var hex4 = ran().toString(16);
      var hex5 = ran().toString(16);
      var hex6 = ran().toString(16);

      var hex = hex1 + hex2 + hex3 + hex5 + hex4 + hex6;
      return hex = hex.toUpperCase().slice(0,6);
   }

   hex_q = genhex();
   console.log(hex_q);
   $('h2').html(`#${hex_q}`);
   var html = '';
   var pos = Math.floor(Math.random() * 5);
   for (var i = 0; i < 5; i++) {
      var hex_o = genhex();
      if (i === pos) {
         hex_o = hex_q;
      }
      html += `<li id="${hex_o}" style = "background:#${hex_o}"></li>`;
   }
   //console.log(html);
   $('.options ul').html(html);
}

var highScore = localStorage.getItem('HighScore');
if( highScore === null){
   localStorage.setItem('HighScore', 0);
}else{
   $('.highScore p').html(highScore);
}
newHEX();
var score = 0;
$('.currentScore p').html(score);

$(document).on('click', "li", function (){
   var color = this.id;
   if(color === hex_q){
      score++;
      $('.currentScore p').html(score);
      $('.result h4').html('CORRECT!');
      newHEX();
      if (highScore < score) {
         localStorage.setItem('HighScore', score);
         $('.highScore p').html(score);
      }
   }
   else{
      var lose = `<p style="color: red ; font-weight:300; font-size:30px; margin-bottom:10px;"> YOU LOSE !</p>
      <center><div class="newgame">New Game</div></center>`
      $('.result h4').html(lose);
      $("li").click("contextmenu",function(e){
              return false;
      });
      $('.newgame').click(function () {
         location.reload();
         newHEX();
         score = 0;
      });
   }
});
