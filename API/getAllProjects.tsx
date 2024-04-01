export default async function getAllProjects() {
    const res = await fetch('https://wp.conradarchitect.com/wp-json/wp/v2/projects');

    const data:any = await res.json();


    const result = data.map((project: any) => {
        if (project.status === 'publish') {
            return (
                {
                    id: project.id,
                    title: project.acf.name,
                    service: project.acf.services,
                    location: project.acf.location,
                    year: project.acf.year,
                    images: project.acf.photo_gallery ? project.acf.photo_gallery : [],
                    main_image: project.acf.main_image.url,
                    status: project.status,
                    display_in_banner: project.acf.display_in_banner,
                }
            )
        }
    });


    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return result;
}
