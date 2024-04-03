import save from "../../assets/images/save.svg";
import unsave from "../../assets/images/unsave.svg";

function ButtonSaveBook({
  bookDetail,
  styleButton,
  isSaved,
  setIsSaved,
  styleIcon,
  updateSavedBooks,
}) {
  const handleSave = () => {
    let savedBooks = JSON.parse(localStorage.getItem("savedBooks") || "[]");
    savedBooks = [...savedBooks, bookDetail];
    localStorage.setItem("savedBooks", JSON.stringify(savedBooks));
    setIsSaved(true);
    updateSavedBooks(savedBooks);
  };

  const handleUnsave = (id) => {
    let savedBooks = JSON.parse(localStorage.getItem("savedBooks") || "[]");
    const updatedSavedBooks = savedBooks.filter((book) => book.id !== id);
    localStorage.setItem("savedBooks", JSON.stringify(updatedSavedBooks));
    setIsSaved(false);
    updateSavedBooks(updatedSavedBooks);
  };

  return (
    <div
      onClick={isSaved ? () => handleUnsave(bookDetail.id) : handleSave}
      className={styleButton}
    >
      <img src={isSaved ? save : unsave} className={styleIcon} />
      {isSaved ? "Saved" : "Save"}
    </div>
  );
}

export default ButtonSaveBook;
