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

    $("#insertButton").click(function() {
        location.href='/task/insert';
    });

    $("tbody").on('click', ".updateButton", function() {
        var updateTaskId = $(this).parent().prev().prev().prev().prev().prev().prev().prev().html();
        // var updateType = $(this).parent().prev().prev().prev().prev().prev().prev().html();
        // var updateInputInfo = $(this).parent().prev().prev().prev().prev().prev().html();
        // var updateOutputInfo = $(this).parent().prev().prev().prev().prev().html();
        // var updateEnabled = $(this).parent().prev().prev().prev().html();
        // var updateEndecrypt = {
        //     "updateTaskId": updateTaskId,
        //     "updateType": updateType,
        //     "updateInputInfo": updateInputInfo,
        //     "updateOutputInfo": updateOutputInfo,
        //     "updateEnabled": updateEnabled
        // };

        location.href='/task/update?taskId=' + updateTaskId;

        // $("#taskId").val(updateTaskId);
        // $("input[name='typeOptions'][value=" + updateType + "]").attr("checked",true);
        // $("#inputInfo").val(updateinputInfo);
        // $("#outputInfo").val(updateoutputInfo);
        // $("input[name='enabledOptions'][value=" + updateEnabled + "]").attr("checked",true);

    });

    $("tbody").on('click', ".removeButton", function() {
        var removeTaskId = $(this).parent().prev().prev().prev().prev().prev().prev().prev().html();
        $.ajax({
            url: "/endecrypt/task/" + removeTaskId,
            type: "delete"
        });
        alert("删除成功！");
        query();
    });

    function query() {

    	$("#taskTable").html("");
        tableCode = "";

    	$.get(
    		"/endecrypt/tasks",
    		function(data) {

                for (var i = 0; i < data.length; i++) {
                    tableCode += "<tr><td class = 'taskId'>" + data[i].taskId + "</td>";
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

                tableCode += "<tr><td class = 'taskId'>" + data.taskId + "</td>";
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