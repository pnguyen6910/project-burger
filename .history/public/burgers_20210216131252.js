$(function() {
    $(".change-devour").on("click", function(event) {
        const id = $(this).data("id")
        const devoured = $(this).data("devoured")

        var newDevoured = {
            devour = devoured
        }

        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newDevoured
        }).then(
            function() {
                console.log("changed sleep to", newDevoured)
                location.reload
            }
        )
    })
})

$(".create-form").on("submit", function(event) {
    event.preventDefault()

    var newBurger = {
        name: $("#bu").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
    }

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            console.log("created new burger")
            location.reload();
        }
    )
})