package com.nuc.recommend.entity;

import com.baomidou.mybatisplus.annotation.TableId;
import java.time.LocalDateTime;
import com.baomidou.mybatisplus.annotation.TableField;
import java.io.Serializable;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * <p>
 * 
 * </p>
 *
 * @author 关注公众号：福尔摩东
 * @since 2020-11-30
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class Student implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 学号
     */
    @TableId("Sno")
    private String Sno;

    /**
     * 登录密码
     */
    @TableField("Spassword")
    private String Spassword;

    /**
     * 姓名
     */
    @TableField("Sname")
    private String Sname;

    /**
     * 性别
     */
    @TableField("Ssex")
    private String Ssex;

    /**
     * 所在班级
     */
    @TableField("Sclass")
    private String Sclass;

    /**
     * 出生年月
     */
    @TableField("Sbirthday")
    private LocalDateTime Sbirthday;

    /**
     * 推荐方向
     */
    @TableField("Srecommendwork")
    private String Srecommendwork;

    /**
     *  创建时间
     */
    private LocalDateTime createTime;

    /**
     * 更新时间
     */
    private LocalDateTime updateTime;


}
