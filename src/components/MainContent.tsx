import nameData from "../utils/nameData"
import { arrayofButtons } from "../utils/ButtonBuilder"


export function MainContent ():JSX.Element {

    const buttonsArray = arrayofButtons(nameData)
    return <>
            <div className="buttonBlock">
                {buttonsArray}
            </div></>
}





/*

Make buttons for male babies and female babies
Map the buttons onto the page
Make a search bar
Make a favourites store
Display buttons in alphabetical order
Deploy to netflify

*/