import './Books.css';

function Forms() {
  return (
    <form className="forms">
      <input type="text" name="author" placeholder="Author" />
      <input type="text" name="book" placeholder="Book" />
      <input type="submit" value="Submit" />
    </form>
  );
}
export default Forms;
