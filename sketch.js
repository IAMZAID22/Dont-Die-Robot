//variables
var object1, object2, object3, object4, object5, object6, object7;
//icons images
var play, shop, back, con, res, pau, resu
//states
var gameState = "menu",
  GP, level = 0
//levels
var lv1, lv2, lv3, lv4, lv5, lv6, lv7, lv8, lv9, lv10, lv11, lv12, lv13, lv14, lv15
//level icon
var lv1Img, lv2Img, lv3Img, lv4Img, lv5Img, lv6Img, lv7Img, lv8Img, lv9Img, lv10Img, lv11Img, lv12Img, lv13Img, lv14Img, lv15Img
//coins
var coinlv, cointo, coinImg, conub
//skins
var blrig, burig, grrig, yerig, pirig, rerig, skinColor = "Red"
var bllef, bulef, grlef, yelef, pilef, relef
//buy
var buy, b1, b2, b3, b4, b5, reow = 1,
  piow = 0,
  yeow = 0,
  grow = 0,
  buow = 0,
  blow = 0
//platforms
var pl1, pl2, pl3, pl4, pl5

//fake platforms
var fl1, fl2

//falling platforms
var fa1, fa2, f3

//moving platforms
var ml1, ml2, ml3

//icy platforms
var il1, il2, il3

//sticky platforms
var sl1, sl2, sl3

//jump platforms
var jl1, jl2

//player
var player

//coins
var c1, c2, c3

//sound
var s1, s2, s3, s4

//music
var m1

function preload() {
  //load Images for buttons
  play = loadImage("Buttons/play.png");
  shop = loadImage("Buttons/shop.png");
  back = loadImage("Buttons/back.png");
  buy = loadImage("Buttons/buy.png");
  equip = loadImage("Buttons/equip.png");
  con = loadImage("Buttons/countinue.png")
  pau = loadImage("Buttons/pause.png")
  res = loadImage("Buttons/restart.png")
  resu = loadImage("Buttons/resume.png")

  //load Images for levels
  lv1Img = loadImage("Levels/level1.png");
  lv2Img = loadImage("Levels/level2.png");
  lv3Img = loadImage("Levels/level3.png");
  lv4Img = loadImage("Levels/level4.png");
  lv5Img = loadImage("Levels/level5.png");
  lv6Img = loadImage("Levels/level6.png");
  lv7Img = loadImage("Levels/level7.png");
  lv8Img = loadImage("Levels/level8.png");
  lv9Img = loadImage("Levels/level9.png");
  lv10Img = loadImage("Levels/level10.png");
  lv11Img = loadImage("Levels/level11.png");
  lv12Img = loadImage("Levels/level12.png");
  lv13Img = loadImage("Levels/level13.png");
  lv14Img = loadImage("Levels/level14.png");
  lv15Img = loadImage("Levels/level15.png");

  //load Image for coin
  coinImg = loadImage("coin.png")

  //load Images for skin right
  blrig = loadImage("Skins/blackright.png");
  burig = loadImage("Skins/blueright.png");
  grrig = loadImage("Skins/greenright.png");
  yerig = loadImage("Skins/yellowright.png");
  pirig = loadImage("Skins/pinkright.png");
  rerig = loadImage("Skins/redright.png");

  bllef = loadImage("Skins/blackleft.png");
  bulef = loadImage("Skins/blueleft.png");
  grlef = loadImage("Skins/greenleft.png");
  yelef = loadImage("Skins/yellowleft.png");
  pillef = loadImage("Skins/pinkleft.png");
  relef = loadImage("Skins/redleft.png");

  //sound
  s1 = loadSound("click.wav")
  s2 = loadSound("jump.wav")
  s3 = loadSound("coin collect.wav")
  s4 = loadSound("die.wav")

  //music
  m1 = loadSound("music.wav")
}

function setup() {
  createCanvas(600, 300)

  //create sprites
  object1 = createSprite(300, 150)
  object1.addImage(play);
  object1.scale = 0.5

  object2 = createSprite(300, 250)
  object2.addImage(shop);
  object2.scale = 0.3

  object3 = createSprite()
  object3.addImage(back)
  object3.scale = 0.4
  object3.x = 100
  object3.y = 270
  object3.visible = false;

  object4 = createSprite()
  object4.addImage(res)
  object4.scale = 0.2
  object4.x = 290
  object4.y = 150
  object4.visible = false;

  object5 = createSprite()
  object5.addImage(con)
  object5.scale = 0.3
  object5.x = 290
  object5.y = 230
  object5.visible = false;

  object6 = createSprite()
  object6.addImage(pau)
  object6.scale = 0.3
  object6.x = 290
  object6.y = 230
  object6.visible = false;

  object7 = createSprite()
  object7.addImage(resu)
  object7.scale = 0.3
  object7.x = 290
  object7.y = 230
  object7.visible = false;

  object8 = createSprite()
  object8.addImage(con)
  object8.scale = 0.3
  object8.x = 290
  object8.y = 130
  object8.visible = false;

  object9 = createSprite()
  object9.addImage(con)
  object9.scale = 0.3
  object9.x = 290
  object9.y = 130
  object9.visible = false;

  lv1 = createSprite(50, 90)
  lv1.addImage(lv1Img)
  lv1.scale = 0.4
  lv1.visible = false

  lv2 = createSprite(150, 90)
  lv2.addImage(lv2Img)
  lv2.scale = 0.4
  lv2.visible = false

  lv3 = createSprite(250, 90)
  lv3.addImage(lv3Img)
  lv3.scale = 0.4
  lv3.visible = false

  lv4 = createSprite(350, 90)
  lv4.addImage(lv4Img)
  lv4.scale = 0.4
  lv4.visible = false

  lv5 = createSprite(450, 90)
  lv5.addImage(lv5Img)
  lv5.scale = 0.4
  lv5.visible = false

  lv6 = createSprite(550, 90)
  lv6.addImage(lv6Img)
  lv6.scale = 0.4
  lv6.visible = false

  lv7 = createSprite(50, 150)
  lv7.addImage(lv7Img)
  lv7.scale = 0.4
  lv7.visible = false

  lv8 = createSprite(150, 150)
  lv8.addImage(lv8Img)
  lv8.scale = 0.4
  lv8.visible = false

  lv9 = createSprite(250, 150)
  lv9.addImage(lv9Img)
  lv9.scale = 0.4
  lv9.visible = false

  lv10 = createSprite(350, 150)
  lv10.addImage(lv10Img)
  lv10.scale = 0.4
  lv10.visible = false

  lv11 = createSprite(450, 150)
  lv11.addImage(lv11Img)
  lv11.scale = 0.4
  lv11.visible = false

  lv12 = createSprite(550, 150)
  lv12.addImage(lv12Img)
  lv12.scale = 0.4
  lv12.visible = false

  lv13 = createSprite(200, 210)
  lv13.addImage(lv13Img)
  lv13.scale = 0.4
  lv13.visible = false

  lv14 = createSprite(300, 210)
  lv14.addImage(lv14Img)
  lv14.scale = 0.4
  lv14.visible = false

  lv15 = createSprite(400, 210)
  lv15.addImage(lv15Img)
  lv15.scale = 0.4
  lv15.visible = false

  //coin
  coinlv = 0
  cointo = 5

  conub = createSprite(500, 50)
  conub.addImage(coinImg)
  conub.scale = 0.2
  conub.visible = false

  bla = createSprite(550, 110)
  bla.addImage(blrig)
  bla.scale = 0.1

  blu = createSprite(450, 110)
  blu.addImage(burig)
  blu.scale = 0.1

  gre = createSprite(350, 110)
  gre.addImage(grrig)
  gre.scale = 0.1

  yel = createSprite(250, 110)
  yel.addImage(yerig)
  yel.scale = 0.1

  pin = createSprite(150, 110)
  pin.addImage(pirig)
  pin.scale = 0.1

  red = createSprite(50, 110)
  red.addImage(rerig)
  red.scale = 0.1

  b1 = createSprite(50, 170)
  b1.addImage(equip)
  b1.scale = 0.2
  b1.visible = false

  b2 = createSprite(150, 170)
  b2.addImage(buy)
  b2.scale = 0.2
  b2.visible = false

  b3 = createSprite(250, 170)
  b3.addImage(buy)
  b3.scale = 0.2
  b3.visible = false

  b4 = createSprite(350, 170)
  b4.addImage(buy)
  b4.scale = 0.2
  b4.visible = false

  b5 = createSprite(450, 170)
  b5.addImage(buy)
  b5.scale = 0.2
  b5.visible = false

  b6 = createSprite(550, 170)
  b6.addImage(buy)
  b6.scale = 0.2
  b6.visible = false

  GP = 1

  //player
  player = createSprite(150, 130)
  player.visible = false

  //platforms
  pl1 = createSprite(150, 250, 100, 30)
  pl1.shapeColor = "brown"
  pl1.visible = false
  pl2 = createSprite(380, 150, 100, 30)
  pl2.shapeColor = "brown"
  pl2.visible = false
  pl3 = createSprite(610, 250, 100, 30)
  pl3.shapeColor = "brown"
  pl3.visible = false
  pl4 = createSprite(840, 150, 100, 30)
  pl4.shapeColor = "brown"
  pl4.visible = false
  pl5 = createSprite(1070, 250, 100, 30)
  pl5.shapeColor = "brown"
  pl5.visible = false

  //faking platforms
  fl1 = createSprite(200, 200, 100, 30)
  fl1.shapeColor = "brown"
  fl1.visible = false

  fl2 = createSprite(200, 200, 100, 30)
  fl2.shapeColor = "brown"
  fl2.visible = false

  //falling platforms
  fa1 = createSprite(380, 150, 100, 30)
  fa1.shapeColor = "brown"
  fa1.visible = false

  fa2 = createSprite(610, 150, 100, 30)
  fa2.shapeColor = "brown"
  fa2.visible = false

  fa3 = createSprite(840, 150, 100, 30)
  fa3.shapeColor = "brown"
  fa3.visible = false

  //moving platforms
  ml1 = createSprite(20, 200, 100, 30)
  ml1.shapeColor = "brown"
  ml1.visible = false

  ml2 = createSprite(20, 200, 100, 30)
  ml2.shapeColor = "brown"
  ml2.visible = false

  ml3 = createSprite(20, 200, 100, 30)
  ml3.shapeColor = "brown"
  ml3.visible = false

  //icy platforms
  il1 = createSprite(20, 20, 100, 30)
  il1.shapeColor = "cyan"
  il1.visible = false

  il2 = createSprite(20, 20, 100, 30)
  il2.shapeColor = "cyan"
  il2.visible = false

  //sticky platforms
  sl1 = createSprite(20, 20, 300, 30)
  sl1.shapeColor = "lime"
  sl1.visible = false

  sl2 = createSprite(20, 20, 300, 30)
  sl2.shapeColor = "lime"
  sl2.visible = false

  //jump platforms
  jl1 = createSprite(20, 20, 80, 30)
  jl1.shapeColor = "yellow"
  jl1.visible = false

  jl2 = createSprite(20, 20, 80, 30)
  jl2.shapeColor = "yellow"
  jl2.visible = false

  //coins
  c1 = createSprite(380, 90)
  c1.addImage(coinImg)
  c1.scale = 0.2
  c1.visible = false

  c2 = createSprite(610, 190)
  c2.addImage(coinImg)
  c2.scale = 0.2
  c2.visible = false

  c3 = createSprite(840, 90)
  c3.addImage(coinImg)
  c3.scale = 0.2
  c3.visible = false

  bl1 = createSprite(300, 50, 600, 2)
  bl1.visible = false

  bl2 = createSprite(300, 250, 600, 2)
  bl2.visible = false

  text1 = "You Win!"
  text2 = "Select a Level"
}

