scriptPlay.app = (function () {

    var sp = scriptPlay;

    function init() {
        showModal();

        //sp.first.name = sp.service.getName("Hitesh");
        //alert("Init Called");

        sp.service.getUsers().done(function (data) {
            sp.second.data = data;
        }).fail(function (jqXHR, status, error) {

        });

        bindData();
        $('#name').css("display", "block");
        hideModal();
    }

    function bindData()
    {
        var events = sp.second.data.events;

        rivets.bind($('#name'), {
            script: scriptPlay,
            events: events
        });
    }

    function showModal()
    {
        $('#modalPage').modal();
        console.log("showmodal called");
    }

    function hideModal() {
        $('#modalPage').modal('hide');
        console.log("hidemodal called");
    }
    return {
        init: init
    }
}(scriptPlay ||  {}));
