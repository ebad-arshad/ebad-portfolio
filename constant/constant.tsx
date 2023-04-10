import { ReactNode } from 'react';
import { FaFacebookF, FaGithub, FaQuora, FaLinkedinIn } from 'react-icons/fa'
import { IconType } from 'react-icons/lib';

export interface Link {
    link: string;
    social_media: ReactNode;
}

export const typewriter: string[] = ['A MERN Stack Developer', 'A NextJS Developer', 'A Passionate Developer'];

export const user_name: string = 'Muhammad Ebad Arshad';

export const user_links: Link[] = [
    { link: 'https://www.facebook.com/ebad.khan.50767/', social_media: <FaFacebookF /> },
    { link: 'https://github.com/ebad-arshad', social_media: <FaGithub /> },
    { link: 'https://www.quora.com/profile/M-Ebad-1', social_media: <FaQuora /> },
    { link: 'https://www.linkedin.com/in/ebad-arshad/', social_media: <FaLinkedinIn /> },
]

export const user_title_skill = 'a Web Developer'

export const user_description =
    [
        `I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,

        `Delivering work within time and budget which meets client's requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.`
    ]

interface Data {
    name: string;
    email: string;
    age: number;
    from: string;
}

export const user_data: Data = {
    name: user_name,
    email: 'm.ebadarshad2003@gmail.com',
    age: 19,
    from: 'Karachi, Pakistan',
}