import React from 'react'
import { Line } from 'react-chartjs'

import { lineChartOptions, defaultColorPalette } from '../constants/chart-constants'

function TimelineGraph({ datasets, labels }) {
  const datasetsFormatted = datasets.map((data, index) => {
    const colorPaletteIndex = index % defaultColorPalette.length

    return {
      ...data,
      ...defaultColorPalette[colorPaletteIndex]
    }
  })

  const data = {
    datasets: datasetsFormatted,
    labels
  }

  return (
    <Line
      data={data}
      options={lineChartOptions}
      width="740"
      height="320"
    />
  )
}

export default TimelineGraph;
