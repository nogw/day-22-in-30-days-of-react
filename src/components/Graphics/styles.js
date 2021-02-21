import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: #EE0244;
    font-size: 45px;
  }
  
  h2 {
    color: #fff;
    font-size: 34px;
    line-height: 8px;
  }
`;

export const ContainerGraphics = styled(motion.div)`
  position: relative;
  display: flex;
  height: 290px;
  width: 450px;
`;

export const Graphic1 = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
`;

export const Graphic2 = styled.div`
  position: absolute;
  bottom: 20px;
  right: 0px;
`;
