$(function() {
    var dbName = "longhu";
    var taskId = "514";
    var tableCode = "";

    $(document).ready(function() {
        query();
    });

    function query() {

    	$("#calcTable").html("");

    	$.post(
    		"/platform/api/in/one/webSql",
    		{
    			"dbName": dbName,
    			"sql": "SELECT calc_id, calc_info, enabled FROM endecrypt_calc_config LIMIT 10",
    			"isLimit": false
    		},
    		function(data) {
    			if(data.retCode == 2) {
    				alert(data.retDesc);
    			} else {
    				createShowingTable(data);
    			}
    		}
    	);
    }

    function createShowingTable(data) {
        tableCode = "<tbody><tr>";

        var fields = data.data.fields;

        for (var i = 0; i < fields.length; i++) {
            tableCode += "<th>" + fields[i] + "</th>";
        }
        tableCode += "<th>operation</th></tr>";

        var rows = data.data.rows;
        for (var i = 0; i < rows.length; i++) {
            tableCode += "<tr>";
            var value = rows[i].values;
            for (var j = 0; j < value.length; j++) {
                var v = value[j].replace(/\n/g, "<br>").replace(/ /g, "&nbsp;&nbsp;&nbsp;&nbsp;");
                tableCode += "<td>" + v + "</td>";
            }
            tableCode += "<td><button type='button' class='btn btn-primary btn-sm'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span></button>&nbsp;&nbsp;<button type='button' class='btn btn-danger btn-sm'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button></td></tr>";
        }
        tableCode += "</tbody>";

        $("#calcTable").append(tableCode);

    }

});