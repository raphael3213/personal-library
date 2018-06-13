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
        var str1="";
      console.log(data);
      data.forEach(function(ele){
        
        if(ele.comment.length!=0){
        
        ele.comment.forEach(function(el,i){
        
        str1+="<p>"
        })
        
        
        }
        
      str=["<div id='booker'>",
           "<h3>Title:","<br>",
           ele.title,"</h3>",
           "<h3>BOOK ID:",
           ele.book_id,"</h3>",
           
           
           
           "</div>"
      
      ]
      
      })
      
      
      }
    
    
    }
  
  )
  
})()