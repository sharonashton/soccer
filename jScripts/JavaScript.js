////API GOOGLE
////להטמעת סרטון מיוטיוב
function bringVideo() {
/*    מחפש ביוטיוב את הסרטון שברצוננו להטמיע*/
    const searchTerm = ["soccer rules for kids | basic rules | episode 1"];
   /* מפתח הAPI*/
    const YOUTUBE_API_KEY = "AIzaSyAvy7xdIt8ZU4hxs5Wt5LcLg5g1D4Ah6_o";
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${searchTerm}&key=${YOUTUBE_API_KEY}`;
    fetch(url) 
    fetch(url)
        .then(response => response.json())
        .then(data => {
           /* מציג בתגית הiframe את הסרטון הראשון שעולה בחיפוש לפי מה שהגדרנו*/
            document.querySelector(".iframeClass").src = `https://www.youtube.com/embed/${data.items[0].id.videoId}?start=132&end=212&rel=0&loop=1`;
        });
}






$(document).ready(function () {
 
   /* כפתור הוראות*/
    $("#gameInfob").on({
        /*במעבר עכבר*/
        mouseenter: function () {
            /*הכפתור יהיה כהה יותר*/
            $(this).css("background-image", "url('../images/left-dark.png')");
            /*  הפונט יגדל*/
            $("#gameinfo").css("font-size", "18pt");
        },
         /*  ביציאה ממעבר עכבר*/
         mouseleave: function () {
            /*הכפתור יחזור לעצמו*/
            $(this).css("background-image", "url('../images/infoB.png')");
                /*הפונט יחזור לעצמו*/
                $("#gameinfo").css("font-size", "16pt");
        },
        click: function () {
            $(".popup").css("visibility", "visible");
        }
    });

    /*  לחלונית הוראות- כפתור המשך*/
    $("#continueB").on({
        /*במעבר עכבר*/
        mouseenter: function () {
            /*הכפתור יהיה כהה יותר*/
            $(this).css("background-image", "url('../images/continue-dark.png')");
            /*  הפונט יגדל*/
            $("#continueB p").css("font-size", "18pt");
        },
        /*  ביציאה ממעבר עכבר*/
        mouseleave: function () {
            /*הכפתור יחזור לעצמו*/
            $(this).css("background-image", "url(../images/continue.png)");
            /*הפונט יחזור לעצמו*/
            $("#continueB p").css("font-size", "16pt");
        },
        click: function () {
            $(".popup").css("visibility", "hidden");
        }

    });


    /* כפתור לסרטון*/
    $("#goVideob").on({
        /*במעבר עכבר*/
        mouseenter: function () {
            /*הכפתור יהיה כהה יותר*/
            $(this).css("background-image", "url('../images/right-dark.png')");
            /*  הפונט יגדל*/
            $("#goVideo").css("font-size", "18pt");
        },
        /*  ביציאה ממעבר עכבר*/
        mouseleave: function () {
            /*הכפתור יחזור לעצמו*/
            $(this).css("background-image", "url('../images/videoB.png')");
            /*הפונט יחזור לעצמו*/
            $("#goVideo").css("font-size", "16pt");
        },
          click: function () {
            $(".popup2").css("visibility", "visible");
        }


    });


    /*  לחלונית הוראות- כפתור המשך*/
    $("#continueB2").on({
        /*במעבר עכבר*/
        mouseenter: function () {
            /*הכפתור יהיה כהה יותר*/
            $(this).css("background-image", "url('../images/continue-dark.png')");
            /*  הפונט יגדל*/
            $("#continueB2 p").css("font-size", "18pt");
        },
        /*  ביציאה ממעבר עכבר*/
        mouseleave: function () {
            /*הכפתור יחזור לעצמו*/
            $(this).css("background-image", "url(../images/continue.png)");
            /*הפונט יחזור לעצמו*/
            $("#continueB2 p").css("font-size", "16pt");
        },
        click: function () {
            $(".popup2").css("visibility", "hidden");
        }

    });





    /* פונקציות נקודות*/
    /* משתנים שסופרים את מספר הלחיצות על כל נקודה*/
    var b1click = 0;//קו שוער
    var b2click = 0;//נקודת המרכז
    var b3click = 0;//קו אורךת 
    var b4click = 0;//קרן
    var b5click = 0;//קו אמצע
    var b6click = 0;//שער
    var b7click = 0;//רחבת ה16
    var b8click = 0;//קשת רחבת העונשין
    var b9click = 0;//נקודת העונשין
    var b10click = 0;//


    ///*קו השוער*/
    $("#b1").on({
        /*בלחיצה על כפתור קו שוער*/
        click: function () {
       
            /*תעלה את הלחיצה ב1*/
            b1click = b1click + 1;
            /* תציג את שם הנקודה*/
            $("#name1").css("visibility", "visible");
            /*  הסימונים יופיעו על המסך*/
            $("#kavShoer").css("visibility", "visible");
            /*  בלחיצה שניה על הנקודה היא תתאפס*/
            if (b1click == 2) {
                b1click = 0;
             
            }
           
        },
        /*במעבר עכבר*/
        mouseenter: function () {
            /* כל עוד לא התבצעה לחיצה מעבר העכבר יעבוד*/
            if (b1click == 0) {
                /*שם הכפתחור יופיע*/
                $("#name1").css("visibility", "visible");
                /*  הסימונים יופיעו על המסך*/
                $("#kavShoer").css("visibility", "visible");
            }
        },

        /*  ביציאה ממעבר עכבר*/
        mouseleave: function () {
            if (b1click == 0) {
                /*הכפתור יחזור לעצמו*/
                $("#name1").css("visibility", "hidden");

                /*  הסימונים יעלמו*/
                $("#kavShoer").css("visibility", "hidden");
            }
        }
    });




    ///*נקודת המרכז*/

    $("#b2").on({
        /*בלחיצה על כפתור */
        click: function () {

            /*תעלה את הלחיצה ב1*/
            b2click = b2click + 1;
            /* תציג את שם הנקודה*/
            $("#name2").css("visibility", "visible");
            /*  הסימונים יופיעו על המסך*/
            $("#center").css("visibility", "visible");
            /*  בלחיצה שניה על הנקודה היא תתאפס*/
            if (b2click == 2) {
                b2click = 0;
            }
            },
  
        /*במעבר עכבר*/
        mouseenter: function () {
            /* כל עוד לא התבצעה לחיצה מעבר העכבר יעבוד*/
            if (b2click == 0) {
                /*שם הכפתחור יופיע*/
                $("#name2").css("visibility", "visible");
                /*  הסימונים יופיעו על המסך*/
                $("#center").css("visibility", "visible");
            }
        },


      /*  ביציאה ממעבר עכבר*/
        mouseleave: function () {
            if (b2click == 0) {
                /*הכפתור יחזור לעצמו*/
                $("#name2").css("visibility", "hidden");

               /*  הסימונים יעלמו*/
                $("#center").css("visibility", "hidden");
            }
        }
    });




    /*  קו האורך*/

    $("#b3").on({
        /*בלחיצה על כפתור*/
        click: function () {

            /*תעלה את הלחיצה ב1*/
            b3click = b3click + 1;
            /* תציג את שם הנקודה*/
            $("#name3").css("visibility", "visible");
            /*  הסימונים יופיעו על המסך*/
            $("#kavOrech").css("visibility", "visible");
            /*  בלחיצה שניה על הנקודה היא תתאפס*/
            if (b3click == 2) {
                b3click = 0;
            }
        },

        /*במעבר עכבר*/
        mouseenter: function () {
            /* כל עוד לא התבצעה לחיצה מעבר העכבר יעבוד*/
            if (b3click == 0) {
                /*שם הכפתחור יופיע*/
                $("#name3").css("visibility", "visible");
                /*  הסימונים יופיעו על המסך*/
                $("#kavOrech").css("visibility", "visible");
            }
        },


        /*  ביציאה ממעבר עכבר*/
        mouseleave: function () {
            if (b3click == 0) {
                /*הכפתור יחזור לעצמו*/
                $("#name3").css("visibility", "hidden");

                /*  הסימונים יעלמו*/
                $("#kavOrech").css("visibility", "hidden");
            }
        }
    });


    /*  קרן*/

    $("#b4").on({
        /*בלחיצה על כפתור*/
        click: function () {

            /*תעלה את הלחיצה ב1*/
            b4click = b4click + 1;
            /* תציג את שם הנקודה*/
            $("#name4").css("visibility", "visible");
            /*  הסימונים יופיעו על המסך*/
            $("#keren").css("visibility", "visible");
            /*  בלחיצה שניה על הנקודה היא תתאפס*/
            if (b4click == 2) {
                b4click = 0;
            }
        },

        /*במעבר עכבר*/
        mouseenter: function () {
            /* כל עוד לא התבצעה לחיצה מעבר העכבר יעבוד*/
            if (b4click == 0) {
                /*שם הכפתחור יופיע*/
                $("#name4").css("visibility", "visible");
                /*  הסימונים יופיעו על המסך*/
                $("#keren").css("visibility", "visible");
            }
        },


        /*  ביציאה ממעבר עכבר*/
        mouseleave: function () {
            if (b4click == 0) {
                /*הכפתור יחזור לעצמו*/
                $("#name4").css("visibility", "hidden");

                /*  הסימונים יעלמו*/
                $("#keren").css("visibility", "hidden");
            }
        }
    });



    /*קו האמצע*/
 
    $("#b5").on({
        /*בלחיצה על כפתור*/
        click: function () {

            /*תעלה את הלחיצה ב1*/
            b5click = b5click + 1;
            /* תציג את שם הנקודה*/
            $("#name5").css("visibility", "visible");
            /*  הסימונים יופיעו על המסך*/
            $("#centerLine").css("visibility", "visible");
            /*  בלחיצה שניה על הנקודה היא תתאפס*/
            if (b5click == 2) {
                b5click = 0;
            }
        },

        /*במעבר עכבר*/
        mouseenter: function () {
            /* כל עוד לא התבצעה לחיצה מעבר העכבר יעבוד*/
            if (b5click == 0) {
                /*שם הכפתחור יופיע*/
                $("#name5").css("visibility", "visible");
                /*  הסימונים יופיעו על המסך*/
                $("#centerLine").css("visibility", "visible");
            }
        },


        /*  ביציאה ממעבר עכבר*/
        mouseleave: function () {
            if (b5click == 0) {
                /*הכפתור יחזור לעצמו*/
                $("#name5").css("visibility", "hidden");

                /*  הסימונים יעלמו*/
                $("#centerLine").css("visibility", "hidden");
            }
        }
    });


     /*שער*/

    $("#b6").on({
        /*בלחיצה על כפתור */
        click: function () {

            /*תעלה את הלחיצה ב1*/
            b6click = b6click + 1;
            /* תציג את שם הנקודה*/
            $("#name6").css("visibility", "visible");
            /*  הסימונים יופיעו על המסך*/
            $("#shaar").css("visibility", "visible");
            /*  בלחיצה שניה על הנקודה היא תתאפס*/
            if (b6click == 2) {
                b6click = 0;
            }
        },

        /*במעבר עכבר*/
        mouseenter: function () {
            /* כל עוד לא התבצעה לחיצה מעבר העכבר יעבוד*/
            if (b6click == 0) {
                /*שם הכפתחור יופיע*/
                $("#name6").css("visibility", "visible");
                /*  הסימונים יופיעו על המסך*/
                $("#shaar").css("visibility", "visible");
            }
        },


        /*  ביציאה ממעבר עכבר*/
        mouseleave: function () {
            if (b6click == 0) {
                /*הכפתור יחזור לעצמו*/
                $("#name6").css("visibility", "hidden");

                /*  הסימונים יעלמו*/
                $("#shaar").css("visibility", "hidden");
            }
        }
    });

    /*רחבת ה-16*/
    $("#b7").on({
        /*בלחיצה על כפתור */
        click: function () {

            /*תעלה את הלחיצה ב1*/
            b7click = b7click + 1;
            /* תציג את שם הנקודה*/
            $("#name7").css("visibility", "visible");
            /*  הסימונים יופיעו על המסך*/
            $("#rahavat-16").css("visibility", "visible");
            /*  בלחיצה שניה על הנקודה היא תתאפס*/
            if (b7click == 2) {
                b7click = 0;
            }
        },

        /*במעבר עכבר*/
        mouseenter: function () {
            /* כל עוד לא התבצעה לחיצה מעבר העכבר יעבוד*/
            if (b7click == 0) {
                /*שם הכפתחור יופיע*/
                $("#name7").css("visibility", "visible");
                /*  הסימונים יופיעו על המסך*/
                $("#rahavat-16").css("visibility", "visible");
            }
        },


        /*  ביציאה ממעבר עכבר*/
        mouseleave: function () {
            if (b7click == 0) {
                /*הכפתור יחזור לעצמו*/
                $("#name7").css("visibility", "hidden");

                /*  הסימונים יעלמו*/
                $("#rahavat-16").css("visibility", "hidden");
            }
        }
    });

 /*  קשת רחבת העונשין*/
    $("#b8").on({
        /*בלחיצה על כפתור */
        click: function () {

            /*תעלה את הלחיצה ב1*/
            b8click = b8click + 1;
            /* תציג את שם הנקודה*/
            $("#name8").css("visibility", "visible");
            /*  הסימונים יופיעו על המסך*/
            $("#keshet").css("visibility", "visible");
            /*  בלחיצה שניה על הנקודה היא תתאפס*/
            if (b8click == 2) {
                b8click = 0;
            }
        },

        /*במעבר עכבר*/
        mouseenter: function () {
            /* כל עוד לא התבצעה לחיצה מעבר העכבר יעבוד*/
            if (b8click == 0) {
                /*שם הכפתחור יופיע*/
                $("#name8").css("visibility", "visible");
                /*  הסימונים יופיעו על המסך*/
                $("#keshet").css("visibility", "visible");
            }
        },


        /*  ביציאה ממעבר עכבר*/
        mouseleave: function () {
            if (b8click == 0) {
                /*הכפתור יחזור לעצמו*/
                $("#name8").css("visibility", "hidden");

                /*  הסימונים יעלמו*/
                $("#keshet").css("visibility", "hidden");
            }
        }
    });


    //נקודת העונשין
    $("#b9").on({
        /*בלחיצה על כפתור */
        click: function () {

            /*תעלה את הלחיצה ב1*/
            b9click = b9click + 1;
            /* תציג את שם הנקודה*/
            $("#name9").css("visibility", "visible");
            /*  הסימונים יופיעו על המסך*/
            $("#nkudatOnshin").css("visibility", "visible");
            /*  בלחיצה שניה על הנקודה היא תתאפס*/
            if (b9click == 2) {
                b9click = 0;
            }
        },

        /*במעבר עכבר*/
        mouseenter: function () {
            /* כל עוד לא התבצעה לחיצה מעבר העכבר יעבוד*/
            if (b9click == 0) {
                /*שם הכפתחור יופיע*/
                $("#name9").css("visibility", "visible");
                /*  הסימונים יופיעו על המסך*/
                $("#nkudatOnshin").css("visibility", "visible");
            }
        },


        /*  ביציאה ממעבר עכבר*/
        mouseleave: function () {
            if (b9click == 0) {
                /*הכפתור יחזור לעצמו*/
                $("#name9").css("visibility", "hidden");

                /*  הסימונים יעלמו*/
                $("#nkudatOnshin").css("visibility", "hidden");
            }
        }
    });




    //רחבת השער
    $("#b10").on({
        /*בלחיצה על כפתור */
        click: function () {

            /*תעלה את הלחיצה ב1*/
            b10click = b10click + 1;
            /* תציג את שם הנקודה*/
            $("#name10").css("visibility", "visible");
            /*  הסימונים יופיעו על המסך*/
            $("#rahavatHashaar").css("visibility", "visible");
            /*  בלחיצה שניה על הנקודה היא תתאפס*/
            if (b10click == 2) {
                b10click = 0;
            }
        },

        /*במעבר עכבר*/
        mouseenter: function () {
            /* כל עוד לא התבצעה לחיצה מעבר העכבר יעבוד*/
            if (b10click == 0) {
                /*שם הכפתחור יופיע*/
                $("#name10").css("visibility", "visible");
                /*  הסימונים יופיעו על המסך*/
                $("#rahavatHashaar").css("visibility", "visible");
            }
        },


        /*  ביציאה ממעבר עכבר*/
        mouseleave: function () {
            if (b10click == 0) {
                /*הכפתור יחזור לעצמו*/
                $("#name10").css("visibility", "hidden");

                /*  הסימונים יעלמו*/
                $("#rahavatHashaar").css("visibility", "hidden");
            }
        }
    });

/*    בלחיצה על X של קו אמצע הכל מתאפס*/
    $(".cross").click(function () {
        
        b5click = 0;
        $("#name5").css("visibility", "hidden");
        $("#centerLine").css("visibility", "hidden");
    });

    /*   בלחיצה על איקס של קו השוער, קו האורך,השערים ונקודת העונשין הכל מתאפס*/
    $(".cross2").click(function () {

        b1click = 0;
        $("#name1").css("visibility", "hidden");
        $("#kavShoer").css("visibility", "hidden");

        b3click = 0;
        $("#name3").css("visibility", "hidden");
        $("#kavOrech").css("visibility", "hidden");

        b6click = 0;
        $("#name6").css("visibility", "hidden");
        $("#shaar").css("visibility", "hidden");

        b9click = 0;
        $("#name9").css("visibility", "hidden");
        $("#nkudatOnshin").css("visibility", "hidden");


    });
    /*   בלחיצה על איקס של נקודת המרכז, סימוני הקרן,רחבת ה16, קשת רחבת העונשין ורחבת השער הכל מתאפס*/
    $(".cross3").click(function () {

        b2click = 0;
        $("#name2").css("visibility", "hidden");
        $("#center").css("visibility", "hidden");

        b4click = 0;
        $("#name4").css("visibility", "hidden");
        $("#keren").css("visibility", "hidden");

        b7click = 0;
        $("#name7").css("visibility", "hidden");
        $("#rahavat-16").css("visibility", "hidden");

        b8click = 0;
        $("#name8").css("visibility", "hidden");
        $("#keshet").css("visibility", "hidden");

        b10click = 0;
        $("#name10").css("visibility", "hidden");
        $("#rahavatHashaar").css("visibility", "hidden");


    });



    });



