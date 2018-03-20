$(function() {

    $("#returnButton").click(function() {
        location.href='/task';
    });

    $("#saveButton").click(function() {
        var taskId = $("#taskId").val();
        var type = $("input[name='typeOptions']:checked").val();
        var inputInfo = $("#inputInfo").val();
        var outputInfo = $("#outputInfo").val();
        var enabled = $("input[name='enabledOptions']:checked").val();
        var endecrypt = {
            "taskId": taskId,
            "type": type,
            "inputInfo": inputInfo,
            "outputInfo": outputInfo,
            "enabled": enabled
        };

        $.ajax({
            url: "/endecrypt/task",
            type: "POST",
            contentType: "application/json",
            dataType: "JSON",
            data: JSON.stringify(endecrypt),
            success: function() {
                alert("添加成功！");
                location.href='/task';
            }
        });
    });

    $("input#taskId").blur(function() {
        $.get(
            "/endecrypt/isExist/" + $("#taskId").val(),
            function(result) {
                if (result == true) {
                    $("#existInfo").text("该任务ID已存在！");
                } else {
                    $("#existInfo").text("");
                }
            }
        );
    });

});