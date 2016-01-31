export const lineChartOptions = {
  scaleShowGridLines: true,
  scaleGridLineColor: 'rgba(0,0,0,.05)',
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: false,
  scaleShowVerticalLines: false,
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

const colors = [
  '197, 75, 163',
  '20, 190, 176',
  '142, 227, 87',
  '171, 159, 157',
  '56, 63, 81',
  '235, 89, 126',
  '205, 243, 93',
  '60, 79, 118'
]

export const defaultColorPalette = colors.map(color => {
  return {
    fillColor: `rgba(${color}, 0.2)`,
    strokeColor: `rgba(${color}, 1)`,
    pointColor: `rgba(${color}, 1)`,
    pointStrokeColor: '#333',
    pointHighlightFill: '#333',
    pointHighlightStroke: `rgba(${color}, 1)`
  }
})
