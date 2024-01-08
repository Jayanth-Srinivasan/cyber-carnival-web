// Navigation Data

interface Navdata {
	title: string;
	link: string;
	target: '_blank' | '_self';
}

type NavdataCollection = ReadonlyArray<Navdata>;

const COMMON_NAVIGATION: NavdataCollection = [
	{
		title: 'About',
		link: '#',
		target: '_self',
	},
	{
		title: 'Events',
		link: '/#features',
		target: '_self',
	},
	{
		title: 'Contact',
		link: '/#contact',
		target: '_self',
	},
];

export const NAVBAR_NAVIGATION = [...COMMON_NAVIGATION];

export const FOOTER_NAVIGATION = [...COMMON_NAVIGATION];
