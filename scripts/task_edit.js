function task_edit(){
    var task_id=$(this).parent().attr('id');
    var current_task = tasks.find(task => task.id == task_id);
    $( document ).ready(function() {
        console.log( "ready!" );
        task_menu_painter(current_task);
    });
}