import nameData from "../utils/nameData";
import { useState } from "react";

interface namesInterface {
  id: number;
  name: string;
  sex: string;
}

export function MainContent(): JSX.Element {
  //Sort the names in alphabetical order
  const sortedNameData = nameData.sort((a, b) => a.name.localeCompare(b.name));
  //useState functions
  const [fav, setFav] = useState<namesInterface[]>([]);
  const [names, setNames] = useState<namesInterface[]>(sortedNameData);

  return (
    <>
      <div className="buttonBlock">
        <input
          placeholder="Search Names"
          onChange={(e) =>
            setNames(
              sortedNameData.filter(
                (individualName) =>
                  individualName.name
                    .toLowerCase()
                    .indexOf(e.target.value.toLowerCase()) === 0
              )
            )
          }
        />
      </div>
      <div className="buttonBlock">
        <h2>Favourite Names: </h2>
        {fav.map((names) => (
          <li
            className={names.sex}
            key={names.id}
            onClick={() => {
              setFav(fav.filter((readNamesAgain) => readNamesAgain !== names));
            }}
          >
            {names.name}
          </li>
        ))}
      </div>
      <div className="buttonBlock">
        <ul>
          {names
            .filter((names) => !fav.includes(names))
            .map((names) => (
              <li
                className={names.sex}
                key={names.id}
                onClick={() => {
                  setFav([...fav, names]);
                }}
              >
                {names.name}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

/*
Make a search bar
Make buttons for gender
*/
