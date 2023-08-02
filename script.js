/**
 * @method     :- init
 * author      :- Kawsar  Bin Siraj
 * created_by  :- Kawsar Bin Siraj
 * modified_by :- {{}|any}
 * created_at  :- 02/08/2023 16:41:42
 * modified_at :- {{}|any}
 * description :- A method is simply a “chunk” of code.
 */

$(function () {
    $(".nav-item").hover(
        function () {
            let left = $(this).position().left;
            let w = $(this).width();
            $(".collapse").css({
                "--opacity": 1,
                "--left": Math.round(left) + "px",
                "--width": Math.round(w) + "px",
            });
        },
        function () {
            $(".collapse").css({
                "--opacity": 0,
            });
        }
    );
});
