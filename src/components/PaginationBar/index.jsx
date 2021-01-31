import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setCurrentPage } from "../../redux/module/actions";

import './styles.scss';

const mapStateToProps = (state) => {
  return {
    curPage: state.changePage.curPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangePage: (num) => dispatch(setCurrentPage(num))
  }
}

function PaginationBar(props) {
  function changePageInput(e) {
    props.onChangePage(e.target.value-1);
  }

  function changePageButton(num) {
    if (num<0) {
      props.onChangePage(props.curPage-1);
    } else {
      props.onChangePage(props.curPage+1);
    }
  }

  return (
    <>
      <div className="pagination-wrapper">
        <div className="pagination">
          {props.curPage>0 && (<div onClick={() => changePageButton(-1)}>&laquo;</div>)}
          <input onChange={changePageInput} placeholder={props.curPage + 1} />
          {props.curPage<111 && (<div onClick={() => changePageButton(1)}>&raquo;</div>)}
        </div>
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationBar);