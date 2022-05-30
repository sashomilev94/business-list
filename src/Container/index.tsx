import './Container.css';

interface ContainerProps {
	width: string;
	children: React.ReactNode
}

function Container({ width, children }: ContainerProps) {
	return (
		<div className="Container" style={{ maxWidth: width }}>
			{children}
		</div>
	);
}

export default Container;