function draw() {
  background("lightblue");
  
  if(gameState === "pause"){
    object8.visible = true
  }
  
  else{
    object8.visible = false
  }
  if(gameState === "shop"){
    object3.visible = true
  }
  else{
    object3.visible = false
  }
  
  if(mousePressedOver(object3)&&gameState === "shop"){
    gameState = "menu"
    conub.visible = false
    object1.visible = true
    object2.visible = true
    GP = 1
  }
  if (gameState === "levels") {
    lv1.y = 90
    lv2.y = 90
    lv3.y = 90
    lv4.y = 90
    lv5.y = 90
    lv6.y = 90
    lv7.y = 150
    lv8.y = 150
    lv9.y = 150
    lv10.y = 150
    lv11.y = 150
    lv12.y = 150
    lv13.y = 210
    lv14.y = 210
    lv15.y = 210

  }

  if (gameState !== "levels") {
    lv1.y = 900
    lv2.y = 900
    lv3.y = 900
    lv4.y = 900
    lv5.y = 900
    lv6.y = 900
    lv7.y = 1500
    lv8.y = 1500
    lv9.y = 1500
    lv10.y = 1500
    lv11.y = 1500
    lv12.y = 1500
    lv13.y = 2100
    lv14.y = 2100
    lv15.y = 2100

  }

  if (gameState === "level completed") {
    gameState = "levels"
  }

  if (gameState === "levels") {
    text2 = "Select a level"

  } else {
    text2 = ""
  }

  if (mousePressedOver(object9) && gameState === "level completed") {
    gameState = "levels"
    object9.y = 900
    text1 = ""
  }

  if (mousePressedOver(object8) && gameState === "pause") {
    gameState = "levels"
    if (gameState === "levels") {
      object8.visible = false
      m1.stop()
    }
  }

  if (gameState === "pause") {
    object8.visible = true
  } else {
    object8.visibe = false
  }


  if (gameState === "level completed") {
    object9.y = 150
  } else {
    object9.y = 900
  }

  m1.play()

  //resume
  if (mousePressedOver(object7) && gameState === "pause") {
    gameState = "play"
    m1.stop()
    if (level === 1) {
      s1.play()
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      il1.y = 900
      il2.y = 900
      il1.y = 900
      il2.y = 900
      ml1.velocityY = 0
      ml2.velocityY = 0
      ml3.velocityY = 0
      ml1.y = 900
      ml2.y = 900
      ml3.y = 900
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      pl1.visible = true
      pl3.visible = true
      pl2.visible = true
      pl4.visible = true
      pl5.visible = true
      player.visible = true
      c1.visible = true
      c2.visible = true
      c3.visible = true
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      level = 1
      gameState = "play"
      GP = 3
      pl1.x = 150
      pl1.y = 250
      pl2.x = 380
      pl2.y = 150
      pl3.x = 610
      pl3.y = 250
      pl4.x = 840
      pl4.y = 150
      pl5.x = 1070
      pl5.y = 250
      player.x = 150
      player.y = 200
      fa1.y = 900
      fa2.y = 900
      fa3.y = 900
      fl1.y = 900
      fl2.y = 900
      c1.x = 380
      c1.y = 100
      c2.y = 200
      c2.x = 610
      c3.y = 100
      c3.x = 840
    }

    if (level === 2) {
      s1.play()
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      il1.y = 900
      il2.y = 900
      il1.y = 900
      il2.y = 900
      ml1.velocityY = 0
      ml2.velocityY = 0
      ml3.velocityY = 0
      ml1.y = 900
      ml2.y = 900
      ml3.y = 900
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      level = 2
      gameState = "play"
      pl1.x = 150
      pl1.y = 250
      fl1.x = 380
      fl1.y = 150
      pl3.x = 610
      pl3.y = 250
      fl2.x = 840
      fl2.y = 150
      pl5.x = 1070
      pl5.y = 250

      c1.x = 380
      c1.y = 100
      c2.x = 610
      c2.y = 200
      c3.x = 840
      c3.y = 100

      pl2.y = 900
      pl4.y = 900

      pl1.visible = true
      fl1.visible = true
      pl3.visible = true
      fl2.visible = true
      pl5.visible = true

      player.x = 150
      player.y = 200
      player.visible = true
    }

    if (level === 3) {
      s1.play()
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      il1.y = 900
      il2.y = 900
      il1.y = 900
      il2.y = 900
      ml1.velocityY = 0
      ml2.velocityY = 0
      ml3.velocityY = 0
      ml1.y = 900
      ml2.y = 900
      ml3.y = 900
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      level = 3
      gameState = "play"
      player.x = 150
      player.y = 200

      pl1.x = 150
      pl1.y = 250
      pl2.x = 380
      pl2.y = 250
      fl1.x = 610
      fl1.y = 250
      fl2.x = 840
      fl2.y = 250
      pl3.x = 1070
      pl3.y = 250
      pl4.x = 1300
      pl4.y = 250
      pl5.y = 900

      pl1.visible = true
      pl2.visible = true
      fl1.visible = true
      pl3.visible = true
      fl2.visible = true
      pl4.visible = true

      c1.x = 490
      c1.y = 150
      c2.x = 745
      c2.y = 150
      c3.x = 1070
      c3.y = 150

      player.visible = true
    }

    if (level === 4) {
      s1.play()
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      ml1.velocityY = 0
      ml2.velocityY = 0
      ml3.velocityY = 0
      ml1.y = 900
      ml2.y = 900
      ml3.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      level = 4
      gameState = "play"
      pl1.x = 150
      pl1.y = 150
      fa1.x = 380
      fa1.y = 150
      fa2.x = 610
      fa2.y = 150
      fa3.x = 840
      pl2.x = 1070
      pl2.y = 250
      player.x = 150
      player.y = 150
      pl1.visible = true
      pl2.visible = true
      fa1.visible = true
      fa2.visible = true
      fa3.visible = true
      player.visible = true
      c1.y = 100
      c2.y = 100
      c3.y = 100
      pl3.y = 900
      pl4.y = 900
      pl5.y = 900
      fl1.y = 900
      fl2.y = 900

    }

    if (level === 5) {
      s1.play()
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      ml1.velocityY = 0
      ml2.velocityY = 0
      ml3.velocityY = 0
      ml1.y = 900
      ml2.y = 900
      ml3.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      level = 5
      gameState = "play"
      player.x = 150
      player.y = 200
      player.visible = true
      pl1.x = 150
      pl1.y = 250
      pl1.visible = true
      fl1.x = 1070
      fl1.y = 150
      fl1.visible = true
      fa1.x = 380
      fa1.y = 200
      fa1.visible = true
      fa2.x = 610
      fa2.y = 150
      fa2.visible = true
      fa3.y = 900
      pl2.x = 1100
      pl2.y = 250
      pl3.y = 900
      pl4.y = 900
      pl5.y = 900
      fl2.y = 900
      c1.y = 150
      c2.y = 100
      fl1.x = c3.x
      pl2.visible = true

    }

    if (level === 6) {
      s1.play()
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      level = 6
      gameState = "play"
      player.x = 150
      player.y = 200
      pl1.x = 150
      pl1.y = 250
      ml1.x = 380
      ml1.y = 150
      ml2.x = 610
      ml2.y = 250
      ml3.x = 840
      ml3.y = 150
      ml1.velocityY = 3
      ml2.velocityY = -3
      ml3.velocityY = 3
      c1.velocityY = 3
      c2.velocityY = -3
      c3.velocityY = 3
      player.visible = true
      pl1.visible = true
      ml1.visible = true
      ml2.visible = true
      ml3.visible = true
      pl2.visible = true
      pl2.x = 1150
      pl2.y = 250
    }

    if (level === 7) {
      s1.play()
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      level = 7
      gameState = "play"
      player.x = 150
      player.y = 200
      pl1.x = 150
      pl1.y = 250
      ml1.x = 380
      ml1.y = 250
      fa1.x = 610
      fa1.y = 100
      ml2.x = 840
      ml2.y = 250
      pl2.x = 1070
      pl2.y = 250
      pl2.visible = true
      player.visible = true
      pl1.visible = true
      ml1.visible = true
      ml2.visible = true
      fa1.visible = true
      fl1.y = 900
      fl2.y = 900
      ml3.y = 900
      ml1.velocityY = -3
      ml2.velocityY = -3
      c1.velocityY = -3
      c3.velocityY = -3
      c3.x = 840
      c2.x = 610
      c3.y = 70
      c2.y = 50
      c1.y = 200
      pl2.x = 1070
      pl2.y = 250
    }

    if (level === 8) {
      s1.play()
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      level = 8
      gameState = "play"
      player.x = 150
      player.y = 50
      pl1.x = 150
      pl1.y = 150
      il1.x = 380
      il1.y = 250
      il2.x = 610
      il2.y = 150
      fl1.x = 840
      fl1.y = 150
      fa1.x = 1070
      fa1.y = 150
      pl2.x = 1200
      pl2.y = 250
      player.visible = true
      pl1.visible = true
      pl2.visible = true
      il1.visible = true
      il2.visible = true
      fl1.visible = true
      fa1.visible = true
      c1.y = 200
      c2.y = 100
      c3.y = 100
    }

    if (level === 9) {
      s1.play()
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      level = 9
      gameState = "play"
      player.x = 150
      player.y = 200
      player.visible = true
      pl1.x = 150
      pl1.y = 250
      pl1.visible = true
      il1.x = 380
      il1.y = 150
      il1.visible = true
      il2.x = 480
      il2.y = 150
      il2.visible = true
      fl1.x = 580
      fl1.y = 150
      fl1.visible = true
      fa1.x = 720
      fa1.y = 150
      fa1.visible = true
      pl2.y = 250
      pl2.x = 1000
      pl2.visible = true
      c1.x = 250
      c1.y = 140
      c2.x = 380
      c2.y = 100
      c3.x = 440
      c3.y = 100

    }

    if (level === 10) {
      s1.play()
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      jl1.y = 900
      jl2.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      level = 10
      gameState = "play"
      player.x = 150
      player.y = 50
      pl1.x = 150
      pl1.y = 150
      sl1.x = 480
      sl1.y = 250
      sl2.x = 810
      sl2.y = 150
      fl1.x = 1140
      fl1.y = 150
      fa1.x = 1270
      fa1.y = 150
      pl2.x = 1400
      pl2.y = 250
      player.visible = true
      pl1.visible = true
      pl2.visible = true
      sl1.visible = true
      sl2.visible = true
      fl1.visible = true
      fa1.visible = true
      c1.y = 200
      c2.y = 100
      c3.y = 100
      il1.y = 900
      il2.y = 900
      pl3.y = 900
      pl4.y = 900
      pl5.y = 900
      fa2.y = 900
      fa3.y = 900
      ml1.y = 900
      ml2.y = 900
      ml3.y = 900
      c1.x = 380
      c2.x = 610
      c3.x = 840
    }

    if (level === 11) {
      s1.play()
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      jl1.y = 900
      jl2.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      level = 11
      gameState = "play"
      player.x = 150
      player.y = 200
      player.visible = true
      pl1.x = 150
      pl1.y = 250
      pl1.visible = true
      sl1.x = 480
      sl1.y = 150
      sl1.visible = true
      il1.x = 680
      il1.y = 150
      il1.visible = true
      sl2.x = 880
      sl2.y = 150
      sl2.visible = true
      il2.x = 1080
      il2.y = 150
      il2.visible = true
      pl2.x = 1300
      pl2.y = 250
      pl2.visible = true
      c1.y = 100
      c2.y = 100
      c3.y = 100
      c1.x = 380
      c2.x = 610
      c3.x = 840
    }

    if (level === 12) {
      s1.play()
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      level = 12
      gameState = "play"
      pl1.x = 150
      pl1.y = 250
      pl1.visible = true
      player.x = 150
      player.y = 200
      player.visible = true
      jl1.x = 380
      jl1.y = 250
      jl1.visible = true
      fa1.x = 610
      fa1.y = 100
      fa1.visible = true
      jl2.x = 840
      jl2.y = 250
      jl2.visible = true
      pl2.x = 1300
      pl2.y = 250
      pl2.visible = true
      sl1.y = 900
      sl2.y = 900
      il1.y = 900
      il2.y = 900
      pl3.y = 900
      pl4.y = 900
      pl5.y = 900
      c1.x = 380
      c2.x = 610
      c3.x = 840
    }

    if (level === 13) {
      s1.play()
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      level = 13
      gameState = "play"
      player.x = 150
      player.y = 200
      player.visible = true
      pl1.x = 150
      pl1.y = 250
      pl1.visible = true
      jl1.x = 380
      jl1.y = 250
      jl1.visible = true
      fa1.x = 840
      fa1.y = 150
      fa1.visible = true
      jl2.x = 1070
      jl2.y = 250
      jl2.visible = true
      fa2.x = 1300
      fa2.y = 150
      fa2.visible = true
      pl2.x = 1550
      pl2.y = 250
      pl2.visible = true
      c1.x = 380
      c2.x = 610
      c3.x = 840
    }

    if (level === 14) {
      s1.play()
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      level = 14
      gameState = "play"
      player.x = 150
      player.y = 200
      player.visible = true
      pl1.x = 150
      pl1.y = 250
      pl1.visible = true
      ml1.x = 380
      ml1.y = 150
      ml1.velocityY = 3
      c1.velocityY = 3
      ml1.visible = true
      c1.x = 380
      c1.y = 100
      fa1.x = 610
      fa1.y = 100
      fa1.visible = true
      c2.x = 610
      c2.y = 50
      fl1.x = 840
      fl1.y = 200
      fl1.visible = true
      c3.x = 840
      c3.y = 150
      pl2.x = 1070
      pl2.y = 250
      pl2.visible = true
      pl3.y = 900
      pl4.y = 900
      pl5.y = 900
      il1.y = 900
      il2.y = 900
      sl1.y = 900
      sl2.y = 900
    }

    if (level === 15) {
      s1.play()
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      level = 15
      gameState = "play"
      player.x = 150
      player.y = 200
      player.visible = true
      pl1.x = 150
      pl1.y = 250
      pl1.visible = true
      fl1.x = 380
      fl1.y = 150
      fl1.visible = true
      pl2.x = 610
      pl2.y = 250
      pl2.visible = true
      fa1.x = 840
      fa1.y = 150
      pl2.visible = true
      ml1.x = 1070
      ml1.y = 150
      ml1.visible = true
      ml1.velocityY = 3
      c1.velocityY = 3
      jl1.x = 1300
      jl1.y = 250
      jl1.visible = true
      sl1.x = 1530
      sl1.y = 150
      sl1.visible = true
      il1.x = 1730
      il1.y = 150
      il1.visible = true
      pl3.x = 1960
      pl3.y = 250
      pl3.visible = true
      c1.x = 1070
      c1.y = 100
      c2.x = 1730
      c2.y = 100
      c3.x = 1470
      c3.y = 100
      sl2.y = 900
      il2.y = 900
      pl4.y = 900
      pl5.y = 900
      fa1.y = 900
      fa2.y = 900
      fa3.y = 900
      jl1.y = 900
      jl2.y = 900
    }


  }


  if (gameState !== "play") {
    object6.visible = false
    pl1.visible = false
    pl2.visible = false
    pl3.visible = false
    pl4.visible = false
    pl5.visible = false
    fl1.visible = false
    fl2.visible = false
    fa1.visible = false
    fa2.visible = false
    fa3.visible = false
    ml1.visible = false
    ml2.visible = false
    ml3.visible = false
    sl1.visible = false
    sl2.visible = false
    il1.visible = false
    il2.visible = false
    jl1.visible = false
    jl2.visible = false
    player.visible = false
  }

  if (gameState === "play") {
    object6.visible = true
    object6.x = 540
    object6.y = 50
  }

  object4.depth = object4.depth + 4

  if (gameState === "play" && mousePressedOver(object6)) {
    object6.y = 900
    gameState = "pause"
    s1.play()
  }

  if (gameState !== "died") {
    object4.visible = false
  } else {
    object4.visible = true
  }

  if (gameState === "pause") {
    object7.visible = true
  } else {
    object7.visible = false
  }

  if (mousePressedOver(object9) && gameState === "level completed") {
    gameState = "levels"
    object9.y = 900
    text1 = ""
  }


  if (player.isTouching(il1)) {
    if (keyDown("right")) {
      pl1.x = pl1.x - 12
      il1.x = il1.x - 12
      il2.x = il2.x - 12
      sl1.x = sl1.x - 12
      sl2.x = sl2.x - 12
      pl2.x = pl2.x - 12
      fa1.x = fa1.x - 12
      fl1.x = fl1.x - 12
      c1.x = c1.x - 12
      c2.x = c2.x - 12
      c3.x = c3.x - 12
      ml1.x = ml1.x - 12
    }
    if (keyDown("left")) {
      pl1.x = pl1.x + 12
      il1.x = il1.x + 12
      il2.x = il2.x + 12
      sl1.x = sl1.x + 12
      sl2.x = sl2.x + 12
      pl2.x = pl2.x + 12
      fa1.x = fa1.x + 12
      fl1.x = fl1.x + 12
      c1.x = c1.x + 12
      c2.x = c2.x + 12
      c3.x = c3.x + 12
      ml1.x = ml1.x + 12
    }
  }
  if (player.isTouching(il2)) {
    if (keyDown("right")) {

      pl1.x = pl1.x - 12
      il1.x = il1.x - 12
      il2.x = il2.x - 12
      sl1.x = sl1.x - 12
      sl2.x = sl2.x - 12
      pl2.x = pl2.x - 12
      fa1.x = fa1.x - 12
      fl1.x = fl1.x - 12
      c1.x = c1.x - 12
      c2.x = c2.x - 12
      c3.x = c3.x - 12
      ml1.x = ml1.x - 12
    }
    if (keyDown("left")) {
      pl1.x = pl1.x + 12
      il1.x = il1.x + 12
      il2.x = il2.x + 12
      sl1.x = sl1.x + 12
      sl2.x = sl2.x + 12
      pl2.x = pl2.x + 12
      fa1.x = fa1.x + 12
      fl1.x = fl1.x + 12
      c1.x = c1.x + 12
      c2.x = c2.x + 12
      c3.x = c3.x + 12
      ml1.x = ml1.x + 12
    }
  }

  if (player.isTouching(sl1)) {
    if (keyDown("right")) {
      pl1.x = pl1.x - 0.1
      il1.x = il1.x - 0.1
      il2.x = il2.x - 0.1
      sl1.x = sl1.x - 0.1
      sl2.x = sl2.x - 0.1
      pl2.x = pl2.x - 0.1
      fa1.x = fa1.x - 0.1
      fl1.x = fl1.x - 0.1
      c1.x = c1.x - 0.1
      c2.x = c2.x - 0.1
      c3.x = c3.x - 0.1
      ml1.x = ml1.x - 0.1
    }
    if (keyDown("left")) {
      pl1.x = pl1.x + 0.1
      il1.x = il1.x + 0.1
      il2.x = il2.x + 0.1
      sl1.x = sl1.x + 0.1
      sl2.x = sl2.x + 0.1
      pl2.x = pl2.x + 0.1
      fa1.x = fa1.x + 0.1
      fl1.x = fl1.x + 0.1
      c1.x = c1.x + 0.1
      c2.x = c2.x + 0.1
      c3.x = c3.x + 0.1
      ml1.x = ml1.x + 0.1
    }
  }
  if (player.isTouching(sl2)) {
    if (keyDown("right")) {
      pl1.x = pl1.x - 0.1
      il1.x = il1.x - 0.1
      il2.x = il2.x - 0.1
      sl1.x = sl1.x - 0.1
      sl2.x = sl2.x - 0.1
      pl2.x = pl2.x - 0.1
      fa1.x = fa1.x - 0.1
      fl1.x = fl1.x - 0.1
      c1.x = c1.x - 0.1
      c2.x = c2.x - 0.1
      c3.x = c3.x - 0.1
      ml1.x = ml1.x - 0.1
    }
    if (keyDown("left")) {
      pl1.x = pl1.x + 0.1
      il1.x = il1.x + 0.1
      il2.x = il2.x + 0.1
      sl1.x = sl1.x + 0.1
      sl2.x = sl2.x + 0.1
      pl2.x = pl2.x + 0.1
      fa1.x = fa1.x + 0.1
      fl1.x = fl1.x + 0.1
      c1.x = c1.x + 0.1
      c2.x = c2.x + 0.1
      c3.x = c3.x + 0.1
      ml1.x = ml1.x + 0.1

    }
  }

  if (player.isTouching(jl1)) {
    player.velocityY = -20
    if (keyDown("right")) {
      pl1.x = pl1.x - 36
      jl1.x = jl1.x - 36
      jl2.x = jl2.x - 36
      pl2.x = pl2.x - 36
      fa1.x = fa1.x - 36
      fl1.x = fl1.x - 36
      c1.x = c1.x - 36
      c2.x = c2.x - 36
      c3.x = c3.x - 36
    }
    if (keyDown("left")) {
      pl1.x = pl1.x + 36
      jl1.x = jl1.x + 36
      jl2.x = jl2.x + 36
      pl2.x = pl2.x + 36
      fa1.x = fa1.x + 36
      fl1.x = fl1.x + 36
      c1.x = c1.x + 36
      c2.x = c2.x + 36
      c3.x = c3.x + 36
    }
  }

  if (player.isTouching(jl2)) {
    player.velocityY = -20
    if (keyDown("right")) {
      pl1.x = pl1.x - 36
      jl1.x = jl1.x - 36
      jl2.x = jl2.x - 36
      pl2.x = pl2.x - 36
      fa1.x = fa1.x - 36
      fl1.x = fl1.x - 36
      c1.x = c1.x - 36
      c2.x = c2.x - 36
      c3.x = c3.x - 36
    }
    if (keyDown("left")) {
      pl1.x = pl1.x + 36
      jl1.x = jl1.x + 36
      jl2.x = jl2.x + 36
      pl2.x = pl2.x + 36
      fa1.x = fa1.x + 36
      fl1.x = fl1.x + 36
      c1.x = c1.x + 36
      c2.x = c2.x + 36
      c3.x = c3.x + 36
    }
  }

  if (gameState === "play") {
    if (skinColor === "Red") {
      player.addImage(rerig)
    }
    if (skinColor === "Pink") {
      player.addImage(pirig)
    }
    if (skinColor === "Yellow") {
      player.addImage(yerig)
    }
    if (skinColor === "Green") {
      player.addImage(grrig)
    }
    if (skinColor === "Blue") {
      player.addImage(burig)
    }
    if (skinColor === "Black") {
      player.addImage(blrig)
    }
  }
  player.scale = 0.09


  if (keyDown("right") && gameState === "play") {
    //level 1
    if (level === 1) {
      pl1.x = pl1.x - 6
      pl2.x = pl2.x - 6
      pl3.x = pl3.x - 6
      pl4.x = pl4.x - 6
      pl5.x = pl5.x - 6
      c1.x = c1.x - 6
      c2.x = c2.x - 6
      c3.x = c3.x - 6
    }

    //level 2
    if (level === 2) {
      pl1.x = pl1.x - 6
      fl1.x = fl1.x - 6
      pl3.x = pl3.x - 6
      fl2.x = fl2.x - 6
      pl5.x = pl5.x - 6
      c1.x = c1.x - 6
      c2.x = c2.x - 6
      c3.x = c3.x - 6
    }

    //level 3
    if (level === 3) {
      pl1.x = pl1.x - 6
      fl1.x = fl1.x - 6
      pl3.x = pl3.x - 6
      fl2.x = fl2.x - 6
      pl2.x = pl2.x - 6
      pl4.x = pl4.x - 6
      c1.x = c1.x - 6
      c2.x = c2.x - 6
      c3.x = c3.x - 6
    }

    //level 4
    if (level === 4) {
      pl1.x = pl1.x - 6
      fa1.x = fa1.x - 6
      fa2.x = fa2.x - 6
      fa3.x = fa3.x - 6
      pl2.x = pl2.x - 6
      c1.x = c1.x - 6
      c2.x = c2.x - 6
      c3.x = c3.x - 6
    }

    //level 5
    if (level === 5) {
      pl1.x = pl1.x - 6
      fa1.x = fa1.x - 6
      fa2.x = fa2.x - 6
      pl2.x = pl2.x - 6
      fl1.x = fl1.x - 6
      c1.x = c1.x - 6
      c2.x = c2.x - 6
      c3.x = c3.x - 6
    }

    //level 6
    if (level === 6) {
      pl1.x = pl1.x - 6
      ml1.x = ml1.x - 6
      ml2.x = ml2.x - 6
      pl2.x = pl2.x - 6
      ml3.x = ml3.x - 6
      c1.x = c1.x - 6
      c2.x = c2.x - 6
      c3.x = c3.x - 6
    }

    //level 7
    if (level === 7) {
      pl1.x = pl1.x - 6
      ml1.x = ml1.x - 6
      ml2.x = ml2.x - 6
      pl2.x = pl2.x - 6
      fa1.x = fa1.x - 6
      c1.x = c1.x - 6
      c2.x = c2.x - 6
      c3.x = c3.x - 6
    }

    //level 8
    if (level === 8) {
      pl1.x = pl1.x - 6
      il1.x = il1.x - 6
      il2.x = il2.x - 6
      pl2.x = pl2.x - 6
      fa1.x = fa1.x - 6
      fl1.x = fl1.x - 6
      c1.x = c1.x - 6
      c2.x = c2.x - 6
      c3.x = c3.x - 6
    }

    //level 9
    if (level === 9) {
      pl1.x = pl1.x - 6
      il1.x = il1.x - 6
      il2.x = il2.x - 6
      pl2.x = pl2.x - 6
      fa1.x = fa1.x - 6
      fl1.x = fl1.x - 6
      c1.x = c1.x - 6
      c2.x = c2.x - 6
      c3.x = c3.x - 6
    }

    //level 10
    if (level === 10) {
      pl1.x = pl1.x - 6
      sl1.x = sl1.x - 6
      sl2.x = sl2.x - 6
      pl2.x = pl2.x - 6
      fa1.x = fa1.x - 6
      fl1.x = fl1.x - 6
      c1.x = c1.x - 6
      c2.x = c2.x - 6
      c3.x = c3.x - 6
    }

    //level 11
    if (level === 11) {
      pl1.x = pl1.x - 6
      sl1.x = sl1.x - 6
      sl2.x = sl2.x - 6
      pl2.x = pl2.x - 6
      il1.x = il1.x - 6
      il2.x = il2.x - 6
      c1.x = c1.x - 6
      c2.x = c2.x - 6
      c3.x = c3.x - 6
    }

    //level 12
    if (level === 12) {
      pl1.x = pl1.x - 6
      jl1.x = jl1.x - 6
      jl2.x = jl2.x - 6
      pl2.x = pl2.x - 6
      fa1.x = fa1.x - 6
      fl1.x = fl1.x - 6
      c1.x = c1.x - 6
      c2.x = c2.x - 6
      c3.x = c3.x - 6
    }

    //level 13
    if (level === 13) {
      pl1.x = pl1.x - 6
      jl1.x = jl1.x - 6
      jl2.x = jl2.x - 6
      pl2.x = pl2.x - 6
      fa1.x = fa1.x - 6
      fa2.x = fa2.x - 6
      c1.x = c1.x - 6
      c2.x = c2.x - 6
      c3.x = c3.x - 6
    }

    //level 14
    if (level === 14) {
      pl1.x = pl1.x - 6
      fl1.x = fl1.x - 6
      fa1.x = fa1.x - 6
      ml1.x = ml1.x - 6
      pl2.x = pl2.x - 6
      c1.x = c1.x - 6
      c2.x = c2.x - 6
      c3.x = c3.x - 6
    }

    //level 15
    if (level === 15) {
      pl1.x = pl1.x - 6
      fl1.x = fl1.x - 6
      fa1.x = fa1.x - 6
      ml1.x = ml1.x - 6
      pl2.x = pl2.x - 6
      pl3.x = pl3.x - 6
      il1.x = il1.x - 6
      sl1.x = sl1.x - 6
      c1.x = c1.x - 6
      c2.x = c2.x - 6
      c3.x = c3.x - 6
    }
    if (skinColor === "Red") {
      player.addImage(rerig)
    }
    if (skinColor === "Pink") {
      player.addImage(pirig)
    }
    if (skinColor === "Yellow") {
      player.addImage(yerig)
    }
    if (skinColor === "Green") {
      player.addImage(grrig)
    }
    if (skinColor === "Blue") {
      player.addImage(blrig)
    }
    if (skinColor === "Black") {
      player.addImage(blrig)
    }
  }

  if (keyDown("left") && gameState === "play") {
    //level 1
    if (level === 1) {
      pl1.x = pl1.x + 6
      pl2.x = pl2.x + 6
      pl3.x = pl3.x + 6
      pl4.x = pl4.x + 6
      pl5.x = pl5.x + 6
      c1.x = c1.x + 6
      c2.x = c2.x + 6
      c3.x = c3.x + 6
    }

    //level 2
    if (level === 2) {
      pl1.x = pl1.x + 6
      fl1.x = fl1.x + 6
      pl3.x = pl3.x + 6
      fl2.x = fl2.x + 6
      pl5.x = pl5.x + 6
      c1.x = c1.x + 6
      c2.x = c2.x + 6
      c3.x = c3.x + 6
    }

    //level 3
    if (level === 3) {
      pl1.x = pl1.x + 6
      fl1.x = fl1.x + 6
      pl3.x = pl3.x + 6
      fl2.x = fl2.x + 6
      pl2.x = pl2.x + 6
      pl4.x = pl4.x + 6
      c1.x = c1.x + 6
      c2.x = c2.x + 6
      c3.x = c3.x + 6
    }

    //level 4
    if (level === 4) {
      pl1.x = pl1.x + 6
      fa1.x = fa1.x + 6
      fa2.x = fa2.x + 6
      fa3.x = fa3.x + 6
      pl2.x = pl2.x + 6
      c1.x = c1.x + 6
      c2.x = c2.x + 6
      c3.x = c3.x + 6
    }

    //level 5
    if (level === 5) {
      pl1.x = pl1.x + 6
      fa1.x = fa1.x + 6
      fa2.x = fa2.x + 6
      pl2.x = pl2.x + 6
      fl1.x = fl1.x + 6
      c1.x = c1.x + 6
      c2.x = c2.x + 6
      c3.x = c3.x + 6
    }

    //level 6
    if (level === 6) {
      pl1.x = pl1.x + 6
      ml1.x = ml1.x + 6
      ml2.x = ml2.x + 6
      pl2.x = pl2.x + 6
      ml3.x = ml3.x + 6
      c1.x = c1.x + 6
      c2.x = c2.x + 6
      c3.x = c3.x + 6
    }

    //level 7
    if (level === 7) {
      pl1.x = pl1.x + 6
      ml1.x = ml1.x + 6
      ml2.x = ml2.x + 6
      pl2.x = pl2.x + 6
      fa1.x = fa1.x + 6
      c1.x = c1.x + 6
      c2.x = c2.x + 6
      c3.x = c3.x + 6
    }

    //level 8
    if (level === 8) {
      pl1.x = pl1.x + 6
      il1.x = il1.x + 6
      il2.x = il2.x + 6
      pl2.x = pl2.x + 6
      fa1.x = fa1.x + 6
      fl1.x = fl1.x + 6
      c1.x = c1.x + 6
      c2.x = c2.x + 6
      c3.x = c3.x + 6
    }

    //level 9
    if (level === 9) {
      pl1.x = pl1.x + 6
      il1.x = il1.x + 6
      il2.x = il2.x + 6
      pl2.x = pl2.x + 6
      fa1.x = fa1.x + 6
      fl1.x = fl1.x + 6
      c1.x = c1.x + 6
      c2.x = c2.x + 6
      c3.x = c3.x + 6
    }

    //level 10
    if (level === 10) {
      pl1.x = pl1.x + 6
      sl1.x = sl1.x + 6
      sl2.x = sl2.x + 6
      pl2.x = pl2.x + 6
      fa1.x = fa1.x + 6
      fl1.x = fl1.x + 6
      c1.x = c1.x + 6
      c2.x = c2.x + 6
      c3.x = c3.x + 6
    }

    //level 11
    if (level === 11) {
      pl1.x = pl1.x + 6
      sl1.x = sl1.x + 6
      sl2.x = sl2.x + 6
      pl2.x = pl2.x + 6
      il1.x = il1.x + 6
      il2.x = il2.x + 6
      c1.x = c1.x + 6
      c2.x = c2.x + 6
      c3.x = c3.x + 6
    }

    //level 12
    if (level === 12) {
      pl1.x = pl1.x + 6
      jl1.x = jl1.x + 6
      jl2.x = jl2.x + 6
      pl2.x = pl2.x + 6
      fa1.x = fa1.x + 6
      fl1.x = fl1.x + 6
      c1.x = c1.x + 6
      c2.x = c2.x + 6
      c3.x = c3.x + 6
    }

    //level 13
    if (level === 13) {
      pl1.x = pl1.x + 6
      jl1.x = jl1.x + 6
      jl2.x = jl2.x + 6
      pl2.x = pl2.x + 6
      fa1.x = fa1.x + 6
      fa2.x = fa2.x + 6
      c1.x = c1.x + 6
      c2.x = c2.x + 6
      c3.x = c3.x + 6
    }

    //level 14
    if (level === 14) {
      pl1.x = pl1.x + 6
      fl1.x = fl1.x + 6
      fa1.x = fa1.x + 6
      ml1.x = ml1.x + 6
      pl2.x = pl2.x + 6
      c1.x = c1.x + 6
      c2.x = c2.x + 6
      c3.x = c3.x + 6
    }

    //level 15
    if (level === 15) {
      pl1.x = pl1.x + 6
      fl1.x = fl1.x + 6
      fa1.x = fa1.x + 6
      ml1.x = ml1.x + 6
      pl2.x = pl2.x + 6
      pl3.x = pl3.x + 6
      il1.x = il1.x + 6
      sl1.x = sl1.x + 6
      c1.x = c1.x + 6
      c2.x = c2.x + 6
      c3.x = c3.x + 6
    }

    if (skinColor === "Red") {
      player.addImage(relef)
    }
    if (skinColor === "Pink") {
      player.addImage(pillef)
    }
    if (skinColor === "Yellow") {
      player.addImage(yelef)
    }
    if (skinColor === "Green") {
      player.addImage(grlef)
    }
    if (skinColor === "Blue") {
      player.addImage(bulef)
    }
    if (skinColor === "Black") {
      player.addImage(bllef)
    }
  }
  if (keyDown("up") && gameState === "play" && player.y > 90) {
    player.velocityY = -6


  }

  player.velocityY = player.velocityY + 0.8

  if (player.y > 305 && gameState === "play") {
    gameState = "died"
    s4.play()
  }

  if (player.isTouching(fa1)) {
    fa1.velocityY = 3
  }
   else{
     fa1.velocityY = 0
   }
  if (player.isTouching(fa2)) {
    fa2.velocityY = 3
  }
else{
      fa2.velocityY = 0
}
  if (player.isTouching(fa3)) {
    fa3.velocityY = 3
  }
  else{
      fa3.velocityY = 0
  }
  if (level === 6) {
    if (ml1.y > 250) {
      ml1.velocityY = -3
      ml3.velocityY = -3
      c1.velocityY = -3
      c3.velocityY = -3
    }
    if (ml1.y < 80) {
      ml1.velocityY = 3
      ml3.velocityY = 3
      c1.velocityY = 3
      c3.velocityY = 3
    }
    if (ml2.y > 250) {
      ml2.velocityY = -3
      c2.velocityY = -3
    }
    if (ml2.y < 80) {
      ml2.velocityY = 3
      c2.velocityY = 3
    }
  }
  if (level === 7) {
    if (ml1.y > 250) {
      ml1.velocityY = -3

      c1.velocityY = -3

    }
    if (ml1.y < 80) {
      ml1.velocityY = 3

      c1.velocityY = 3

    }
    if (ml2.y > 250) {
      ml2.velocityY = -3

    }
    if (ml2.y < 80) {
      ml2.velocityY = 3

    }
  }

  if (level === 14) {
    if (ml1.y > 250) {
      ml1.velocityY = -3

      c1.velocityY = -3

    }
    if (ml1.y < 80) {
      ml1.velocityY = 3

      c1.velocityY = 3

    }

  }

  if (level === 15) {
    if (ml1.y > 250) {
      ml1.velocityY = -3

      c1.velocityY = -3

    }
    if (ml1.y < 80) {
      ml1.velocityY = 3

      c1.velocityY = 3

    }

  }

  if (player.isTouching(c1) && gameState === "play") {
    c1.y = 900
    cointo = cointo + 1
    coinlv = coinlv + 1
    s3.play()
  }
  if (player.isTouching(c2) && gameState === "play") {
    c2.y = 900
    cointo = cointo + 1
    coinlv = coinlv + 1
    s3.play()
  }
  if (player.isTouching(c3) && gameState === "play") {
    c3.y = 900
    cointo = cointo + 1
    coinlv = coinlv + 1
    s3.play()
  }

  //get level finished
  if (player.isTouching(pl5) && level === 1) {
    gameState = "levels"
  }

  if (player.isTouching(pl5) && level === 2) {
    gameState = "levels"
  }

  if (player.isTouching(pl4) && level === 3) {
    gameState = "levels"
  }

  if (player.isTouching(pl2) && level === 4) {
    gameState = "levels"
  }

  if (player.isTouching(pl2) && level === 5) {
    gameState = "levels"
  }

  if (player.isTouching(pl2) && level === 6) {
    gameState = "levels"
  }

  if (player.isTouching(pl2) && level === 7) {
    gameState = "levels"
  }
  if (player.isTouching(pl2) && level === 8) {
    gameState = "levels"
  }
  if (player.isTouching(pl2) && level === 9) {
    gameState = "levels"
  }

  if (player.isTouching(pl2) && level === 10) {
    gameState = "levels"
  }

  if (player.isTouching(pl2) && level === 11) {
    gameState = "levels"
  }

  if (player.isTouching(pl2) && level === 12) {
    gameState = "levels"
  }

  if (player.isTouching(pl2) && level === 13) {
    gameState = "levels"
  }

  if (player.isTouching(pl2) && level === 14) {
    gameState = "levels"
  }

  if (player.isTouching(pl3) && level === 15) {
    gameState = "levels"
  }


  if (gameState === "play") {
    c1.visible = true
    c2.visible = true
    c3.visible = true
  } else {
    c1.visible = false
    c2.visible = false
    c3.visible = false
  }

  //show text
  showtext();

  //change menu
  changemenu();

  //level
  levels();

  //buyskin
  buyskin();

  if (gameState !== "shop") {
    bla.visible = false
    blu.visible = false
    gre.visible = false
    yel.visible = false
    pin.visible = false
    red.visible = false
    b1.visible = false
    b2.visible = false
    b3.visible = false
    b4.visible = false
    b5.visible = false
    b6.visible = false
  } else {
    bla.visible = true
    blu.visible = true
    gre.visible = true
    yel.visible = true
    pin.visible = true
    red.visible = true
    b1.visible = true
    b2.visible = true
    b3.visible = true
    b4.visible = true
    b5.visible = true
    b6.visible = true
  }


  if (gameState === "levels") {

    player.visible = false
    pl1.visible = false
    pl2.visible = false
    pl3.visible = false
    pl4.visible = false
    pl5.visible = false
    lv1.visible = true
    lv2.visible = true
    lv3.visible = true
    lv4.visible = true
    lv5.visible = true
    lv6.visible = true
    lv7.visible = true
    lv8.visible = true
    lv9.visible = true
    lv10.visible = true
    lv11.visible = true
    lv12.visible = true
    lv13.visible = true
    lv14.visible = true
    lv15.visible = true
  }

  if (gameState === "died") {
    object5.visible = true
  } else {
    object5.visible = false
  }

  player.collide(pl1)
  player.collide(pl2)
  player.collide(pl3)
  player.collide(pl4)
  player.collide(pl5)
  player.collide(fa1)
  player.collide(fa2)
  player.collide(fa3)
  player.collide(ml1)
  player.collide(ml2)
  player.collide(ml3)
  player.collide(il1)
  player.collide(il2)
  player.collide(sl1)
  player.collide(sl2)
  player.collide(jl1)
  player.collide(jl2)



  drawSprites();
}

