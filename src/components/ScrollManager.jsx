import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef,useEffect } from 'react'
import { gsap } from "gsap";
const ScrollManager=(props) =>{
    const {section, onSectionChange} = props;
    const data=useScroll();
    const lastScroll=useRef(0);
    const isAnimating=useRef(false);

    useFrame(()=>{
      if(isAnimating.current){
        lastScroll.current=data.scroll.current;
        return;
      }
      const curSection=Math.floor(data.scroll.current * data.pages);
      if (data.scroll.current > lastScroll.current && curSection === 0) {
        onSectionChange(1);
      }
      if (
        data.scroll.current < lastScroll.current &&
        data.scroll.current < 1 / (data.pages - 1)
      ) {
        onSectionChange(0);
      }
      lastScroll.current = data.scroll.current;
    })
  return null;
}

export default ScrollManager;