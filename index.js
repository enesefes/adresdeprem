
  const response = await fetch("./data.json");
  const json = await response.json();
  console.log(json[0]["Creation Date"]);


new gridjs.Grid({
  search: true,
  fixedHeader: true,
  resizable: true,
  columns: [
    {
      name: "İçerik",
      sort: false,
      id: "text"
    },
    {
      name: "History id",
      id: "history_id",
    },
    {
      name: "Oluşturulma Tarihi",
      id: "Creation Date"
    },
  ],
  data: json,
  
  pagination: {
    limit: 50,
    summary: false,
  },
  language: {
    'search': {
      'placeholder': '🔍 ara...'
    },
    'pagination': {
      'previous': 'geri',
      'next': 'ileri',
      'results': () => 'Sonuç'
    }
  }
}).render(document.getElementById("table"));
