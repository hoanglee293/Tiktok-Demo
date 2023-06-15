import classNames from "classnames/bind";
import { React, useState, useRef, useEffect } from "react";
//
import { useDebounce } from "../../hooks";
import styles from "./Search.module.scss";
import images from "../../assets/images";
import { ReactComponent as SearchIcon } from "../../assets/images/search-icon.svg";
import Tippy from "@tippyjs/react/headless";
import { BoxAccount, Popper as PopperWrapper } from "../../component";
import * as searchService from "../../service/searchService";

const cx = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);

  const debouncedValue = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(()=>{
    if (!debouncedValue.trim()){
      setSearchResult([])
      return;
    }

    const fetchApi = async() =>{
      const result = await searchService.search(debouncedValue)
      setSearchResult(result.data)
    }
    fetchApi()
  }, [debouncedValue])
  
  const handleChange = (e) =>{
    const searchValue = e.target.value
    if(!searchValue.startsWith(' ')){
      setSearchValue(searchValue)
    }
  }
  return (
    <div className={cx("wrapper")}>
      <Tippy
        visible={showResult && searchResult.length > 0}
        interactive
        onClickOutside={()=>setShowResult(false)}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <div className={cx("title")}>Account</div>
              {searchResult.map((ele)=> (
                <BoxAccount key={ele.id} data={ele}/>
              ))}
            </PopperWrapper>
          </div>
        )}
      >
        <form className={cx("form-control")}>
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Search"
            type="text"
            onChange={handleChange}
            onFocus={()=> setShowResult(true)}
          />
          {!!searchValue && (
            <div className={cx("close-icon")}>
              <img
              src={images.close}
              alt="close"
              onClick={() => {
                setSearchValue(" ")
                inputRef.current.focus()
              }}
            />
            </div>
          )}

          <button onMouseDown={e => e.preventDefault()}>
            <SearchIcon />
          </button>
        </form>
      </Tippy>
    </div>
  );
}

export default Search;
