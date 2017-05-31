import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';

const styles = ({ color, fontSize, fontFamily, space }) => ({
	root: {
		marginBottom: space[6],
	},
	header: {
		marginBottom: space[3],
	},
	tabs: {
		marginBottom: space[3],
	},
	pathLine: {
		fontFamily: fontFamily.monospace,
		color: color.light,
		fontSize: fontSize.small,
	},
	docs: {
		color: color.base,
		fontSize: fontSize.text,
	},
});

export function ReactComponentRenderer({
	classes,
	name,
	heading,
	pathLine,
	description,
	docs,
	examples,
	tabButtons,
	tabBody,
}) {
	return (
		<div className={classes.root} id={name + '-container'}>
			<header className={classes.header}>
				{heading}
				<div className={classes.pathLine}>{pathLine}</div>
			</header>
			{(description || docs) &&
				<div className={classes.docs}>
					{description}
					{docs}
				</div>}
			{tabButtons &&
				<div className={classes.tabs}>
					{tabButtons}
					{tabBody}
				</div>}
			{examples}
		</div>
	);
}

ReactComponentRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	heading: PropTypes.node.isRequired,
	pathLine: PropTypes.string.isRequired,
	description: PropTypes.node,
	docs: PropTypes.node,
	examples: PropTypes.node,
	tabButtons: PropTypes.node,
	tabBody: PropTypes.node,
};

export default Styled(styles)(ReactComponentRenderer);
