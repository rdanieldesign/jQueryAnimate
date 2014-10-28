// $('#jump').click(function(){
//   $(this).toggleClass('animated bounce');
// });

var circleZoo = {
  jump: "bounce",
  chColor: "ch-color",
  grow: "grow",
  shrink: "shrink"
};


for (var x in circleZoo){
  var id = ('#' + x).toString();
  console.log(id);
  var animation = ('animated ' + circleZoo[x]).toString();
  console.log(animation);
  $(id).click(function(){
    $(this).toggleClass(animation);
  });
};