function showtext() {
  //text for menu
  if (gameState === "menu") {
    textSize(45)
    textFont('Georgia');
    fill("darkblue")
    text("Don't Die Robot", 150, 80)
  }

  //text for levels
  if (gameState === "levels" && GP === 2) {
    textSize(35);
    textFont('Georgia');
    fill("darkblue")
    text(text2, 200, 50)
  }

  //text for shop
  if (gameState === "shop") {
    textSize(35)
    fill("darkblue")
    textFont('Georgia');
    text("Shop", 50, 60)
    fill("black")
    text("X" + cointo, 530, 60)
    textSize(25)
    text("Free", 30, 220)
    text("$5", 130, 220)
    text("$5", 230, 220)
    text("$5", 330, 220)
    text("$5", 430, 220)
    text("$5", 530, 220)
  }

  //text for death
  if (gameState === "died") {
    textSize(35)
    textFont('Georgia');
    fill("black")
    text("YOU DIED!", 200, 50)
  }

  //level1
  if (level === 1 && gameState === "play") {
    textSize(15)
    textFont('Georgia');
    fill("black")
    text("1.Press the right arrow and left arrow to move", 30, 30)
    text("2.Press the up arrow and to jump", 30, 50)
    text("3.You can collect coins to buy skins", 30, 70)
  }

  //level 2
  if (level === 2 && gameState === "play") {
    textSize(15)
    textFont('Georgia');
    fill("black")
    text("There will be fake platforms not ", 30, 30)
    text("everything is a real platform", 30, 50)
  }

  //level 4
  if (level === 4 && gameState === "play") {
    textSize(15)
    textFont('Georgia');
    fill("black")
    text("There are also platforms which won't", 30, 30)
    text(" stay still on standing above them", 30, 50)
  }

  //level 6
  if (level === 6 && gameState === "play") {
    textSize(15)
    textFont('Georgia');
    fill("black")
    text("Some platoforms will move with or without ", 30, 30)
    text("contact and might make it hard", 30, 50)
  }

  //level 8
  if (level === 8 && gameState === "play") {
    textSize(15)
    textFont('Georgia');
    fill("black")
    text("There is also a type of platform ", 30, 30)
    text("which speeds up the player with contact", 30, 50)
  }

  //level 10
  if (level === 10 && gameState === "play") {
    textSize(15)
    textFont('Georgia');
    fill("black")
    text("There is also a type of platform ", 30, 30)
    text("which slows the player with contact", 30, 50)
  }

  //level 12
  if (level === 12 && gameState === "play") {
    textSize(15)
    textFont('Georgia');
    fill("black")
    text("There is a type of platform which helps", 30, 30)
    text("the player with the jump on contact", 30, 50)
  }

  if (gameState === "pause") {
    textSize(45)
    textFont('Georgia');
    fill("blue")
    text("PAUSED", 230, 50)
  }



}

