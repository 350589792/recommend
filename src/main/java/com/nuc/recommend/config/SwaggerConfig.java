package com.nuc.recommend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;

/**
 * @author 张振东
 * @version V1.0
 * @Title:
 * @Package
 * @Description: (用一句话描述该文件做什么)
 * @date：
 */

@Configuration
@EnableSwagger2
public class SwaggerConfig {


//配置Swagger的docket的bean实例
	@Bean
	public Docket docket(){

		return new Docket(DocumentationType.SWAGGER_2).apiInfo(apiInfo())
//				enable  是否启用Swagger，如果为false，则swagger不能在浏览器中访问
				.select()
				.apis(RequestHandlerSelectors
				.basePackage("com.zzd.bookmanagersystem.controller"))
				.build();
	}
//	配置Swagger信息=apiInfo
	private ApiInfo apiInfo(){
		 Contact DEFAULT_CONTACT = new Contact("学生画像推荐系统", "http://zzdnb.cn:8090/", "https://github.com/350589792/recommend");
		return new ApiInfo("的Swagger文档", "你知道的越多，你不知道的越多", "1.0", "https://github.com/350589792/recommend", DEFAULT_CONTACT, "Apache 2.0", "http://www.apache.org/licenses/LICENSE-2.0", new ArrayList());
	}
}
