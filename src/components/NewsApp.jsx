import React, { useEffect, useRef, useState } from "react";
import News from "./News";
import "./NewsApp.css";

function NewsApp() {
  const apiKey = "f6529d74311e42a784559bf4e5d986da";
  const [newsList, setNewsList] = useState([]);
  const [query, setQuery] = useState("tesla");
  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2023-09-24&sortBy=publishedAt&apiKey=${apiKey}`;

  const queryInputRef = useRef(null);
  // const navRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, [query]);

  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();

      setNewsList(jsonData.articles);
    } catch (e) {
      console.log(e, "error occured");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const queryValue = queryInputRef.current.value;
    setQuery(queryValue);
  }

  function handleNav(name) {
    const NavValue = navRef.current.name;
    setQuery(NavValue);
  }

  return (
    <div>
      <div className="news-app">
        <h1
          style={{
            fontFamily: "monospace",
            fontSize: "3rem",
            textAlign: "left",
            marginBottom: "20px",
          }}
        >
          News Daily
        </h1>
        <form onSubmit={handleSubmit}>
          <input className="query-input" type="text" ref={queryInputRef} />
          <input
            className="btn-submit"
            onClick={handleSubmit}
            type="submit"
            value="Submit"
          />
        </form>

        {/* <nav class="navbar bg-body-tertiary">
          <form class="container-fluid justify-content-start">
            <Button
              colorScheme="teal"
              variant="solid"
              onClick={handleNav}
              ref={navRef}
              name="entertainment"
            >
              Entertainment
            </Button>

            <Button
              colorScheme="teal"
              variant="solid"
              onClick={handleNav}
              ref={navRef}
              name="sports"
            >
              Sports
            </Button>

            <Button
              colorScheme="teal"
              variant="solid"
              onClick={handleNav}
              ref={navRef}
              name="gaming"
            >
              Gaming
            </Button>
          </form>
        </nav> */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 48%)",
            justifyContent: "space-between",
            rowGap: "20px",
          }}
        >
          {newsList.map((news) => {
            return <News key={news.url} news={news} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default NewsApp;