function changemenu() {
  //go to level from menu
  if (GP === 1 && mousePressedOver(object1)) {
    s1.play()
    gameState = "levels"
    GP = 2
    object1.visible = false
    object2.visible = false
    lv1.visible = true
    lv2.visible = true
    lv3.visible = true
    lv4.visible = true
    lv5.visible = true
    lv6.visible = true
    lv7.visible = true
    lv8.visible = true
    lv9.visible = true
    lv10.visible = true
    lv11.visible = true
    lv12.visible = true
    lv13.visible = true
    lv14.visible = true
    lv15.visible = true
    conub.visible = false
  }

  //go to shop
  if (GP === 1 && mousePressedOver(object2)) {
    s1.play()
    gameState = "shop"
    GP = 1.5
    object1.visible = false
    object2.visible = false
    lv1.visible = false
    lv2.visible = false
    lv3.visible = false
    lv4.visible = false
    lv5.visible = false
    lv6.visible = false
    lv7.visible = false
    lv8.visible = false
    lv9.visible = false
    lv10.visible = false
    lv11.visible = false
    lv12.visible = false
    lv13.visible = false
    lv14.visible = false
    lv15.visible = false
    conub.visible = true
  }

  if (mousePressedOver(object5) && gameState === "died") {
    object5.visible = false
    object5.y = 250
    gameState = "levels"
    lv1.visible = true
    lv2.visible = true
    lv3.visible = true
    lv4.visible = true
    lv5.visible = true
    lv6.visible = true
    lv7.visible = true
    lv8.visible = true
    lv9.visible = true
    lv10.visible = true
    lv11.visible = true
    lv12.visible = true
    lv13.visible = true
    lv14.visible = true
    lv15.visible = true
    conub.visible = false
  }

  
  if (mousePressedOver(b1) && GP === 1.5 && piow === 0) {
    piow = 1
  }
  if (mousePressedOver(b2) && GP === 1.5 && yeow === 0) {
    yeow = 1
  }
  if (mousePressedOver(b3) && GP === 1.5 && grow === 0) {
    grow = 1
  }
  if (mousePressedOver(b4) && GP === 1.5 && buow === 0) {
    buow = 1
  }
  if (mousePressedOver(b5) && GP === 1.5 && blow === 0) {
    blow = 1
  }



  //continue
  if (mousePressedOver(object4) && gameState === "died") {
    gameState = "play"
    m1.stop()
    if (level === 1) {
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      s1.play()
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      il1.y = 900
      il2.y = 900
      il1.y = 900
      il2.y = 900
      ml1.velocityY = 0
      ml2.velocityY = 0
      ml3.velocityY = 0
      ml1.y = 900
      ml2.y = 900
      ml3.y = 900
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      pl1.visible = true
      pl3.visible = true
      pl2.visible = true
      pl4.visible = true
      pl5.visible = true
      player.visible = true
      c1.visible = true
      c2.visible = true
      c3.visible = true
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 1
      gameState = "play"
      GP = 3
      pl1.x = 150
      pl1.y = 250
      pl2.x = 380
      pl2.y = 150
      pl3.x = 610
      pl3.y = 250
      pl4.x = 840
      pl4.y = 150
      pl5.x = 1070
      pl5.y = 250
      player.x = 150
      player.y = 200
      fa1.y = 900
      fa2.y = 900
      fa3.y = 900
      fl1.y = 900
      fl2.y = 900
      c1.x = 380
      c1.y = 100
      c2.y = 200
      c2.x = 610
      c3.y = 100
      c3.x = 840
    }

    if (level === 2) {
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      s1.play()
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      il1.y = 900
      il2.y = 900
      il1.y = 900
      il2.y = 900
      ml1.velocityY = 0
      ml2.velocityY = 0
      ml3.velocityY = 0
      ml1.y = 900
      ml2.y = 900
      ml3.y = 900
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 2
      gameState = "play"
      pl1.x = 150
      pl1.y = 250
      fl1.x = 380
      fl1.y = 150
      pl3.x = 610
      pl3.y = 250
      fl2.x = 840
      fl2.y = 150
      pl5.x = 1070
      pl5.y = 250

      c1.x = 380
      c1.y = 100
      c2.x = 610
      c2.y = 200
      c3.x = 840
      c3.y = 100

      pl2.y = 900
      pl4.y = 900

      pl1.visible = true
      fl1.visible = true
      pl3.visible = true
      fl2.visible = true
      pl5.visible = true

      player.x = 150
      player.y = 200
      player.visible = true
    }

    if (level === 3) {
      s1.play()
fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      il1.y = 900
      il2.y = 900
      il1.y = 900
      il2.y = 900
      ml1.velocityY = 0
      ml2.velocityY = 0
      ml3.velocityY = 0
      ml1.y = 900
      ml2.y = 900
      ml3.y = 900
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 3
      gameState = "play"
      player.x = 150
      player.y = 200

      pl1.x = 150
      pl1.y = 250
      pl2.x = 380
      pl2.y = 250
      fl1.x = 610
      fl1.y = 250
      fl2.x = 840
      fl2.y = 250
      pl3.x = 1070
      pl3.y = 250
      pl4.x = 1300
      pl4.y = 250
      pl5.y = 900

      pl1.visible = true
      pl2.visible = true
      fl1.visible = true
      pl3.visible = true
      fl2.visible = true
      pl4.visible = true

      c1.x = 490
      c1.y = 150
      c2.x = 745
      c2.y = 150
      c3.x = 1070
      c3.y = 150

      player.visible = true
    }

    if (level === 4) {
      s1.play()
fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      ml1.velocityY = 0
      ml2.velocityY = 0
      ml3.velocityY = 0
      ml1.y = 900
      ml2.y = 900
      ml3.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 4
      gameState = "play"
      pl1.x = 150
      pl1.y = 150
      fa1.x = 380
      fa1.y = 150
      fa2.x = 610
      fa2.y = 150
      fa3.x = 840
      pl2.x = 1070
      pl2.y = 250
      player.x = 150
      player.y = 150
      pl1.visible = true
      pl2.visible = true
      fa1.visible = true
      fa2.visible = true
      fa3.visible = true
      player.visible = true
      c1.y = 100
      c2.y = 100
      c3.y = 100
      pl3.y = 900
      pl4.y = 900
      pl5.y = 900
      fl1.y = 900
      fl2.y = 900

    }

    if (level === 5) {
      s1.play()
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      ml1.velocityY = 0
      ml2.velocityY = 0
      ml3.velocityY = 0
      ml1.y = 900
      ml2.y = 900
      ml3.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 5
      gameState = "play"
      player.x = 150
      player.y = 200
      player.visible = true
      pl1.x = 150
      pl1.y = 250
      pl1.visible = true
      fl1.x = 1070
      fl1.y = 150
      fl1.visible = true
      fa1.x = 380
      fa1.y = 200
      fa1.visible = true
      fa2.x = 610
      fa2.y = 150
      fa2.visible = true
      fa3.y = 900
      pl2.x = 1100
      pl2.y = 250
      pl3.y = 900
      pl4.y = 900
      pl5.y = 900
      fl2.y = 900
      c1.y = 150
      c2.y = 100
      fl1.x = c3.x
      pl2.visible = true

    }

    if (level === 6) {
      s1.play()
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 6
      gameState = "play"
      player.x = 150
      player.y = 200
      pl1.x = 150
      pl1.y = 250
      ml1.x = 380
      ml1.y = 150
      ml2.x = 610
      ml2.y = 250
      ml3.x = 840
      ml3.y = 150
      ml1.velocityY = 3
      ml2.velocityY = -3
      ml3.velocityY = 3
      c1.velocityY = 3
      c2.velocityY = -3
      c3.velocityY = 3
      player.visible = true
      pl1.visible = true
      ml1.visible = true
      ml2.visible = true
      ml3.visible = true
      pl2.visible = true
      pl2.x = 1150
      pl2.y = 250
    }

    if (level === 7) {
      s1.play()
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 7
      gameState = "play"
      player.x = 150
      player.y = 200
      pl1.x = 150
      pl1.y = 250
      ml1.x = 380
      ml1.y = 250
      fa1.x = 610
      fa1.y = 100
      ml2.x = 840
      ml2.y = 250
      pl2.x = 1070
      pl2.y = 250
      pl2.visible = true
      player.visible = true
      pl1.visible = true
      ml1.visible = true
      ml2.visible = true
      fa1.visible = true
      fl1.y = 900
      fl2.y = 900
      ml3.y = 900
      ml1.velocityY = -3
      ml2.velocityY = -3
      c1.velocityY = -3
      c3.velocityY = -3
      c3.x = 840
      c2.x = 610
      c3.y = 70
      c2.y = 50
      c1.y = 200
      pl2.x = 1070
      pl2.y = 250
    }

    if (level === 8) {
      s1.play()
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 8
      gameState = "play"
      player.x = 150
      player.y = 50
      pl1.x = 150
      pl1.y = 150
      il1.x = 380
      il1.y = 250
      il2.x = 610
      il2.y = 150
      fl1.x = 840
      fl1.y = 150
      fa1.x = 1070
      fa1.y = 150
      pl2.x = 1200
      pl2.y = 250
      player.visible = true
      pl1.visible = true
      pl2.visible = true
      il1.visible = true
      il2.visible = true
      fl1.visible = true
      fa1.visible = true
      c1.y = 200
      c2.y = 100
      c3.y = 100
    }

    if (level === 9) {
      s1.play()
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 9
      gameState = "play"
      player.x = 150
      player.y = 200
      player.visible = true
      pl1.x = 150
      pl1.y = 250
      pl1.visible = true
      il1.x = 380
      il1.y = 150
      il1.visible = true
      il2.x = 480
      il2.y = 150
      il2.visible = true
      fl1.x = 580
      fl1.y = 150
      fl1.visible = true
      fa1.x = 720
      fa1.y = 150
      fa1.visible = true
      pl2.y = 250
      pl2.x = 1000
      pl2.visible = true
      c1.x = 250
      c1.y = 140
      c2.x = 380
      c2.y = 100
      c3.x = 440
      c3.y = 100

    }

    if (level === 10) {
      s1.play()
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      jl1.y = 900
      jl2.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 10
      gameState = "play"
      player.x = 150
      player.y = 50
      pl1.x = 150
      pl1.y = 150
      sl1.x = 480
      sl1.y = 250
      sl2.x = 810
      sl2.y = 150
      fl1.x = 1140
      fl1.y = 150
      fa1.x = 1270
      fa1.y = 150
      pl2.x = 1400
      pl2.y = 250
      player.visible = true
      pl1.visible = true
      pl2.visible = true
      sl1.visible = true
      sl2.visible = true
      fl1.visible = true
      fa1.visible = true
      c1.y = 200
      c2.y = 100
      c3.y = 100
      il1.y = 900
      il2.y = 900
      pl3.y = 900
      pl4.y = 900
      pl5.y = 900
      fa2.y = 900
      fa3.y = 900
      ml1.y = 900
      ml2.y = 900
      ml3.y = 900
      c1.x = 380
      c2.x = 610
      c3.x = 840
    }

    if (level === 11) {
      s1.play()
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      jl1.y = 900
      jl2.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 11
      gameState = "play"
      player.x = 150
      player.y = 200
      player.visible = true
      pl1.x = 150
      pl1.y = 250
      pl1.visible = true
      sl1.x = 480
      sl1.y = 150
      sl1.visible = true
      il1.x = 680
      il1.y = 150
      il1.visible = true
      sl2.x = 880
      sl2.y = 150
      sl2.visible = true
      il2.x = 1080
      il2.y = 150
      il2.visible = true
      pl2.x = 1300
      pl2.y = 250
      pl2.visible = true
      c1.y = 100
      c2.y = 100
      c3.y = 100
      c1.x = 380
      c2.x = 610
      c3.x = 840
    }

    if (level === 12) {
      s1.play()
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 12
      gameState = "play"
      pl1.x = 150
      pl1.y = 250
      pl1.visible = true
      player.x = 150
      player.y = 200
      player.visible = true
      jl1.x = 380
      jl1.y = 250
      jl1.visible = true
      fa1.x = 610
      fa1.y = 100
      fa1.visible = true
      jl2.x = 840
      jl2.y = 250
      jl2.visible = true
      pl2.x = 1300
      pl2.y = 250
      pl2.visible = true
      sl1.y = 900
      sl2.y = 900
      il1.y = 900
      il2.y = 900
      pl3.y = 900
      pl4.y = 900
      pl5.y = 900
      c1.x = 380
      c2.x = 610
      c3.x = 840
    }

    if (level === 13) {
      s1.play()
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 13
      gameState = "play"
      player.x = 150
      player.y = 200
      player.visible = true
      pl1.x = 150
      pl1.y = 250
      pl1.visible = true
      jl1.x = 380
      jl1.y = 250
      jl1.visible = true
      fa1.x = 840
      fa1.y = 150
      fa1.visible = true
      jl2.x = 1070
      jl2.y = 250
      jl2.visible = true
      fa2.x = 1300
      fa2.y = 150
      fa2.visible = true
      pl2.x = 1550
      pl2.y = 250
      pl2.visible = true
      c1.x = 380
      c2.x = 610
      c3.x = 840
    }

    if (level === 14) {
      s1.play()
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 14
      gameState = "play"
      player.x = 150
      player.y = 200
      player.visible = true
      pl1.x = 150
      pl1.y = 250
      pl1.visible = true
      ml1.x = 380
      ml1.y = 150
      ml1.velocityY = 3
      c1.velocityY = 3
      ml1.visible = true
      c1.x = 380
      c1.y = 100
      fa1.x = 610
      fa1.y = 100
      fa1.visible = true
      c2.x = 610
      c2.y = 50
      fl1.x = 840
      fl1.y = 200
      fl1.visible = true
      c3.x = 840
      c3.y = 150
      pl2.x = 1070
      pl2.y = 250
      pl2.visible = true
      pl3.y = 900
      pl4.y = 900
      pl5.y = 900
      il1.y = 900
      il2.y = 900
      sl1.y = 900
      sl2.y = 900
    }

    if (level === 15) {
      s1.play()
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      c1.velocityY = 0
      c2.velocityY = 0
      c3.velocityY = 0
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 15
      gameState = "play"
      player.x = 150
      player.y = 200
      player.visible = true
      pl1.x = 150
      pl1.y = 250
      pl1.visible = true
      fl1.x = 380
      fl1.y = 150
      fl1.visible = true
      pl2.x = 610
      pl2.y = 250
      pl2.visible = true
      fa1.x = 840
      fa1.y = 150
      pl2.visible = true
      ml1.x = 1070
      ml1.y = 150
      ml1.visible = true
      ml1.velocityY = 3
      c1.velocityY = 3
      jl1.x = 1300
      jl1.y = 250
      jl1.visible = true
      sl1.x = 1530
      sl1.y = 150
      sl1.visible = true
      il1.x = 1730
      il1.y = 150
      il1.visible = true
      pl3.x = 1960
      pl3.y = 250
      pl3.visible = true
      c1.x = 1070
      c1.y = 100
      c2.x = 1730
      c2.y = 100
      c3.x = 1470
      c3.y = 100
      sl2.y = 900
      il2.y = 900
      pl4.y = 900
      pl5.y = 900
      fa1.y = 900
      fa2.y = 900
      fa3.y = 900
      jl1.y = 900
      jl2.y = 900
    }


  }

  //continue
  if (mousePressedOver(object4) && gameState === "died") {
    gameState = "play"
    m1.stop()
    if (level === 1) {
      s1.play()
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      il1.y = 900
      il2.y = 900
      il1.y = 900
      il2.y = 900
      ml1.velocityY = 0
      ml2.velocityY = 0
      ml3.velocityY = 0
      ml1.y = 900
      ml2.y = 900
      ml3.y = 900
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      pl1.visible = true
      pl3.visible = true
      pl2.visible = true
      pl4.visible = true
      pl5.visible = true
      player.visible = true
      c1.visible = true
      c2.visible = true
      c3.visible = true
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 1
      gameState = "play"
      GP = 3
      pl1.x = 150
      pl1.y = 250
      pl2.x = 380
      pl2.y = 150
      pl3.x = 610
      pl3.y = 250
      pl4.x = 840
      pl4.y = 150
      pl5.x = 1070
      pl5.y = 250
      player.x = 150
      player.y = 200
      fa1.y = 900
      fa2.y = 900
      fa3.y = 900
      fl1.y = 900
      fl2.y = 900
      c1.x = 380
      c1.y = 100
      c2.y = 200
      c2.x = 610
      c3.y = 100
      c3.x = 840
    }

    if (level === 2) {
      s1.play()

      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      il1.y = 900
      il2.y = 900
      il1.y = 900
      il2.y = 900
      ml1.velocityY = 0
      ml2.velocityY = 0
      ml3.velocityY = 0
      ml1.y = 900
      ml2.y = 900
      ml3.y = 900
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 2
      gameState = "play"
      pl1.x = 150
      pl1.y = 250
      fl1.x = 380
      fl1.y = 150
      pl3.x = 610
      pl3.y = 250
      fl2.x = 840
      fl2.y = 150
      pl5.x = 1070
      pl5.y = 250

      c1.x = 380
      c1.y = 100
      c2.x = 610
      c2.y = 200
      c3.x = 840
      c3.y = 100

      pl2.y = 900
      pl4.y = 900

      pl1.visible = true
      fl1.visible = true
      pl3.visible = true
      fl2.visible = true
      pl5.visible = true

      player.x = 150
      player.y = 200
      player.visible = true
    }

    if (level === 3) {
      s1.play()
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      il1.y = 900
      il2.y = 900
      il1.y = 900
      il2.y = 900
      ml1.velocityY = 0
      ml2.velocityY = 0
      ml3.velocityY = 0
      ml1.y = 900
      ml2.y = 900
      ml3.y = 900
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 3
      gameState = "play"
      player.x = 150
      player.y = 200

      pl1.x = 150
      pl1.y = 250
      pl2.x = 380
      pl2.y = 250
      fl1.x = 610
      fl1.y = 250
      fl2.x = 840
      fl2.y = 250
      pl3.x = 1070
      pl3.y = 250
      pl4.x = 1300
      pl4.y = 250
      pl5.y = 900

      pl1.visible = true
      pl2.visible = true
      fl1.visible = true
      pl3.visible = true
      fl2.visible = true
      pl4.visible = true

      c1.x = 490
      c1.y = 150
      c2.x = 745
      c2.y = 150
      c3.x = 1070
      c3.y = 150

      player.visible = true
    }

    if (level === 4) {
      s1.play()
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      ml1.velocityY = 0
      ml2.velocityY = 0
      ml3.velocityY = 0
      ml1.y = 900
      ml2.y = 900
      ml3.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 4
      gameState = "play"
      pl1.x = 150
      pl1.y = 150
      fa1.x = 380
      fa1.y = 150
      fa2.x = 610
      fa2.y = 150
      fa3.x = 840
      pl2.x = 1070
      pl2.y = 250
      player.x = 150
      player.y = 150
      pl1.visible = true
      pl2.visible = true
      fa1.visible = true
      fa2.visible = true
      fa3.visible = true
      player.visible = true
      c1.y = 100
      c2.y = 100
      c3.y = 100
      pl3.y = 900
      pl4.y = 900
      pl5.y = 900
      fl1.y = 900
      fl2.y = 900

    }

    if (level === 5) {
      s1.play()
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      ml1.velocityY = 0
      ml2.velocityY = 0
      ml3.velocityY = 0
      ml1.y = 900
      ml2.y = 900
      ml3.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 5
      gameState = "play"
      player.x = 150
      player.y = 200
      player.visible = true
      pl1.x = 150
      pl1.y = 250
      pl1.visible = true
      fl1.x = 1070
      fl1.y = 150
      fl1.visible = true
      fa1.x = 380
      fa1.y = 200
      fa1.visible = true
      fa2.x = 610
      fa2.y = 150
      fa2.visible = true
      fa3.y = 900
      pl2.x = 1100
      pl2.y = 250
      pl3.y = 900
      pl4.y = 900
      pl5.y = 900
      fl2.y = 900
      c1.y = 150
      c2.y = 100
      fl1.x = c3.x
      pl2.visible = true

    }

    if (level === 6) {
      s1.play()
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 6
      gameState = "play"
      player.x = 150
      player.y = 200
      pl1.x = 150
      pl1.y = 250
      ml1.x = 380
      ml1.y = 150
      ml2.x = 610
      ml2.y = 250
      ml3.x = 840
      ml3.y = 150
      ml1.velocityY = 3
      ml2.velocityY = -3
      ml3.velocityY = 3
      c1.velocityY = 3
      c2.velocityY = -3
      c3.velocityY = 3
      player.visible = true
      pl1.visible = true
      ml1.visible = true
      ml2.visible = true
      ml3.visible = true
      pl2.visible = true
      pl2.x = 1150
      pl2.y = 250
    }

    if (level === 7) {
      s1.play()
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 7
      gameState = "play"
      player.x = 150
      player.y = 200
      pl1.x = 150
      pl1.y = 250
      ml1.x = 380
      ml1.y = 250
      fa1.x = 610
      fa1.y = 100
      ml2.x = 840
      ml2.y = 250
      pl2.x = 1070
      pl2.y = 250
      pl2.visible = true
      player.visible = true
      pl1.visible = true
      ml1.visible = true
      ml2.visible = true
      fa1.visible = true
      fl1.y = 900
      fl2.y = 900
      ml3.y = 900
      ml1.velocityY = -3
      ml2.velocityY = -3
      c1.velocityY = -3
      c3.velocityY = -3
      c3.x = 840
      c2.x = 610
      c3.y = 70
      c2.y = 50
      c1.y = 200
      pl2.x = 1070
      pl2.y = 250
    }

    if (level === 8) {
      s1.play()
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 8
      gameState = "play"
      player.x = 150
      player.y = 50
      pl1.x = 150
      pl1.y = 150
      il1.x = 380
      il1.y = 250
      il2.x = 610
      il2.y = 150
      fl1.x = 840
      fl1.y = 150
      fa1.x = 1070
      fa1.y = 150
      pl2.x = 1200
      pl2.y = 250
      player.visible = true
      pl1.visible = true
      pl2.visible = true
      il1.visible = true
      il2.visible = true
      fl1.visible = true
      fa1.visible = true
      c1.y = 200
      c2.y = 100
      c3.y = 100
    }

    if (level === 9) {
      s1.play()
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 9
      gameState = "play"
      player.x = 150
      player.y = 200
      player.visible = true
      pl1.x = 150
      pl1.y = 250
      pl1.visible = true
      il1.x = 380
      il1.y = 150
      il1.visible = true
      il2.x = 480
      il2.y = 150
      il2.visible = true
      fl1.x = 580
      fl1.y = 150
      fl1.visible = true
      fa1.x = 720
      fa1.y = 150
      fa1.visible = true
      pl2.y = 250
      pl2.x = 1000
      pl2.visible = true
      c1.x = 250
      c1.y = 140
      c2.x = 380
      c2.y = 100
      c3.x = 440
      c3.y = 100

    }

    if (level === 10) {
      s1.play()
      jl1.y = 900
      jl2.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 10
      gameState = "play"
      player.x = 150
      player.y = 50
      pl1.x = 150
      pl1.y = 150
      sl1.x = 480
      sl1.y = 250
      sl2.x = 810
      sl2.y = 150
      fl1.x = 1140
      fl1.y = 150
      fa1.x = 1270
      fa1.y = 150
      pl2.x = 1400
      pl2.y = 250
      player.visible = true
      pl1.visible = true
      pl2.visible = true
      sl1.visible = true
      sl2.visible = true
      fl1.visible = true
      fa1.visible = true
      c1.y = 200
      c2.y = 100
      c3.y = 100
      il1.y = 900
      il2.y = 900
      pl3.y = 900
      pl4.y = 900
      pl5.y = 900
      fa2.y = 900
      fa3.y = 900
      ml1.y = 900
      ml2.y = 900
      ml3.y = 900
      c1.x = 380
      c2.x = 610
      c3.x = 840
    }

    if (level === 11) {
      s1.play()
      jl1.y = 900
      jl2.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 11
      gameState = "play"
      player.x = 150
      player.y = 200
      player.visible = true
      pl1.x = 150
      pl1.y = 250
      pl1.visible = true
      sl1.x = 480
      sl1.y = 150
      sl1.visible = true
      il1.x = 680
      il1.y = 150
      il1.visible = true
      sl2.x = 880
      sl2.y = 150
      sl2.visible = true
      il2.x = 1080
      il2.y = 150
      il2.visible = true
      pl2.x = 1300
      pl2.y = 250
      pl2.visible = true
      c1.y = 100
      c2.y = 100
      c3.y = 100
      c1.x = 380
      c2.x = 610
      c3.x = 840
    }

    if (level === 12) {
      s1.play()
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 12
      gameState = "play"
      pl1.x = 150
      pl1.y = 250
      pl1.visible = true
      player.x = 150
      player.y = 200
      player.visible = true
      jl1.x = 380
      jl1.y = 250
      jl1.visible = true
      fa1.x = 610
      fa1.y = 100
      fa1.visible = true
      jl2.x = 840
      jl2.y = 250
      jl2.visible = true
      pl2.x = 1300
      pl2.y = 250
      pl2.visible = true
      sl1.y = 900
      sl2.y = 900
      il1.y = 900
      il2.y = 900
      pl3.y = 900
      pl4.y = 900
      pl5.y = 900
      c1.x = 380
      c2.x = 610
      c3.x = 840
    }

    if (level === 13) {
      s1.play()
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 13
      gameState = "play"
      player.x = 150
      player.y = 200
      player.visible = true
      pl1.x = 150
      pl1.y = 250
      pl1.visible = true
      jl1.x = 380
      jl1.y = 250
      jl1.visible = true
      fa1.x = 840
      fa1.y = 150
      fa1.visible = true
      jl2.x = 1070
      jl2.y = 250
      jl2.visible = true
      fa2.x = 1300
      fa2.y = 150
      fa2.visible = true
      pl2.x = 1550
      pl2.y = 250
      pl2.visible = true
      c1.x = 380
      c2.x = 610
      c3.x = 840
    }

    if (level === 14) {
      s1.play()
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 14
      gameState = "play"
      player.x = 150
      player.y = 200
      player.visible = true
      pl1.x = 150
      pl1.y = 250
      pl1.visible = true
      ml1.x = 380
      ml1.y = 150
      ml1.velocityY = 3
      c1.velocityY = 3
      ml1.visible = true
      c1.x = 380
      c1.y = 100
      fa1.x = 610
      fa1.y = 100
      fa1.visible = true
      c2.x = 610
      c2.y = 50
      fl1.x = 840
      fl1.y = 200
      fl1.visible = true
      c3.x = 840
      c3.y = 150
      pl2.x = 1070
      pl2.y = 250
      pl2.visible = true
      pl3.y = 900
      pl4.y = 900
      pl5.y = 900
      il1.y = 900
      il2.y = 900
      sl1.y = 900
      sl2.y = 900
    }

    if (level === 15) {
      s1.play()
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 15
      gameState = "play"
      player.x = 150
      player.y = 200
      player.visible = true
      pl1.x = 150
      pl1.y = 250
      pl1.visible = true
      fl1.x = 380
      fl1.y = 150
      fl1.visible = true
      pl2.x = 610
      pl2.y = 250
      pl2.visible = true
      fa1.x = 840
      fa1.y = 150
      pl2.visible = true
      ml1.x = 1070
      ml1.y = 150
      ml1.visible = true
      ml1.velocityY = 3
      c1.velocityY = 3
      jl1.x = 1300
      jl1.y = 250
      jl1.visible = true
      sl1.x = 1530
      sl1.y = 150
      sl1.visible = true
      il1.x = 1730
      il1.y = 150
      il1.visible = true
      pl3.x = 1960
      pl3.y = 250
      pl3.visible = true
      c1.x = 1070
      c1.y = 100
      c2.x = 1730
      c2.y = 100
      c3.x = 1470
      c3.y = 100
      sl2.y = 900
      il2.y = 900
      pl4.y = 900
      pl5.y = 900
      fa1.y = 900
      fa2.y = 900
      fa3.y = 900
      jl1.y = 900
      jl2.y = 900
    }


  }

}

