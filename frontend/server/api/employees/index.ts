export default defineEventHandler(async (event) => {
    const employees = [
        {
            id: 1,
            nip: "10.0.0.0031",
            name: "Muhammad Quraisy",
            organization: "Pusat Komputer dan Inovasi Digital",
            gender: "male",
            status: "probation",
        },
        {
            id: 2,
            nip: "10.0.0.0031",
            name: "Guntur Ginanjar",
            organization: "Direktorat Sumber Daya Manusia",
            gender: "male",
            status: "permanent",
        },
        {
            id: 3,
            nip: "10.0.0.0031",
            name: "Umar",
            organization: "Direktorat Keuangan",
            gender: "male",
            status: "permanent",
        },
        {
            id: 4,
            nip: "10.0.0.0031",
            name: "Agus Wahyu Setiawan",
            organization: "Direktorat Administrasi dan Fasilitas Akademik",
            gender: "male",
            status: "permanent",
        },
        {
            id: 5,
            nip: "10.0.0.0031",
            name: "Dita Jauza",
            organization: "Pusat Komputer dan Inovasi Digital",
            gender: "female",
            status: "permanent",
        },
        {
            id: 6,
            nip: "10.0.0.0031",
            name: "Muhammad Irfan Hidayat",
            organization: "Pusat Komputer dan Inovasi Digital",
            gender: "male",
            status: "permanent",
        },
        {
            id: 7,
            nip: "10.0.0.0031",
            name: "Nurfadilah",
            organization: "Direktorat Sumber Daya Manusia",
            gender: "male",
            status: "permanent",
        },
        {
            id: 8,
            nip: "10.0.0.0031",
            name: "Asep Maksum",
            organization: "Direktorat Keuangan",
            gender: "male",
            status: "permanent",
        },
        {
            id: 9,
            nip: "10.0.0.0031",
            name: "Meldini Alivia",
            organization: "Direktorat Administrasi dan Fasilitas Akademik",
            gender: "female",
            status: "leave",
        },
        {
            id: 10,
            nip: "10.0.0.0031",
            name: "Ade Jamal",
            organization: "Pusat Komputer dan Inovasi Digital",
            gender: "male",
            status: "permanent",
        },
        {
            id: 11,
            nip: "10.0.0.0031",
            name: "Dini Priatini",
            organization: "Sekretariat Universitas",
            gender: "female",
            status: "permanent",
        },
        {
            id: 12,
            nip: "10.0.0.0031",
            name: "Dini Priatini",
            organization: "Sekretariat Universitas",
            gender: "female",
            status: "permanent",
        },
        {
            id: 13,
            nip: "10.0.0.0031",
            name: "Lia Nuryati",
            organization: "Sekretariat Universitas",
            gender: "female",
            status: "permanent",
        },
        {
            id: 14,
            nip: "10.0.0.0031",
            name: "Reni Setiyani",
            organization: "Fakultas Hukum",
            gender: "female",
            status: "permanent",
        },
        {
            id: 15,
            nip: "10.0.0.0031",
            name: "Mudhika Nur Romadhon",
            organization: "Sekretariat Universitas",
            gender: "male",
            status: "permanent",
        },
        {
            id: 16,
            nip: "10.0.0.0031",
            name: "Irman",
            organization: "Pusat Kajian dan Penerapan Etika",
            gender: "male",
            status: "permanent",
        },
        {
            id: 17,
            nip: "10.0.0.0031",
            name: "Aris Maulana",
            organization: "Sekretariat Universitas",
            gender: "male",
            status: "permanent",
        },
    ];

    const { q }: { q: string | undefined } = getQuery(event);

    if (q) {
        return employees.filter((employee) => {
            const { name, nip } = employee;
            return Object.values({ name, nip }).some((value) => {
                return String(value).toLowerCase().includes(q.toString());
            });
        });
    }

    return employees;
});
