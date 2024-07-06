import { IconType } from "@heroicons/react/20/solid";

interface ProductItemProps {
  item: {
    name: string;
    description: string;
    href: string;
    icon: IconType;
  };
}

export const ProductItem = ({ item }: ProductItemProps) => (
  <div
    key={item.name}
    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
  >
    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
      <item.icon
        aria-hidden="true"
        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
      />
    </div>
    <div className="flex-auto">
      <a href={item.href} className="block font-semibold text-gray-900">
        {item.name}
        <span className="absolute inset-0" />
      </a>
      <p className="mt-1 text-gray-600">{item.description}</p>
    </div>
  </div>
);