function levels() {
  if (GP === 2 && gameState === "levels") {
    //level1
    if (mousePressedOver(lv1) && gameState === "levels") {
      s1.play()
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      il1.y = 900
      il2.y = 900
      il1.y = 900
      il2.y = 900
      ml1.velocityY = 0
      ml2.velocityY = 0
      ml3.velocityY = 0
      ml1.y = 900
      ml2.y = 900
      ml3.y = 900
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      pl1.visible = true
      pl3.visible = true
      pl2.visible = true
      pl4.visible = true
      pl5.visible = true
      player.visible = true
      c1.visible = true
      c2.visible = true
      c3.visible = true
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 1
      gameState = "play"
      GP = 3
      pl1.x = 150
      pl1.y = 250
      pl2.x = 380
      pl2.y = 150
      pl3.x = 610
      pl3.y = 250
      pl4.x = 840
      pl4.y = 150
      pl5.x = 1070
      pl5.y = 250
      player.x = 150
      player.y = 200
      fa1.y = 900
      fa2.y = 900
      fa3.y = 900
      fl1.y = 900
      fl2.y = 900
      c1.y = 100
      c2.y = 200
      c3.y = 100
    }

    //level2
    if (mousePressedOver(lv2) && GP === 2) {
      s1.play()
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      il1.y = 900
      il2.y = 900
      il1.y = 900
      il2.y = 900
      ml1.velocityY = 0
      ml2.velocityY = 0
      ml3.velocityY = 0
      ml1.y = 900
      ml2.y = 900
      ml3.y = 900
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 2
      gameState = "play"
      pl1.x = 150
      pl1.y = 250
      fl1.x = 380
      fl1.y = 150
      pl3.x = 610
      pl3.y = 250
      fl2.x = 840
      fl2.y = 150
      pl5.x = 1070
      pl5.y = 250


      c1.y = 100
      c2.y = 200
      c3.y = 100

      pl2.y = 900
      pl4.y = 900

      pl1.visible = true
      fl1.visible = true
      pl3.visible = true
      fl2.visible = true
      pl5.visible = true

      player.x = 150
      player.y = 200
      player.visible = true
    }

    //level3
    if (mousePressedOver(lv3) && GP === 2) {
      s1.play()
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      il1.y = 900
      il2.y = 900
      il1.y = 900
      il2.y = 900
      ml1.velocityY = 0
      ml2.velocityY = 0
      ml3.velocityY = 0
      ml1.y = 900
      ml2.y = 900
      ml3.y = 900
      fa1.velocityY = 0
      fa2.velocityY = 0
      fa3.velocityY = 0
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 3
      gameState = "play"
      player.x = 150
      player.y = 200

      pl1.x = 150
      pl1.y = 250
      pl2.x = 380
      pl2.y = 250
      fl1.x = 610
      fl1.y = 250
      fl2.x = 840
      fl2.y = 250
      pl3.x = 1070
      pl3.y = 250
      pl4.x = 1300
      pl4.y = 250
      pl5.y = 900

      pl1.visible = true
      pl2.visible = true
      fl1.visible = true
      pl3.visible = true
      fl2.visible = true
      pl4.visible = true

      c1.x = 490
      c1.y = 150
      c2.x = 745
      c2.y = 150
      c3.x = 1070
      c3.y = 150

      player.visible = true

    }

    //level4
    if (mousePressedOver(lv4) && GP === 2) {
      s1.play()
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      ml1.velocityY = 0
      ml2.velocityY = 0
      ml3.velocityY = 0
      ml1.y = 900
      ml2.y = 900
      ml3.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 4
      gameState = "play"
      pl1.x = 150
      pl1.y = 150
      fa1.x = 380
      fa1.y = 150
      fa2.x = 610
      fa2.y = 150
      fa3.x = 840
      pl2.x = 1070
      pl2.y = 250
      player.x = 150
      player.y = 150
      pl1.visible = true
      pl2.visible = true
      fa1.visible = true
      fa2.visible = true
      fa3.visible = true
      player.visible = true
      c1.y = 100
      c2.y = 100
      c3.y = 100
      pl3.y = 900
      pl4.y = 900
      pl5.y = 900
      fl1.y = 900
      fl2.y = 900

    }

    //level5
    if (mousePressedOver(lv5) && GP === 2) {
      s1.play()
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      ml1.velocityY = 0
      ml2.velocityY = 0
      ml3.velocityY = 0
      ml1.y = 900
      ml2.y = 900
      ml3.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 5
      gameState = "play"
      player.x = 150
      player.y = 200
      player.visible = true
      pl1.x = 150
      pl1.y = 250
      pl1.visible = true
      fl1.x = 1070
      fl1.y = 150
      fl1.visible = true
      fa1.x = 380
      fa1.y = 200
      fa1.visible = true
      fa2.x = 610
      fa2.y = 150
      fa2.visible = true
      fa3.y = 900
      pl2.x = 1100
      pl2.y = 250
      pl3.y = 900
      pl4.y = 900
      pl5.y = 900
      fl2.y = 900
      c1.y = 150
      c2.y = 100
      fl1.x = c3.x
      pl2.visible = true

    }

    //level6
    if (mousePressedOver(lv6) && GP === 2) {
      s1.play()
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 6
      gameState = "play"
      player.x = 150
      player.y = 200
      pl1.x = 150
      pl1.y = 250
      ml1.x = 380
      ml1.y = 150
      ml2.x = 610
      ml2.y = 250
      ml3.x = 840
      ml3.y = 150
      ml1.velocityY = 3
      ml2.velocityY = -3
      ml3.velocityY = 3
      c1.velocityY = 3
      c2.velocityY = -3
      c3.velocityY = 3
      player.visible = true
      pl1.visible = true
      ml1.visible = true
      ml2.visible = true
      ml3.visible = true
      pl2.visible = true
      pl2.x = 1150
      pl2.y = 250
    }

    //level7
    if (mousePressedOver(lv7) && GP === 2) {
      s1.play()
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 7
      gameState = "play"
      player.x = 150
      player.y = 200
      pl1.x = 150
      pl1.y = 250
      ml1.x = 380
      ml1.y = 250
      fa1.x = 610
      fa1.y = 100
      ml2.x = 840
      ml2.y = 250
      pl2.x = 1070
      pl2.y = 250
      pl2.visible = true
      player.visible = true
      pl1.visible = true
      ml1.visible = true
      ml2.visible = true
      fa1.visible = true
      fl1.y = 900
      fl2.y = 900
      ml3.y = 900
      ml1.velocityY = -3
      ml2.velocityY = -3
      c1.velocityY = -3
      c3.velocityY = -3
      c3.x = 840
      c2.x = 610
      c3.y = 70
      c2.y = 50
      c1.y = 200
      pl2.x = 1070
      pl2.y = 250
    }

    //level8
    if (mousePressedOver(lv8) && GP === 2) {
      s1.play()
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 8
      gameState = "play"
      player.x = 150
      player.y = 50
      pl1.x = 150
      pl1.y = 150
      il1.x = 380
      il1.y = 250
      il2.x = 610
      il2.y = 150
      fl1.x = 840
      fl1.y = 150
      fa1.x = 1070
      fa1.y = 150
      pl2.x = 1200
      pl2.y = 250
      player.visible = true
      pl1.visible = true
      pl2.visible = true
      il1.visible = true
      il2.visible = true
      fl1.visible = true
      fa1.visible = true
      c1.y = 200
      c2.y = 100
      c3.y = 100
    }

    //level9
    if (mousePressedOver(lv9) && GP === 2) {
      s1.play()
      jl1.y = 900
      jl2.y = 900
      sl1.y = 900
      sl2.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 9
      gameState = "play"
      player.x = 150
      player.y = 200
      player.visible = true
      pl1.x = 150
      pl1.y = 250
      pl1.visible = true
      il1.x = 380
      il1.y = 150
      il1.visible = true
      il2.x = 480
      il2.y = 150
      il2.visible = true
      fl1.x = 580
      fl1.y = 150
      fl1.visible = true
      fa1.x = 720
      fa1.y = 150
      fa1.visible = true
      pl2.y = 250
      pl2.x = 1000
      pl2.visible = true
      c1.x = 250
      c1.y = 140
      c2.x = 380
      c2.y = 100
      c3.x = 440
      c3.y = 100

    }

    //level10
    if (mousePressedOver(lv10) && GP === 2) {
      s1.play()
      jl1.y = 900
      jl2.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 10
      gameState = "play"
      player.x = 150
      player.y = 50
      pl1.x = 150
      pl1.y = 150
      sl1.x = 480
      sl1.y = 250
      sl2.x = 810
      sl2.y = 150
      fl1.x = 1140
      fl1.y = 150
      fa1.x = 1270
      fa1.y = 150
      pl2.x = 1400
      pl2.y = 250
      player.visible = true
      pl1.visible = true
      pl2.visible = true
      sl1.visible = true
      sl2.visible = true
      fl1.visible = true
      fa1.visible = true
      c1.y = 200
      c2.y = 100
      c3.y = 100
      il1.y = 900
      il2.y = 900
      pl3.y = 900
      pl4.y = 900
      pl5.y = 900
      fa2.y = 900
      fa3.y = 900
      ml1.y = 900
      ml2.y = 900
      ml3.y = 900
      c1.x = 380
      c2.x = 610
      c3.x = 840
    }

    //level11
    if (mousePressedOver(lv11) && GP === 2) {
      s1.play()
      jl1.y = 900
      jl2.y = 900
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 11
      gameState = "play"
      player.x = 150
      player.y = 200
      player.visible = true
      pl1.x = 150
      pl1.y = 250
      pl1.visible = true
      sl1.x = 480
      sl1.y = 150
      sl1.visible = true
      il1.x = 680
      il1.y = 150
      il1.visible = true
      sl2.x = 880
      sl2.y = 150
      sl2.visible = true
      il2.x = 1080
      il2.y = 150
      il2.visible = true
      pl2.x = 1300
      pl2.y = 250
      pl2.visible = true
      c1.y = 100
      c2.y = 100
      c3.y = 100
      c1.x = 380
      c2.x = 610
      c3.x = 840

    }

    //level12
    if (mousePressedOver(lv12) && GP === 2) {
      s1.play()
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 12
      gameState = "play"
      pl1.x = 150
      pl1.y = 250
      pl1.visible = true
      player.x = 150
      player.y = 200
      player.visible = true
      jl1.x = 380
      jl1.y = 250
      jl1.visible = true
      fa1.x = 610
      fa1.y = 100
      fa1.visible = true
      jl2.x = 840
      jl2.y = 250
      jl2.visible = true
      pl2.x = 1300
      pl2.y = 250
      pl2.visible = true
      sl1.y = 900
      sl2.y = 900
      il1.y = 900
      il2.y = 900
      pl3.y = 900
      pl4.y = 900
      pl5.y = 900
      c1.x = 380
      c2.x = 610
      c3.x = 840
    }

    //level13
    if (mousePressedOver(lv13) && GP === 2) {
      s1.play()
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 13
      gameState = "play"
      player.x = 150
      player.y = 200
      player.visible = true
      pl1.x = 150
      pl1.y = 250
      pl1.visible = true
      jl1.x = 380
      jl1.y = 250
      jl1.visible = true
      fa1.x = 840
      fa1.y = 150
      fa1.visible = true
      jl2.x = 1070
      jl2.y = 250
      jl2.visible = true
      fa2.x = 1300
      fa2.y = 150
      fa2.visible = true
      pl2.x = 1550
      pl2.y = 250
      pl2.visible = true
      c1.x = 380
      c2.x = 610
      c3.x = 840
    }

    //level14
    if (mousePressedOver(lv14) && GP === 2) {
      s1.play()
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 14
      gameState = "play"
      player.x = 150
      player.y = 200
      player.visible = true
      pl1.x = 150
      pl1.y = 250
      pl1.visible = true
      ml1.x = 380
      ml1.y = 150
      ml1.velocityY = 3
      c1.velocityY = 3
      ml1.visible = true
      c1.x = 380
      c1.y = 100
      fa1.x = 610
      fa1.y = 100
      fa1.visible = true
      c2.x = 610
      c2.y = 50
      fl1.x = 840
      fl1.y = 200
      fl1.visible = true
      c3.x = 840
      c3.y = 150
      pl2.x = 1070
      pl2.y = 250
      pl2.visible = true
      pl3.y = 900
      pl4.y = 900
      pl5.y = 900
      il1.y = 900
      il2.y = 900
      sl1.y = 900
      sl2.y = 900

    }

    //level15
    if (mousePressedOver(lv15) && GP === 2) {
      s1.play()
      lv1.visible = false
      lv2.visible = false
      lv3.visible = false
      lv4.visible = false
      lv5.visible = false
      lv6.visible = false
      lv7.visible = false
      lv8.visible = false
      lv9.visible = false
      lv10.visible = false
      lv11.visible = false
      lv12.visible = false
      lv13.visible = false
      lv14.visible = false
      lv15.visible = false
      object3.visible = false
      level = 15
      gameState = "play"
      player.x = 150
      player.y = 200
      player.visible = true
      pl1.x = 150
      pl1.y = 250
      pl1.visible = true
      fl1.x = 380
      fl1.y = 150
      fl1.visible = true
      pl2.x = 610
      pl2.y = 250
      pl2.visible = true
      fa1.x = 840
      fa1.y = 150
      pl2.visible = true
      ml1.x = 1070
      ml1.y = 150
      ml1.visible = true
      ml1.velocityY = 3
      c1.velocityY = 3
      jl1.x = 1300
      jl1.y = 250
      jl1.visible = true
      sl1.x = 1530
      sl1.y = 150
      sl1.visible = true
      il1.x = 1730
      il1.y = 150
      il1.visible = true
      pl3.x = 1960
      pl3.y = 250
      pl3.visible = true
      c1.x = 1070
      c1.y = 100
      c2.x = 1730
      c2.y = 100
      c3.x = 1470
      c3.y = 100
      sl2.y = 900
      il2.y = 900
      pl4.y = 900
      pl5.y = 900
      fa1.y = 900
      fa2.y = 900
      fa3.y = 900
      jl1.y = 900
      jl2.y = 900
    }
  }
}

