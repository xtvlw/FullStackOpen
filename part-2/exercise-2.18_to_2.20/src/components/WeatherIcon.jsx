import "./_variables.style.css"

import ClearIcon from "../icons/ClearIcon.jsx"
import ClearNightIcon from "../icons/ClearNightIcon.jsx"

import FewCloudsIcon from "../icons/FewCloudsIcon.jsx"
import FewCloudsNightIcon from "../icons/FewCloudsNightIcon.jsx"

import OvercastIcon from "../icons/OvercastIcon.jsx"
import ShowersIcon from "../icons/ShowersIcon.jsx"


const WeatherIcon  = ({ current }) => {

    const iconSizeInPX = 75;
    const fill = "black"

    if (current.rain == 1) {
        return <ShowersIcon h={iconSizeInPX} w={iconSizeInPX} fill={fill}/>
    }
    if (current.cloud_cover <= 20 && current.isDay == 1) {
        return <ClearIcon h={iconSizeInPX} w={iconSizeInPX} fill={fill}/>
    }
    if (current.cloud_cover <= 20) {
        return <ClearNightIcon h={iconSizeInPX} w={iconSizeInPX} fill={fill}/>
    }
    if (current.cloud_cover <= 60 && current.isDay == 1) {
        return <FewCloudsIcon h={iconSizeInPX} w={iconSizeInPX} fill={fill}/>
    }
    if (current.cloud_cover <= 60) {
        return <FewCloudsNightIcon h={iconSizeInPX} w={iconSizeInPX} fill={fill}/>
    }
    if (current.cloud_cover > 60) {
        return <OvercastIcon h={iconSizeInPX} w={iconSizeInPX} fill={fill}/>
    }
    return <></>
}

export default WeatherIcon
