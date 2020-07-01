   var a;
   var frogX = 307;
   var frogY = 550;
   var pict = new Image();	//create a new image object and attach it to a reference variable
   pict.src = "resources/frog.png"; //creates a pathname to an image to use. must do this once for each image.
   var pict2 = new Image();
   pict2.src = "resources/car.png";
   var pict3 = new Image();
   pict3.src = "resources/lightqueen.png";
  var log = new Image();
  log.src = "resources/Bullet_Bill.png";
  var snorlax = new Image();
  snorlax.src = "resources/snorlax.png";
  var lilly = new Image();
  lilly.src = "resources/lilly.jpg";
  var lotus = new Image();
  lotus.src = "resources/lotus.jpg";
  var heart = new Image();
  heart.src = "resources/heart.jpg";
  var blackHeart = new Image();
  blackHeart.src = "resources/blackHeart.png";
  carX = 200;
  carX2 = 0;
  carX3 = 500;
  carX4 = 100;
  topRowX = 550;
  topRow2ndX = 350;
  carY = 500;
  carY2 = 450;
  carY3 = 400;
  carY4 = 350;
  carY5 = 300;
  logX = 0;
  logY = 200;
  logX2 = 200;
  log2ndX2 = 500;
  logY2 = 100;
  logX3 = 100;
  log2ndX3 = 300;
  logY3 = 50;
  logX4 = 50;
  logY4 = 150;
  var mark = "lilly";
  var mark2 = "lilly";
  var mark3 = "lilly";
  var mark4 = "lilly";
  var mark5 = "lilly";
  var life1 = "heart";
  var life2 = "heart";
  var life3 = "heart";
  var lotusCounter = 0;
  var lifeCounter = 0;
  var points = 0;
  var pointDropY = 40;
  var pointsEarned = "";
  var lose = false;
  var gameOver = false;
  var level = 1;
  var ctx = null;
  var car2ndX = 0;
  var car3rdX = 200;
  var topRowX = 0;
  var levelDropY = 0;
  evelNumber = "";

function initialize() {
   drawBackground();
   WelcomeScreen();

}
function reset() {
    frogX = 307;
    frogY = 550;
    carX = 200;
    carX2 = 0;
    carX3 = 50;
    car2ndX = 0;
    car3rdX = 200;
    carX4 = 100;
    topRowX = 550;
    topRow2ndX = 350;
    carY = 500;
    carY2 = 450;
    carY3 = 400;
    carY4 = 350;
    carY5 = 300;
    logX = 0;
    logY = 200;
    logX2 = 200;
    log2ndX2 = 500;
    logY2 = 100;
    logX3 = 100;
    log2ndX3 = 300;
    logY3 = 50;
    logX4 = 100;
    logY4 = 150;

     mark = "lilly";
     mark2 = "lilly";
     mark3 = "lilly";
     mark4 = "lilly";
     mark5 = "lilly";
    life1 = "heart";
    life2 = "heart";
    life3 = "heart";
    lotusCounter = 0;
    lifeCounter = 0;
    points = 0;
    pointsEarned = "";
    levelNumber = "";
    levelDropY = 0;
    lose = false;
    gameOver = false;
    level = 1;
}
function WelcomeScreen(){
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.font = "20px Arial";
    ctx.fillStyle = "#FF0000";
    ctx.fillText("Score:",20,20);

        ctx.font = "100px Arial";
        ctx.fillStyle = "#FF0000";
        ctx.fillText("Frogger", 30, 200);
    ctx.font = "50px Arial";
    ctx.fillStyle = "#FF0000";
    ctx.fillText("Press enter to start",30,400);
    ctx.drawImage(eval(life1),0, 550, 50, 50);
    ctx.drawImage(eval(life2),50, 550, 50, 50);
    ctx.drawImage(eval(life3),100, 550, 50, 50);
}
function startAnimation() {
    animate();
}
//all functions in this method will run at the speed of your computers frame rate
function animate(){
    cancelAnimationFrame(a);
    a = requestAnimationFrame(animate);
    drawBackground();
     drawCar();
    drawLogs();
    win();
    drawFrog();
    checkCollision();
    checkCar();
    lives();
    checkLog();



}

