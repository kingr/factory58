import { useEffect, useState, ChangeEvent } from "react";
import { TableInputProps } from "../../types";
import {Link} from "react-router-dom";
import "../css/main.css";

const Table = ({data}: TableInputProps) => {

  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const updateSearch = (e: ChangeEvent<{value: string}>) => {
    setSearchText(e.target.value);
  }
  useEffect(() => { 
    setFilteredData(data);
  }, [data])
  

  useEffect(() => {
    const filtered = data.filter(({name}) => name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
    setFilteredData(filtered);
  },[searchText])

  return (
    <div>
      <input type="text" value={searchText} onChange={updateSearch} placeholder="Search"  />
      <div className="model-wrapper">
        {
          filteredData.map(({name}, index: number) => {
            return <div className="row-item" placeholder="search" key={index}><Link to={`/details/${name}`}>{name}</Link></div>
          })
        }
      </div>
    </div>
  )
}

export default Table;