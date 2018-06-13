// client-side js
// run by the browser each time your view template is loaded

(function(){
  console.log('hello world :o');
  
  $.ajax(
    {
    url:"/all",
      datatype:"json",
      success: function(data){
      var str;
      console.log(data);
      data.forEach(function(ele){
      
      
      
      
      })
      
      
      }
    
    
    }
  
  )
  
})()