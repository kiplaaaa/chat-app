import React, { useCallback, useEffect } from 'react';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import { Ionicons } from "@expo/vector-icons";
import { View } from 'react-native';


type Message = {
  _id: number;
  text: string;
  createdAt: Date;
  user: {
    _id: number;
    name: string;
    avatar: string;
  };
};

export default function HomeScreen() {
   const [messages, setMessages] = React.useState<Message[] | []>([]);

    useEffect(() => {
      setMessages([
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'hi',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 1,
          text: 'Try GiftChat - a chat UI for React Native',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'cool',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ])
    }, [])

   const onSend = useCallback((messages) =>{
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
   }, []);

   const sendButton = () => {
    return (
      <View>
        <Ionicons name="send" size={24} color="#007aff" style={{ marginBottom: 5, marginRight: 5 }} />
      </View>
    )
   }

  //  const renderBubble = (props: any) => {
  //   return (
  //     <Bubble
  //       {...props}
  //       wrapperStyle={{
  //         right: {
  //           backgroundColor: '#007aff',
  //         },
  //         left: {
  //           backgroundColor: '#f0f0f0',
  //         }
  //       }}
  //       textStyle={{
  //         right: {
  //           color: '#fff',
  //         },
  //         left: {
  //           color: '#000',
  //         }
  //       }}
  //     />
  //   )
  //  }  
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      alwaysShowSend
      renderSend={sendButton}
      placeholder="Type a message..."
      user={{
        _id: 1,
      }}
    />    
  }
// const styles = StyleSheet.create({
//   titleContainer: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
