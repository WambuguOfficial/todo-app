var tasks = [];
function createTask() {
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var date = document.getElementById("date").value;

    var task = {
        title: title,
        description: description,
        date: date,
        completed: false
    };
     
     tasks.push(task);

    
     document.getElementById("title").value = ("");
     document.getElementById("description").value = ("");
     document.getElementById("date").value = ("");
 
    
     displayTasks();
 } 

function displayTasks() {
    document.getElementById("task-list").innerHTML = ("");

    for (var i = 0; i < tasks.length; i++) {
    
        var task = tasks[i];

    
        var row = document.createElement("tr");

    
        var titleCell = document.createElement("td");
        titleCell.innerHTML = task.title;

        var descriptionCell = document.createElement("td");
        descriptionCell.innerHTML = task.description;

        var dateCell = document.createElement("td");
        dateCell.innerHTML = task.date;

        var stateCell = document.createElement("td");
        stateCell.innerHTML = "state";

        
        row.appendChild(titleCell);
        row.appendChild(descriptionCell);
        row.appendChild(dateCell);
        row.appendChild(stateCell);

    
        document.getElementById("task-list").appendChild(row);
    }
}


document.getElementById("create-form").addEventListener("submit", function(event) {
    event.preventDefault};
