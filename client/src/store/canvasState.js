import {makeAutoObservable} from 'mobx';

class CanvasState {
  canvas = null;
  undoList = []
  redoList = []
  username = ""

  constructor() {
    makeAutoObservable(this)
  }

  setUsername (username) {
    this.username = username
  }

  setCanvas(canvas) {
    this.canvas = canvas;
  }

  pushToUndo(data) {
    this.undoList.push(data);
  }

  pushToRedo(data) {
    this.redoList.push(data);
  }

  undo() {
    let ctx = this.canvas.getContext('2d');
    if (this.undoList.length > 0) {
      let dataUrl = this.undoList.pop();
      let image = new Image();
      image.src = dataUrl;
      this.redoList.push(this.canvas.toDataURL());
      image.onload = () => {
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
      }
    } else {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  redo() {
    let ctx = this.canvas.getContext('2d');
    if (this.redoList.length > 0) {
      let dataUrl = this.redoList.pop();
      let image = new Image();
      image.src = dataUrl;
      this.undoList.push(this.canvas.toDataURL());
      image.onload = () => {
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
      }
    }
  }
}

export default new CanvasState()
