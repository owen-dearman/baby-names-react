interface namesInterface {
  id: number;
  name: string;
  sex: string;
}

export function arrayofButtons(
  arrayOfNameObjects: namesInterface[],
  onClick: () => void
): JSX.Element[] {
  const buttonArray = [];
  arrayOfNameObjects.sort((a, b) => a.name.localeCompare(b.name));
  for (const nameObjects of arrayOfNameObjects) {
    const nameButtons = ButtonBuilder(nameObjects, onClick);
    buttonArray.push(nameButtons);
  }
  return buttonArray;
}

const ButtonBuilder = (
  props: namesInterface,
  onClick: () => void
): JSX.Element => {
  return props.sex === "f" ? (
    <li onClick={onClick} className="GirlName" key={props.id}>
      {" "}
      {props.name}{" "}
    </li>
  ) : (
    <li onClick={onClick} className="BoyName" key={props.id}>
      {props.name}
    </li>
  );
};
