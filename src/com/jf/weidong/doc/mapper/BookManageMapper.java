package com.jf.weidong.doc.mapper;

import com.jf.weidong.doc.domain.PageBean;
import com.jf.weidong.doc.domain.data.BookDO;
import com.jf.weidong.doc.domain.query.BookManageQuery;
import com.jf.weidong.doc.domain.vo.BookManageListVO;

import java.util.List;

public interface BookManageMapper {
    List<BookManageListVO> pageSearch(BookManageQuery query);
    Integer totalCount(BookManageQuery query);
    //查看
    BookDO getBookById(BookDO bookDO);
}
