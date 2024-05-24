import React from 'react';
import styles from './index.module.scss'
import Button from '../shared/Button';
import BrushImg from '../../assets/images/brush.png';
import RectImg from '../../assets/images/rect.png';
import CircleImg from '../../assets/images/circle.png';
import EraserImg from '../../assets/images/eraser.png';
import LineImg from '../../assets/images/line.png';
import UndoImg from '../../assets/images/undo.png';
import RedoImg from '../../assets/images/redo.png';
import SaveImg from '../../assets/images/save.png';
import ClearImg from '../../assets/images/clear.png';
import toolState from '../../store/toolState';
import canvasState from '../../store/canvasState';
import {observer} from 'mobx-react-lite';
import Brush from '../../tools/Brush';
import Rect from '../../tools/Rect';
import Circle from '../../tools/Circle';
import Eraser from '../../tools/Eraser';
import Line from '../../tools/Line';
import clearCanvas from '../../tools/Clear';

const ToolBar = observer(() => {
  return (
    <div className={styles.toolbar}>
      <div className={styles.wrapper}>
        <Button isCurrent={toolState.isCurrentTool("Brush")} onClick={() => toolState.setTool(new Brush(canvasState.canvas))}>
          <img width={42} height={42} src={BrushImg} alt="draw brush"/>
        </Button>
        <Button isCurrent={toolState.isCurrentTool("Rect")} onClick={() => toolState.setTool(new Rect(canvasState.canvas))}>
          <img width={42} height={42} src={RectImg} alt="draw rectangle"/>
        </Button>
        <Button isCurrent={toolState.isCurrentTool("Circle")} onClick={() => toolState.setTool(new Circle(canvasState.canvas))}>
          <img width={42} height={42} src={CircleImg} alt="draw circle"/>
        </Button>
        <Button isCurrent={toolState.isCurrentTool("Eraser")} onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}>
          <img width={42} height={42} src={EraserImg} alt="use eraser"/>
        </Button>
        <Button isCurrent={toolState.isCurrentTool("Line")} onClick={() => toolState.setTool(new Line(canvasState.canvas))}>
          <img width={42} height={42} src={LineImg} alt="draw line"/>
        </Button>
        <Button onClick={() => clearCanvas(canvasState.canvas)}>
          <img width={42} height={42} src={ClearImg} alt="clear all"/>
        </Button>
      </div>
      <div className={styles.wrapper}>
        <span className={styles.username}>{canvasState.username}</span>
      </div>
      <div className={styles.wrapper}>
        <Button onClick={() => canvasState.undo()}>
          <img width={42} height={42} src={UndoImg} alt="undo" />
        </Button>
        <Button onClick={() => canvasState.redo()}>
          <img width={42} height={42} src={RedoImg} alt="redo"/>
        </Button>
        <Button>
          <img width={42} height={42} src={SaveImg} alt="save"/>
        </Button>
      </div>
    </div>
  );
}
)

export default ToolBar;
