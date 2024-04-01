export type Project = {
    id: number,
    title: string,
    service: string,
    location: string,
    year: string,
    images: any,
    main_image: string,
    status: string,
    display_in_banner: 'Yes' | 'No',
}

export type Member = {
    id: number,
    image: string,
    text: string,
    name: string,
}
