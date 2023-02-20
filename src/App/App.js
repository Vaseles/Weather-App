import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './App.module.scss';
import Mountine from './../assets/images/image7.png'
import Sunset from './../assets/images/image8.png'

const App = () => {
  const dateNow = new Date();
  const [data, setData] = useState()
  const fullTime = `${dateNow.getHours()}:${dateNow.getMinutes()} ${dateNow.getDate()}.${dateNow.getMonth()}.${dateNow.getFullYear()}`

  useEffect (() => {
    getData();
  }, [])

  const getData = async () => {
    axios.get('https://api.openweathermap.org/data/2.5/weather', {
  params: {
      q: 'Pavlodar,kz',
      units: 'metric',
      appid: 'a600c78412029f95fe5046de660f57e2'
    }
  })
  .then(res => {
    console.log(res.data);
    setData(res.data)
  })
  .catch(err => {

  })
  }

  return (
    <>
      {data? (
        <div className={styles.page}>
        <div className={styles.page__image}>
          <img src='https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="" />
          <div className={styles.page__mask}></div>
        </div>
        <div className={styles.page__block}>
          <div className={styles.page__content}>
            <div className={styles.page__right}>
             <div className={styles.page__right__content}>
              <h2>{data.main.temp}&deg;</h2>
                <div className={styles.page__data}>
                  <h3>Pavlodar</h3>
                  <h4>{fullTime}</h4>
                </div>
             </div>
            </div>
            <div className={styles.page__left}>
                <div className={styles.line}>
                  <h4>Feels like</h4>
                  <span>{data.main.feels_like}&deg;C</span>
                </div>
                <div className={styles.line}>
                  <h4>Humidity</h4>
                  <span>{data.main.humidity}</span>
                </div>
                <div className={styles.line}>
                  <h4>Pressure</h4>
                  <span>{data.main.pressure}</span>
                </div>
                <div className={styles.line}>
                  <h4>Max Temp</h4>
                  <span>{data.main.temp_max}&deg;C</span>
                </div>
                <div className={styles.line}>
                  <h4>Min Temp</h4>
                  <span>{data.main.temp_min}&deg;C</span>
                </div>
                <div className={styles.hr}></div>
                <div className={styles.line}>
                  <h4>Wind deg</h4>
                  <span>{data.wind.deg}&deg;</span>
                </div>
                <div className={styles.line}>
                  <h4>Wind speed</h4>
                  <span>{data.wind.speed}km/h</span>
                </div>
                <div className={styles.hr}></div>
                <div className={styles.posts}>
                  <div className={styles.post}>
                    <a href=''>Free Cool  Socks</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl purus in mollis nunc sed. </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      ): (<></>)}
    </>
  )
}

export default App