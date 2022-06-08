//show statistic month
var statisticMonth = document.querySelector(".statistic-month");
var statisticDay = document.querySelector(".statistic-day");
var btnFilterMonth = document.querySelector(".filter-month");

btnFilterMonth.addEventListener('click', function () {

    if (statisticMonth.style.display === 'none') {
        statisticDay.style.display = 'none';
        statisticMonth.style.display = 'block';
    } else {
        statisticMonth.style.display = 'none';
    }
});
