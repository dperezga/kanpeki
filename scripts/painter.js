$( document ).ready(function() {
    console.log( "ready!" );
    $('.content').html(tasks_painter(tasks));
    initate_listeners();
});

function tasks_painter(tasks){
    var painted_tasks = '';
    for(i=0;i < tasks.length;i++){
        painted_tasks += task_creator(tasks[i], i);
    }
    return painted_tasks;
}

function task_creator(task, id)
{
    var finished_class = task.finished ? "finished" : "";
    var fave_class = task.fave ? "fave" : "";
    task = '<div id="'+id+'" class="task shadow '+finished_class+'">\
    <div class="checkbox logo '+finished_class+'"></div>\
    <div class="task_name">'+task.name+'</div>\
    <div class="status logo"></div>\
    <div class="logo star '+fave_class+'"></div>\
</div>';
return task
}

function initate_listeners () {
    var task_checkboxes = document.getElementsByClassName("checkbox");
    for (i = 0; i < task_checkboxes.length; i++) {
        task_checkboxes[i].addEventListener('click', function(){status_updater(this.parentElement)})
    }
    var task_favestar = document.getElementsByClassName("star");
    for (i = 0; i < task_favestar.length; i++) {
        task_favestar[i].addEventListener('click', function(){fave_updater(this)})
    }
}
function status_updater (target_task){
    var task_id = target_task.id;
    target_task.firstElementChild.classList.toggle("finished");
    target_task.classList.toggle("finished");
    tasks[task_id].finished = !tasks[task_id].finished;
    console.log(tasks[task_id]);
}

function fave_updater (target_task){
    var task_id = target_task.parentElement.id;
    target_task.classList.toggle("fave");
    tasks[task_id].fave = !tasks[task_id].fave;
    console.log(tasks[task_id]);
}