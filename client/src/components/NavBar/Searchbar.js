import React, { useState } from 'react';
import { BsMicFill } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import Searchlist from './Searchlist';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Search = () => {

    const [searchquery, setsearchquery] = useState("");
    const [searchlist, setsearchlist] = useState(false);
    const Titlearray = useSelector(s => s?.videoreducer)?.data?.filter(q => q?.videotitle.toUpperCase().includes(searchquery?.toUpperCase())).map(m => m?.videotitle);
    /// const Titlearray = ['video1', 'video2', 'animation video', 'Movies'].filter(q => q.toUpperCase().includes(searchquery.toUpperCase()));

    return <>
        <div className="SearchBar_Container">
            <div className="SearchBar_Container2">
                <div className="search_div">
                    <input type="text" className='iBox_SearchBar' placeholder='Search' onChange={e => setsearchquery(e.target.value)} value={searchquery} onClick={e => setsearchlist(true)} />
                    <Link to={`/search/${searchquery}`}>
                        <FaSearch className="searchIcon_SearchBar" />
                    </Link>
                    <BsMicFill className='Mic_SearchBar' />
                    {searchquery && searchlist &&
                        <Searchlist setsearchquery={setsearchquery} Titlearray={Titlearray} />}
                </div>
            </div>
        </div>
    </>;
}

export default Search;