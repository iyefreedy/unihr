export default defineEventHandler((event) => {
    return {
        data: [
            {
                id: 1,
                name: "Staff",
                parent: "Kepala Seksi",
            },
            {
                id: 2,
                name: "Kepala Seksi",
                parent: "Kepala Bagian",
            },
            {
                id: 3,
                name: "Kepala Bagian",
                parent: "Direktur",
            },
        ],
    };
});
