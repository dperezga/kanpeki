function initate_listeners () {
    $(document).on('click','.star',fave_updater);
    $(document).on('click','.checkbox',status_updater);
    $(document).on('click','.new_task', new_task);
    $(document).on('click','.task_name', task_edit);
    $(document).on('click','.save', save_task);
    $(document).on('click','.home', main_painter);
    $(document).on('click','.cancel', main_painter);
    $(document).on('click','.delete', delete_task);
}

function status_updater (target_task){
    var task_id=$(this).parent().attr('id');
    var current_task = tasks.find(task => task.id === task_id);
    $(this).toggleClass("finished");
    $(this).parent().toggleClass("finished");
    current_task.finished = !current_task.finished;
}

function fave_updater (target_task){
    var task_id=$(this).parent().attr('id');
    var current_task = tasks.find(task => task.id === task_id);
    $(this).toggleClass('fave');
    current_task['fave']=!current_task['fave'];
}

function save_task () {
    var task_id = $('.task_id').text();
    var current_task = tasks.find(task => task.id === task_id);
    if (!current_task){
        current_task = new taskinator($('.task_name_input').val(), $('.description > input').val(), false, false, '', '');
        tasks.push(current_task);
    };
    console.log(current_task);
    current_task.name = $('.task_name_input').val();
    current_task.description = $('.description > input').val();
    current_task.start_date = $('.date_start > input').val();
    current_task.end_date = $('.date_end > input').val();
    main_painter();
}
function delete_task() {
    var task_id = $('.task_id').text();
    tasks = tasks.filter(task => task.id != task_id);
    main_painter();
}