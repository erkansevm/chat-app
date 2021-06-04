import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
    return (
        <ChatEngine
        height='100vh'
        userName={localStorage.username}
        userSecret={localStorage.password}
        projectID='9e8d6bf6-d60c-4a26-b7b9-4e97ea6e8e68'
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
}

export default App;