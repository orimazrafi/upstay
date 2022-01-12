import TreeItem from './TreeItem';

const RecursiveTree = ({ data }) => {
	const createTree = (subData) =>
		subData?.children && (
			<TreeItem
				id={subData?.id}
				key={subData?.id}
				level={subData?.level}
				isSelected={subData?.selected}
				label={subData?.label}
			>
				{subData?.children.map((subsubData) => {
					return (
						<div key={subsubData?.id}>{createTree(subsubData)}</div>
					);
				})}
			</TreeItem>
		);

	return (
		<div className='flex-container'>
			{data.map((subData, i) => (
				<div
					key={i}
					style={{ position: 'absolute', left: `${i * 250}px` }}
				>
					{createTree(subData)}
				</div>
			))}
		</div>
	);
};
export default RecursiveTree;
