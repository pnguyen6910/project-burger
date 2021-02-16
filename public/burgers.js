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