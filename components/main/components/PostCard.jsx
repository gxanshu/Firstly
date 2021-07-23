import React from 'react';
import { ListRenderItemInfo, StyleSheet, View, Image, Dimensions } from 'react-native';
import { Button, Card, List, Text } from '@ui-kitten/components';
import { HeartIcon, CommentIcon, ShareIcon } from '../../auth/extra/icons';

const PostCard = (props) => {

  const renderItemHeader = (image) => (
    <Image style={styles.itemHeader}
      source={{ uri: image }}
    />
  );

  const renderItemFooter = () => (
    <View style={styles.itemFooter}>
      <View style={styles.itemReactionsContainer}>
        <Button
          style={styles.iconButton}
          appearance='ghost'
          status='danger'
          accessoryLeft={HeartIcon}
        />
        <Button
          style={styles.iconButton}
          appearance='ghost'
          status='basic'
          accessoryLeft={ShareIcon} />
      </View>
      <Button
        style={styles.iconButton}
        appearance='ghost'
        status='basic'
        onPress={() => props.navigation.navigate('Comment', { postId: props.data.id, uid: props.user.uid })}
        accessoryRight={CommentIcon}>
        Comment</Button>
    </View>
  );

  return (
    <Card
      style={styles.item}
      header={() => renderItemHeader(props.data.image)}
      footer={renderItemFooter}>
      <Text
        style={styles.itemDescription}
        category='s1'>
        {props.data.title}
      </Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  item: {
    marginVertical: 8,
  },
  itemHeader: {
    minHeight: (Dimensions.get('screen').height / 100) * 25,
    width: (Dimensions.get('screen').width)
  },
  itemTitle: {
    position: 'absolute',
    left: 24,
    bottom: 24,
  },
  itemDescription: {
    marginHorizontal: -8,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemReactionsContainer: {
    flexDirection: 'row',
  },
  itemAddButton: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 0,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
});

export default PostCard;