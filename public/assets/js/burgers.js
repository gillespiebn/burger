$(function() {
    $(".devourStatus").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newDevour");

        var newDevourState = {
            devour: newDevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log("changed devour to ", newDevour);
                location.reload();
            }
        );
    });
    $(".createForm").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("New burger created");
            }
        );
    });

    $(".devourBurger").on("click", function(event) {
        var id = $(this).data("id");

            $.ajax("/api/burgers/" + id, {
            TYPE: "post",

            }
        )
    })
})