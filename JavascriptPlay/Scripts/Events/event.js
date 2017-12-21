scriptPlay.second.data.events = (function () {

    var spSecond = scriptPlay.second;

    function showTemplateView(event, model) {
        if (scriptPlay.viewModel && scriptPlay.viewModel.id) {
            hideTemplateView(event, model, function () {
                showTemplateView(event, model)
            });
        }
        else {
            var templateId = "viewTemplate";
            scriptPlay.templateView.table = $("<tr><td colspan=2 style='padding:0px;'></td></tr>");
            scriptPlay.templateView.tr = $(event.target).closest("tr");
            scriptPlay.templateView.tr.find("button:hidden").show().prev().hide();
            scriptPlay.viewModel = scriptPlay.utility.clone(model.data);
            $(scriptPlay.templateView.table).insertAfter(scriptPlay.templateView.tr);
            $(scriptPlay.templateView.table).find("td").first().append($("#" + templateId));

            scriptPlay.utility.animateOpen(templateId);
        }
    }

    function showTemplateEdit(event, model) {
        if (scriptPlay.editModel && scriptPlay.editModel.id) {
            hideTemplateEdit(event, model, function () {
                showTemplateEdit(event, model)
            });
        }
        else {
            var templateId = "editTemplate";
            scriptPlay.templateEdit.table = $("<tr><td colspan=2 style='padding:0px;'></td></tr>");
            scriptPlay.templateEdit.tr = $(event.target).closest("tr");
            $(".btnEditUser").attr('disabled', true);
            $(scriptPlay.templateEdit.tr).find(".btnViewUser").attr('disabled', true);            
            scriptPlay.editModel = scriptPlay.utility.clone(model.data);
            $(scriptPlay.templateEdit.table).insertAfter(scriptPlay.templateEdit.tr);
            $(scriptPlay.templateEdit.table).find("td").first().append($("#" + templateId));

            scriptPlay.utility.animateOpen(templateId);
        }
    }

    function removeTemplate(templateId) {
        if (templateId == "viewTemplate" && scriptPlay.viewModel) {
            scriptPlay.templateView.tr.removeClass("warning").find("button:hidden").show().next().hide();            
            scriptPlay.templateView.table = null;
            scriptPlay.templateView.tr = null;
            scriptPlay.viewModel = null;
        }

        else if (templateId == "editTemplate" && scriptPlay.editModel)
        {
            $(scriptPlay.templateEdit.tr).find(".btnViewUser").attr('disabled', false);
            $(".btnEditUser").attr('disabled', false);           
            scriptPlay.templateEdit.table = null;
            scriptPlay.templateEdit.tr = null;
            scriptPlay.editModel = null;
        }

    }

    function hideTemplateView(event, model, callback) {
        var templateId = "viewTemplate";
        scriptPlay.utility.animateClose(templateId, function () {
            removeTemplate(templateId);

            if (callback) {
                callback();
            }
        });
    }

    function hideTemplateEdit(event, model, callback) {
        var templateId = "editTemplate";
        scriptPlay.utility.animateClose(templateId, function () {
            removeTemplate(templateId);

            if (callback) {
                callback();
            }
        });
    }

    function cancelEdit(event, model)
    {
        var $form = $("#editForm");
        scriptPlay.utility.reset($form);
        hideTemplateEdit(event, model, function () {
            removeTemplate("editTemplate")
        });

    }

    function updateEdit(event, model)
    {
        hideTemplateEdit(event, model, function () {
            removeTemplate("editTemplate")
        });
    }


    return {
        showTemplateView: showTemplateView,
        showTemplateEdit: showTemplateEdit,
        hideTemplateView: hideTemplateView,
        hideTemplateEdit: hideTemplateEdit,
        cancelEdit: cancelEdit,
        updateEdit: updateEdit
    }
}(scriptPlay.second || {}));