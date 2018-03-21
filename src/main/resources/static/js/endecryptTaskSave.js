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
            },
            error: function() {
                flash("#taskId", 8, 10, 100);
            }
        });
    });

    $("input#taskId")[0].oninput = function() {
        $.get(
            "/endecrypt/isExist/" + $("#taskId").val(),
            function(result) {
                if (result == true) {
                    $("#existInfo").text("该任务ID已存在！");
                    $(".form-group:first").addClass("has-error");
                } else {
                    $("#existInfo").text("");
                    $(".form-group:first").removeClass("has-error");
                }
            }
        );
    };

    function flash(obj, time, range, speed) {
            var $panel = $(obj);
            var offset = $panel.offset() - $panel.width();
            var x = offset.left;
            var y = offset.top;
            for (var i = 1; i <= time; i++) {
                if (i % 2 == 0) {
                    $panel.animate({left: '+' + range + 'px'}, speed);
                } else {
                    $panel.animate({left: '-' + range + 'px'}, speed);
                }
            }
            $panel.animate({left: 0}, speed);
            $panel.offset({top: y, left: x});
    }

});