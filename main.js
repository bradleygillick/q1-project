/*jshint -W033*/
/*jshint -W104*/
/*jshint -W119*/

console.log("js attached!")

$(document).ready(function() {

    submit.addEventListener("click", function() {
        $("#div1").empty()
        $("#midDiv").empty()
        $("#div2").empty()

        var city1 = document.getElementById("city1").value.toLowerCase();
        var city2 = document.getElementById("city2").value.toLowerCase();


        var info1 = $.get("https://api.teleport.org/api/urban_areas/slug:" + city1 + "/scores/")
        var info2 = $.get("https://api.teleport.org/api/urban_areas/slug:" + city2 + "/scores/")

        info1.done((data) => {
            if (info1.status !== 200) {
                return;
            }
            appendCategories('#div1', data.categories);
            appendSummary('#div1', data.summary);


        })

        info2.done((data) => {
            if (info2.status !== 200) {
                return;
            }
            console.log(data.summary)
            appendCategories('#div2', data.categories);
            appendSummary('#div2', data.summary);
        })




        function appendSummary(div, summary) {
            $(div).append(summary);
        }

        function appendCategories(div, catArray) {

            var l = catArray.length;

            for (var i = 0; i < l; i++) {
                var $p1 = $("<p>");
                var score = catArray[i].score_out_of_10.toFixed(0);
                $p1.append("<div class='myProgress'><div class='myBar'>" + score +"/10</div></div>")

                $(div).append($p1)

                if (div === '#div1') {
                    $p2 = $("<p>");
                    $p2.append(catArray[i].name);
                    $('#midDiv').append($p2);
                }


                console.log(catArray[i].color)
                console.log(catArray[i].name)
                console.log(catArray[i].score_out_of_10)
            }
        }

        function move() {
            var elem = $(".myBar");
            var width = 1;
            var id = setInterval(frame, 10);

            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                } else {
                    width++;
                    elem.style.width = width + '%';
                }
            }
        }

    })
})
