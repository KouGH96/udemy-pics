

function SearchBar({ onSubmit }) {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('form submitted');
        onSubmit('cars');
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
            <input />
            </form>
        </div>
    )
}

export default SearchBar;

