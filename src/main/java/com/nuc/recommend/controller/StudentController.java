package com.nuc.recommend.controller;


import com.nuc.recommend.entity.Student;
import com.nuc.recommend.mapper.StudentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author 关注公众号：福尔摩东
 * @since 2020-11-30
 */
@RestController
@RequestMapping("/student")
public class StudentController {

	@Autowired
	StudentMapper mapper;

	@RequestMapping("/one")
	public List<Student> toStudent(){
		return mapper.selectList(null);
	}
}
