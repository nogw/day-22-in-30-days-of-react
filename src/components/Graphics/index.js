import React, { useState, useEffect } from 'react';
import { Container, ContainerGraphics, Graphic1, Graphic2 } from './styles';
import axios from 'axios'
import '../../../node_modules/react-vis/dist/style.css';
import {LineSeries, XYPlot, VerticalBarSeries, MarkSeries, DiscreteColorLegend, RadialChart} from 'react-vis'
import { motion } from 'framer-motion'

function Graphics() {
  const initialDatas = {
    cases: 100000,
    deaths: 100000,
    recovered: 100000,
  }

  const [dataCovid, setData] = useState(initialDatas)

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("https://disease.sh/v3/covid-19/countries/brazil?strict=true")
        const respData = response.data
        await setData({cases: respData.cases, deaths: respData.deaths, recovered: respData.recovered})
      } catch (error) {
        console.log(error)
      }
      console.log(dataCovid)
    }
    fetch()
  }, [])

  const data = [
    {x: 300, y: parseFloat(dataCovid.cases)},
  ];

  const data1 = [
    {x: 300, y: parseFloat(dataCovid.recovered)},
  ];

  const data2 = [
    {x: 300, y: parseFloat(dataCovid.deaths)},
  ];

  const myData = [
    {
      angle: parseFloat(dataCovid.cases),
      color: "#0902EA"
    }, 
    {
      angle: parseFloat(dataCovid.recovered), 
      color: "#fff"
    }, 
    {
      angle: parseFloat(dataCovid.deaths), 
      color: "#EE0244"
    }
  ]

  return (
    <Container>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1, delay: 0 }}
      > 
        corona virus
      </motion.h2>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
      >
        GRAPHIC
      </motion.h1> 
      <ContainerGraphics
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1, delay: 1 }}
      >
        <DiscreteColorLegend
          style={{position: 'absolute', left: '45px', top: '10px'}}
          orientation="horizontal"
          items={[
            {
              title: `cases: ${dataCovid.cases.toLocaleString()}`,
              color: '#0902EA'
            },
            {
              title: `recovered: ${dataCovid.recovered.toLocaleString()}`,
              color: '#fff'
            },
            {
              title: `deaths: ${dataCovid.deaths.toLocaleString()}`,
              color: '#EE0244',
            }
          ]}
        />
        <Graphic1>
          <XYPlot height={210} width={210} >
            <VerticalBarSeries data={data} color="#0902EA"/>
            <VerticalBarSeries data={data1} color="#fff"/>
            <VerticalBarSeries data={data2} color="#EE0244"/>
          </XYPlot>
        </Graphic1>
        <Graphic2>
          <RadialChart
          colorType={'literal'}
          colorDomain={[0, 100]}
          colorRange={[0, 10]}
            data={myData}
            width={200}
            height={200} 
          />
        </Graphic2>
      </ContainerGraphics>
    </Container>
  );
}

export default Graphics;