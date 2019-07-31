$(document).ready(function(){
console.log("Page Loaded.");

$.ajax({
    url: '',
    method: 'GET',
    dataType: 'json'
}).done(function(data){
    console.log(data);
})


});