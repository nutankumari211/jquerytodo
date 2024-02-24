$(document).ready(function() {
    // Load tasks from local storage
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Display tasks
    tasks.forEach(function(task) {
        $('#taskList').append('<li>' + task.name + '<button class="deleteBtn">Delete</button></li>');
    });

    // Add task
    $('#addTaskBtn').click(function() {
        var taskName = $('#taskInput').val();
        if (taskName !== '') {
            $('#taskList').append('<li>' + taskName + '<button class="deleteBtn">Delete</button></li>');
            tasks.push({ name: taskName });
            localStorage.setItem('tasks', JSON.stringify(tasks));
            $('#taskInput').val('');
        }
    });

    // Mark task as completed
    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

    // Delete task
    $('#taskList').on('click', '.deleteBtn', function(e) {
        $(this).parent().remove();
        var taskIndex = $(this).parent().index();
        tasks.splice(taskIndex, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        e.stopPropagation();
    });
});
