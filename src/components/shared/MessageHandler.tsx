import Text from "./Text";

const MessageHandler: React.FC<{message: string}> = ({message}: {message: string}): JSX.Element => {
  return (
    <div className="w-full h-40 flex justify-center items-center">
      <Text className="animate-pulse">{message}</Text>
    </div>
  );
};

export default MessageHandler;
