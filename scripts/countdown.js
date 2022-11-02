function countdown_calc(task) {
    if (!task.end_date)
        return(0);
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    var start_time = new Date().getTime();
    var end_time = new Date(task.end_date).getTime();
    var diff = end_time - start_time;
    return (Math.round(diff / day));
}