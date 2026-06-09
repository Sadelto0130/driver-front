import React from "react"

export type MetricCardProps = {
  title: string
  icon: React.ReactNode

  primaryMetric: {
    label: string
    value: string | number
  }

  secondarMetrics: {
    label: string
    value: string | number
  }[]

  iconStyle: string
  bgStile: string
}