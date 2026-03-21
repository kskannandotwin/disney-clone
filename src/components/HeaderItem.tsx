type HeaderItemProps = {
  name: string;
  Icon: React.ElementType;
};

const HeaderItem = ({ name, Icon }: HeaderItemProps) => {
  return (
    <div className="text-white uppercase flex items-center gap-3 text-[15px] not-first:font-semibold cursor-pointer hover:underline underline-offset-8 mb-2">
      <Icon />
      <h2 className="">{name}</h2>
    </div>
  );
};

export default HeaderItem;
