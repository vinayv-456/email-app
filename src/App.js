import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.css";

import {
  getEmails,
  setActiveEmailItem,
  setEmailCategory,
} from "./store/emailsList/actions";
import EmailDetails from "./views/EmailDetails/EmailDetails.view";
import EmailsList from "./views/EmailsList/EmailsList.view";
import Header from "./views/Header/Header.view";

function App() {
  const dispatch = useDispatch();
  const { activeEmailItem, emailsList, activeEmailFilter, filters } =
    useSelector((state) => state.emailsListData);

  // fetching emails
  const handlePageChange = (currentPage) => {
    dispatch(setActiveEmailItem(""));
    dispatch(getEmails(currentPage));
  };

  // adding to read array
  const handleAddItemInCategory = useCallback(
    (category, id) => {
      if (!filters[category].includes(id)) {
        dispatch(
          setEmailCategory({
            catgeory: category,
            id: id,
          })
        );
      }
    },
    [dispatch, filters]
  );

  const filteredEmailsList =
    activeEmailFilter &&
    emailsList?.list?.filter((item) => {
      return filters[activeEmailFilter].includes(item.id);
    });

  return (
    <div className="main-container">
      <Header />
      <div className="flex" style={{ flex: 1 }}>
        <EmailsList
          emailsList={activeEmailFilter ? filteredEmailsList : emailsList?.list}
          total={
            activeEmailFilter ? filteredEmailsList?.length : emailsList.total
          }
          activeEmailItem={activeEmailItem}
          handleAddItemInCategory={handleAddItemInCategory}
          handlePageChange={handlePageChange}
        />
        {activeEmailItem && (
          <EmailDetails handleAddItemInCategory={handleAddItemInCategory} />
        )}
      </div>
    </div>
  );
}

export default App;
