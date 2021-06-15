/*
 * @Description: 后一页面，返回前的页面
 * @Author: kivet
 * @Date: 2021-06-15 11:34:12
 * @LastEditTime: 2021-06-15 14:07:36
 */
import { FC } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import styles from './index.module.less';

interface IProps {}

const PageBackWithParamsB: FC<IProps> = () => {
  const onBack = () => {
    const pages = Taro.getCurrentPages();
    const beforePage = pages[pages.length - 2]; // ? 前一个页面
    // ? 将需要传递给前面页面的参数保存
    beforePage.setData({
      backData: '==返回数据=',
    });

    Taro.navigateBack({
      delta: 1,
    });
  };

  return (
    <View className={styles.container}>
      <Text>后一页面</Text>
      <Button type="primary" onClick={onBack}>
        点击返回前一页面
      </Button>
    </View>
  );
};

export default PageBackWithParamsB;
