"use client"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"


import {
    ChartContainer,
} from "@/components/ui/chart"

export const description = "A bar chart"

const chartData = [
    { week: "5" , desktop: 4 , second:5, third:2,},
    { week: "9" , desktop: 9 , second:2, third:5,},
    { week: "11", desktop: 4 , second:7, third:9,},
    { week: "13", desktop: 7 , second:10, third:8,},
    { week: "15", desktop: 7 , second:8, third:11,},
    { week:  "17",desktop: 5 , second:6, third:4,},
    { week:  "19",desktop: 7 , second:5, third:7,},
    { week:  "21",desktop: 8 , second:3, third:9,},
    { week:  "23",desktop: 1 , second:7, third:13,},
    { week:  "25",desktop: 5 , second:11, third:10,},
    { week:  "27",desktop: 6 , second:12, third:2,},
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-2))",
    },
}

export function ChartComponent() {
    return (
        <ChartContainer  config={chartConfig} className="w-full h-4/6">
            <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid horizontalPoints={[0,40,80,120]}  vertical={false} />
                        <XAxis
                            dataKey="week"
                            tickLine={false}
                            tickMargin={18}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <Bar barSize={12} dataKey="desktop" fill="var(--color-desktop)" radius={100} />
                        <Bar barSize={12} dataKey="second" fill="var(--color-desktop)" radius={100} />
                        <Bar barSize={12} dataKey="third" fill="var(--color-desktop)" radius={100} />
                    </BarChart>
                </ChartContainer>
    )
}
