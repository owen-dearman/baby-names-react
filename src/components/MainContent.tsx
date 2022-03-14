import nameData from "../utils/nameData";
import { useState } from "react";

interface namesInterface {
  id: number;
  name: string;
  sex: string;
}

export function MainContent(): JSX.Element {
  const sortedNameData = nameData.sort((a, b) => a.name.localeCompare(b.name));
  const [fav, setFav] = useState<namesInterface[]>([]);
  const [names] = useState<namesInterface[]>(sortedNameData);

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
Deploy to netflify

*/
