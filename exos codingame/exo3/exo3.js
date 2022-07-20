checkBox = document
  .getElementById("masquer-paroles")
  .addEventListener("click", (event) => {
    if (event.target.checked) {
      $("#paroles").toggle();
      $("#parole").contents().last().replaceWith(" Afficher les paroles");
    } else {
      $("#paroles").show();
      $("#parole").contents().last().replaceWith(" Masquer les paroles");
    }
  });


checkBox1 = document.getElementById('masquer-refrains').addEventListener('click', event => {
    if (event.target.checked) {
        $(".contenu").hide();
        $(".definition").show();
        $('#refrain').contents().last().replaceWith(' Afficher les refrains');
        $(document).ready(function() {
            $(".definition").mouseenter(function() {
                $(".contenu").show(".contenu");
            });

            $(".definition").mouseleave(function() {
                $(".contenu").hide(".contenu");
            })
        })
    }

    else {        
        $(".contenu").show();
        $(".definition").hide();
        $('#refrain').contents().last().replaceWith(' Masquer les refrains');
    }
});

/*$(document).ready(function () {
            [].forEach.call(document.querySelectorAll(".contenu1"), function () {
                $(".definition").mouseenter(function () {
                    $(".contenu1").show(".contenu1");
            });
            });
        
            [].forEach.call(document.querySelectorAll(".contenu1"), function () {
                $(".definition").mouseleave(function() {
                    $(".contenu1").hide(".contenu1");
                })
            });
        });*/    