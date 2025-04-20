import { PropsWithChildren } from 'react';

type LinkIcon = 'github' | 'discordjs' | 'discord';

interface LinkItem {
	icon: LinkIcon;
	link: string;
	label: string;
}

export function Links({ children }: PropsWithChildren<LinkItem[]>) {
	return <div className="mt-4 flex flex-wrap gap-2">{children}</div>;
}

export function Link({ label, link }: LinkItem) {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className="bg-popover flex items-center gap-x-2 rounded-lg px-3 py-1.5 text-sm no-underline"
		>
			{label}
		</a>
	);
}