var GameState = GameState || {};

GameState.Preload = function(game){};

GameState.Preload.prototype = {

  preload: function(){

    this.teacher = this.getTeacherFromUser();
    console.log("teacher success: ", this.teacher);
    this.loadTestByTeacher(this.teacher);
    // console.log("test success: ", this.test);
    // this.avatarPath = this.getAvatarFromUser();

    this.avatarBody = "assets/bear_animation_body.png";
    this.avatarHead = "assets/bear_animation_head_only.png"


    // console.log("importing avatar...body", this.avatarPath[0]);
    // console.log("importing avatar...head", this.avatarPath[1]);
    // console.log("importing avatar full pather: ", this.avatarPath);

    //place all the booted items on the screen
    this.load.image('background', 'assets/haunted-mansion.png');
    this.load.spritesheet('kanye', this.avatarBody, 780/10, 190/2, 20,1,1);
    this.load.spritesheet('kanye-head', this.avatarHead ,75,75,1,1,1);



    this.load.image('ghost', 'assets/ghost.png');
    this.load.image('option1', 'assets/score1.png');
    this.load.image('option2', 'assets/score2.png');
    this.load.image('option3', 'assets/score3.png');
    this.load.image('option4', 'assets/score4.png');
    this.load.image('option5', 'assets/score5.png');
  },
  create: function(){
    // this.background = game.add.sprite(0,0, 'background');
    this.state.start('MainMenu')
  }
};

