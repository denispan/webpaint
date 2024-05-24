import React, {useEffect, useRef, useState} from 'react';
import styles from './index.module.scss'
import {observer} from 'mobx-react-lite';
import canvasState from '../../store/canvasState';
import toolState from '../../store/toolState';
import Brush from '../../tools/Brush';
import {Alert, Button, Form, Modal} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import showAlert from '../../utils/showAlert';

const Canvas = observer(() => {
  const canvasRef = useRef();
  const userNameInputRef = useRef();
  const params = useParams();
  console.log(params);

  const [modalShow, setModalShow] = useState(true);
  const [alertSuccessShow, setAlertSuccessShow] = useState(false);

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current);
    toolState.setTool(new Brush(canvasState.canvas));
  }, [])

  useEffect(() => {
    if (canvasState.username) {
      const socket = new WebSocket(`ws://localhost:5001`);
      socket.onopen = () => {
        socket.send(JSON.stringify({
          id: params.id,
          username: canvasState.username,
          method: "connection"
        }))

        showAlert(setAlertSuccessShow)
      }
    }
  }, [canvasState.username]);

  const mouseDownHandler = () => {
    canvasState.pushToUndo(canvasRef.current?.toDataURL());
  }

  const connectionHandler = (e) => {
    e.preventDefault();
    canvasState.setUsername(userNameInputRef.current?.value);
    setModalShow(false);
  }

  return (
    <div className={styles.canvas}>

      <Alert className={styles.alert} show={alertSuccessShow} variant="warning">
        Соединение установлено
      </Alert>
      <Modal show={modalShow} onHide={() => {}}>
        <form onSubmit={(e) => connectionHandler(e)}>
          <Modal.Header>
            <Modal.Title>Введите Ваше имя</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input autoFocus type="text" ref={userNameInputRef}/>
          </Modal.Body>
          <Modal.Footer className={styles.btn}>
            <Button type="submit" variant="primary">
              Начать рисовать
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
      <canvas onMouseDown={() => mouseDownHandler()} ref={canvasRef} width={600} height={400} />
    </div>
  )
});

export default Canvas;
