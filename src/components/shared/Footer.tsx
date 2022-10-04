import Text from "./Text";

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="w-full flex flex-col items-center  text-center py-4">
      <Text className="group">
        Made with <span className="group-hover:text-red-500">&#9829;</span> by{" "}
        <a href="https://github.com/bvonpotobsky" className="underline">
          @bvonpotobsky
        </a>
      </Text>
    </footer>
  );
};

export default Footer;
