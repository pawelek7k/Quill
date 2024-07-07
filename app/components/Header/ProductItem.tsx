interface ProductItemProps {
  item: {
    name: string;
    description: string;
    href: string;
    icon: React.ElementType;
  };
}

export const ProductItem = ({ item }: ProductItemProps) => (
  <div
    key={item.name}
    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6"
  >
    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg ">
      <item.icon aria-hidden="true" className="h-6 w-6 fill-myPrimary " />
    </div>
    <div className="flex-auto">
      <a
        href={item.href}
        className="block font-semibold ease-in-out duration-300 hover:text-myPrimary "
      >
        {item.name}
        <span className="absolute inset-0 " />
      </a>
      <p className="mt-1">{item.description}</p>
    </div>
  </div>
);
