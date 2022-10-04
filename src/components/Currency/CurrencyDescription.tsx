import Text from "@/components/shared/Text";

type CurrencyDescriptionType = {
  name: string;
  description: string;
};

const CurrencyDescription: React.FC<CurrencyDescriptionType> = ({
  name,
  description,
}: CurrencyDescriptionType): JSX.Element => {
  const element = document.createElement("span");
  element.innerHTML = description;
  const text = element.textContent || element.innerText || "";

  return (
    <div className="w-full col-start-1 col-end-3 md:col-start-2 lg:col-start-2 md:col-end-3 row-start-3 md:row-start-2 lg:row-start-3">
      <Text className="p-2 lg:py-2.5 text-center font-semibold bg-black/10 dark:bg-slate-800/80 rounded-t">
        What is {name}?
      </Text>
      <Text className="my-2 font-medium px-1 text-justify">{text}</Text>
    </div>
  );
};

export default CurrencyDescription;
