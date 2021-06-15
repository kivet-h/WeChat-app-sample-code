import { FC } from 'react';
import _ from 'lodash';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { ListData } from './baseData';
import styles from './index.module.less';

interface IProps {}

const List: FC<IProps> = () => (
  <View className={styles.container}>
    {_.map(ListData, (item, index) => (
      <View
        key={_.uniqueId()}
        onClick={() => {
          Taro.navigateTo({
            url: item.path,
          });
        }}
      >{`${index + 1}. ${item.text}`}</View>
    ))}
  </View>
);

export default List;
