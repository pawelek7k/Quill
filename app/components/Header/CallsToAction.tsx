interface CallsToActionProps {
  calls: {
    name: string;
    href: string;
    icon: React.ElementType;
  }[];
}

export const CallsToAction = ({ calls }: CallsToActionProps) => (
  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-accent">
    {calls.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-primary"
      >
        <item.icon
          aria-hidden="true"
          className="h-5 w-5 flex-none text-gray-400"
        />
        {item.name}
      </a>
    ))}
  </div>
);

export default CallsToAction;
