package com.jf.weidong.doc.mapper;

import com.jf.weidong.doc.domain.PageBean;
import com.jf.weidong.doc.domain.data.BookTypeDO;
import com.jf.weidong.doc.domain.query.BookTypeQuery;

import java.util.List;

//?为什么是用的list封装
public interface BookTypeManageMapper {
    List<BookTypeDO> pageSearch(BookTypeQuery query);
    Integer totalCount (BookTypeQuery query);
    BookTypeDO getBookTypeById(Integer id);
    Integer upadteBookTypeInfo(BookTypeDO typeDO);
    BookTypeDO getBookTypeById(BookTypeDO BookTypeDO);
}
