function ran() {
      return Math.floor((Math.random() * 16) + 1);
}

// var hex = `${ran().toString(16)} + ${ran().toString(16)} + ${ran().toString(16)} + ${ran().toString(16)} + ${ran().toString(16)} + ${ran().toString(16)}`;



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

$('h2').append(`#${hex_q}`);
