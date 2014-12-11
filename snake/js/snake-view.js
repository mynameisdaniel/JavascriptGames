( function () {
  if (typeof Snake === "undefined") {
    window.Snake = {};
  }
  
  var View = Snake.View = function (snake, $el) {
    this.snake = snake;
    this.$el = $el;
    this.board = new Snake.Board(snake);
    this.setupGrid();
    this.bindEvents();
  }
  
  View.prototype.bindEvents = function () {
      $("body").on("keydown", this.makeMove.bind(this));
    };
  
    View.prototype.makeMove = function (event) {
      switch(event.keyCode) {
      case 37:
        this.snake.turn("W")
        break;
      case 38:
        this.snake.turn("N")
        break;
      case 39:
        this.snake.turn("E")
        break;
      case 40:
        this.snake.turn("S")
        break;
       
      default:
      }

    };

    // View.prototype.setupGrid = function () {
    //   var megaString = "";
    //   for (var i = 0; i < this.board.grid.length; i ++){
    //     megaString += "<div class='row' style='display:block;clear: left;'>";
    //     for (var j = 0; j < this.board.grid[0].length; j ++){
    //       megaString += "<div class='square' id='[" + i + "," + j "] style='float:left;border:1px solid black; width: 20px; height: 20px; '></div>"
    //   }
    //   megaString += "</div>";
    // }
    //   this.$el.append(megaString);
    //
    //
    // };


    View.prototype.setupGrid = function () {
      var megaString = "<pre>"
      megaString += this.board.render();
      megaString += "</pre>"
      this.$el.append(megaString)
    }

    View.prototype.step = function () {
      // console.log(this.snake.segments[0]);
      this.snake.move();
      this.board.updateGrid(this.snake);
      this.board.makeApple();
      this.board.eatApple();
      this.$el.children().remove();
      this.setupGrid();
      // console.log(this.snake.segments[0]);
    }
    
  
  })();