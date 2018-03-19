$(function() {

    var taskId = $("#taskId").val();

    $(document).ready(function() {
        query();
    });

    $("#returnButton").click(function() {
        location.href='/task';
    });

    function query() {
        $.get(
            "/endecrypt/task/" + taskId,
            function(data) {
                $("input[name='typeOptions'][value=" + data.type + "]").attr("checked",true);
                $("#inputInfo").val(data.inputInfo);
                $("#outputInfo").val(data.outputInfo);
                $("input[name='enabledOptions'][value=" + data.enabled + "]").attr("checked",true);
            }
        );
    }

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
            type: "PUT",
            contentType: "application/json",
            dataType: "JSON",
            data: JSON.stringify(endecrypt),
            success: function() {
                alert("修改成功！");
                location.href='/task';
            }
        });
    });

});