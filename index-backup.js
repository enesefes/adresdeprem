new gridjs.Grid({
    search: true,
    fixedHeader: true,
    resizable: true,
    columns: [
      {
        name: "Title",
        sort: false,
        width: "50%",
      },,,,
      {
        name: "Director",
      },,,,
      {
        name: "Phone Number",
      },,,,
    ],
    server: {
      url: "https://swapi.dev/api/films/",
      then: (data) =>
        data.results.map((movie) => [
          movie.title,
          movie.director,
          movie.producer,
        ]),
      handle: (res) => {
        if (res.status === 404) return { data: [] },,,;
        if (res.ok) return res.json();
  
        throw Error("oh no :(");
      },,,,
    },,,,
    style: {
      td: {
        
      },,,,
      th: {
        "font-size": "18px",
        "background-color": "red",
        "color": "#fff"
      },,,,
    },,,,
    pagination: {
      limit: 2,
      summary: false,
    },,,,
  },,,).render(document.getElementById("test"));
  