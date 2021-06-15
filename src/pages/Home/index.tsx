import { FC } from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import { View, Text } from '@tarojs/components';
import { IGlobalState } from '@/models/global';
import styles from './index.module.less';

interface IProps extends IGlobalState {
  dispatch: Dispatch;
}

const Home: FC<IProps> = () => (
  <View className={styles.container}>
    <View>项目基于技术栈：</View>
    <Text>这是一个基于技术栈：react 17 + TS 4.x + Taro 3.x + Taro UI 3.x + dva的小程序项目</Text>

    <View>项目简介：</View>
    <Text>
      主要用于记录，在微信小程序开发过程中，遇到的一些问题，或者解决方法，通过简单的示例代码记录，方便后期翻阅查看
    </Text>
  </View>
);

export default connect(({ global }: { global: IGlobalState }) => ({
  ...global,
}))(Home);
