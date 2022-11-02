function countdown_calc(task) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    var start_time = new Date().getTime();
    console.log('Today ' + start_time);
    console.log('Start ' + new Date(task.start_date).getTime(day));
    var end_time = new Date(task.end_date).getTime();
    var diff = end_time - start_time;
    return (Math.round(diff / day));
}