import './slider.css'
import {MdOutlineWest , MdOutlineEast} from 'react-icons/md'
import { useState } from 'react'

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        "https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        "https://rukminim2.flixcart.com/image/450/500/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=90&crop=false",
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1566421/pexels-photo-1566421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2759783/pexels-photo-2759783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/267242/pexels-photo-267242.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1615748/pexels-photo-1615748.jpeg?auto=compress&cs=tinysrgb&w=600",
       ];
    const prevSlide = () =>{
        setCurrentSlide(currentSlide=== 0 ?2 : (prev) => prev - 1);
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (next => next + 1));
    }
  return (
    <div className='slider'>
        <div className="slider-container" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
            <img src={data[3]} alt="" />
            <img src={data[4]} alt="" />
            <img src={data[5]} alt="" />
            <img src={data[6]} alt="" />
            <img src={data[7]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <MdOutlineWest />
            </div>
            <div className="icon" onClick={nextSlide}>
                <MdOutlineEast />
            </div>
        </div>
    </div>
  )
}

export default Slider