function buyskin() {
  //red
  if (mousePressedOver(b1) && gameState === "shop") {
    s2.play()
    skinColor = "Red"
  }

  //pink
  if (mousePressedOver(b2) && gameState === "shop") {

    if (cointo < 5 && piow === 0) {
      if (gameState === "shop") {
        textSize(25)
        fill("black")
        text("Not enough money!", 200, 50)

      }
    }
    if (cointo >= 5) {
      skinColor = "Pink"
      piow = 1
      b2.addImage(equip)
      cointo = cointo - 5
      s2.play()
    }
  }

  //yellow
  if (mousePressedOver(b3) && gameState === "shop") {

    if (cointo < 5) {
      if (gameState === "shop") {
        textSize(25)
        fill("black")
        text("Not enough money!", 200, 50)

      }
    }
    if (cointo >= 5) {
      skinColor = "Yellow"
      yeow = 1
      b3.addImage(equip)
      cointo = cointo - 5
      s2.play()
    }
  }

  //green
  if (mousePressedOver(b4) && gameState === "shop") {

    if (cointo < 5) {
      if (gameState === "shop") {
        textSize(25)
        fill("black")
        text("Not enough money!", 200, 50)

      }
    }
    if (cointo >= 5) {
      skinColor = "Green"
      grow = 1
      b4.addImage(equip)
      cointo = cointo - 5
      s2.play()
    }
  }

  //y
  if (mousePressedOver(b5) && gameState === "shop") {

    if (cointo < 5) {
      if (gameState === "shop") {
        textSize(25)
        fill("black")
        text("Not enough money!", 200, 50)

      }
    }
    if (cointo >= 5) {
      s2.play()
      skinColor = "Blue"
      buow = 1
      b5.addImage(equip)
      cointo = cointo - 5
    }
  }

  //blue
  if (mousePressedOver(b6) && gameState === "shop") {

    if (cointo < 5) {
      if (gameState === "shop") {
        textSize(25)
        fill("black")
        text("Not enough money!", 200, 50)

      }
    }
    if (cointo >= 5) {
      s2.play()
      skinColor = "Black"
      blow = 1
      b6.addImage(equip)
      cointo = cointo - 5
    }
  }
}
