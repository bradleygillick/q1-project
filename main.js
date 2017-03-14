$(document).ready(function() {

    submit.addEventListener("click", function() {

        var city1 = document.getElementById("city1").value;
        var city2 = document.getElementById("city2").value;


        var info1 = $.get("https://api.teleport.org/api/urban_areas/slug:" + city1 + "/scores/")
        var info2 = $.get("https://api.teleport.org/api/urban_areas/slug:" + city2 + "/scores/")

        info1.done((data) => {
            if (info1.status !== 200) {
                return;
            }
            console.log(data);
            console.log(data.summary);
            //console.log(data.categories[0].name)
            appendSummary('.div1', data.summary);
            appendCategories(data.categories);

        })

        info2.done((data) => {
            if (info2.status !== 200) {
                return;
            }
            console.log(data.summary)
            appendSummary('.div2', data.summary);
            appendCategories(data.categories);
        })

        function appendSummary(div, summary) {
            $(div).append(summary);
        }

        function buildCategories(div, catData) {
            for (var i = 0; i < data.length; i++) {
                $(div).append(summary);
            }
        }

        function appendCategories(catArray) {
          console.log(catArray);
          let l = catArray.length;
          for (var i =0; i < l; i++) {
            console.log(catArray[i].color)
            console.log(catArray[i].name)
            console.log(catArray[i].score_out_of_10)
          }
        }


    })
})
