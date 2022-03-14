import nameData from "../utils/nameData";
import { useState } from "react";

interface namesInterface {
  id: number;
  name: string;
  sex: string;
}

export function MainContent(): JSX.Element {
  //const [nameList, setNameList] = useState<namesInterface[]>([])
  const [fav, setFav] = useState<namesInterface[]>([]);
  const [names, setNames] = useState<namesInterface[]>(nameData);

  const ButtonBuilder = (props: namesInterface): JSX.Element => {
    const addtoFav = () => {
      setFav([...fav, props]);
    };
    return (
      <li onClick={addtoFav} className={props.sex} key={props.id}>
        {" "}
        {props.name}{" "}
      </li>
    );
  };

  //for the name data, sort the objects into alphabetical order and then create list items out of them
  const namebuttons = nameData
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(ButtonBuilder);

  return (
    <>
      <div className="buttonBlock">
        <input />
      </div>
      <div className="buttonBlock">
        <h2>Favourite Names: </h2>
        {fav.map((x) => (
          <li
            className={x.sex}
            key={x.id}
            onClick={() => {
              setFav(fav.filter((y) => y !== x));
            }}
          >
            {x.name}
          </li>
        ))}
      </div>
      <div className="buttonBlock">
        <ul>
          {names
            .filter((x) => !fav.includes(x))
            .map((x) => (
              <li
                className={x.sex}
                key={x.id}
                onClick={() => {
                  setFav([...fav, x]);
                }}
              >
                {x.name}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

/*
Make a search bar
Delete buttons when in favourites
Delete favourites when in main
Deploy to netflify

*/
