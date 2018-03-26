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
        var updateTaskId = $(this).parent().siblings(".taskId").html();
        location.href='/task/update/' + updateTaskId;
    });

    $("tbody").on('click', ".removeButton", function() {
        var removeTaskId = $(this).parent().siblings(".taskId").html();

        $.confirm({
            type: "blue",
            title: "系统提示",
            content: "确定删除任务[ " + removeTaskId + " ]吗？",
            icon:'glyphicon glyphicon-question-sign',
            buttons: {
                confirm: {
                	text: "确认",
                	btnClass: "btn-blue",
                	action: function() {
                        $.ajax({
                            url: "/endecrypt/task/" + removeTaskId,
                            type: "delete"
                        });
                        $.alert({
                            type: "green",
                            title: "系统提示",
                            content: "删除任务[ " + removeTaskId + " ]成功！",
                            icon:'glyphicon glyphicon-ok-sign',
                            buttons: {
                                OK: {
                                    text: "确认",
                                    action : function() {
                                        query();
                                    }
                                }
                            }
                        });
                    }
                },
                cancel: {
                    text: "取消"
                }
            }
        });
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

        $.get(
            "/endecrypt/isExist/" + taskId,
            function(result) {
                if (result == false) {
                    $.alert({
                        type:'red',
                        title: '系统提示',
                        content: '未查找到该任务ID！',
                        icon:'glyphicon glyphicon-alert',
                        buttons: {
                            OK: {
                                text: "确认"
                            }
                        }
                    });
                } else {

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
            }
        );

    }

});