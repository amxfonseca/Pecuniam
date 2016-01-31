export const lineChartOptions = {
  scaleShowGridLines: true,
  scaleGridLineColor: 'rgba(0,0,0,.05)',
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  legendTemplate: `
    <ul class='<%=name.toLowerCase()%>-legend'>
      <% for (var i=0; i<datasets.length; i++) {%>
        <li>
          <span style='background-color:<%=datasets[i].strokeColor%>'></span>
          <%if(datasets[i].label) {%>
            <%=datasets[i].label%>
          <%}%>
        </li>
      <%}%>
    </ul>`
}

export const defaultColorPalette = [
  {
    fillColor: 'rgba(220,220,220,0.2)',
    strokeColor: 'rgba(220,220,220,1)',
    pointColor: 'rgba(220,220,220,1)',
    pointStrokeColor: '#fff',
    pointHighlightFill: '#fff',
    pointHighlightStroke: 'rgba(151,187,205,1)'
  },
  {
    fillColor: 'rgba(151,187,205,0.2)',
    strokeColor: 'rgba(151,187,205,1)',
    pointColor: 'rgba(151,187,205,1)',
    pointStrokeColor: '#fff',
    pointHighlightFill: '#fff',
    pointHighlightStroke: 'rgba(151,187,205,1)'
  }
]
