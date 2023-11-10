export default defineEventHandler((event) => {
    const employees = [
        {
            id: 1,
            nip: "10.0.0.0031",
            name: "Muhammad Quraisy",
            organization: "Pusat Komputer dan Inovasi Digital",
            gender: { value: "male", class: "text-center" },
            status: "probation",
        },
        {
            id: 2,
            nip: "10.0.0.0031",
            name: "Guntur Ginanjar",
            organization: "Direktorat Sumber Daya Manusia",
            gender: { value: "male", class: "text-center" },
            status: "permanent",
        },
        {
            id: 3,
            nip: "10.0.0.0031",
            name: "Umar",
            organization: "Direktorat Keuangan",
            gender: { value: "male", class: "text-center" },
            status: "permanent",
        },
        {
            id: 4,
            nip: "10.0.0.0031",
            name: "Agus Wahyu Setiawan",
            organization: "Direktorat Administrasi dan Fasilitas Akademik",
            gender: { value: "male", class: "text-center" },
            status: "permanent",
        },
        {
            id: 5,
            nip: "10.0.0.0031",
            name: "Dita Jauza",
            organization: "Pusat Komputer dan Inovasi Digital",
            gender: { value: "female", class: "text-center" },
            status: "permanent",
        },
        {
            id: 6,
            nip: "10.0.0.0031",
            name: "Muhammad Irfan Hidayat",
            organization: "Pusat Komputer dan Inovasi Digital",
            gender: { value: "male", class: "text-center" },
            status: "permanent",
        },
        {
            id: 7,
            nip: "10.0.0.0031",
            name: "Nurfadilah",
            organization: "Direktorat Sumber Daya Manusia",
            gender: { value: "male", class: "text-center" },
            status: "permanent",
        },
        {
            id: 8,
            nip: "10.0.0.0031",
            name: "Asep Maksum",
            organization: "Direktorat Keuangan",
            gender: { value: "male", class: "text-center" },
            status: "permanent",
        },
        {
            id: 9,
            nip: "10.0.0.0031",
            name: "Meldini Alivia",
            organization: "Direktorat Administrasi dan Fasilitas Akademik",
            gender: { value: "female", class: "text-center" },
            status: "leave",
        },
    ];

    const query = getQuery(event);

    if (query.q) {
        const q = query.q;
        console.info(q);
        return employees.filter((employee) => {
            return Object.values(employee).some((value) => {
                return String(value)
                    .toLowerCase()
                    .includes(q.toString().toLowerCase());
            });
        });
    }

    return [...employees];
});
