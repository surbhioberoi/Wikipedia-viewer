function getArticle() {
  var search = $("input").val();
  $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=10&search=" + search + "&callback=?", function(data) {
    for(var i = 0; i < 10; i++) {
      if(data[1][i]){
        $(".content").append("<div class='results'><h2><a href="+data[3][i]+">"+data[1][i]+"</a></h2><p>"+data[2][i]+"</p></div>");
      }
    }
    if(!data[3][0]) {
      $(".content").html("<div class='results'><h2><a href='#'>No Results</a></h2><p>Wikipedia does not have an article with this name.</p></div>");
    }
    if(!search) {
      $(".content").empty();
    }
  }      
)};


$('.s-button').on("click", getArticle);