function drawBackground(){
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 700, 600);
    ctx.fillStyle = "#17ff25";
    ctx.fillRect(0, 0, 700, 50);
    ctx.fillStyle = "#17ff25";
    ctx.fillRect(0, 550, 700, 50);
    ctx.fillStyle = "#17ff25";
    ctx.fillRect(0, 250, 700, 50);
    ctx.fillStyle = "#3d92ff";
    ctx.fillRect(0, 50, 700, 200);
    ctx.font = "20px Arial";
    ctx.fillStyle = "#FF0000";
    ctx.fillText("Score:", 20, 20);
    if (gameOver == false) {
        ctx.fillText(points, 20, 40);
    }
if (gameOver == true) {
    ctx.font = "100px Arial";
    ctx.fillStyle = "#FF0000";
    ctx.fillText("Game Over", 30, 200);

    ctx.font = "20px Arial";
    ctx.fillStyle = "#FF0000";
    ctx.fillText("Score:", 20, 20);
    ctx.fillText(points, 20, 40);

    ctx.font = "50px Arial";
    ctx.fillStyle = "#FF0000";
    ctx.fillText("Press R to restart",30,400);
}
}

 function drawFrog() {
     if (gameOver == false) {
         ctx = document.getElementById("myCanvas").getContext("2d");
         ctx.drawImage(pict, frogX, frogY, 50, 50);
     }
 }
function drawCar() {

    ctx = document.getElementById("myCanvas").getContext("2d");
    if (gameOver == false && level == 1) {
        //bottom row
        ctx.drawImage(pict2, carX, carY, 100, 50);
        //fourth row
        ctx.drawImage(pict3, carX2, carY2, 150, 50);
        //third row
        ctx.drawImage(pict2, carX3, carY3, 100, 50);
        ctx.drawImage(pict2, car3rdX, carY3, 100, 50);
        //second row
        ctx.drawImage(pict3, carX4, carY4, 150, 50);
        //very top row
        ctx.drawImage(pict2, topRowX, carY5, 100, 50);

        carX = carX - 10;
        carX2 = carX2 + 4;
        car3rdX = car3rdX - 5;
        carX3 = carX3 -5;
        carX4 = carX4 +3;
        topRowX = topRowX - 8;
    }

    if (gameOver == false && level == 2) {
//bottom row
    ctx.drawImage(pict2, carX, carY, 100, 50);
    //fourth row
    ctx.drawImage(pict3, carX2, carY2, 150, 50);
    //third row
    ctx.drawImage(pict2, car2ndX, carY3, 100, 50);
    ctx.drawImage(pict2, car3rdX, carY3, 100, 50);
//second row
    ctx.drawImage(pict3, carX2, carY4, 150, 50);
    //very top row
    ctx.drawImage(pict2, topRowX, carY5, 100, 50);
        ctx.drawImage(pict2, topRow2ndX, carY5, 100, 50);

    carX = carX - 6;
    carX2 = carX2 + 10;
    car2ndX = car2ndX - 5;
    car3rdX = car3rdX - 5;
    topRowX = topRowX - 8;
    topRow2ndX = topRow2ndX - 8
}
}
  function checkCar() {
      if (carX<-75){

          carX=700;
      }
      if (carX2 > 777) {

          carX2 = -100;

      }
      if (car2ndX <-75) {

          car2ndX = 700;

      }
      if (car3rdX <-75) {

          car3rdX = 700;

      }
      if (carX3  <-75) {

          carX3 = 700;

      }
      if (carX4 > 777) {

          carX4 = -100;

      }
      if (topRowX <-75) {

          topRowX = 700;

      }
      if (topRow2ndX <-75) {

          topRow2ndX = 700;

      }
  }
