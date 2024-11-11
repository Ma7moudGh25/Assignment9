var btn=document.getElementById('btn');
var q=document.getElementById('qoute');
var qoutes=[
  '“Be yourself; everyone else is already taken. ” -Oscar Wilde',
  '“So many books, so little time.” -Frank Zappa',
,
  '“A room without books is like a body without a soul.” ―Marcus Tullius Cicero'
  
]
btn.addEventListener("click",function(){
  var random_qoute=qoutes[Math.floor(Math.random()*qoutes.length)];
  q.innerHTML=random_qoute;

})

  
