$(function() {
    $(".change-devour").on("click", function(event) {
        const id = $(this).data("id")
        const newDevoured = $(this).data("devoured")

        var newDevouredState = {
            devour: newDevoured
        }

        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed devoured to", newDevoured)
                location.reload
            }
        )
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
})