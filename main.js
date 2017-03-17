/*jshint -W033*/
/*jshint -W104*/
/*jshint -W119*/


$(document).ready(function() {

    submit.addEventListener("click", function() {
      // $(".leftBar").remove()
      // $(".container").children().remove()
        buildGrid()


        var city1 = document.getElementById("city1").value.toLowerCase();
        var city2 = document.getElementById("city2").value.toLowerCase();

        var info1 = $.get("https://api.teleport.org/api/urban_areas/slug:" + city1 + "/scores/")
        var info2 = $.get("https://api.teleport.org/api/urban_areas/slug:" + city2 + "/scores/")

        info1.then((data) => {
          for (var i = 0; i < data.categories.length; i++) {
            var rowNum = "row" + i
            // Append the score on the left
            $("." + rowNum + "").find(".leftScore").append("<p>" + data.categories[i].score_out_of_10.toFixed(0) + "/10</p>")
            // Append the category (in the middle)
            $("." + rowNum + "").find(".category").append("<p>" + data.categories[i].name + "</p>")
            // <div class="bar" style="width: 100%"></div>
            // .css( "s" );
            var barLength = data.categories[i].score_out_of_10.toFixed(0) * 10;
            let styleStr = barLength + "%";
            let barColor = data.categories[i].color;
            let tempDiv = $("<div>").addClass("bar").css( "width", styleStr).css("margin-top","1.7em").css("background-color", barColor);
            $("." + rowNum + "").find(".leftBar").append(tempDiv);



        }

        info2.then((data) => {
          for (var i = 0; i < data.categories.length; i++) {
            var rowNum = "row" + i
            // Append the category on the right
            $("." + rowNum + "").find(".rightScore").append("<p>" + data.categories[i].score_out_of_10.toFixed(0) + "/10</p>")

            var barLength = data.categories[i].score_out_of_10.toFixed(0) * 10;
            let styleStr = barLength + "%";
            let barColor = data.categories[i].color;
            let tempDiv = $("<div>").addClass("bar").css( "width", styleStr).css("margin-top","1.7em").css("background-color", barColor);
            $("." + rowNum + "").find(".rightBar").append(tempDiv);

            ++rowNum
          }
        })
})
        // buildGrid()


        function buildGrid(data) {
          $("#stats").empty();
            for (var i = 0; i < 17; i++) {
                var rowNum = "row" + i
                $("#stats").append('<div class="row ' + rowNum + '"></div>')
                $("." + rowNum + "").append('<div class="leftBar col s4"></div>').append('<div class="leftScore col s1"></div>').append('<section class="category col s2"></section>').append('<div class="rightScore col s1"></div>').append('<div class="rightBar col s4"></div>')
            }
        }
    })
})
