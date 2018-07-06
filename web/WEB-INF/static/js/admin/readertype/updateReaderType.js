$(function () {

    $("#updateType").click(function () {
        if (!validUpdateReaderType()) {
            return;
        }
        var postData = "id=" + $.trim($("#readerTypeId").val())
            + "&maxNum=" + $.trim($("#maxNum").val())
            + "&bday=" + $.trim($("#bday").val())
            + "&penalty=" + $.trim($("#penalty").val())
            + "&name=" + $.trim($("#readerTypeName").val())
            + "&renewDays=" + $.trim($("#renewDays").val());
        $.post("/admin/readerTypeManageController_updateReaderType.action",postData,function (data) {
            if (data == 1) {
                $("#updateModal").modal("hide");//关闭模糊框
                showInfo("修改成功");

            } else {
                $("#updateinfo").modal("hide");//关闭模糊框
                showInfo("修改失败");
            }
        },"json");
    });

    $('#modal_info').on('hide.bs.modal', function () {//提示模糊框隐藏时候触发
        location.reload();  	//刷新当前页面
    });

});


function showInfo(msg) {
    $("#div_info").text(msg);
    $("#modal_info").modal('show');
}

function updateReaderType(id) {
    $.post("/admin/readerTypeManageController_getReaderTypeById.action","id="+id,function (data) {
        $("#readerTypeId").val(data.id);
        $("#readerTypeName").val(data.name);
        $("#maxNum").val(data.maxNum);
        $("#bday").val(data.bday);
        $("#penalty").val(data.penalty);
        $("#renewDays").val(data.renewDays);
        $("#updateModal").modal("show");
    },"json")
}

function validUpdateReaderType() {
    var flag = true;
    var reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
    var typeName = $.trim($("#readerTypeName").val());
    if (typeName == "") {
        $('#readerTypeName').parent().addClass("has-error");
        $('#readerTypeName').next().text("请输入读者类型名称");
        $("#readerTypeName").next().show();
        flag = false;
    } else if (!reg.test(typeName)) {
        $('#readerTypeName').parent().addClass("has-error");
        $('#readerTypeName').next().text("读者类型名称必须为中文");
        $("#readerTypeName").next().show();
        flag = false;
    } else {
        $('#readerTypeName').parent().removeClass("has-error");
        $('#readerTypeName').next().text("");
        $("#readerTypeName").next().hide();
    }

    var maxNum = $.trim($("#maxNum").val());
    if (maxNum == "") {
        $('#maxNum').parent().addClass("has-error");
        $('#maxNum').next().text("请输入最大借阅数量");
        $("#maxNum").next().show();
        flag = false;
    } else if (maxNum <= 0 || maxNum != parseInt(maxNum)) {
        $('#maxNum').parent().addClass("has-error");
        $('#maxNum').next().text("最大借阅数量必须为正整数");
        $("#maxNum").next().show();
        flag = false;
    } else {
        $('#maxNum').parent().removeClass("has-error");
        $('#maxNum').next().text("");
        $("#maxNum").next().hide();
    }


    var bday = $.trim($("#bday").val());
    if (bday == "") {
        $('#bday').parent().addClass("has-error");
        $('#bday').next().text("请输入最大借阅天数");
        $("#bday").next().show();
        flag = false;
    } else if (bday <= 0 || bday != parseInt(bday)) {
        $('#bday').parent().addClass("has-error");
        $('#bday').next().text("最大借阅天数必须为正整数");
        $("#bday").next().show();
        flag = false;
    } else {
        $('#bday').parent().removeClass("has-error");
        $('#bday').next().text("");
        $("#bday").next().hide();
    }


    var penalty = $.trim($("#penalty").val());
    if (penalty == "") {
        $('#penalty').parent().addClass("has-error");
        $('#penalty').next().text("请输入逾期每日罚金");
        $("#penalty").next().show();
        flag = false;
    } else if (penalty <= 0 || penalty != parseInt(penalty)) {
        $('#penalty').parent().addClass("has-error");
        $('#penalty').next().text("逾期每日罚金必须为正整数");
        $("#penalty").next().show();
        flag = false;
    } else {
        $('#penalty').parent().removeClass("has-error");
        $('#penalty').next().text("");
        $("#penalty").next().hide();
    }


    var renewDays = $.trim($("#renewDays").val());
    if (renewDays == "") {
        $('#renewDays').parent().addClass("has-error");
        $('#renewDays').next().text("请输入续借天数");
        $("#renewDays").next().show();
        flag = false;
    } else if (renewDays <= 0 || renewDays != parseInt(renewDays)) {
        $('#renewDays').parent().addClass("has-error");
        $('#renewDays').next().text("续借天数必须为正整数");
        $("#renewDays").next().show();
        flag = false;
    } else {
        $('#renewDays').parent().removeClass("has-error");
        $('#renewDays').next().text("");
        $("#renewDays").next().hide();
    }
    return flag;
}