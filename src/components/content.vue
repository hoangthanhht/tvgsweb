<template>
   <div class="mt-3 chartjs-chart">
                    <canvas id="line-chart-report" height="380"></canvas>
    </div>
    
</template>

<script>
export default {

}
 <script type="text/javascript">
        !function (s) {
            "use strict";
            var a = function () {
                this.$body = s("body"), this.charts = []
            };
            a.prototype.respChart = function (e, r, t, o) {
                var n = e.get(0).getContext("2d"), i = s(e).parent();
                return function () {
                    var a;
                    switch (e.attr("width", s(i).width()), r) {
                        case"Line":
                            a = new Chart(n, {type: "line", data: t, options: o});
                            break;
                        case"Doughnut":
                            a = new Chart(n, {type: "doughnut", data: t, options: o});
                            break;
                        case"Pie":
                            a = new Chart(n, {type: "pie", data: t, options: o});
                            break;
                        case"Bar":
                            a = new Chart(n, {type: "bar", data: t, options: o});
                            break;
                        case"Radar":
                            a = new Chart(n, {type: "radar", data: t, options: o});
                            break;
                        case"PolarArea":
                            a = new Chart(n, {data: t, type: "polarArea", options: o})
                    }
                    return a
                }()
            }, a.prototype.initCharts = function () {
                var a = [];
                if (0 < s("#bar-chart-report").length) {
                    a.push(this.respChart(s("#bar-chart-report"), "Bar", {
                        labels: ["28\/03\/2021","29\/03\/2021","30\/03\/2021","31\/03\/2021","01\/04\/2021","02\/04\/2021","03\/04\/2021","04\/04\/2021"],
                        datasets: [
                            {
                                label: "Tổng báo cáo", backgroundColor: "#4a81d4", borderColor: "#4a81d4", hoverBackgroundColor: "#4a81d4", hoverBorderColor: "#4a81d4",
                                data: [11,12,13,23,21,19,19,5]
                            },
                            {
                                label: "Báo cáo ĐẠT", backgroundColor: "#e3eaef", borderColor: "#e3eaef", hoverBackgroundColor: "#e3eaef", hoverBorderColor: "#e3eaef",
                                data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59]
                            }
                        ]
                    }, {maintainAspectRatio: !1, legend: {display: !1}, scales: {yAxes: [{gridLines: {display: !1}, stacked: !1, ticks: {stepSize: 20}}], xAxes: [{barPercentage: .7, categoryPercentage: .5, stacked: !1, gridLines: {color: "rgba(0,0,0,0.01)"}}]}}))
                }
                if (0 < s("#line-chart-report").length) {
                    a.push(this.respChart(s("#line-chart-report"), "Line", {
                        labels: ["28\/03\/2021","29\/03\/2021","30\/03\/2021","31\/03\/2021","01\/04\/2021","02\/04\/2021","03\/04\/2021","04\/04\/2021"],
                        datasets: [
                            {
                                label: "Tổng báo cáo", backgroundColor: "rgba(26, 128, 156, 0.3)", borderColor: "#1abc9c",
                                data: [11,12,14,23,21,20,19,5]
                            },
                            {
                                label: "Báo cáo ĐẠT", fill: !0, backgroundColor: "transparent", borderColor: "#f1556c", borderDash: [5, 5],
                                data: [11,12,13,23,21,19,19,5]
                            }]
                    }, {
                        maintainAspectRatio: !1,
                        legend: {display: !1},
                        tooltips: {intersect: !1},
                        hover: {intersect: !0},
                        plugins: {filler: {propagate: !1}},
                        scales: {xAxes: [{reverse: !0, gridLines: {color: "rgba(0,0,0,0.05)"}}], yAxes: [{ticks: {stepSize: 10}, display: !0, borderDash: [5, 5], gridLines: {color: "rgba(0,0,0,0)", fontColor: "#fff"}}]}
                    }))
                }
                return a
            }, a.prototype.init = function () {
                var e = this;
                Chart.defaults.global.defaultFontFamily = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif', e.charts = this.initCharts(), s(window).on("resize", function (a) {
                    s.each(e.charts, function (a, e) {
                        try {
                            e.destroy()
                        } catch (a) {
                        }
                    }), e.charts = e.initCharts()
                })
            }, s.Dashboard3 = new a, s.Dashboard3.Constructor = a
        }
        (window.jQuery), function (a) {
            "use strict";
            window.jQuery.Dashboard3.init()
        }();
    </script>
</script>

<style>

</style>