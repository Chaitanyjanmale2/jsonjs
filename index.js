 function createTable(tableData) {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');

  
    tableData.forEach(function(rowData) {
      var row = document.createElement('tr');//horizontal row start row=>

  
      rowData.forEach(function(cellData) {
        var cell = document.createElement('td');// row=>cell (building)
            
        cell.appendChild(document.createTextNode(cellData));//add text in cell 
        row.appendChild(cell);//row =>cell=>TEXT<=cell end<=row end
      });
  
      tableBody.appendChild(row);//row in table body table=>tablebody=>row =>cell=>TEXT<=cell end<=row end<=tablebody<=table
    });
  
    table.appendChild(tableBody);//row added in table body
   

  } 

    fetch("file.json").then(
    responce=>responce.json()
  ).then(data=> createTable(data)
  
  )
 
