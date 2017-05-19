import React from 'react';

class TreeNode extends React.Component {
	render() {
		if (this.props.children.length) {
			return (
				<div>
					<span>Folder: {this.props.name}</span>
					{this.props.children.map((child) => {
						return (
							<TreeNode 
								key={child.id}
								id={child.id}
								name={child.name}
								icon={child.icon}
								children={child.children || []}
							/>
						);
					})}
				</div>
			);
		} else {
			return (
				<span>File: {this.props.name}</span>
			);
		}
	}
}

TreeNode.propTypes = {
	id: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired,
	icon: React.PropTypes.string.isRequired,
	children: React.PropTypes.array.isRequired,
};

export default TreeNode;