import {
    Chart as ChartJS,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
} from "chart.js";

import { Bar, Line, Doughnut, Pie } from "vue-chartjs";

export default defineNuxtPlugin((nuxtApp) => {
    const vueApp = nuxtApp.vueApp;
    ChartJS.register(
        Title,
        Tooltip,
        Legend,
        ArcElement,
        PointElement,
        BarElement,
        CategoryScale,
        LinearScale,
        LineElement
    );
    vueApp.component("BarChart", Bar);
    vueApp.component("LineChart", Line);
    vueApp.component("DoughnutChart", Doughnut);
    vueApp.component("PieChart", Pie);
});
