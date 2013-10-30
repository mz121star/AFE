/* Widget close */

$('.wclose').click(function(e) {
    e.preventDefault();
    var $wbox = $(this).parent().parent().parent();
    $wbox.hide(100);
});

/* Widget minimize */

$('.wminimize').click(function(e) {
    e.preventDefault();
    var $wcontent = $(this).parent().parent().next('.widget-content');
    if ($wcontent.is(':visible')) {
        $(this).children('i').removeClass('icon-chevron-up');
        $(this).children('i').addClass('icon-chevron-down');
    }
    else {
        $(this).children('i').removeClass('icon-chevron-down');
        $(this).children('i').addClass('icon-chevron-up');
    }
    $wcontent.toggle(500);
});

$(function() {
    //$("#todaydate").datepicker();

    var blue, grad, green, likes, orange, red, unique, views, visitors, visits, yellow;
    yellow = "#FFC125";
    orange = "#FF9609";
    green = "#80B031";
    blue = "#0096DB";
    red = "#f54f6c";
    grad = [green, yellow, orange];
    if ($("#visitors-gauge").length) {
        visitors = new JustGage({
            id: "visitors-gauge",
            value: 245,
            min: 0,
            max: 500,
            title: "Visitors",
            levelColors: grad,
            levelColorsGradient: true,
            gaugeWidthScale: 0.4
        });
    }
    if ($("#visits-gauge").length) {
        visits = new JustGage({
            id: "visits-gauge",
            value: 271,
            min: 0,
            max: 500,
            title: "New Visits",
            levelColors: grad,
            levelColorsGradient: true,
            gaugeWidthScale: 0.4
        });
    }
    if ($("#unique-gauge").length) {
        unique = new JustGage({
            id: "unique-gauge",
            value: 141,
            min: 0,
            max: 500,
            title: "Unique Visitors",
            levelColors: grad,
            levelColorsGradient: true,
            gaugeWidthScale: 0.4
        });
    }
    if ($("#views-gauge").length) {
        views = new JustGage({
            id: "views-gauge",
            value: 687,
            min: 0,
            max: 1000,
            title: "Page Views",
            levelColors: grad,
            levelColorsGradient: true,
            gaugeWidthScale: 0.4
        });
    }
    if ($("#likes-gauge").length) {
        return likes = new JustGage({
            id: "likes-gauge",
            value: 87,
            min: 0,
            max: 500,
            title: "Appreciations",
            levelColors: grad,
            levelColorsGradient: true,
            gaugeWidthScale: 0.4
        });
    }
});

var orange = "#FF9609";
var green = "#80B031";
var blue = "#0096DB";
var red = "#f54f6c";
var yellow = "#fec643";

/* Chart 4 */
/*$(function() {
    if ($("#real-time-chart").length) {

        var data = [], totalPoints = 300;
        function getRandomData() {
            if (data.length > 0)
                data = data.slice(1);

            while (data.length < totalPoints) {
                var prev = data.length > 0 ? data[data.length - 1] : 50;
                var y = prev + Math.random() * 10 - 5;
                if (y < 0)
                    y = 0;
                if (y > 100)
                    y = 100;
                data.push(y);
            }

            var res = [];
            for (var i = 0; i < data.length; ++i)
                res.push([i, data[i]])
            return res;
        }

        var updateInterval = 30;
        $("#updateInterval").val(updateInterval).change(function() {
            var v = $(this).val();
            if (v && !isNaN(+v)) {
                updateInterval = +v;
                if (updateInterval < 1)
                    updateInterval = 1;
                if (updateInterval > 2000)
                    updateInterval = 2000;
                $(this).val("" + updateInterval);
            }
        });

        var options = {
            series: { shadowSize: 1 },
            yaxis: { min: 0, max: 100 },
            xaxis: { show: false }
        };
        var plot = $.plot($("#real-time-chart"), [getRandomData()], options);

        function update() {
            plot.setData([getRandomData()]);
            plot.draw();
            setTimeout(update, updateInterval);
        }

        update();
    }
});*/

