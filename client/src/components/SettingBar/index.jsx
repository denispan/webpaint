import React from 'react';
import styles from './index.module.scss';
import toolState from '../../store/toolState';

const SettingBar = () => {
  return (
    <div className={styles.settingbar}>
      <div className={styles.input}>
        <label htmlFor="line-width">Тощина линии</label>
        <input
          onChange={e => toolState.setLineWidth(e.target.value)}
          id="line-width"
          type="number"
          defaultValue={1}
          min={1}
          max={50}
        />
      </div>
      <div className={styles.input}>
        <label htmlFor="stroke-color">Цвет линии</label>
        <input
          onChange={e => toolState.setStroke(e.target.value)}
          id="stroke-color"
          type="color"
        />
      </div>
      <div className={styles.input}>
        <label htmlFor="fill-color">Цвет заливки</label>
        <input
          onChange={e => toolState.setFillColor(e.target.value)}
          id="fill-color"
          type="color"
        />
      </div>

    </div>
  );
};

export default SettingBar;
