import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getBookDetail } from "../redux/slice/books-slice";

function DetailBook() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { bookDetail } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBookDetail(id));
  }, [id]);

  //   console.log(bookDetail);

  return (
    <div>
      {bookDetail && bookDetail.volumeInfo ? (
        <>
          <h2>{bookDetail.volumeInfo.title}</h2>
          <p>{bookDetail.volumeInfo.description}</p>
          {/* Tambahkan informasi buku lainnya di sini */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DetailBook;
