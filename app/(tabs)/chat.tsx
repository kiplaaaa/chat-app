import React, { useCallback, useEffect } from 'react';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import { Ionicons } from "@expo/vector-icons";
import { View } from 'react-native';

interface Reply {
  title: string
  value: string
  messageId?: number | string
}

interface QuickReplies {
  type: 'radio' | 'checkbox'
  values: Reply[]
  keepIt?: boolean
}

interface User {
  _id: number;
  name: string
}
export interface Message {
  _id: string | number;
  text: string;
  createdAt: Date | number;
  user: User;
  image?: string;
  video?: string;
  audio?: string;
  system?: boolean;
  sent?: boolean;
  received?: boolean;
  pending?: boolean;
  quickReplies?: QuickReplies;
}

export default function HomeScreen() {
   const [messages, setMessages] = React.useState<Message[]>([]);

    useEffect(() => {
      setMessages([
        {
          _id: 1,
          text: 'This is a quick reply. Do you love Gifted Chat? (radio) KEEP IT',
          createdAt: new Date(),
          quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
              {
                title: '😋 Yes',
                value: 'yes',
              },
              {
                title: '📷 Yes, let me show you with a picture!',
                value: 'yes_picture',
              },
              {
                title: '😞 Nope. What?',
                value: 'no',
              },
            ],
          },
          user: {
            _id: 2,
            name: 'React Native',
          },
        },
        {
          _id: 2,
          text: 'This is a quick reply. Do you love Gifted Chat? (checkbox)',
          createdAt: new Date(),
          quickReplies: {
            type: 'checkbox', // or 'radio',
            values: [
              {
                title: 'Yes',
                value: 'yes',
              },
              {
                title: 'Yes, let me show you with a picture!',
                value: 'yes_picture',
              },
              {
                title: 'Nope. What?',
                value: 'no',
              },
            ],
          },
          user: {
            _id: 2,
            name: 'React Native',
          },
        }
      ])
    }, [])

   const onSend = useCallback((messages: Message[] = []) =>{
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
   }, []);

   const sendButton = (props: any) => {
    return (
      <Send {...props}>
        <View>
          <Ionicons name="send" size={24} color="#007aff" style={{ marginBottom: 5, marginRight: 5 }} />
        </View>
      </Send>
    )
   }

   const renderBubble = (props: any) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#007aff',
          },
          left: {
            backgroundColor: '#f0f0f0',
          }
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
          left: {
            color: '#000',
          }
        }}
      />
    )
   }  
    return(
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        alwaysShowSend
        renderSend={sendButton}
        renderBubble={renderBubble}
        placeholder="Type a message..."
        user={{
          _id: 1,
        }}
        isTyping
      />    
    )  
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
