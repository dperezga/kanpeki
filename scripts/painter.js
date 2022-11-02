$( document ).ready(function() {
    console.log( "ready!");
    main_painter();
    initate_listeners();
});

function main_painter(){
    var page_html = '';
    page_html += header_painter('main_page');
    page_html += tasks_painter(tasks);
    page_html += button_painter('new_task footer', 'Add New Task');
    $('body').html(page_html);
}

function header_painter(page, task) {
    var header;
    switch (page) {
        case 'task_menu':
            header = '<input type="text" class="task_name_input" placeholder="Task Name..." value="'+task.name+'">';
            return ('<div class="header">'+header+'<div class="home logo"></div></div>');
        case 'main_page':
            header = '<div class="title">All My Tasks</div>';
            return ('<div class="header">'+header+'<div class="home logo"></div></div>');
    };
}

function tasks_painter(tasks){
    var painted_tasks = '';
    for(i=0;i < tasks.length;i++){
        painted_tasks += single_task_painter(tasks[i]);
    }
    return ('<div class="content">'+painted_tasks+'</div>');
}

function single_task_painter(task)
{
    var finished_class = task.finished ? "finished" : "";
    var fave_class = task.fave ? "fave" : "";
    task = '<div id="'+task.id+'" class="task shadow '+finished_class+'">\
    <div class="checkbox logo '+finished_class+'"></div>\
    <div class="task_name">'+task.name+'</div>\
    <div class="task_desc">'+task.description+'</div>\
    <div class="status logo"></div>\
    <div class="logo star '+fave_class+'"></div>\
</div>';
return task
}

function button_painter (button_type, button_label) {
    var button;
    button = '<div class="button shadow '+button_type+'">\
    <div class="name">'+button_label+'</div>\
    </div>';
    return button;
}

function task_menu_painter(task = new taskinator()){
    var page_html = '';
    page_html += header_painter('task_menu', task);
    page_html += content_painter(task);
    $('body').html(page_html);
}

function content_painter(task) {
    var content_html = '';
    content_html += task_id_painter(task);
    content_html += task_status_painter();
    content_html += task_properties_painter(task);
    content_html += task_options_painter();
    return ('<div class="content">'+content_html+'</div>');
}

function task_id_painter(task) {
    return ('<div class="task_id">'+task.id+'</div>');
}

function task_status_painter() {
    var status_html = '';
    status_html += button_painter('done', 'Task Done');
    status_html += button_painter('stop','Stop Task');
    return ('<div class="task_status">'+status_html+'</div>');        
}

function task_properties_painter (task){
    var properties_html = '';
    properties_html += input_painter('description', 'Description', 'text', task.description);
    properties_html += input_painter('list', 'List', 'list', null);
    properties_html += input_painter('date_start', 'Start Date', 'date', task.start_date);
    properties_html += input_painter('date_end', 'Deadline', 'date', task.end_date);
    properties_html += countdown_painter(task);
    return ('<div class="task_properties">'+properties_html+'</div>');
}

function task_options_painter () {
    var options_html = '';
    options_html += button_painter('save', 'Save');
    options_html += button_painter('cancel','Cancel');
    options_html += button_painter('delete','Delete');
    return ('<div class="task_options">'+options_html+'</div>');
}
function input_painter (input_class, input_label, input_type, input_value = '') {
    return '<div class="'+input_class+'">\
    <div class="name">'+input_label+'</div>\
    <input value="'+input_value+'"type="'+input_type+'">\
</div>';
}

function countdown_painter (task) {
    return '<div class="countdown">\
    <div class="name">Remaining Time: '+countdown_calc(task)+' day(s)</div>\
</div>';
}