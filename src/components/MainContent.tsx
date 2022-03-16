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
  const maleNamesOnly = sortedNameData.filter((x) => x.sex === "m");
  const femaleNamesOnly = sortedNameData.filter((x) => x.sex === "f");
  //useState functions
  const [fav, setFav] = useState<namesInterface[]>([]);
  const [names, setNames] = useState<namesInterface[]>(sortedNameData);
  const [filterNames, setFilterNames] =
    useState<namesInterface[]>(sortedNameData);
  const [text, setText] = useState("");

  const maleFilter = () => {
    setNames(maleNamesOnly);
    setFilterNames(maleNamesOnly);
  };

  const femaleFilter = () => {
    setNames(femaleNamesOnly);
    setFilterNames(femaleNamesOnly);
  };

  const allFilter = () => {
    setNames(sortedNameData);
    setFilterNames(sortedNameData);
  };

  function clearSearch() {
    setText("");
    setNames(filterNames);
  }

  return (
    <>
      <div className="buttonBlock">
        <input
          value={text}
          placeholder="Search Names"
          onChange={(e) => {
            setNames(
              //filter the names to those that match the input
              filterNames.filter(
                (individualName) =>
                  individualName.name
                    .toLowerCase()
                    //if text matches input then gives index of 0
                    .indexOf(e.target.value.toLowerCase()) === 0
              )
            );
            setText(e.target.value);
          }}
        />
        <button onClick={clearSearch}>Clear Input</button>
        <button onClick={maleFilter}>Male</button>
        <button onClick={femaleFilter}>Female</button>
        <button onClick={allFilter}>Any</button>
      </div>
      <div className="buttonBlock">
        <h2>Favourite Names: </h2>
        {fav.map((names) => (
          <li
            className={names.sex}
            key={names.id}
            onClick={() => {
              // removes names from favourites array when clicked
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
            //only show names not in the favourite section
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
Make buttons for gender
*/
