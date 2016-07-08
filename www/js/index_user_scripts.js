/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #Add */
    $(document).on("click", "#Add", function(evt)
    {
         /*global activate_subpage */
         var fn=parseFloat(document.getElementById('fn').value);
        var sn=parseFloat(document.getElementById('sn').value);
        var rs=document.getElementById('result');
            rs.innerHTML=fn+sn;
    });
    
        /* button  #Sub */
    $(document).on("click", "#Sub", function(evt)
    {
        var fn=parseFloat(document.getElementById('fn').value);
        var sn=parseFloat(document.getElementById('sn').value);
        var rs=document.getElementById('result');
            rs.innerHTML=fn-sn;
    });
    
        /* button  #mult */
    $(document).on("click", "#mult", function(evt)
    {
        var fn=parseFloat(document.getElementById('fn').value);
        var sn=parseFloat(document.getElementById('sn').value);
        var rs=document.getElementById('result');
            rs.innerHTML=fn*sn;
    });
    
        /* button  #div */
    $(document).on("click", "#div", function(evt)
    {
        var fn=parseFloat(document.getElementById('fn').value);
        var sn=parseFloat(document.getElementById('sn').value);
        var rs=document.getElementById('result');
            rs.innerHTML=fn/sn;
         var results='&num1='+ fn + '&num2='+ sn +'&result='+ result;

// AJAX code to submit form.
        
$.ajax({
type: "POST",
url: "http://192.168.1.130:7000/compute",
data:results,
cache: false,
success: function(html) {
   
           alert("Division Performed");   
}
});
    });
 }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
