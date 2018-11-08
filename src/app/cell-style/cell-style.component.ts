import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cell-style',
  templateUrl: './cell-style.component.html',
  styleUrls: ['./cell-style.component.css']
})
export class CellStyleComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  private rowData: any[];

  private columnDefs;
  private defaultColDef;
  constructor(private http: HttpClient) {

    this.columnDefs = [
      {
        headerName: 'Athlete',
        field: 'athlete',
        width: 150
      },
      {
        headerName: 'Age',
        field: 'age',
        width: 90,
        valueParser: numberParser,
        cellClassRules: {
          'rag-green': 'x < 20',
          'rag-amber': 'x >= 20 && x < 25',
          'rag-red': 'x >= 25'
        }
      },
      {
        headerName: 'Country',
        field: 'country',
        width: 120
      },
      {
        headerName: 'Year',
        field: 'year',
        valueParser: numberParser,
        cellClassRules: {
          'rag-green-outer': function (params) {
            return params.value === 2008;
          },
          'rag-amber-outer': function (params) {
            return params.value === 2004;
          },
          'rag-red-outer': function (params) {
            return params.value === 2000;
          }
        },
        cellRenderer: function (params) {
          return '<span class="rag-element">' + params.value + '</span>';
        }
      },
      {
        headerName: 'Date',
        field: 'date',
        cellClass: 'rag-amber'
      },
      {
        headerName: 'Sport',
        field: 'sport',
        cellClass: function (params) {
          return params.value === 'Swimming' ? 'rag-green' : 'rag-amber';
        }
      },
      {
        headerName: 'Gold',
        field: 'gold',
        valueParser: numberParser,
        cellStyle: { backgroundColor: '#aaffaa' }
      },
      {
        headerName: 'Silver',
        field: 'silver',
        valueParser: numberParser,
        cellStyle: function (params) {
          const color = numberToColor(params.value);
          return { backgroundColor: color };
        }
      },
      {
        headerName: 'Bronze',
        field: 'bronze',
        valueParser: numberParser,
        cellStyle: function (params) {
          const color = numberToColor(params.value);
          return { 'background-color': color };
        }
      },
      {
        headerName: 'Total',
        field: 'total'
      }
    ];
    this.defaultColDef = {
      editable: true,
      width: 100
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.http.get<any>('https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json')
    .subscribe((data) => {
      this.rowData = data;
    });

  }

  ngOnInit() {
  }

}

function numberToColor(val) {
  if (val === 0) {
    return '#ffaaaa';
  } else if (val === 1) {
    return '#aaaaff';
  } else {
    return '#aaffaa';
  }
}

function numberParser(params) {
  const newValue = params.newValue;
  let valueAsNumber;
  if (newValue === null || newValue === undefined || newValue === '') {
    valueAsNumber = null;
  } else {
    valueAsNumber = parseFloat(params.newValue);
  }
  return valueAsNumber;
}