function checkCollision() {

    if (gameOver == false && level == 1) {
        ctx = document.getElementById("myCanvas").getContext("2d");
        if (frogX + 25 > carX && frogX < carX + 90 && frogY + 25 > carY && frogY < carY + 25) {
            lose = true;
        }


        if (frogX + 75 > carX2 && frogX < carX2 + 130 && frogY + 25 > carY2 && frogY < carY2 + 25) {
            lose = true;

        }
        if (frogX + 50 > carX3 && frogX < carX3 + 90 && frogY + 25 > carY3 && frogY < carY3 + 25) {
            lose = true;

        }
        if (frogX + 50 > car3rdX && frogX < car3rdX + 90 && frogY + 25 > carY3 && frogY < carY3 + 25) {
            lose = true;

        }
        if (frogX + 75 > carX4 && frogX < carX4 + 130 && frogY + 25 > carY4 && frogY < carY4 + 25) {
            lose = true;

        }
        if (frogX + 25 > topRowX && frogX < topRowX + 90 && frogY + 25 > carY5 && frogY < carY5 + 25) {
            lose = true;

        }
    }
    if (gameOver == false && level == 2) {
        ctx = document.getElementById("myCanvas").getContext("2d");
        if (frogX + 25 > carX && frogX < carX + 90 && frogY + 25 > carY && frogY < carY + 25) {
            lose = true;
        }


        if (frogX + 75 > carX2 && frogX < carX2 + 130 && frogY + 25 > carY2 && frogY < carY2 + 25) {
            lose = true;

        }
        if (frogX + 25 > car2ndX && frogX < car2ndX + 90 && frogY + 25 > carY3 && frogY < carY3 + 25) {
            lose = true;

        }
        if (frogX + 25 > car3rdX && frogX < car3rdX + 90 && frogY + 25 > carY3 && frogY < carY3 + 25) {
            lose = true;

        }
        if (frogX + 75 > carX2 && frogX < carX2 + 130 && frogY + 25 > carY4 && frogY < carY4 + 25) {
            lose = true;

        }
        if (frogX + 25 > topRowX && frogX < topRowX + 90 && frogY + 25 > carY5 && frogY < carY5 + 25) {
            lose = true;

        }
        if (frogX + 25 > topRow2ndX && frogX < topRow2ndX + 90 && frogY + 25 > carY5 && frogY < carY5 + 25) {
            lose = true;

        }
    }
}
  function drawLogs() {
      ctx = document.getElementById("myCanvas").getContext("2d");
      if (gameOver == false && level == 1) {
          ctx.drawImage(log, logX, logY, 100, 50);
          ctx.drawImage(log, logX2, logY2, 100, 50);
          ctx.drawImage(log, log2ndX2, logY2, 100, 50);
          ctx.drawImage(snorlax, logX3, logY3, 100, 50);
          ctx.drawImage(snorlax, log2ndX3, logY3, 100, 50);
          ctx.drawImage(snorlax, logX4, logY4, 100, 50);

          logX = logX - 2;
          logX2 = logX2 - 4;
          log2ndX2 = log2ndX2 - 4;
          logX3 = logX3 + 1;
          logX4 = logX4 + 3;
          log2ndX3 = log2ndX3 + 1;
          if (logX < -100) {
              logX = 700;
          }
          if (logX2 < -100) {
              logX2 = 700;
          }
          if(log2ndX2 < -100) {
                  log2ndX2 = 700;
          }
          if (logX3 > 700) {
              logX3 = -100;
          }
          if (log2ndX3 > 700) {
              log2ndX3 = -100;
          }
          if (logX4 > 700) {
              logX4 = -100;
          }

          if (frogX + 25 > logX && frogX < logX + 80 && frogY + 25 > logY && frogY < logY + 25) {
              frogX = frogX - 2;
          }
          else if (frogX + 25 > logX2 && frogX < logX2 + 80 && frogY + 25 > logY2 && frogY < logY2 + 25) {
              frogX = frogX - 4;

          }
          else if (frogX + 25 > log2ndX2 && frogX < log2ndX2 + 80 && frogY + 25 > logY2 && frogY < logY2 + 25) {
              frogX = frogX - 4;

          }
          else if (frogX + 25 > logX3 && frogX < logX3 + 100 && frogY + 25 > logY3 && frogY < logY3 + 25) {
              frogX = frogX + 1;
          }
          else if (frogX + 25 > logX4 && frogX < logX4 + 100 && frogY + 25 > logY4 && frogY < logY4 + 25) {
              frogX = frogX + 3;
          }
          else if (frogX + 25 > log2ndX3 && frogX < log2ndX3 + 100 && frogY + 25 > logY3 && frogY < logY3 + 25) {
              frogX = frogX + 1;
          }
          else if (frogY >= 50 && frogY <= 200) {
              lose = true;
          }
      }
      if (gameOver == false && level == 2) {
          ctx.drawImage(log, logX, logY, 100, 50);
          ctx.drawImage(log, logX2, logY2, 100, 50);
          ctx.drawImage(snorlax, logX3, logY3, 100, 50);
          ctx.drawImage(snorlax, logX4, logY4, 100, 50);
          logX = logX - 2;
          logX2 = logX2 - 4;
          logX3 = logX3 + 1;
          logX4 = logX4 + 3;
          if (logX < -100) {
              logX = 700;
          }
          if (logX2 < -100) {
              logX2 = 700;
          }
          if (logX3 > 700) {
              logX3 = -100;
          }
          if (logX4 > 700) {
              logX4 = -100;
          }

          if (frogX + 25 > logX && frogX < logX + 80 && frogY + 25 > logY && frogY < logY + 25) {
              frogX = frogX - 2;
          }
          else if (frogX + 25 > logX2 && frogX < logX2 + 80 && frogY + 25 > logY2 && frogY < logY2 + 25) {
              frogX = frogX - 4;

          }
          else if (frogX + 25 > logX3 && frogX < logX3 + 100 && frogY + 25 > logY3 && frogY < logY3 + 25) {
              frogX = frogX + 1;
          }
          else if (frogX + 25 > logX4 && frogX < logX4 + 100 && frogY + 25 > logY4 && frogY < logY4 + 25) {
              frogX = frogX + 3;
          }
          else if (frogY >= 50 && frogY <= 200) {
              lose = true;
          }
      }
  }
  function win() {
      ctx = document.getElementById("myCanvas").getContext("2d");
      if (gameOver == false ) {
          ctx.drawImage(eval(mark), 150, 0, 50, 50);
          ctx.drawImage(eval(mark2), 250, 0, 50, 50);
          ctx.drawImage(eval(mark3), 350, 0, 50, 50);
          ctx.drawImage(eval(mark4), 450, 0, 50, 50);
          ctx.drawImage(eval(mark5), 550, 0, 50, 50);
      }



      if (frogX + 25 > 150 && frogX < 150 + 25 && frogY == 0 ) {
          frogX = 307;
          frogY = 550;
          if (mark != "lotus") {
              lotusCounter++;
              points = points + 100;
              pointsEarned = "+100";
              pointDropY = 40;
          }
          mark = "lotus";

      }
      if (frogX + 25 > 250 && frogX < 250 + 25 && frogY == 0 ) {
          frogX = 307;
          frogY = 550;
          if (mark2 != "lotus") {
              lotusCounter++;
              points = points + 100;
              pointsEarned = "+100";
              pointDropY = 40;
          }
          mark2 = "lotus";
      }
      if (frogX + 25 > 350 && frogX < 350 + 25 && frogY == 0 ) {
          frogX = 307;
          frogY = 550;
          if (mark3 != "lotus") {
              lotusCounter++;
              points = points + 100;
              pointsEarned = "+100";
              pointDropY = 40;
          }
          mark3 = "lotus";
      }
      if (frogX + 25 > 450 && frogX < 450 + 25 && frogY == 0 ) {
          frogX = 307;
          frogY = 550;
          if (mark4 != "lotus") {
              lotusCounter++;
              points = points + 100;
              pointsEarned = "+100";
              pointDropY = 40;
          }
          mark4 = "lotus";
      }
      if (frogX + 25 > 550 && frogX < 550 + 25 && frogY == 0 ) {
          frogX = 307;
          frogY = 550;
          if (mark5 != "lotus") {
              lotusCounter++;
              points = points + 100;
              pointsEarned = "+100";
              pointDropY = 40;
          }
          mark5 = "lotus";
      }
      if (lotusCounter >= 5){
          points = points + 1000;
          pointsEarned = "+1000";
          pointDropY = 40;
          level++;
          lotusCounter = 0;
          mark = "lilly";
          mark2 = "lilly";
          mark3 = "lilly";
          mark4 = "lilly";
          mark5 = "lilly";
          levelDropY = 40;
          if (level == 2) {
              levelNumber = "Level 2";
          }
          if (level == 3) {
              ctx.font = "100px Arial";
              ctx.fillStyle = "#FF0000";
              ctx.fillText("You Win", 30, 200);

              ctx.font = "20px Arial";
              ctx.fillStyle = "#FF0000";
              ctx.fillText("Score:", 20, 20);
              ctx.fillText(points, 20, 40);

              ctx.font = "50px Arial";
              ctx.fillStyle = "#FF0000";
              ctx.fillText("Press R to replay",30,400);
          }
      }
      if (frogY == 0) {
          lose = true;
      }
      ctx.font = "20px Impact";
      ctx.fillStyle = "#ffffff";
      ctx.fillText(pointsEarned,20,pointDropY);
      pointDropY = pointDropY + 2;

      ctx.font = "75px Wide Latin";
      ctx.fillStyle = "#33001a";
      ctx.fillText(levelNumber,200,levelDropY);
      levelDropY = levelDropY + 2
  }

  function lives(){
      ctx = document.getElementById("myCanvas").getContext("2d");
      ctx.drawImage(eval(life1),0, 550, 50, 50);
      ctx.drawImage(eval(life2),50, 550, 50, 50);
      ctx.drawImage(eval(life3),100, 550, 50, 50);

      if (lose == true) {
          frogX = 307;
          frogY = 550;
          lifeCounter++;
          if (lifeCounter == 1) {
              life1 = "blackHeart";
              ctx.drawImage(eval(life1), 0, 550, 50, 50);
          }
          else if (lifeCounter == 2) {
              life2 = "blackHeart";
              ctx.drawImage(eval(life2), 50, 550, 50, 50);
          }
          else if (lifeCounter == 3) {
              life3 = "blackHeart";
              ctx.drawImage(eval(life3), 100, 550, 50, 50);
              gameOver = true;


          }

        lose = false;
      }





  }


//Keypress Event code
$(document).keydown(function(event){  //jQuery code to recognize a keydown event
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == 13)
    {
        reset();
        cancelAnimationFrame(a);
        animate();

    }
    if(keycode == 82)   //82 is the r key
    {

        reset();
        cancelAnimationFrame(a);
        animate();

    }
    if(keycode == 27)   //27 is the escape key
    {

        alert("escape key");

    }

    if(keycode == 87 || keycode == 38)
    {
        frogY -= 50;
    }
    if(keycode == 65 || keycode == 37)
    {
        if (frogX >= 50) {
            frogX -= 50;
        }
    }
    if(keycode == 68 || keycode == 39)
    {
        if (frogX <= 650) {
            frogX += 50;
        }
    }
    if(keycode == 83 || keycode == 40)
    {
        if (frogY != 550) {
        frogY+=50;
        }
    }
});

