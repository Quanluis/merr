$("#pic").hide()
$("#letter").hide()

$('#quote').hide().fadeIn(1500);

$('#mindy').hide().slideDown(1500);

$('#mindy').click(function(){
    console.log("clicked")
    $('#pic').show()
    $('#letter').show()
    $('#quote').hide()
    $('#mindy').hide()

})