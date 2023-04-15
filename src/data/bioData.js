import emailLogo from '../assets/gmail-logo.png';
import liLogo from '../assets/linkedin-logo.png';
import igLogo from '../assets/ig-logo.png';

export const bioData = [
    {
        attribute: 'Full Name',
        record: 'Fernando Toding Bua',
    },
    {
        attribute: 'Nickname',
        record: 'Nando',
    },
    {
        attribute: 'Birth Date',
        record: '27th November 1999',
    },
    {
        attribute: 'Address',
        record: 'Pancoran, South Jakarta, Jakarta',
    }
];

export const contData = [
    {
        logo: emailLogo,
        height: '10px',
        text: 'nandotodingbua@gmail.com',
        link: '#',
        alt: 'Email',
        anchorStyle: {
            textDecoration: 'none',
            pointerEvents: 'none',
            color: 'black',
        },
    },
    {
        logo: liLogo,
        height: '12px',
        text: 'Fernando Toding Bua',
        link: 'https://www.linkedin.com/in/fernandotodingbua/',
        alt: 'Linkedin',
        anchorStyle: {
            textDecoration: 'none',
        },
    },
    {
        logo: igLogo,
        height: '14px',
        text: 'nando.todingbua',
        link: 'https://instagram.com/nando.todingbua',
        alt: 'Instagram',
        anchorStyle: {
            textDecoration: 'none',
        },
    }
];