$(document).ready(function() {
    //flip mode simple
    //using data attributes
$(".live-tile").liveTile();

// carousel mode: simple
$("#tile4").liveTile();

//play on hover
var $tiles = $("#tile1, #tile2, #tile3").liveTile({
    playOnHover: true,
    repeatCount: 0,
    delay: 0,
    startNow: false
});

//flip-list: image swapps and triggerDelay
//an array of 9 images to swap between
var imgs = [{ src: 'http://www.drewgreenwell.com/images/sample/1tw.gif', alt: '1' },
                   { src: 'http://www.drewgreenwell.com/images/sample/2tw.gif', alt: '2' },
                   { src: 'http://www.drewgreenwell.com/images/sample/3tw.gif', alt: '3' },
                   { src: 'http://www.drewgreenwell.com/images/sample/4tw.gif', alt: '4' },
                   { src: 'http://www.drewgreenwell.com/images/sample/5tw.gif', alt: '5' },
                   { src: 'http://www.drewgreenwell.com/images/sample/6tw.gif', alt: '6' }, { src: 'http://www.drewgreenwell.com/images/sample/7tw.gif', alt: '7' }, { src: 'http://www.drewgreenwell.com/images/sample/8tw.gif', alt: '8' },
                   { src: 'http://www.drewgreenwell.com/images/sample/9tw.gif', alt: '9' }
                  ];
$("#flip1").liveTile(
    {
        mode: 'flip-list',
        swap: 'image',
        frontImages: imgs,
        frontIsRandom: true,
        backImages: imgs,
        backIsBackgroundImage: true,
        backIsInGrid: true,
        backIsRandom: false,
        // every tile in the list should flip every time the delay interval occurs
        alwaysTrigger: true,
        //flip the tiles in sequence
        triggerDelay: function(idx) { return idx * 500; }
    }
);
// a variable to use for the trigger delay direction
var reverse = false;
$("#flip2").liveTile(
    {
        mode: 'flip-list',
        swap: 'image',
        frontImages: imgs,
        frontIsBackgroundImage: true,
        frontIsInGrid: true,
        frontIsRandom: false,
        backImages: imgs,
        // every tile in the list should flip every time the delay interval occurs
        alwaysTrigger: true,
        // top left to bottom right then back again
        triggerDelay: function(idx) {
            switch (idx) {
                case 0:
                    return reverse ? 2000 : 0;
                case 1:
                    return reverse ? 1500 : 500;
                case 2:
                    return 1000;
                case 3:
                    return reverse ? 1500 : 500;
                case 4:
                    return 1000;
                case 5:
                    return reverse ? 500 : 1500;
                case 6:
                    return 1000;
                case 7:
                    return reverse ? 500 : 1500;
                case 8: 
                    {
                        var val = reverse ? 0 : 2000;
                        reverse = !reverse;
                        return val;
                    }
                default:
                    return 3000;
            }
        }
    });

    //$(".appbar").applicationBar();
});

var lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
				{
				    fillColor: "rgba(220,220,220,0.5)",
				    strokeColor: "rgba(220,220,220,1)",
				    pointColor: "rgba(220,220,220,1)",
				    pointStrokeColor: "#fff",
				    data: [65, 59, 90, 81, 56, 55, 40]
				},
				{
				    fillColor: "rgba(151,187,205,0.5)",
				    strokeColor: "rgba(151,187,205,1)",
				    pointColor: "rgba(151,187,205,1)",
				    pointStrokeColor: "#fff",
				    data: [28, 48, 40, 19, 96, 27, 100]
				}
			]

}

var myLine = new Chart(document.getElementById("canvas").getContext("2d")).Line(lineChartData);

var pieData = [
				{
				    value: 30,
				    color: "#F38630"
				},
				{
				    value: 50,
				    color: "#E0E4CC"
				},
				{
				    value: 100,
				    color: "#69D2E7"
				}

			];

var myPie = new Chart(document.getElementById("canvaspie").getContext("2d")).Pie(pieData);