package com.nuc.recommend.service.impl;

import com.nuc.recommend.entity.Student;
import com.nuc.recommend.mapper.StudentMapper;
import com.nuc.recommend.service.StudentService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author 关注公众号：福尔摩东
 * @since 2020-11-30
 */
@Service
public class StudentServiceImpl extends ServiceImpl<StudentMapper, Student> implements StudentService {

}
