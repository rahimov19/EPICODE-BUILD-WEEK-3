/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useState } from "react";
import { Form, InputGroup, ListGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { guestUserAction } from "../Redux/Actions";

function Searchbar({ user }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    handleFilter(query);
  }, [query]);

  const handleFilter = (query) => {
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(query.toLowerCase());
    });

    if (query.length > 0) {
      setFilteredData(newFilter);
    } else {
      setFilteredData([]);
    }
  };

  const onInputClick = (wasItClicked) => {
    console.log(clicked);
    setClicked(wasItClicked);
  };

  const navigate = useNavigate();

  const goToProfile = (guest) => {
    navigate(`/guest/${guest._id}`);
    dispatch(guestUserAction(guest));
  };

  const fetchData = async () => {
    try {
      const url = "https://striveschool-api.herokuapp.com/api/profile/";

      const response = await fetch(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk3MjZmOWM5NmRmYjAwMTUyMWE1Y2QiLCJpYXQiOjE2NzA4NzIxOTksImV4cCI6MTY3MjA4MTc5OX0.yvOTDhvjHOMjzOljbQSy14jHPbW8thYnr5ZABpcn5W4",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setData(data);
      } else {
        console.log("Error fetching data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="header__searchDiv">
      <div className="header__search">
        <InputGroup
          onClick={() => onInputClick(false)}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        >
          <SearchIcon className="search__icon" />
          <Form.Control placeholder="Search" id="searchbarinput" />
        </InputGroup>
      </div>

      {filteredData.length !== 0 && (
        <div
          style={{
            position: "fixed",
            top: "3.2em",
            zIndex: "3",
          }} /* style={{marginTop: '33rem'}} */
        >
          {filteredData.slice(0, 10).map((data) => {
            return (
              <ListGroup className="search__list">
                <div onClick={() => goToProfile(data)}>
                  <Link
                    onClick={() => {
                      setQuery("");
                      setFilteredData([]);
                    }}
                    to={"/"}
                  >
                    <ListGroup.Item
                      className="listGroup"
                      onClick={() => {
                        onInputClick(true);
                      }}
                    >
                      <span>
                        <SearchIcon className="searchBar__icon" />

                        <span
                          className="ml-2"
                          style={{ color: "black", fontSize: "14px" }}
                        >
                          <strong>{data.name}</strong>
                        </span>
                      </span>
                      <span>
                        <img
                          className="searchBar__avatar"
                          style={{
                            width: "25px",
                            height: "25px",
                            borderRadius: "50%",
                          }}
                          src={data.image}
                          alt=""
                        />
                      </span>
                    </ListGroup.Item>
                  </Link>
                </div>
              </ListGroup>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Searchbar;
