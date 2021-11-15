import Select from 'react-select';

const options = [
    { value: 'All', label: 'All' },
    { value: 'Completed', label: 'Completed' },
    { value: 'UnCompleted', label: 'UnCompleted' },
];

const Navbar = ({ unCompletedTodos, selectedOption, onChange }) => {

    if (!unCompletedTodos) return <h2 className="header">set your today todos!</h2>

    return (
        <header className="header">
            <span> {unCompletedTodos} </span> <h2>are not completed</h2>
            <Select
                onChange={onChange}
                value={selectedOption}
                options={options}
                className="select"
            />
        </header>
    )
}

export default Navbar;