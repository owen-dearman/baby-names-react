interface namesInterface {
    id: number
    name: string
    sex: string
}

export function arrayofButtons(arrayOfNameObjects: namesInterface[]): JSX.Element[]{
    const buttonsArray = []
    arrayOfNameObjects.sort((a, b) => a.name.localeCompare(b.name))
    for (const nameObject of arrayOfNameObjects) {
        const nameButton = ButtonBuilder(nameObject)
        buttonsArray.push(nameButton)
    }
    return buttonsArray
}

const ButtonBuilder = (props: namesInterface): JSX.Element => {
    return props.sex === "f" ? <button className="GirlName" key={props.id}> {props.name} </button>  : <button className="BoyName" key={props.id} >{props.name}</button>
}