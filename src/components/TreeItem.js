import { useState } from 'react';

const TreeItem = ({ label, level, isSelected, children }) => {
	const [isOpen, toggleItemOpen] = useState(null);
	const [selected, setSelected] = useState(isSelected);

	return (
		<div>
			<div
				className='list--item'
				style={{ marginLeft: `${level * 10}px` }}
				onClick={() => toggleItemOpen(!isOpen)}
			>
				{children?.length > 0 && (
					<div
						className={isOpen ? 'close--icon' : 'open--icon'}
					></div>
				)}
				<div
					onClick={() => {
						setSelected(!selected);
					}}
					className='list--item__label'
				>
					{label}
				</div>
			</div>
			<div>{isOpen && children}</div>
		</div>
	);
};
export default TreeItem;
