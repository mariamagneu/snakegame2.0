class Game {
  /**
   * snake game instance
   * @constructor
   * @param {HTMLElement} gameScreen - play area
   * @param {number} gridHeight - amount of rows
   * @param {number} gridWidth - amount of columns
   */
  constructor(gameScreen, gridHeight, gridWidth) {
    this.gameScreen = gameScreen;
    this.gridHeight = gridHeight;
    this.gridWidth = gridWidth;
    this.player = new Player();
  }

  start() {
    const frames = setInterval(() => {
      this.player.savePrevHeadPosition();
      this.player.moveHead();
      if (this.player.didCollideFood()) {
        this.player.grow();
        this.increaseScore();
      } else if (this.player.didCollideSelf() || this.player.didCollideWall()) {
        this.player.die();
      } else {
        this.player.moveBody();
      }
    }, 1000);
  }
}
