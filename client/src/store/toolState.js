import {makeAutoObservable} from 'mobx';

class ToolState {
  tool = null;
  constructor() {
    makeAutoObservable(this);
  }

  setTool(tool) {
    this.tool = tool;
  }

  isCurrentTool(toolType) {
    return this.tool && this.tool.type === toolType;
  }

  setFillColor(color) {
    this.tool.fillColor = color;
  }

  setStroke(color) {
    this.tool.fillStroke = color;
  }

  setLineWidth(width) {
    this.tool.lineWidth = width;
  }
}

export default new ToolState();
