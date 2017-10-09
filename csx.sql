/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : csx

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-10-09 20:01:41
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for dl
-- ----------------------------
DROP TABLE IF EXISTS `dl`;
CREATE TABLE `dl` (
  `username` varchar(30) DEFAULT NULL COMMENT '用户名',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `email` varchar(60) DEFAULT NULL COMMENT '邮箱'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dl
-- ----------------------------
INSERT INTO `dl` VALUES ('aaa', 'e10adc3949ba59abbe56e057f20f883e', '123123123');
INSERT INTO `dl` VALUES ('a', '123456', '');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(80) CHARACTER SET utf8mb4 NOT NULL COMMENT '用户名',
  `price` varchar(10) DEFAULT NULL COMMENT '原价',
  `cost` varchar(8) DEFAULT NULL COMMENT '出售价',
  `miaos` varchar(255) DEFAULT '' COMMENT '描述',
  `yname` varchar(255) DEFAULT '' COMMENT '英文名称',
  `index` varchar(10) DEFAULT NULL COMMENT '商品编号',
  `img` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'Chanel 香奈儿No.5五号之水女士香水（EDT） 2ml', '60.00', '45.00', 'Shiseido 资生堂盼丽风姿抗皱洁面膏/洗面奶小样 30ml', 'Shiseido Benefiance Extra Creamy Cleansing Foam', '1731', '01');
INSERT INTO `user` VALUES ('2', 'Chanel 香奈儿No.5五号之水女士香水（EDT） 3ml', '65.00', '45.00', 'Shiseido 资生堂盼丽风姿抗皱洁面膏/洗面奶小样 30ml', 'Shiseido Benefiance Extra Creamy Cleansing Foam', '1732', '01');
INSERT INTO `user` VALUES ('3', 'ccc傻逼奈尔', '66.00', '46.00', '不买不买不买丫丫丫丫丫', 'Shiseido Benefiance Extra Creamy Cleansing Foam', '1777', '01');
INSERT INTO `user` VALUES ('4', 'Clinique 倩碧', '80', '58', 'Clinique 倩碧润肤乳-无油黄油啫喱配方 清仓特价！ 50ml', 'Clinique 倩碧润肤乳-无油黄油啫喱配方 清仓特价！ 50ml', '1888', '04');
SET FOREIGN_KEY_CHECKS=1;
