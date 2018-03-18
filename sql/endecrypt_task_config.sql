/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50719
 Source Host           : localhost:3306
 Source Schema         : db_endecrypt

 Target Server Type    : MySQL
 Target Server Version : 50719
 File Encoding         : 65001

 Date: 19/03/2018 01:29:29
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for endecrypt_task_config
-- ----------------------------
DROP TABLE IF EXISTS `endecrypt_task_config`;
CREATE TABLE `endecrypt_task_config`  (
  `task_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '任务ID',
  `type` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '类型：encrypt, decrypt',
  `input_info` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '输入路径',
  `output_info` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '输出路径',
  `enabled` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '是否启用：yes, no',
  `create_time` int(11) NULL DEFAULT NULL COMMENT '创建时间',
  `update_time` int(11) NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`task_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of endecrypt_task_config
-- ----------------------------
INSERT INTO `endecrypt_task_config` VALUES ('address_decrypt', 'decrypt', 'address_encrypt.txt', 'address.txt', 'yes', 1521353329, 1521353329);
INSERT INTO `endecrypt_task_config` VALUES ('address_encrypt', 'encrypt', 'address.txt', 'address_encrypt.txt', 'yes', 1521353329, 1521353329);
INSERT INTO `endecrypt_task_config` VALUES ('bank_card_decrypt', 'decrypt', 'bank_card_encrypt.txt', 'bank_card.txt', 'yes', 1521353329, 1521353329);
INSERT INTO `endecrypt_task_config` VALUES ('bank_card_encrypt', 'encrypt', 'bank_card.txt', 'bank_card_encrypt.txt', 'yes', 1521353329, 1521353329);
INSERT INTO `endecrypt_task_config` VALUES ('id_card_decrypt', 'decrypt', 'id_card_encrypt.txt', 'id_card.txt', 'yes', 1521353077, 1521353077);
INSERT INTO `endecrypt_task_config` VALUES ('id_card_encrypt', 'encrypt', 'id_card.txt', 'id_card_encrypt.txt', 'yes', 1521352951, 1521352951);
INSERT INTO `endecrypt_task_config` VALUES ('phone_decrypt', 'decrypt', 'phone_encrypt.txt', 'phone.txt', 'yes', 1521353329, 1521353329);
INSERT INTO `endecrypt_task_config` VALUES ('phone_encrypt', 'encrypt', 'phone.txt', 'phone_encrypt.txt', 'yes', 1521353329, 1521353329);

SET FOREIGN_KEY_CHECKS = 1;
