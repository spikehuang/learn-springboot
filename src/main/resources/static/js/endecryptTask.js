$(function() {

    var tableCode = "";
    var taskId = "";

    $(document).ready(function() {
        query();
    });

    $("#queryButton").click(function() {
        taskId = $("#taskId").val();
        if (taskId == "") {
            query();
        } else {
            queryOne(taskId);
        }
    });

    // $(".btn").on('click', function() {
    //     alert("update button");
    // });

    function query() {

    	$("#taskTable").html("");
        tableCode = "";

    	$.get(
    		"/endecrypt/tasks",
    		function(data) {

                for (var i = 0; i < data.length; i++) {
                    tableCode += "<tr><td>" + data[i].taskId + "</td>";
                    tableCode += "<td>" + data[i].type + "</td>";
                    tableCode += "<td>" + data[i].inputInfo + "</td>";
                    tableCode += "<td>" + data[i].outputInfo + "</td>";
                    tableCode += "<td>" + data[i].enabled + "</td>";
                    tableCode += "<td>" + data[i].createTime + "</td>";
                    tableCode += "<td>" + data[i].updateTime + "</td><td><button type='button' class='btn btn-primary btn-xs updateButton'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span></button>&nbsp;&nbsp;<button type='button' class='btn btn-danger btn-xs removeButton'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button></td></tr>";
                }

                $("#taskTable").html(tableCode);
    		}
    	);
    }

    function queryOne(taskId) {

    	$("#taskTable").html("");
    	tableCode = "";

    	$.get(
    		"/endecrypt/task/" + taskId,
    		function(data) {

                tableCode += "<tr><td>" + data.taskId + "</td>";
                tableCode += "<td>" + data.type + "</td>";
                tableCode += "<td>" + data.inputInfo + "</td>";
                tableCode += "<td>" + data.outputInfo + "</td>";
                tableCode += "<td>" + data.enabled + "</td>";
                tableCode += "<td>" + data.createTime + "</td>";
                tableCode += "<td>" + data.updateTime + "</td><td><button type='button' class='btn btn-primary btn-xs updateButton'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span></button>&nbsp;&nbsp;<button type='button' class='btn btn-danger btn-xs removeButton'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button></td></tr>";

                $("#taskTable").html(tableCode);
    		}
    	);
    }

});