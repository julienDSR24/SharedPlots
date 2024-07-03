d3.text("plots/mydiv.html")
    .then(function(divText){
        $('#plot').html(divText);
    })
    .catch(function(error){
        $('#plot').html("<p style='color:red;'>The plot cannot be found.</p>");
    })