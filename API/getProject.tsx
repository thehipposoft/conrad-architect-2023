export default async function getProject(projectId: number | 'undefined') {
    const res = await fetch(`https://wp.conradarchitect.com/wp-json/wp/v2/projects/${projectId}`);
    const project = await res.json();

    if (!projectId || projectId === 'undefined') {
        return null;
    }

    const result = {
        id: project.id,
        title: project.acf.name,
        service: project.acf.services,
        location: project.acf.location,
        year: project.acf.year,
        images: project.acf.photo_gallery ? project.acf.photo_gallery : [],
        main_image: project.acf.main_image.url,
        status: project.status,
        display_in_banner: project.acf.display_in_banner,
    };

    if(!res.ok) throw new Error('Failed to fetch project');

    return result;
}