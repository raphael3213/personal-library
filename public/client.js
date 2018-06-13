// client-side js
// run by the browser each time your view template is loaded

(function(){
  console.log('hello world :o');
  
  $.ajax(
    {
    url:"/all",
      datatype:"json",
      success: function(data){
      var str=[];
        var str1="";
        var k=0;
      console.log(data);
      
        
        data.forEach(function(ele,ind){
        str1="";
        str=[];
        console.log(ind);
        
        if(ele.comment.length!=0){
        
        ele.comment.forEach(function(el,i){
        k=i+1;
        str1+="<p>"+k+")"+el+"</p><br>";
        })
        
        
        }
        
      str=["<div id='booker'>",
           "<h3>Title:","<br>",ele.title,"</h3>",
           "<h3>BOOK ID:",
           ele.book_id,"</h3>","<br>",
           "<h3>Comments:",
           "</h3>","<br>",str1,
            "</div>"
      
      ]
      
      })
      
      $("#list").html(str.join(''));
      }
    
    
    }
  
  )
  
})()