const Employee = (props) => {
	const { isSecond } = props;
	return (
		<div className="employee">
			<div className="pic-wrapper">
				<div className={isSecond ? 'picture pic-two' : 'picture pic-one'}>
					{' '}
				</div>
			</div>
			<div className="employee-wrapper">
				<p className="employee-info">Imię Nazwisko [dział]</p>
				<p className="employee-description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
					massa et lacus egestas cursus a non magna. Fusce scelerisque blandit
					nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum
					lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non
					tincidunt libero ultrices in.
				</p>
			</div>
		</div>
	);
};

export default Employee;
