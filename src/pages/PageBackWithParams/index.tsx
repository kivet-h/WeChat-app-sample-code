/*
 * @Description: 前一页面，返回后的页面
 * @Author: kivet
 * @Date: 2021-06-15 11:34:12
 * @LastEditTime: 2021-06-15 14:07:22
 */
import { FC } from 'react';
import Taro, { useDidShow } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import styles from './index.module.less';

interface IProps {}

const PageBackWithParams: FC<IProps> = () => {
  useDidShow(() => {
    const pages = Taro.getCurrentPages();
    const correntPage = pages[pages.length - 1]; // ? 当前页面
    console.log('获取传参，返回前页面传值从这里获取', correntPage.__data__.backData);
    // ! 注意：这里的 backData 名字是返回前页面自己定义的
  });

  return (
    <View className={styles.container}>
      <Text>前一页面</Text>
      <Button
        type="primary"
        onClick={() => {
          Taro.navigateTo({
            url: '/pages/PageBackWithParams/PageBackWithParamsB/index',
          });
        }}
      >
        点击跳转
      </Button>
    </View>
  );
};

export default PageBackWithParams;
